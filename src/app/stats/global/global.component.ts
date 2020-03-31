import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'stats-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  isLoading: boolean = true;
  stats: any = [];
  filtered: any = [];
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
    public formatterService: FormatterService
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
    let url = 'https://corona.lmao.ninja/countries?sort=' + this.sortBy;

    return this._http.get(url).subscribe(res => {
      this.stats = res;

      // add index
      this.stats.forEach((item: any, index: number) => item.index = index + 1);
      this.filtered = this.stats;

      setTimeout(() => this.isLoading = false);
    });
  }

  sortData(sortType) {
    this.sortBy = sortType;
    this.isLoading = true;
    this.setTitle();
    this.fetchAll();
  }

  setTitle() {
    this.titleService.setTitle('COVID 19 - Stats Tracker | Report by Country | ' + this.sortLabel[this.sortBy]);
  }

  filterCountry(event) {
    let term = event.target.value.toLowerCase();
    let match = new RegExp(term, "gi");

    if(!term) {
      this.filtered = this.stats;
      return;
    }

    //
    this.filtered = this.stats.filter(item => item.country.match(match));
  }

}
