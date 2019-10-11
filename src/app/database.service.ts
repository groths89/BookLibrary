import { Injectable } from '@angular/core';
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
  constructor() { }
}
