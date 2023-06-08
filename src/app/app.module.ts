import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
