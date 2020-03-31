import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'stats-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  globalStats: any;

  constructor( private _http: HttpService, public formatterService: FormatterService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchGloablStats();
    }, 500);
  }

  fetchGloablStats() {
    let url = 'https://corona.lmao.ninja/all';

    return this._http.get(url).subscribe(res => {
      this.globalStats = res;
    });
  }

  refreshData() {
    this.globalStats = undefined;
    setTimeout(() => {
      this.fetchGloablStats();
    }, 500);
  }

}
