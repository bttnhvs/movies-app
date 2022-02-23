import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteMovieComponent } from './dialog-delete-movie.component';

describe('DialogDeleteMovieComponent', () => {
  let component: DialogDeleteMovieComponent;
  let fixture: ComponentFixture<DialogDeleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
