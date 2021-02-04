import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MovieHttpService } from './movie-http.service';

describe('MovieHttpService', () => {
  let service: MovieHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(MovieHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to run get()', fakeAsync(() => {
    expect(service.httpGet()).not.toBeNull();
    tick();
  }));
});
