import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {StoreService} from "../../services/store.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  price_card:number | undefined;
  card_products!  : Product[] ;


  // @Input('products') set setProduct(products: Product[]){
  //   this.products = products
  //
  // }

  addCardPanel(event:Product){
     this.storeService.addProduct(event);
     this.price_card = this.storeService.getTotal()



  }

  constructor(
    private readonly storeService: StoreService,
    private readonly productsService: ProductsService
    ) {
    this.card_products= this.storeService.getCardProducts();


  }

  ngOnInit(): void {

    this.productsService.getAllProducts()
      .subscribe((data:Product[])=>{
        this.products= data
        console.log(data[0])
      })
  }

}
