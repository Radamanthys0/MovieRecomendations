import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

/**
 * É necessario q haja ao menos um modulo na aplicacao, sendo esse o NgModule
 *
 */
@NgModule({
  declarations: [
    AppComponent,
    // Uma vez que criamos um component, precisamos declarar ele em um modulo
    MovieCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
