import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDangerOutlineComponent } from './button-danger-outline.component';

describe('ButtonDangerOutlineComponent', () => {
  let component: ButtonDangerOutlineComponent;
  let fixture: ComponentFixture<ButtonDangerOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDangerOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDangerOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
