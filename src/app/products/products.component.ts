import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

@NgModule({
  imports: [
    CommonModule
  ]
})

export class ProductsComponent implements OnInit {

  @Input() products = []
  @Input() s: string = "start"

  constructor() { }

  ngOnInit() {
  }
}
