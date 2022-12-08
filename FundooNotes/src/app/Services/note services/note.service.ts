import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  constructor(private http:HttpServicesService) {
    
   }

   addnote(payload: any){
    this.token=localStorage.getItem('token')
    console.log("inside note service",payload);
    console.log(this.token)

    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ this.token
      })
    }
    return this.http.postservice('/Notes/Add',payload,true,header)

  }
  getall(){
    this.token=localStorage.getItem('token')
    console.log(this.token)



    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': 'Bearer ' +this.token
      })
    }
    return this.http.getservice(`/Notes/GetAllNote`,true,header)

  }

  
}
