import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent  {

  constructor( private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( params => {
      console.log( 'Ruta PADRE' );
      console.log( params );
    });

  }


}
