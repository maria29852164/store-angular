import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  @Input('products') set setProduct(products: Product[]){
    this.products = products

  }

  constructor() { }

  ngOnInit(): void {
  }

}
