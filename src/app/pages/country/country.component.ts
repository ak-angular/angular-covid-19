import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { FormatterService } from 'src/app/services/formatter.service';
import { ConfigService } from 'src/app/services/config.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'stats-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryPageComponent implements OnInit {
  stats: any = [];
  timeline: any = [];
  countryName: string;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private _location: Location,
    private titleService: Title,
    private configService: ConfigService,
    public formatterService: FormatterService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      this.titleService.setTitle('COVID 19 - Stats Tracker | ' + this.countryName);
      this.fetchAll();
      this.fetchHistoricalData();
    });
  }

  fetchAll() {
    let url = this.configService.get('countriesApiUrl') + this.countryName;

    return this._http.get(url).subscribe(res => {
      this.stats = res;
    });
  }

  fetchHistoricalData() {
    let url = this.configService.get('historicalApiUrl') + this.countryName;

    return this._http.get(url).subscribe(res => {
      this.timeline = res['timeline'];
    });
  }

}
