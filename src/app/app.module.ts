// Modules
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { ActorFilmsComponent } from './actor-films/actor-films.component';
import { ActorProfileComponent } from './actor-profile/actor-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ActorFilmsComponent,
    ActorProfileComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
