import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'stats-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  globalStats: any;

  constructor( private _http: HttpService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchGloablStats();
    }, 500);
  }

  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  fetchGloablStats() {
    let url = 'https://corona.lmao.ninja/all';

    return this._http.get(url).subscribe(res => {
      this.globalStats = res;
    });
  }

}
