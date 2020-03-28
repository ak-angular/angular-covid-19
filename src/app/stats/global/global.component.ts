import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'stats-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  globalStats: any;

  constructor(private _http: HttpService) { }

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
    let data = {
      name: 'global stats'
    };

    return this._http.get(url, data).subscribe(res => {
      this.globalStats = res;
      console.log(res, this.globalStats);
    });
  }

}
