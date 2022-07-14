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
      title: "Mushu",
      price: 10,
      image:'./assets/images/mushu.jpeg',
      description:'paja de mushu'
    },
    {
      title: "Mulan",
      price: 30,
      image:'./assets/images/mulan.jpg',
      description:'princesa de disney mulan'
    },
    {
      title: "Grillo",
      price: 5,
      image:'./assets/images/grillo.png',
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
