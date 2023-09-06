import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimelineModule } from 'primeng/timeline';

import { AppComponent } from './app.component';
import { TimelineComponent } from './Timeline/timeline.component';


@NgModule({
  declarations: [AppComponent, TimelineComponent],
  imports: [BrowserModule, TimelineModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
