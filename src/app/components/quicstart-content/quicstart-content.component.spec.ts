import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicstartContentComponent } from './quicstart-content.component';

describe('QuicstartContentComponent', () => {
  let component: QuicstartContentComponent;
  let fixture: ComponentFixture<QuicstartContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicstartContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicstartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
