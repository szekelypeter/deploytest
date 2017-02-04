import {UserInputComponent} from "./user-input.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {userInputRouting} from "./user-input.routing";
import {PipeModule} from "../../../pipes/pipes.module";

@NgModule({
  imports: [
    PipeModule,
    RouterModule,
    RouterModule.forChild(userInputRouting)
  ],
  declarations: [
    UserInputComponent

  ],
  exports: [
    UserInputComponent
  ]

})
class UserInputModule {}

export {
  UserInputComponent,
  UserInputModule

}
