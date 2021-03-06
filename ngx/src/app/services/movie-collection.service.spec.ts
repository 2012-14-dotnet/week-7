import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MovieCollectionService } from './movie-collection.service';

describe('MovieCollectionService', () => {
  let service: MovieCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(MovieCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
