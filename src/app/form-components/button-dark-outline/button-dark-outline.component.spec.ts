import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDarkOutlineComponent } from './button-dark-outline.component';

describe('ButtonDarkOutlineComponent', () => {
  let component: ButtonDarkOutlineComponent;
  let fixture: ComponentFixture<ButtonDarkOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDarkOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDarkOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
