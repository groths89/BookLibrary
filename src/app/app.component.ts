import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import { Book } from 'src/app/books';

import { BookListComponent } from './book-list/book-list.component';
import { BookEntryFormComponent } from './book-entry-form/book-entry-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Book Library';
  books = Book;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.minWidth = 800;
    dialogConfig.maxHeight = 600;

    this.dialog.open(BookEntryFormComponent, dialogConfig);

  }
  close() {
    this.dialog.closeAll();
  }
}
