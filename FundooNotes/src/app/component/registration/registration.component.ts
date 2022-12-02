import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/userServices/user-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServicesService) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group
      ({

        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]

      });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      let payload = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service: "advance"
      }
      this.user.register(payload).subscribe((response: any) => {
        console.log("registration is sucessfull", response)

      })
    }
  }
}


