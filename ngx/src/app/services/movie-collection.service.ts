import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieHttpService } from './movie-http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieCollectionService {
  movieApi: MovieHttpService;

  constructor(movieHttp: MovieHttpService, http: HttpClient) {
    this.movieApi = movieHttp;
  }

  get(): Observable<Movie[]> {
    return this.movieApi.httpGet();
  }

  getOne(name: string) {
    return this.movieApi.httpGet();
  }
}
