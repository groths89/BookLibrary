import { Injectable } from '@angular/core';
import { BOOKS } from "../sample-books";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(){ return BOOKS; }
}
