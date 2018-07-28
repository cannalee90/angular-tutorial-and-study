import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent,
    TemplateSyntaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
