import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NewlyAddedComponent } from './newly-added/newly-added.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NewlyAddedComponent,
    MostViewedComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
