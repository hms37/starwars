// Modules
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ActorFilmsComponent } from './actor-details/actor-films/actor-films.component';
import { ActorProfileComponent } from './actor-details/actor-profile/actor-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ActorDetailsComponent,
    ActorFilmsComponent,
    ActorProfileComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
