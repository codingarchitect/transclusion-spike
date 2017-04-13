import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MagTabComponent } from './mag-tab/mag-tab.component';
import { MagTabsComponent } from './mag-tabs/mag-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    MagTabComponent,
    MagTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
