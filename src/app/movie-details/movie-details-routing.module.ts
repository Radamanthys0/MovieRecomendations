import { MovieDetailsComponent } from './movie-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * O Routing module tera informacoes sobre as rotas
 * a primeira delas e um array contendo informacoes das rotas como path, component, children etc...
 *  */

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
  },
];

/**
 * Adicionamos no routerModule as rotas cadastradas
 *
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsRoutingModule {}
