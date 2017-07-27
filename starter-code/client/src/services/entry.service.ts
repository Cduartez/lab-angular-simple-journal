import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class EntryService{
   BASE_URL:string = environment.baseURL;

   constructor(private http: Http) {}

   getList() {
     return this.http.get(`${this.BASE_URL}/api/journal-entries`)
       .map((res) => res.json());
   }

   get(id) {
     return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
       .map((res) => res.json());
   }

   edit(entry) {
     return this.http.put(`${this.BASE_URL}/api/journal-entries/${entry.id}`, entry)
       .map((res) => res.json());
   }

   remove(id) {
     return this.http.delete(`${this.BASE_URL}/api/journal-entries/${id}`)
       .map((res) => res.json());
   }
}
