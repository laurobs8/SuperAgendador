import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GithubService } from './github.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
