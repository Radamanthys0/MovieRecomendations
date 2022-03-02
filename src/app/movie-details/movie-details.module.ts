import { SanitizerUrlModule } from './../pipe/sanitizer-url/sanitizer-url.module';
import { MovieDetailsComponent } from './movie-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';

@NgModule({
  declarations: [MovieDetailsComponent],
  // ao criar usando --routing, ja e adicionado no modulo o import do routing, no caso MovieDetailsRoutingModule
  imports: [CommonModule, MovieDetailsRoutingModule, SanitizerUrlModule],
})
export class MovieDetailsModule {}
