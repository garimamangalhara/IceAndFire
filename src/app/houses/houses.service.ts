import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: Http) { }
  
  getAllHouses(): Observable<any> {
    let url="https://anapioficeandfire.com/api/houses";
    return this.http.get(url).map(response => response.json())
  }
}
