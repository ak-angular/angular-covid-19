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
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/all/all.component';
import { ActiveComponent } from './pages/active/active.component';
import { DeathsComponent } from './pages/deaths/deaths.component';
import { RecoveredComponent } from './pages/recovered/recovered.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    GlobalComponent,
    CountryComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AllComponent,
    ActiveComponent,
    DeathsComponent,
    RecoveredComponent
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
