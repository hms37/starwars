import { Component, OnInit, Input } from '@angular/core';
import { Film } from './film';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-films',
  templateUrl: './actor-films.component.html',
  styleUrls: ['./actor-films.component.scss']
})
export class ActorFilmsComponent implements OnInit {
    @Input() film: Film;
  constructor(private service : AppService, private router: ActivatedRoute) { }

  ngOnInit() {
    
  }


}
