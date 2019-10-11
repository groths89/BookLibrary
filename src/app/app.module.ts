import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEntryFormComponent } from './book-entry-form/book-entry-form.component';
import { DatabaseService } from './database.service';
import { BookService } from './book-list/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    BookService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
