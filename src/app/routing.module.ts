import {NgModule} from "@angular/core";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {Angular2Component} from "./pages/angular2/angular2.component";
import {RoutingComponent} from "./pages/angular2/routing/routing.component";
import {FirstNestedComponent} from "./pages/angular2/routing/firstnested/first-nested.component";
import {SecondNestedComponent} from "./pages/angular2/routing/secondnested/second-nested.component";
@NgModule({
  declarations: [WelcomeComponent,
    Angular2Component,
    RoutingComponent,
    FirstNestedComponent,
    SecondNestedComponent
  ],
  exports: [
  WelcomeComponent,
  Angular2Component,
    RoutingComponent,
    FirstNestedComponent,
    SecondNestedComponent
]

})
export class RoutingModule {}

export {
WelcomeComponent,
Angular2Component,
  RoutingComponent,
  FirstNestedComponent,
  SecondNestedComponent
}
