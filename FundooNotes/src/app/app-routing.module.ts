import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const routes: Routes = [
  {path : 'register' , component:RegistrationComponent},
  {path : 'login' , component:LoginComponent},
  {path: 'forget' , component:ForgetPasswordComponent},
  {path: 'reset' , component:ResetPasswordComponent},
  {path: 'dashboard', component:DashboardComponent ,
children:[
  {path:'note',component:GetAllNotesComponent}
]},
  {path: 'create', component:CreateNoteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
