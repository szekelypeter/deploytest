import {Routes}  from "@angular/router";
import {FirstNestedComponent} from "./firstnested/first-nested.component";
import {SecondNestedComponent} from "./secondnested/second-nested.component";
import {RoutingComponent} from "./routing.component"
import {FirstSecondNestedComponent} from "./firstnested/fsnested/first-second-nested.component";
import {FirstFirstNestedComponent} from "./firstnested/ffnested/first-first-nested.component";


export const routingRoutes: Routes = [
  {
    path: 'angular2/routing',
    component: RoutingComponent,
    children: [
      {path:'first-nested',component:FirstNestedComponent,
      children: [
        {path:'first-first-nested',component:FirstFirstNestedComponent},
        {path:'first-second-nested',component:FirstSecondNestedComponent}
      ]},
      {path:'second-nested',component:SecondNestedComponent}
    ]
  },

];


