import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/all/all.component';
import { ActiveComponent } from './pages/active/active.component';
import { DeathsComponent } from './pages/deaths/deaths.component';
import { RecoveredComponent } from './pages/recovered/recovered.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'all-cases',
    component: AllComponent
  },
  {
    path: 'active-cases',
    component: ActiveComponent
  },
  {
    path: 'death-cases',
    component: DeathsComponent
  },
  {
    path: 'recovered-cases',
    component: RecoveredComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
