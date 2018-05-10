import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextAfterComponent } from './input-text-after.component';

describe('InputTextAfterComponent', () => {
  let component: InputTextAfterComponent;
  let fixture: ComponentFixture<InputTextAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
