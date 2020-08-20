import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent {

  public alerta: string = 'alert-danger';

  public propiedades: Object = {
    danger: false
  };

  public loading: boolean = false;

  constructor() {}


  public ejecutar(){
    this.loading = true;
    setTimeout( () => this.loading = false , 3000);
  }



}
