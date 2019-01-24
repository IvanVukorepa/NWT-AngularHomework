import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/productsService';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../ProductInterface';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  product: ProductInterface;

  rate: number = null;
  rated: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    console.log(this.product);
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.productService.getProduct(this.id).subscribe(prod => {
        this.product = prod;
      });
    });
  }

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
  }

}
