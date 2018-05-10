import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextAfterAndBeforeComponent } from './input-text-after-and-before.component';

describe('InputTextAfterAndBeforeComponent', () => {
  let component: InputTextAfterAndBeforeComponent;
  let fixture: ComponentFixture<InputTextAfterAndBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextAfterAndBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextAfterAndBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
