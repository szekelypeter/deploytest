import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RoutingRoutingModule} from "./pages/angular2/routing/routing.module";
import {Angular2RoutingModule} from "./pages/angular2/angular2.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angular2RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
