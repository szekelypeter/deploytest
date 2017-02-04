import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Angular2RoutingModule} from "./pages/angular2/angular2.module";
import {PipeModule} from "./pipes/pipes.module";
import {AboutMeModule} from "./pages/aboutme/about-me.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    Angular2RoutingModule,
    AboutMeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export {
PipeModule
}
