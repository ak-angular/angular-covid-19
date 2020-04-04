import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'country-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class CountryTableComponent implements OnChanges {

  @Input() list: Array<any>;
  @Input() sortBy: string;
  @Output() notifyOnSort = new EventEmitter<string>();

  constructor(public formatterService: FormatterService) { }

  ngOnChanges(): void {
  }

  sortData(sortType) {
    this.notifyOnSort.emit(sortType);
  }

}
