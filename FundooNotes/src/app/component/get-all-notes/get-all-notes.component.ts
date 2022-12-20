import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/note services/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent {
  noteArray: any;
  msg: any;
  constructor(private note: NoteService) { }
  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes() {
    this.note.getall().subscribe((request: any) => {
      console.log("request data", request)
      this.noteArray = request.data
      console.log("request data", this.noteArray)
      this.noteArray = this.noteArray.reverse()
      this.noteArray = this.noteArray.filter((notedata: any) => {
        return notedata.isTrash == false && notedata.isArchive == false;

      })

    })

  }
  receiveMsgfromDisplay($event:any){
    console.log("inside display to get all notes",$event)
    this.getallnotes();
  }





}

