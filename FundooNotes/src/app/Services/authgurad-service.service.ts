import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService {


 token: any;
  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }
}
