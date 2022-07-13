import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit , OnDestroy, OnChanges{
  img:string | undefined;
  @Input('img') set setImg(img:any){
    this.img= img;

  };
  @Output() loaded = new EventEmitter<string>();
  @Output() counterEvent = new EventEmitter<number>();
  default:string = './assets/images/default.png';
  counter:number=0;
  counterInvertal :number | undefined;

  constructor() { }

  ngOnInit(): void {
   // this.counterInvertal= setInterval(()=>{
   //   this.counter= this.counter+1;
   //   this.counterEvent.emit(this.counter);
   //
   //   console.log('valor del counter desde el hijo'+ this.counter)
   // }, 1000);



  }
  imgLoaded(){
     console.log('imagen cargada desde el hijo')
    this.loaded.emit(this.img)
  }
  imgError(){
    this.img= this.default;

  }
  ngOnDestroy() {
    console.log('destroy componente image')
    window.clearInterval(this.counterInvertal);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambios de todos los inputs', changes)
  }

}
