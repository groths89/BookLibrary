import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from './books'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: [];
  onSave(){
    this.db.push();
    console.log(this.db);
  };
  constructor(private http: HttpClient) {

  }
}
