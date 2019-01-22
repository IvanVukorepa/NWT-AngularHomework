import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'domaci-angular';

  allProducts = require('../assets/products.json');
  favorites = []

  constructor(){
    this.favorites = this.allProducts.filter(p => {
      console.log(p.favorite);
      return p.favorite;
    });
  }
}
