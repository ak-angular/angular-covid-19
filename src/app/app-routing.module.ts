import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CasesComponent } from './pages/cases/cases.component';
import { CountryComponent } from './stats/country/country.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'COVID 19 - Stats Tracker | Dashboard'} },
  { path: 'cases/:type', component: CasesComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'cases', component: CasesComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'country/:countryName', component: CountryComponent, data: {title: 'COVID 19 - Stats Tracker | Country'} },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
