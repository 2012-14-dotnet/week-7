import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldschoolRoutingModule } from './oldschool-routing.module';
import { MovielibComponent } from './movielib/movielib.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [MovielibComponent, MovieComponent],
  imports: [
    CommonModule,
    OldschoolRoutingModule
  ]
})
export class OldschoolModule { }
