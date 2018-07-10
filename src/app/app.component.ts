import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './services/app.service';
import { Actor } from './actor-profile/actor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  actors = [];
  selectedActor: Actor;

  // TODO Loading mask
  loading = false;
  pager: any = {};
  pagedItems: any[];
  url = '';
  prev = '';
  next = '';
  actorId = [];
  pageNumber: number;
  total = 0;
  end = 0;
  initial:Boolean;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.url = 'https://swapi.co/api/people';
    this.pageNumber = 1;
    this.initial = true;
    this.getActors(this.url);
  }

  getActors(url: string) {
    this.loading = true;
    this.service.getAllActors(url).subscribe(
      res => {
        this.prev = res.previous;
        this.next = res.next;
        this.total = res.count;
        this.actors = res.results;
        this.end = res.results.length;
        this.loading = true;
        this.getPageNumber(this.url);
        this.initial = false;;
      },
      err => {
        console.log('Check console');
      }
    );
  }

  setPage(text) {
    if (text === 'prev') {
      this.url = this.prev;
      this.loading = false;
      this.getActors(this.prev);
    }
    else if (text === 'next') {
      this.url = this.next;
      this.loading = false;
      this.getActors(this.url);
    }
    return true;
  }

  onSelect(actor: any) {
    this.service.resetSelections();
    actor['id'] = this.getActorID(actor);
    this.service.setSelectedActor(actor);
    this.selectedActor = actor;
    
  }

  getActorID(actor: any) {
    if (actor) {
    let peopleNum = actor['url'].split('people/')[1].replace('/', '');
    return parseInt(peopleNum);}
  } 

  getRouterLink(actor: any) {
    if (actor ) {
      return '/profile/' + this.getActorID(actor);
    }
    else {
      return '/profile/1';
    }
  }

  getPageNumber(url: String) {
    if (url.indexOf('/?page=') > -1) {
      let num = url.split('/?page=')[1];
      this.pageNumber = parseInt(num[0]);
    }
  }

}
