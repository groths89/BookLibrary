import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Book } from 'src/app/books'

@Component({
  selector: 'app-book-entry-form',
  templateUrl: './book-entry-form.component.html',
  styleUrls: ['./book-entry-form.component.css']
})
export class BookEntryFormComponent implements OnInit {
  model = new Book(1, "", "");
  submitted = false;
  onSubmit(){ this.submitted = true; }
  bookTitle = "";

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    
  constructor() { }

  ngOnInit() {
  }
  
}
