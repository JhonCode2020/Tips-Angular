import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioEditarComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.parent.params.subscribe( paramsParent => {

        console.log('Ruta HIJa Usuario-nuevo');
        console.log( paramsParent );
    });

  }

  ngOnInit(): void {
  }

}
