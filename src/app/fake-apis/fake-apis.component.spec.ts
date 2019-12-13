import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApisComponent } from './fake-apis.component';

describe('FakeApisComponent', () => {
  let component: FakeApisComponent;
  let fixture: ComponentFixture<FakeApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
