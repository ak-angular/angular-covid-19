import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
import { Title } from '@angular/platform-browser';
import { FormatterService } from 'src/app/services/formatter.service';
import { ConfigService } from 'src/app/services/config.service';

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
  selector: 'stats-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryPageComponent implements OnInit {
  stats: any = [];
  timeline: any = [];
  countryName: string;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private _location: Location,
    private titleService: Title,
    private configService: ConfigService,
    public formatterService: FormatterService
  ) { 
    
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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      this.titleService.setTitle('COVID 19 - Stats Tracker | ' + this.countryName);
      this.fetchAll();
      this.fetchHistoricalData();
    });

    // init chart with empty data
    this.generateHistoricalChart([]);
  }

  fetchAll() {
    let url = this.configService.get('countriesApiUrl') + this.countryName;

    return this._http.get(url).subscribe(res => {
      this.stats = res;
    });
  }

  goBack() {
    this._location.back();
  }

  fetchHistoricalData() {
    let url = this.configService.get('historicalApiUrl') + this.countryName;

    return this._http.get(url).subscribe(res => {
      this.timeline = res['timeline'];
      this.generateHistoricalChart(this.timeline);
    });
  }

}
