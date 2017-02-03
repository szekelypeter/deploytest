import {routingRoutes} from "./routing.routing";
import {RouterModule} from "@angular/router";

import {SecondNestedComponent} from "./secondnested/second-nested.component";
import {RoutingComponent} from "./routing.component"
import {NgModule} from "@angular/core";
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
