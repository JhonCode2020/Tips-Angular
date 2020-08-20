import { NgModule  } from "@angular/core";
import {  RouterModule, Routes  } from "@angular/router";

// Components
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

// Routes childrens
import { USUARIO_ROUTES } from "./components/usuario/usuario.routes";




export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];


@NgModule({
  imports: [ RouterModule.forRoot( routes, { useHash: true } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
