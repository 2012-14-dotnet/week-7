import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieHttpService } from './movie-http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieCollectionService {
  movieApi: MovieHttpService;

  constructor(movieHttp: MovieHttpService) {
    this.movieApi = movieHttp;
  }

  get() {
    return this.movieApi.httpGet();
  }

  getOne(name: string) {
    return this.movieApi.httpGet();
  }
}
