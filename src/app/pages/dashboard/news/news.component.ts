import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormatterService } from 'src/app/services/formatter.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'dashboard-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: Array<any>;
  splitIndex = 0;

  constructor(
    private http: HttpService,
    public formatterService: FormatterService,
    private configService: ConfigService
    ) { }

  ngOnInit(): void {
    
    this.getLocation().subscribe(res => {
      this.fetchNews(res['countryCode'].toLowerCase());
    });
  }

  getLocation() {
    return this.http.get(this.configService.get('locationApiUrl'));
  }

  fetchNews(country: string) {
    let apiKey = this.configService.get('newsApiKey');
    let newsApiUrl = this.configService.get('newsApiUrl');
    let params = this.formatterService.param({
      apiKey,
      country,
      q: 'COVID',
      page: 1,
      pageSize: 10
    });
    let url: string = `${ newsApiUrl }?${ params }`;

    this.http.get(url).subscribe(res => {
      this.news = res['articles'];
      this.splitIndex = Math.ceil(this.news.length/2)
    });
  }

}
