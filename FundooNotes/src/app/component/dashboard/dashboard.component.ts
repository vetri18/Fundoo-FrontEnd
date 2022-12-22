import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/dataServices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  value: any;
  
  constructor(media: MediaMatcher, changeDetectorRef: ChangeDetectorRef ,private router:Router ,private dataService:DataService ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

}
Notes(){
  this.router.navigateByUrl('/dashboard/note')
}
trashopen(){
  this.router.navigateByUrl('/dashboard/trash')
}
archiveopen(){
this.router.navigateByUrl('/dashboard/archiv')
}
Logout()
{
  localStorage.removeItem("token");
  this.router.navigateByUrl('/login');
}
searchTitle(event:any){
  console.log("input in search field===",event.target.value);
  this.value=event.target.value
  let Ddata={
    type:'search',
    data:[this.value]
  }
  this.dataService.changeData(Ddata)
}
  
}



