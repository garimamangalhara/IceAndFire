import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: Http) { }
  getAllBooks(): Observable<any> {
    let url="https://anapioficeandfire.com/api/books";
    return this.http.get(url).map(response => response.json())
  }
}
