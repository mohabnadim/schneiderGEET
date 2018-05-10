import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWarningOutlineComponent } from './button-warning-outline.component';

describe('ButtonWarningOutlineComponent', () => {
  let component: ButtonWarningOutlineComponent;
  let fixture: ComponentFixture<ButtonWarningOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWarningOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWarningOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
