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

  trashnote(req:any){
    console.log(req)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservice(`/Notes/Trash?noteid=${req.noteID}`,req,true,header)
  }
  Archive(req:any){
    console.log(req)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservice(`/Notes/Archive?noteid=${req.noteID}`,req,true,header)

  }
  updatenote(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservice(`/Notes/Update?noteid=${data.noteId}`,data,true,header)
  }
  changecColor(data:any){
    console.log(data)
    let header={

      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token

      })
    }
    return this.http.putservice(`/Notes/Color?NoteId=${data.NotesId}&color=${data.color}`,data,true,header)   

  }

  
}
