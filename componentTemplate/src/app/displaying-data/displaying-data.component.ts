import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent implements OnInit {
  title: string;
  myHero: Hero;
  heroes: Array<Hero>;
  
  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(12, 'Magneta'),
      new Hero(15, 'Tornado')];
    this.myHero = this.heroes[0];
  }

  ngOnInit() {
  }

}
