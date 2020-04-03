import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from './services/config.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COVID-19';

  constructor(public router: Router, private configService: ConfigService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', configService.get('gaKey'),
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    }
    )
  }
}
