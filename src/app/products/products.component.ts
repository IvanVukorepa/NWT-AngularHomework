import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../ProductInterface';
import { ProductService } from '../services/productsService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'domaci-angular';

  allProducts: ProductInterface[];
  products: ProductInterface[] = [];
  favorites: ProductInterface[] = [];
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

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.products = this.allProducts;
      this.favorites = this.allProducts.filter(p => {
        return p.favorite;
      });
    });
  }

}
