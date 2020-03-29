import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoadingComponent } from './common/loading/loading.component';
import { GlobalComponent } from './stats/global/global.component';
import { CountryComponent } from './stats/country/country.component';
import { MainComponent } from './common/main/main.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CasesComponent } from './pages/cases/cases.component';
import { SummaryComponent } from './stats/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    GlobalComponent,
    CountryComponent,
    MainComponent,
    FooterComponent,
    DashboardComponent,
    CasesComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
