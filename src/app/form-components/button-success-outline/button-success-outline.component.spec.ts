import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSuccessOutlineComponent } from './button-success-outline.component';

describe('ButtonSuccessOutlineComponent', () => {
  let component: ButtonSuccessOutlineComponent;
  let fixture: ComponentFixture<ButtonSuccessOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSuccessOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSuccessOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
