import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MagTabsComponent } from './mag-tabs/mag-tabs.component';
import { MagTabContentDirective } from './mag-tab/mag-tab-content.directive';
import { MagTabDirective } from './mag-tab/mag-tab.directive';

@NgModule({
  declarations: [
    AppComponent,
    MagTabsComponent,
    MagTabDirective,    
    MagTabContentDirective
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
