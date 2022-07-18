import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseEnterEvent(){
    this.element.nativeElement.style.backgroundColor='blue'

  }
  @HostListener('mouseleave') mouseLeaveEnter(){
    this.element.nativeElement.style.backgroundColor='red'

  }

  constructor(private readonly element:ElementRef) {

    //this.element.nativeElement.innerHTML='Elemento Cambiado con directiva'
  }

}
