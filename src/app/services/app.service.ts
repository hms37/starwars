import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {

    public selectedActor: any = {};
    url = 'https://swapi.co/api/people/';
    private selectedActorObject = new Subject<any>();
    $selectedActor = this.selectedActorObject.asObservable();

    constructor(private http: Http) { }

    public setSelectedActor(item: any) {
        this.selectedActor[item['id']] = item;
        this.selectedActorObject.next(this.selectedActor);
        return true;
    }

    public getSelectedActor() {
        return this.selectedActor;
    }

    resetSelections() {
        this.selectedActor = {};
        return true;
    }

    getActor(id: number): Observable<any> {
        return this.http.get(this.url + id).pipe(map(res=> res.json()));
    }

    getAllActors(url: string): Observable<any> {
        return this.http.get(url).pipe(map(res => res.json()));
    }

    getFilms(url: string) : Observable<any> {
        return this.http.get(url).pipe(map(res => res.json()));
    }

}