import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLabelHelperTextComponent } from './input-label-helper-text.component';

describe('InputLabelHelperTextComponent', () => {
  let component: InputLabelHelperTextComponent;
  let fixture: ComponentFixture<InputLabelHelperTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLabelHelperTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLabelHelperTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
