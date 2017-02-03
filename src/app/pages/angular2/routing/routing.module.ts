import {routingRoutes} from "./routing.routing";
import {RouterModule} from "@angular/router";

import {FirstNestedComponent} from "./firstnested/first-nested.component";
import {SecondNestedComponent} from "./secondnested/second-nested.component";
import {RoutingComponent} from "./routing.component"
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routingRoutes)
  ],
  declarations: [
    FirstNestedComponent,
    SecondNestedComponent,
    RoutingComponent

  ],
  exports: [
    FirstNestedComponent,
    SecondNestedComponent,
    RoutingComponent
  ]

})
class RoutingRoutingModule {}

export {
  RoutingRoutingModule,
  FirstNestedComponent,
  SecondNestedComponent,
  RoutingComponent
}
