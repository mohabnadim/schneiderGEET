import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFixedTabButtonComponent } from './right-fixed-tab-button.component';

describe('RightFixedTabButtonComponent', () => {
  let component: RightFixedTabButtonComponent;
  let fixture: ComponentFixture<RightFixedTabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightFixedTabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFixedTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
