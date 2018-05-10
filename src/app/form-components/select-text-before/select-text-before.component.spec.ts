import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTextBeforeComponent } from './select-text-before.component';

describe('SelectTextBeforeComponent', () => {
  let component: SelectTextBeforeComponent;
  let fixture: ComponentFixture<SelectTextBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTextBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTextBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
