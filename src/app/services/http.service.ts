import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * @method
   * @desc makes HTTP get call
   * @param url {String} url where ajax call has to be made
   * @param config {obejct} other configuration like headers etc...
   * @return {Promise} HTTP promise object
   */
  get(url, config = {}) {
    return this.http.get(url, config);
  }
}
