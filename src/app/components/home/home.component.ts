import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `


      <app-clases></app-clases>
      <hr>

       <h3>Directivas personalizadas</h3>
      <hr>
      <p [appResaltado]="'purple'">
        Hola mundo
      </p>

      <app-ng-switch></app-ng-switch>

  `,
  styles: [

  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
