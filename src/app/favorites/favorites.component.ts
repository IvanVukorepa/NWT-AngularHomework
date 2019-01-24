import { Component, OnInit, Input, Output, EventEmitter	 } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input() favorites: [];
  @Output() unfavoriteProduct: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  rating = (ratings) => {
    let sum = 0;
    ratings.forEach(element => {
      sum += element
    });
    return sum/ratings.length;
  }

  unfavoriteClick(product){
    this.unfavoriteProduct.emit(product);
  }

  ngOnInit() {
  }

}
