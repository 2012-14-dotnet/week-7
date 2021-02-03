import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieHttpService {
  http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  httpGet() {
    return this.http.get<Movie[]>('/assets/movie.json');
  }
}
