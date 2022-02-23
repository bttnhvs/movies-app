import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddReviewComponent } from './dialog-add-review.component';

describe('DialogAddReviewComponent', () => {
  let component: DialogAddReviewComponent;
  let fixture: ComponentFixture<DialogAddReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
