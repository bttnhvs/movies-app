import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPersonComponent } from './dialog-add-person.component';

describe('DialogAddPersonComponent', () => {
  let component: DialogAddPersonComponent;
  let fixture: ComponentFixture<DialogAddPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
