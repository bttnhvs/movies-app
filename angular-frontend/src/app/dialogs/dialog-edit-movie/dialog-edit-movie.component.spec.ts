import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditMovieComponent } from './dialog-edit-movie.component';

describe('DialogEditMovieComponent', () => {
  let component: DialogEditMovieComponent;
  let fixture: ComponentFixture<DialogEditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
