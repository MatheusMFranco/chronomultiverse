import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NewlyAddedComponent } from './newly-added/newly-added.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { LastUpdatedComponent } from './last-updated/last-updated.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NewlyAddedComponent,
    MostViewedComponent,
    LastUpdatedComponent,
    CookiesPolicyComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
