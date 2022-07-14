import { Injectable } from '@angular/core';
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private card_products  : Product[]=[] ;
  constructor() { }

  addProduct(product: Product):void{
    this.card_products.push(product);
  }
  getCardProducts():Product[]{
    return this.card_products;
  }
  getTotal():number{
    return this.card_products.reduce((auxSum:number, product:Product)=> auxSum + product.price,0)
  }
}
