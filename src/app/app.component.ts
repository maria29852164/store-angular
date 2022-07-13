import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Product} from "./interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
     console.log('chequear cambio')
  }
  parentImg: string = './assets/images/mushu.jpeg';
  showImg:boolean = true;
  counterParent:number=0;

  products: Product[] = [
    {
      name: "Mushu",
      price: 10,
      img:'./assets/images/mushu.jpeg',
      description:'paja de mushu'
    },
    {
      name: "Mulan",
      price: 30,
      img:'./assets/images/mulan.jpg',
      description:'princesa de disney mulan'
    },
    {
      name: "Grillo",
      price: 5,
      img:'./assets/images/grillo.png',
      description:'grillo de la suerte'
    }
  ];
  onLoaded(value:string){
    console.log('evento notificado al papa : '+ value )
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
  onCounter(counter:number){
    this.counterParent= counter;
    console.log('counter del papa: '+ counter)
  }
}
