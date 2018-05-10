import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInfoOultineComponent } from './button-info-oultine.component';

describe('ButtonInfoOultineComponent', () => {
  let component: ButtonInfoOultineComponent;
  let fixture: ComponentFixture<ButtonInfoOultineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonInfoOultineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonInfoOultineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
