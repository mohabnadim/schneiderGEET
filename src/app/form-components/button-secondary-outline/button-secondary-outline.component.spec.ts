import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondaryOutlineComponent } from './button-secondary-outline.component';

describe('ButtonSecondaryOutlineComponent', () => {
  let component: ButtonSecondaryOutlineComponent;
  let fixture: ComponentFixture<ButtonSecondaryOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSecondaryOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSecondaryOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
