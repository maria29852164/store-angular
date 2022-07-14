import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly  http: HttpClient) {
  }
  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
}
