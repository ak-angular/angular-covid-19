import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'stats-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  stats: any = [];
  countryName: string;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
      this.fetchAll();
    });
    
  }

  fetchAll() {
    let url = 'https://corona.lmao.ninja/countries/' + this.countryName;

    return this._http.get(url).subscribe(res => {
      this.stats = res;
    });
  }

  goBack() {
    this._location.back();
  }

}
