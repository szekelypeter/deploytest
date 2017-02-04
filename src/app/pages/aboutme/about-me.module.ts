import {aboutMeRouting} from "./about-me.routing";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {AboutMeComponent} from "./about-me.component";
import {PhotosModule} from "./photos/photos.module";

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(aboutMeRouting)
  ],
  declarations: [
    AboutMeComponent,

  ],
  exports: [
    AboutMeComponent,
    PhotosModule
  ]

})
class AboutMeModule {}

export {
  AboutMeModule,
  AboutMeComponent,
  PhotosModule
}
