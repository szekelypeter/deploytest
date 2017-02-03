import {RouterModule} from "@angular/router";

import {FirstSecondNestedComponent} from "./fsnested/first-second-nested.component";
import {FirstFirstNestedComponent} from "./ffnested/first-first-nested.component";
import {FirstNestedComponent} from "./first-nested.component"
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    FirstNestedComponent,
    FirstFirstNestedComponent,
    FirstSecondNestedComponent

  ],
  exports: [
    FirstNestedComponent,
    FirstFirstNestedComponent,
    FirstSecondNestedComponent
  ]

})
class NestedRoutingModule {}

export {
  NestedRoutingModule,
  FirstNestedComponent,
  FirstFirstNestedComponent,
  FirstSecondNestedComponent
}
