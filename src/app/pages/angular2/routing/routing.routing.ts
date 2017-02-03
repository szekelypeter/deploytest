import {Routes}  from "@angular/router";
import {FirstNestedComponent} from "./firstnested/first-nested.component";
import {SecondNestedComponent} from "./secondnested/second-nested.component";
import {RoutingComponent} from "./routing.component"

export const routingRoutes: Routes = [
  {
    path: 'angular2/routing',
    component: RoutingComponent,
    children: [
      {path:'first-nested',component:FirstNestedComponent},
      {path:'second-nested',component:SecondNestedComponent}
    ]
  },

];


