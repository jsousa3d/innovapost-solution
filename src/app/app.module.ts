import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // adding HTTPClient module for Get request
    HttpClientModule,
    AppRoutingModule
  ],
  // imported newly created appService
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
