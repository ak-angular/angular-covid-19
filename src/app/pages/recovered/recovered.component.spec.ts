import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredComponent } from './recovered.component';

describe('RecoveredComponent', () => {
  let component: RecoveredComponent;
  let fixture: ComponentFixture<RecoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
