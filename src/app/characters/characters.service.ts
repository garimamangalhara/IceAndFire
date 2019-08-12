import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: Http) { }
  
  getAllCharacters(): Observable<any> {
    let url="https://anapioficeandfire.com/api/characters";
    return this.http.get(url).map(response => response.json())
  }
}
