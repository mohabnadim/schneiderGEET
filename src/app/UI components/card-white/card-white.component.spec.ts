import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWhiteComponent } from './card-white.component';

describe('CardWhiteComponent', () => {
  let component: CardWhiteComponent;
  let fixture: ComponentFixture<CardWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
