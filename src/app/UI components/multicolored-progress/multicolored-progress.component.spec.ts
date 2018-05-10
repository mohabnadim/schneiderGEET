import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticoloredProgressComponent } from './multicolored-progress.component';

describe('MulticoloredProgressComponent', () => {
  let component: MulticoloredProgressComponent;
  let fixture: ComponentFixture<MulticoloredProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticoloredProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticoloredProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
