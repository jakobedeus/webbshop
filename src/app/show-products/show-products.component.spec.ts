import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsComponent } from './show-products.component';
// import { IMovie } from '../interface/IMovies';
// import { MockDataService } from '../mock-data.service';

describe('ShowProductsComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create a list of 4 movies', () => {
  //   expect(component.test).toEqual([1, 2, 3, 4]);
  // });

  it('should create a list of 4 movies', () => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    expect(component.avalibleMovies.length).toBe(4);
  });

});
