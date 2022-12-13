import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/note services/note.service';

@Component({
  selector: 'app-icon-comp',
  templateUrl: './icon-comp.component.html',
  styleUrls: ['./icon-comp.component.scss']
})
export class IconCompComponent {
  @Input() notecard:any;
  
  
  

  constructor(private note :NoteService) {  }
  
 trash(){
  let req={
    noteID:[this.notecard.noteID],
    isTrash:true,

  }
  console.log(req)
  this.note.trashnote(req).subscribe((response: any) => {
    console.log(response);
    
  })
 }
  

}
