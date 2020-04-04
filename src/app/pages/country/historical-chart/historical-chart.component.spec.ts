import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalChartComponent } from './historical-chart.component';

describe('HistoricalChartComponent', () => {
  let component: HistoricalChartComponent;
  let fixture: ComponentFixture<HistoricalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
