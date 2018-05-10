import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGreenComponent } from './card-green.component';

describe('CardGreenComponent', () => {
  let component: CardGreenComponent;
  let fixture: ComponentFixture<CardGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
