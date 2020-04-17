import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: any = {
    gaKey: 'G-CCR7FYV6T5',
    newsApiKey: '7fd8e67e17f745b48a0febc3c323cc36',
    newsApiUrl: 'https://newsapi.org/v2/top-headlines',
    summaryApiUrl: 'https://corona.lmao.ninja/v2/all',
    countriesApiUrl: 'https://corona.lmao.ninja/v2/countries/',
    historicalApiUrl: 'https://corona.lmao.ninja/v2/historical/',
    locationApiUrl: 'https://extreme-ip-lookup.com/json/'
  };

  constructor() { }

  /**
   * @method
   * @desc gets value from the config based on the key passed
   * @param key {string} config key
   * @return {String} config value based on the key passed
   */
  get(key: string): string {
    return this.config[key] || '';
  }

  /**
   * @method
   * @desc set key value based on the key and value passed
   * @param key {String} config key which has to be set
   * @param value {any} config value that has to be set of the passed key
   */
  set(key: string, value: any): void {
    this.config[key] = value;
  }
}
