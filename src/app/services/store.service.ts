import { Injectable } from '@angular/core';
import {Product} from "../interfaces/product";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private card_products  : Product[]=[] ;
  private myCard = new BehaviorSubject<Product[]>([])
  // apply subscribe
  myCard$= this.myCard.asObservable();
  constructor() { }

  addProduct(product: Product):void{
    this.card_products.push(product);
    this.applyCard()
  }
  applyCard(){
    this.myCard.next(this.card_products);

  }
  getCardProducts():Product[]{
    return this.card_products;
  }
  getTotal():number{
    return this.card_products.reduce((auxSum:number, product:Product)=> auxSum + product.price,0)
  }
}
