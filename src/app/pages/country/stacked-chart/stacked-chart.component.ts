import { Component, ViewChild, Input, OnInit, OnChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.scss']
})
export class StackedChartComponent implements OnChanges {
  @Input() timeline: Array<any>;
  @ViewChild("chart") chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnChanges(): void {
    this.initChart(this.timeline);
  }

  initChart(chartData: any) {
    this.chartOptions = {
      series: [
        {
          name: "Active Cases",
          data: this.generateSeries(chartData.cases)
        },
        {
          name: "Recovered",
          data: this.generateSeries(chartData.recovered)
        },
        {
          name: "Deaths",
          data: this.generateSeries(chartData.deaths)
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 5
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "datetime",
        categories: this.generateCategories(chartData.cases)
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      fill: {
        opacity: 1,
        // colors: ["#008FFB", "#00E396", "#dc3545"]
      },
      tooltip: {
        enabled: true,
        shared: true
      }

    };
  }

  generateSeries = function (data: any = {}) {
    let series = [];
    let dates = Object.keys(data);

    /**
     * just observed that chart show one day behind data,
     * so added one day in ms for each data in series for the correction
     */
    for (let i = 0; i < dates.length; i++) {
      let currentDate = dates[i];
      let currentValue = data[currentDate];
      let lastDate;

      if (i) {
        lastDate = dates[i - 1];
        currentValue = currentValue - data[lastDate];
        series.push(currentValue);
      }
    }

    return series;
  };

  generateCategories(data = {}) {
    let categories = Object.keys(data);
    let oneDay = 86400000; // one day in ms

    categories.shift(); // remove first one

    return categories.map(item => new Date(item).getTime() + oneDay);
  }

}
