import { Component, OnInit } from '@angular/core';
import { MovieCollectionService } from 'src/app/services/movie-collection.service';

@Component({
  selector: 'ui-movielib',
  templateUrl: './movielib.component.html',
  styleUrls: ['./movielib.component.css']
})
export class MovielibComponent implements OnInit {
  movieCollection: any;

  constructor(movies: MovieCollectionService) { // constructor injection
    this.movieCollection = movies.get();
  }

  ngOnInit(): void {

  }
}
