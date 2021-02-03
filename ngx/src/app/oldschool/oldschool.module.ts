import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldschoolRoutingModule } from './oldschool-routing.module';
import { MovielibComponent } from './movielib/movielib.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCollectionService } from '../services/movie-collection.service';
import { MovieHttpService } from '../services/movie-http.service';


@NgModule({
  declarations: [MovielibComponent, MovieComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OldschoolRoutingModule
  ],
  providers: [
    MovieCollectionService,
    MovieHttpService
  ]
})
export class OldschoolModule { }
