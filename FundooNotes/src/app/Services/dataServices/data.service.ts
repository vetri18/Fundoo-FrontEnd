import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private messageSource = new BehaviorSubject('default message');
  // currentMessage = this.messageSource.asObservable();

   constructor() { }

  // sendMessage(message: string) {
  //   this.messageSource.next(message)
  // }
  private searchData = new BehaviorSubject({ type:'',data:[]});
  searchNote = this.searchData.asObservable()
  changeData(message:any){
    this.searchData.next(message)
    // console.log("inside data service ===", message);
    
  }
}
