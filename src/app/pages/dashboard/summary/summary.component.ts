import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormatterService } from 'src/app/services/formatter.service';
import { Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'dashboard-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  globalStats: any;

  constructor(
    private _http: HttpService,
    private titleService: Title,
    private configService: ConfigService,
    public formatterService: FormatterService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('COVID 19 - Stats Tracker | Dashboard');
    setTimeout(() => {
      this.fetchGloablStats();
    }, 500);
  }

  fetchGloablStats() {
    let url = this.configService.get('summaryApiUrl');

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
