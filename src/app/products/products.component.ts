import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'domaci-angular';

  allProducts = require('../../assets/products.json');
  products = [];
  favorites = [];
  searchText = "";

  favoriteChangedHandler(product: any){
    this.favorites.push(product);
  }

  unfavoriteProductHandler(product: any){
    var index = this.favorites.indexOf(product);
    if( index > -1){
      this.favorites.splice(index, 1);
      this.products[this.products.indexOf(product)].favorite = false;
    }
  }

  searchChange() {
    this.products = this.allProducts.filter(p => {
      return p.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  constructor(){
    this.products = this.allProducts;
    this.favorites = this.allProducts.filter(p => {
      return p.favorite;
    });
  }

  ngOnInit() {
  }

}
