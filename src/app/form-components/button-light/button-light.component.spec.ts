import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLightComponent } from './button-light.component';

describe('ButtonLightComponent', () => {
  let component: ButtonLightComponent;
  let fixture: ComponentFixture<ButtonLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
