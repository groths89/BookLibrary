import { Component, OnInit, Injectable, Input, forwardRef } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, AbstractControl } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { Book } from 'src/app/books';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-book-entry-form',
  templateUrl: './book-entry-form.component.html',
  styleUrls: ['./book-entry-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => BookEntryFormComponent),
    }
  ]
})
export class BookEntryFormComponent implements OnInit {
  formID = new FormControl('');
  formTITLE = new FormControl('');
  formAUTHOR = new FormControl('');
  id: number;
  bookTitle: string;
  bookAuthor: string;
  BooksList;
  book = {
    id: this.id,
    title: this.bookTitle,
    author: this.bookAuthor
  };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log('Book Saved');
    console.log(this.book);
  }
/*
  constructor(private DatabaseService: DatabaseService) {

  } */

  ngOnInit() {

  }

}
