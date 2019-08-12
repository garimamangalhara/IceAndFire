import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.getBooksData();
  }
  getBooksData(){
    this.service.getAllBooks().subscribe(res=>{
      console.log(res)
    })
  }
}
