import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from "@angular/forms";

import { BookListComponent } from './book-list.component';
import { BookEntryFormComponent } from '../book-entry-form/book-entry-form.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookEntryFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
