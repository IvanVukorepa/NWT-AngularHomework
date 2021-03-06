import { Component, OnInit, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductInterface } from '../ProductInterface'


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

  @Input() product: ProductInterface;
  @Output() favoriteChanged: EventEmitter<any> = new EventEmitter<any>();
  rate: number = null;
  rated: boolean = false;

  rating = (ratings) => {
    let sum = 0;
    ratings.forEach(element => {
      sum += element
    });
    return (sum/ratings.length).toFixed(2);
  }

  rateClick = (product) => {
    if(this.rate !== null && this.rate > 0 && this.rate < 6){
      product.rated.push(this.rate);
      this.rated = true;
    }
    else
      this.rate = null;
  }

  favoriteClick = (product) => {
    product.favorite = !product.favorite;
    this.favoriteChanged.emit(product);
  }

  constructor() { }

  ngOnInit() {
  }
}
