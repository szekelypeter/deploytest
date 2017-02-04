import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import {PhotosComponent} from "./photos.component"
import {photosRouting} from "./photos.routing";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forChild(photosRouting)
  ],
  declarations: [
    PhotosComponent
  ],
  exports: [
    PhotosComponent,
  ]

})
class PhotosModule {}

export {
  PhotosComponent,
  PhotosModule
}
