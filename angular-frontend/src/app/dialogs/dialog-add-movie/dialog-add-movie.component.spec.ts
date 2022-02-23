import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMovieComponent } from './dialog-add-movie.component';

describe('DialogAddMovieComponent', () => {
  let component: DialogAddMovieComponent;
  let fixture: ComponentFixture<DialogAddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
