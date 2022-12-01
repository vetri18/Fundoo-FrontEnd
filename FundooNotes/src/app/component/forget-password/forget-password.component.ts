import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }
    ngOnInit(): void {
      this.forgetPasswordForm = this.formBuilder.group
      ({
        
        email: ['', [Validators.required, Validators.email]],
        
    } );
    }
    get f() { return this.forgetPasswordForm.controls; }
    onSubmit(){
      
     }  

}
