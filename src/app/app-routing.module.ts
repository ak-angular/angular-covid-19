import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CasesComponent } from './pages/cases/cases.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cases/:type', component: CasesComponent },
  { path: 'cases', component: CasesComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
