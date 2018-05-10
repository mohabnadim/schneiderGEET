import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLightOutlineComponent } from './button-light-outline.component';

describe('ButtonLightOutlineComponent', () => {
  let component: ButtonLightOutlineComponent;
  let fixture: ComponentFixture<ButtonLightOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLightOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLightOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
