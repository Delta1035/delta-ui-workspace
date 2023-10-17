import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DAlertModule } from "../../projects/delta-ui/src/components/d-alert/d-alert.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DAlertModule
  ]
})
export class AppModule { }
