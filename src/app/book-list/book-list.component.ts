import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/sample-books';
import { BookService } from "./book.service";
import { Book } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(bookService: BookService) {
    this.books = bookService.getBooks();
   }

  ngOnInit() {
  }

}
