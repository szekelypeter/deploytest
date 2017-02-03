import {UserInputComponent} from "./user-input.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {userInputRouting} from "./user-input.routing";

@NgModule({
  imports: [
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
