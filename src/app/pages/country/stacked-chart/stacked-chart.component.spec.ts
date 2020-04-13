import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedChartComponent } from './stacked-chart.component';

describe('StackedChartComponent', () => {
  let component: StackedChartComponent;
  let fixture: ComponentFixture<StackedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
