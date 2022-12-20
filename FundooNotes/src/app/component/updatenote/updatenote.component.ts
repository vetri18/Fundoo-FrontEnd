import { Component, Inject, Input} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note services/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title: any;
  id: any;
  description: any;
  color: any;


  constructor(private note: NoteService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.title = data.title;
      this.description = data.note;
      this.id = data.noteID;
      this.color = data.color
  }
  onNoClick(): void {
    this.dialogRef.close();

  }

  
  closeDialog() {
    let data = {
      title: this.title,
      note: this.description,
      noteId: this.id
    }
    console.log(data)
    this.note.updatenote(data).subscribe((response: any) => {
      console.log("update responce", response)
      

    })
    this.dialogRef.close();
  }

}


