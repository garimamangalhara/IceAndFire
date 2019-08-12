import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  openBooks() {
    this.router.navigate(['books'], { relativeTo: this.route })
  }
  openCharacters(){
    this.router.navigate(['characters'], { relativeTo: this.route })
  }
  openHouses(){
    this.router.navigate(['houses'], { relativeTo: this.route })
  }
  ngOnInit() {
  }

}
