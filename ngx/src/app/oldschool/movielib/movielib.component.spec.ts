import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCollectionService } from 'src/app/services/movie-collection.service';
import { MovielibComponent } from './movielib.component';

describe('MovielibComponent', () => {
  let component: MovielibComponent;
  let fixture: ComponentFixture<MovielibComponent>;
  let MovieCollectionServiceStub = {
    get() { }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovielibComponent],
      providers: [{ provide: MovieCollectionService, useValue: MovieCollectionServiceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
