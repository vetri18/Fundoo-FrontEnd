import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  baseurl='https://localhost:44313/api';

  constructor(private httpclient : HttpClient) { }

  postservice(url: string, reqdata:any, token:boolean=false, httpOptions:any){
    return this.httpclient.post(this.baseurl+url,reqdata,token && httpOptions)

  }

  getservice(){

  }
  putservice(){

  }

  deleteservice(){

  }
  patchservice(){

  }

  
}
