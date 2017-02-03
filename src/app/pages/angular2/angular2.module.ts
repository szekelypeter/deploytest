import {angularRoutes} from "./angular2.routing";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserInputComponent} from "./userinput/user-input.component";
import {Angular2Component} from "./angular2.component";
import {RoutingRoutingModule} from "./routing/routing.module";
import {UserInputModule} from "./userinput/user-input.module";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(angularRoutes)
  ],
  declarations: [
    Angular2Component,

  ],
  exports: [
    Angular2Component,
    RoutingRoutingModule,
    UserInputModule
  ]

})
class Angular2RoutingModule {}

export {
  Angular2RoutingModule,
  Angular2Component,
  RoutingRoutingModule,
  UserInputModule
}
