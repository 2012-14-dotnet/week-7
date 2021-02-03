import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieCollectionService } from 'src/app/services/movie-collection.service';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'ui-movielib',
  templateUrl: './movielib.component.html',
  styleUrls: ['./movielib.component.css']
})
export class MovielibComponent implements OnInit {
  movieCollection: Observable<Movie[]>

  constructor(movies: MovieCollectionService) { // constructor injection
    this.movieCollection = movies.get()
  }

  ngOnInit(): void {

  }
}
