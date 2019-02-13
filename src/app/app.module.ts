import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GithubService } from './github.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { StarComponent } from './star/star.component';
import { route } from './rotas';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InfoComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    route
  ],
  providers: [GithubService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
