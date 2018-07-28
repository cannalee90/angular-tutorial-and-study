import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  title: string;
  currentHero: Hero = new Hero(1, 'Iron man', 'https://images-na.ssl-images-amazon.com/images/I/91qvAndeVYL._RI_.jpg');
  isUnchanged: boolean = true;
  heroes: Hero[];
  hero: Hero;

  constructor() {
    this.title = 'Template Syntax'
    this.heroes = [
      new Hero(1, 'Windstorm', 'https://images-na.ssl-images-amazon.com/images/I/91qvAndeVYL._RI_.jpg'),
      new Hero(2, 'Bombasto', 'https://images-na.ssl-images-amazon.com/images/I/91qvAndeVYL._RI_.jpg'),
      new Hero(12, 'Magneta', 'https://images-na.ssl-images-amazon.com/images/I/91qvAndeVYL._RI_.jpg'),
      new Hero(15, 'Tornado', 'https://images-na.ssl-images-amazon.com/images/I/91qvAndeVYL._RI_.jpg')];
    this.hero = this.heroes[0];
  }

  ngOnInit() {
  }

}
