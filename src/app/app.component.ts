import { Component } from '@angular/core';
import { Book } from 'src/app/books'

import { BookListComponent } from "./book-list/book-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-library';
  books = Book;
}
