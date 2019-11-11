import { Component, OnInit, Injectable, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Book } from 'src/app/books';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-book-entry-form',
  templateUrl: './book-entry-form.component.html',
  styleUrls: ['./book-entry-form.component.css'],
})
export class BookEntryFormComponent implements OnInit {
  newBook = 'No Content';
  bookForm = new FormGroup({
    id: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });
  description: string;

  id: number;
  bookTitle: string;
  bookAuthor: string;
  BooksList;
  book = {
    id: this.id,
    title: this.bookTitle,
    author: this.bookAuthor
  };
  submit = false;

  onSubmit() {
    this.submit = true;
    console.log(this.bookForm.controls.id.value);
    console.log(this.bookForm.controls.title.value);
    console.log(this.bookForm.controls.author.value);
    console.log('Book Saved');
  }

  constructor(public dialogRef: MatDialogRef<BookEntryFormComponent>) { }
  save() {

  }
  closeDialog() {
    this.dialogRef.close();
  }
  ngOnInit() {

  }

}
