import { Component, OnInit } from '@angular/core';
import { HousesService } from './houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  
  constructor(private service: HousesService) { }

  ngOnInit() {
    this.getHousesData();
  }
  getHousesData() {
    this.service.getAllHouses().subscribe(res => {
      console.log(res)
    })
  }

}
