import {Routes}  from "@angular/router";
import {FirstNestedComponent} from "./routing/firstnested/first-nested.component";
import {SecondNestedComponent} from "./routing/secondnested/second-nested.component";
import {RoutingComponent} from "./routing/routing.component"
import {FirstSecondNestedComponent} from "./routing/firstnested/fsnested/first-second-nested.component";
import {FirstFirstNestedComponent} from "./routing/firstnested/ffnested/first-first-nested.component";
import {Angular2Component} from "./angular2.component";
import {UserInputComponent} from "./userinput/user-input.component";


export const angularRoutes: Routes = [
  {
    path: 'angular2', component: Angular2Component,
    children: [
      {
        path: 'routing',
        component: RoutingComponent,
        children: [
          {
            path: 'first-nested', component: FirstNestedComponent,
            children: [
              {path: 'first-first-nested', component: FirstFirstNestedComponent},
              {path: 'first-second-nested', component: FirstSecondNestedComponent}
            ]
          },
          {path: 'second-nested', component: SecondNestedComponent}
        ]
      }
    ]
  }

];


