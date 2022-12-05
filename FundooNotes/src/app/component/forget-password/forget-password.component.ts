import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/userServices/user-services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder ,  private user :UserServicesService) { }
    ngOnInit(): void {
      this.forgetPasswordForm = this.formBuilder.group
      ({
        
        email: ['', [Validators.required, Validators.email]],
        
    } );
    }
    get f() { return this.forgetPasswordForm.controls; }
    onSubmit(){
      this.submitted = true;

      if (this.forgetPasswordForm.valid) {
        let payload = {
          EmailId: this.forgetPasswordForm.value.email,
          service : "advance" 
        }
        console.log(payload);
        this.user.forgetPassword(payload).subscribe((response:any)=>{
          console.log('email is sent sucessfully',response)
          
        })
      }
      
     }  

}
