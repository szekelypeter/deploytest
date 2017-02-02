import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {Angular2Component} from "./pages/angular2/angular2.component";
import {RoutingComponent} from "./pages/angular2/routing/routing.component";
import {FirstNestedComponent} from "./pages/angular2/routing/firstnested/first-nested.component";
import {SecondNestedComponent} from "./pages/angular2/routing/secondnested/second-nested.component";



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
    path: 'angular2/routing',
    component: RoutingComponent,
    children: [
      {path:'first-nested',component:FirstNestedComponent},
      {path:'second-nested',component:SecondNestedComponent}
    ]
  },

  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }

];

@NgModule({
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
