import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListPageComponent implements OnInit {
  isLoading: boolean = true;
  responseData: any = [];
  displayData: any = [];
  sortBy: string = 'cases';
  sortLabel: Object = {
    cases: 'Total Cases Reported',
    recovered: 'Cases Recovered',
    deaths: 'Deaths',
    active: 'Active Cases'
  };
  
  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private titleService: Title,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let type = params.get('type');

      if(type) {
        this.sortBy = type;
      }

      this.setTitle();
      this.fetchAll();
    });
  }

  fetchAll() {
    let url = this.configService.get('countriesApiUrl') + '?sort=' + this.sortBy;

    // reset responseData and displayData
    this.responseData = [];
    this.displayData = [];

    return this._http.get(url).subscribe(res => {
      let indexFix = 1;
      this.responseData = res;

      // If world data comes on first index, let's not add one number to index
      if(this.responseData[0].country.indexOf(/world/gi) !== -1) {
        indexFix = 0;
      }

      // add index
      this.responseData.forEach((item: any, index: number) => item.index = index + indexFix);
      this.displayData = this.responseData;

      setTimeout(() => this.isLoading = false);
    });
  }

  filterCountry(event) {
    let term = event.target.value.toLowerCase();
    let match = new RegExp(term, "gi");

    if(!term) {
      this.displayData = this.responseData;
      return;
    }

    //
    this.displayData = this.responseData.filter(item => item.country.match(match));
  }

  handleOnSort(sortBy: string) {
    console.log('sorting tracked in parent comp', sortBy);
    this.sortBy = sortBy;
    this.isLoading = true;
    this.setTitle();
    this.fetchAll();
  }

  setTitle() {
    this.titleService.setTitle('COVID 19 - Stats Tracker | Report by Country | ' + this.sortLabel[this.sortBy]);
  }

}
