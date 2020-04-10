import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  author = {
    name: 'Ashish Kumar',
    url: 'https://lab.kumarashish.com/'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
