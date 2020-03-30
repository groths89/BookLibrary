import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatDialogRef } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEntryFormComponent } from './book-entry-form/book-entry-form.component';
import { DatabaseService } from './database.service';
import { BookService } from './book-list/book.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookReaderComponent } from './book-reader/book-reader.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavigationComponent,
    BookListComponent,
    BookEntryFormComponent,
    BookDetailsComponent,
    BookReaderComponent
  ],
  entryComponents: [
    BookEntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    BookService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
