import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveComponent } from './component/archive/archive.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { TrashComponent } from './component/trash/trash.component';

const routes: Routes = [
  {path : 'register' , component:RegistrationComponent},
  { path: '', redirectTo: "/login", pathMatch: 'full' },

  {path : 'login' , component:LoginComponent},
  {path: 'forget' , component:ForgetPasswordComponent},
  {path: 'reset' , component:ResetPasswordComponent},
  {path: 'dashboard', component:DashboardComponent ,canActivate:[AuthenticationGuard],

children:[
  {path:'note',component:GetAllNotesComponent},
  {path:'trash', component:TrashComponent},
  {path:'archiv',component:ArchiveComponent},

]},
  {path: 'create', component:CreateNoteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
