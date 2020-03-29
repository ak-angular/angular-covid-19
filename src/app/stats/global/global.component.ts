import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'stats-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
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
