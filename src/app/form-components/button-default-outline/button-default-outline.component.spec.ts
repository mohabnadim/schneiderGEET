import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDefaultOutlineComponent } from './button-default-outline.component';

describe('ButtonDefaultOutlineComponent', () => {
  let component: ButtonDefaultOutlineComponent;
  let fixture: ComponentFixture<ButtonDefaultOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDefaultOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDefaultOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
