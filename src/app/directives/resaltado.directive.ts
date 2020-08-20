import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private myElement: ElementRef ) {
  }


  @Input('appResaltado') nuevoColor: string;


  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor );
  }


  @HostListener('mouseleave') mouseLeave(){
    this.resaltar( null );
  }


  private resaltar( color: string = 'blue' ){
    this.myElement.nativeElement.style.backgroundColor = color;
  }

}
