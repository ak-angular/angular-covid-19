import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.scss']
})
export class HistoricalChartComponent implements OnChanges {
  @Input() timeline: Array<any>;
  @ViewChild("chart") chart: ChartComponent;
  
  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnChanges(): void {
    this.generateHistoricalChart(this.timeline);
  }

  generateHistoricalChart(chartData) {
    this.chartOptions = {
      series: [
        {
          name: "Total Cases",
          data: this.generateDayWiseTimeSeries(chartData.cases)
        },
        {
          name: "Deaths",
          data: this.generateDayWiseTimeSeries(chartData.deaths)
        },
        {
          name: "Recovered",
          data: this.generateDayWiseTimeSeries(chartData.recovered)
        }
      ],
      chart: {
        type: "area",
        height: 350,
        stacked: false,
        events: {
          selection: function(chart, e) {
            console.log(new Date(e.xaxis.min));
          }
        }
      },
      colors: ["#008FFB", "#dc3545", "#00E396"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.1,
          opacityTo: 0.2
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      xaxis: {
        type: "datetime"
      }
    };
  }

  generateDayWiseTimeSeries = function(data: any) {
    var i = 0;
    var series = [];
    let oneDay = 86400000; // one day in ms

    /**
     * just observed that chart show one day behind data,
     * so added one day in ms for each data in series for the correction
     */

    for (let item in data) {
      series.push([new Date(item).getTime() + oneDay, data[item]]);
    }

    return series;
  };

}
