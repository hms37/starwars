import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorProfileComponent } from './actor-profile/actor-profile.component';
import { ActorFilmsComponent } from './actor-films/actor-films.component';

const routes: Routes = [
  { path: 'profile/:id', component: ActorProfileComponent },
  { path: 'films/:id', component: ActorFilmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
