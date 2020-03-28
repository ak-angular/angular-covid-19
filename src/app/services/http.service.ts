import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url, config) {
    // return console.log(url, data);
    return this.http.get(url, config);
  }
}
