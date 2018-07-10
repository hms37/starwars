import { Component, OnInit, Input, SimpleChange, OnDestroy } from '@angular/core';
import { Actor } from '../actor';
import { Film } from '../actor-films/film';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-actor-profile',
  templateUrl: './actor-profile.component.html',
  styleUrls: ['./actor-profile.component.scss']
})
export class ActorProfileComponent implements OnInit,OnDestroy {

  @Input() actor : Actor;
  subscription: Subscription;
  filmsubscription: Subscription;
  films = [];
  selectedFilm: Film;
  constructor(private service: AppService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.getActor();
  }

  getActor() : void{
    let temp = []
    this.subscription = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getActor(id).subscribe(res => 
        {
          console.log(res);
          if (res && Object.keys(res).length > 0) {
            this.actor = res;
            if (this.actor) {
              this.films = [];
              this.films = this.processFilms(this.actor);
            }
          }
        },err=> {
          console.log('300');
        }
      );
      
    });
  }

  processFilms(actor: any) {
    let films = this.actor['films'];
    let len = films.length;
    let temp = [];
    for (let i = 0; i< len; i++) {
      this.filmsubscription = this.service.getFilms(films[i]).subscribe(
        res => {
          temp.push(res);
        }, err => {
          console.log('Data Error');
        }
      )
    }
    return temp;
  }

  onSelect(film) {
    this.selectedFilm = film ;
  }

ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
  if (this.filmsubscription) {
    this.filmsubscription.unsubscribe();
  }
}
}
