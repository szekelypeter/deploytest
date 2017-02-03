import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {Angular2Component} from "./pages/angular2/angular2.component";

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'angular2',
    component: Angular2Component,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    WelcomeComponent,
    Angular2Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
