import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import {PhotosComponent} from "./photos.component"
import {photosRouting} from "./photos.routing";
import {CarouselComponent} from "./carosuel.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forChild(photosRouting)
  ],
  declarations: [
    PhotosComponent,
    CarouselComponent
  ],
  exports: [
    PhotosComponent,
    CarouselComponent
  ]

})
class PhotosModule {}

export {
  PhotosComponent,
  PhotosModule,
  CarouselComponent
}
