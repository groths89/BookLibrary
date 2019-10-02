import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = [new Book(1, "Treasure Island", "Robert Lewis Stevenson")];
  firstBookEntry = this.books[0];
  rating = "Good";
  constructor() { }

  ngOnInit() {
  }

}
