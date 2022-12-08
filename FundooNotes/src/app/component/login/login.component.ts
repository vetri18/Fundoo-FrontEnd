import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/userServices/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserServicesService ,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
      ({


        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]


      });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: "advance"
      }

      this.user.login(payload).subscribe((response: any) => {
        console.log("login sucessfull", response)
        localStorage.setItem('token', response.data)
        this.router.navigateByUrl('/dashboard/note')

      })
    }

  }
}
