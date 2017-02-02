import {NgModule} from "@angular/core";
import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";
@NgModule({
  declarations: [LoginComponent,ListComponent],
  exports: [
  LoginComponent,
  ListComponent
]

})
export class RoutingModule {}

export {
LoginComponent,
ListComponent
}
