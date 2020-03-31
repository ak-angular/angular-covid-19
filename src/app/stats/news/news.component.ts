import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'dashboard-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  apiKey: string = '7fd8e67e17f745b48a0febc3c323cc36';
  news: Array<any>;

  constructor(private http: HttpService, public formatterService: FormatterService) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews() {
    let fromDate = '2020-03-16';
    let pageNumber: number = 1;
    let pageSize: number = 6;
    let url: string = `https://newsapi.org/v2/everything?q=COVID&from=${ fromDate }&sortBy=publishedAt&apiKey=${ this.apiKey }&pageSize=${ pageSize }&page=${ pageNumber }&language=en`;

    this.http.get(url).subscribe(res => this.news = res['articles']);
  }

}
