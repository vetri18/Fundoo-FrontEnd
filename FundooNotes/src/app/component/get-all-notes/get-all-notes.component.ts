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
      this.noteArray = request
      console.log("request data", this.noteArray)

      })
    
  }

}

