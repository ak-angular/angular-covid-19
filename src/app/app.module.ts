import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { CountryPageComponent } from './pages/country/country.component';
import { CountryListPageComponent } from './pages/country-list/country-list.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { LoadingComponent } from './common/loading/loading.component';

import { SummaryComponent } from './pages/dashboard/summary/summary.component';
import { NewsComponent } from './pages/dashboard/news/news.component';
import { CountryTableComponent } from './pages/country-list/table/table.component';
import { StackedChartComponent } from './pages/country/stacked-chart/stacked-chart.component';
import { AreaChartComponent } from './pages/country/area-chart/area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    MainComponent,
    FooterComponent,
    DashboardPageComponent,
    SummaryComponent,
    NewsComponent,
    CountryPageComponent,
    CountryListPageComponent,
    CountryTableComponent,
    StackedChartComponent,
    AreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
