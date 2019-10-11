import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from "@angular/forms";

import { BookEntryFormComponent } from './book-entry-form.component';
import { AppModule } from '../app.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('BookEntryFormComponent', () => {
  let component: BookEntryFormComponent;
  let fixture: ComponentFixture<BookEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEntryFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
