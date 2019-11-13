import { Injectable } from '@angular/core';
import { BOOKS } from '../sample-books';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}
  getBooks() {
    return BOOKS;
  }
}
