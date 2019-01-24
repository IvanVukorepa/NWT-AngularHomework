import { Component, OnInit, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

@NgModule({
  imports: [
    CommonModule
  ]
})

export class ProductComponent implements OnInit {

  @Input() product = {}
  @Output() favoriteChanged: EventEmitter<any> = new EventEmitter<any>();
  rate: number = null;
  clicked: boolean = false;

  rating = (ratings) => {
    let sum = 0;
    ratings.forEach(element => {
      sum += element
    });
    return sum/ratings.length;
  }

  rateClick = (product) => {
    if(this.rate !== null){
      product.rated.push(this.rate);
      this.clicked = true;
    }
  }

  favoriteClick = (product) => {
    product.favorite = !product.favorite;
    this.favoriteChanged.emit(product);
  }

  constructor() { }

  ngOnInit() {
  }
}
