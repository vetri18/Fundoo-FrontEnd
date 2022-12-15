import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  @Input() NoteList:any;

  msg: any;

  constructor(public dialog: MatDialog) { }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
      width: '400px',
      height: 'auto',
      
     data:note,
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
    })

  
  }
  
   
}
