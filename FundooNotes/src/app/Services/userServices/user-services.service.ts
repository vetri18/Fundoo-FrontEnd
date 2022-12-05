import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpService :HttpServicesService) { }
  register(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postservice('/Users/Resgister',reqdata,false,header)
  }

  login(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postservice('/Users/Login',reqdata,false,header)
  }
  forgetPassword(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postservice(`/Users/ForgetPassWord?EmailId=${reqdata.EmailId}`, reqdata, false, header)
  }

}
