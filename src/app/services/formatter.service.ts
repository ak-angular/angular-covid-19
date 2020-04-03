import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormatterService {

  constructor() { }

  /**
   * @method
   * @desc formats number in US metrics comma based. example 9876543 => 9,876,543
   * @param num {Number} number to be formated
   * @return {String} formated number in string format
   */
  number(num: number) {
    return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /**
   * @method
   * @desc formated date string from now. example: 5 minutes ago, 3 days agon
   * @param dateString {String} date string to be formated
   * @return {string} formated date string
   */
  date(dateString: string) {
    let myMoment: moment.Moment = moment(dateString);

    return myMoment.fromNow();
  }

  /**
   * @method
   * @desc parametries the object in query-string format. example: {a: 1, b: 2} => 'a=1&b=2'
   * @param queryObj {object} object to be parametries
   * @return {string} query string
   */
  param(queryObj): string {
    let queryString = [];

    for(let key in queryObj) { 
       queryString.push(`${ key }=${ queryObj[key] }`);
    }

    return queryString.join('&');
  }

}
