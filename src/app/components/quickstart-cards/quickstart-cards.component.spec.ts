import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickstartCardsComponent } from './quickstart-cards.component';

describe('QuickstartCardsComponent', () => {
  let component: QuickstartCardsComponent;
  let fixture: ComponentFixture<QuickstartCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickstartCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickstartCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
