import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries : Observable <Array <Object> >;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entries = this.entryService.getList();
  }

}
