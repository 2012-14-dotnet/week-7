import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielibComponent } from './movielib.component';

describe('MovielibComponent', () => {
  let component: MovielibComponent;
  let fixture: ComponentFixture<MovielibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielibComponent ]
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
