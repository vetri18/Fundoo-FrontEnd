import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/note services/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icon-comp',
  templateUrl: './icon-comp.component.html',
  styleUrls: ['./icon-comp.component.scss']
})
export class IconCompComponent {
  @Input() notecard:any;
  @Output() displaytoIcons = new EventEmitter<string>()
  data:any;
  isArchiveCom: boolean = false;
  isDeleteCom: boolean = false;
 



 
  
  

  constructor(private note :NoteService ,private route:ActivatedRoute) {  }
  
 trash(){
  let req={
    noteID:[this.notecard.noteID],
    isTrash:true,

  }
  console.log(req)
  this.note.trashnote(req).subscribe((response: any) => {
    console.log(response);
    this.displaytoIcons.emit(response);
    
  })
 }
 archive(){
  let req={
    noteID:[this.notecard.noteID],
   isArchive:true,
  }
  console.log(req)
  this.note.Archive(req).subscribe((response:any)=>{
    console.log(response)
    this.displaytoIcons.emit(response);
  
  })
 } 
 ngOnInit(): void {
  let comp = this.route.snapshot.component;
  if(comp == TrashComponent){
    this.isDeleteCom = true;

  }
  if(comp == ArchiveComponent){
      this.isArchiveCom = true;
  }
}
unarchive(){
  let req = {
    noteID : [this.notecard.noteID],
    isArchive : false,
  }
  console.log(req);
  this.note.Archive(req).subscribe((response : any) => {
    console.log(response);
    this.displaytoIcons.emit(response);
  })
}
restoreNote(){
  let req = {
    noteID : [this.notecard.noteID],
    isTrash : false,
  }
  console.log(req);
  this.note.trashnote(req).subscribe((response : any) => {
    console.log(response);
    this.displaytoIcons.emit(response);
  })
}
deleteNote(){
  let data = {
    noteID : [this.notecard.noteID],
  }
  console.log(data);
  this.note.deleteForeverService(data).subscribe((response : any) => {
    console.log(response);
    this.displaytoIcons.emit(response);
  })
}
 colors: Array<any>=[
   {code:'#fff',name:"white"},
   {code:'#f28b82',name:"red"},
   {code:'#fbbc04',name:"orange"},
   {code:'#ffff00',name:"yellow"},
   {code:'#ccff90',name:"green"},
   {code:'#a7ffeb',name:"teal"},
   {code:'#cbf0f8',name:"blue"},
   {code:'#aecbfa',name:"darkblue"},
   {code:'#d7aefb',name:"purple"},
   {code:'#e6c9a8',name:"brown"},
   

 ]
 setcolor(color:any){
   console.log('color', color);
   console.log(this.notecard);
   this.notecard.color=color;
   let data={
     color:color,
   NotesId:[this.notecard.noteID],
   }
   console.log(data);
   this.note.changecColor(data).subscribe((response:any)=>{
     console.log(response);

   })
 }
  

}
