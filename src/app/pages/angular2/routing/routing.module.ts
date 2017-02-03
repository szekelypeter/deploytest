import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {SecondNestedComponent} from "./secondnested/second-nested.component";
import {RoutingComponent} from "./routing.component"
import {routingRoutes} from "./routing.routing";
import {NestedRoutingModule} from "./firstnested/first-nested.module";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routingRoutes)
  ],
  declarations: [
    SecondNestedComponent,
    RoutingComponent
  ],
  exports: [
    SecondNestedComponent,
    RoutingComponent,
    NestedRoutingModule,
  ]

})
class RoutingRoutingModule {}

export {
  RoutingRoutingModule,
  SecondNestedComponent,
  RoutingComponent,
  NestedRoutingModule
}
