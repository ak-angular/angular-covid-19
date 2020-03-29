import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'stats-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  stats: any = [];

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    let url = 'https://corona.lmao.ninja/countries?sort=cases';

    return this._http.get(url).subscribe(res => {
      this.stats = res;
    });
  }

}
