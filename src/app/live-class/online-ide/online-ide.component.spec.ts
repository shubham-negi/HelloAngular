import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineIdeComponent } from './online-ide.component';

describe('OnlineIdeComponent', () => {
  let component: OnlineIdeComponent;
  let fixture: ComponentFixture<OnlineIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
