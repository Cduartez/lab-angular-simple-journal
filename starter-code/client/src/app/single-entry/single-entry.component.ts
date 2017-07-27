import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../../services/entry.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {
  entry: any;

  constructor(private route: ActivatedRoute, private enS:EntryService) {
  route.params
  .mergeMap( (e:any) => enS.get(e.id))
  .subscribe( entry => {
    console.log(entry);
    this.entry=entry;
  });

 }

  ngOnInit() {
  }

}
