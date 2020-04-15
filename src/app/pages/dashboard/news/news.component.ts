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

  constructor(
    private http: HttpService,
    public formatterService: FormatterService,
    private configService: ConfigService
    ) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews() {
    let apiKey = this.configService.get('newsApiKey');
    let newsApiUrl = this.configService.get('newsApiUrl');
    let params = this.formatterService.param({
      q: 'COVID',
      from: '2020-03-16',
      apiKey,
      pageSize: 10,
      sortBy: 'publishedAt',
      language: 'en',
      page: 1
    });
    let url: string = `${ newsApiUrl }?${ params }`;

    this.http.get(url).subscribe(res => this.news = res['articles']);
  }

}
