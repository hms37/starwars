import { Component, Input, OnInit } from '@angular/core';
import { Actor } from './actor';
import  { Film} from './actor-films/film';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
 @Input() actor: Actor;
 selectedFilms: Film;
  // actorId : number ;
  constructor(  
    private service: AppService,) {
    }

  ngOnInit() {
  }

  onSelect(actor) {
    this.selectedFilms = actor.films;
  }


}
