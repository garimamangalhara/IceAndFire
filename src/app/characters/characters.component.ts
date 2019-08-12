import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters: any = []
  public randomCharacter: any
  public answer: any = ""
  public successMessage: any = ""
  public score: number = 0;
  public traversedIndex: any = []
  public loader: boolean = false;
  public won: boolean = false;
  public allTraversed: boolean = false;
  constructor(private service: CharactersService) { }

  ngOnInit() {
    this.getCharactersData();
  }
  getCharactersData() {
    let count = 0;
    this.service.getAllCharacters().subscribe(res => {
      console.log(res)
      this.characters = res;
      this.characters.forEach((element, i, array) => {
        array[i].index = count++;
      });
      console.log(this.characters)
      this.getNextCharacter();
    })
  }
  getNextCharacter() {
    let count = this.characters.length
    if (this.traversedIndex.length == count) {
      this.allTraversed = true;
      return
    }

    let num = this.generateRandom(count);
    this.traversedIndex.push(num)
    this.randomCharacter = this.characters.filter(ele => ele.index == num)[0];
    console.log(this.randomCharacter)
  }
  checkAnswer() {
    if (this.answer.toUpperCase() == this.randomCharacter.name.toUpperCase()) {
      this.successMessage = "You are CORRECT!!!"
      this.score += 100;
      this.loader = true;
      setTimeout(() => { this.getNextCharacter(); this.loader = false }, 3000)
    }
    else {
      this.successMessage = "You are WRONG :("
      this.score = 0;
    }
  }
  generateRandom(max) {
    var num = Math.floor(Math.random() * (max));
    return (this.traversedIndex.indexOf(num) != -1) ? this.generateRandom(max) : num;
  }
  reset() {
    this.traversedIndex = [];
    if (!this.won)
      this.score = 0
    this.getNextCharacter();
  }

}
