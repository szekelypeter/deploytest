import {NgModule} from "@angular/core";
import {CapitalizePipe} from "./capitalize.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CapitalizePipe],
  imports: [CommonModule],
  exports: [CapitalizePipe],
})
class PipeModule {}

export {
  PipeModule,
CapitalizePipe
};
