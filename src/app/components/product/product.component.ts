import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input('product') product!: Product;


  constructor() {
     // before render no async
    // once
    console.log('contructor')
  }

  ngOnInit(): void {
    // berfore render async fetch apis
    // once
    console.log('ngOn init fetch apis')
  }

  ngAfterViewInit(): void {
    console.log('despues de que cargan los hijos del componente')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before ngOnInit , before render - during
    console.log(`ngOnChanges cambios en inputs ${this.product} y changes ${changes}`)
  }

  ngOnDestroy(): void {
    // destroy component
    console.log('destruccion de componente')
  }

}
