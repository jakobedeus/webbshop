import { Injectable } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { of, Observable } from 'rxjs';
import { IDataService } from '../interface/IDataService';
import { ICategory } from '../interface/ICategory';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService{

  constructor() { }

    movies: IMovie[] = [
    { name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 1, productCategory :[{"categoryId":7,"category":null}]},
    { name: 'Silly Batman', description: 'Comedy', year: 2003, price: 100, added: 9, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 2, productCategory :[{"categoryId":7,"category":null}]},
    { name: 'Batman suspence', description: 'Thriller', year: 1976, price: 20, added: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 3, productCategory :[{"categoryId":7,"category":null}]},
    { name: 'Batman', description: 'Action', year: 1873, price: 45, added: 8, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 4, productCategory :[{"categoryId":7,"category":null}]}
  ];

  categories: ICategory[] = [
    { name: 'Action', id: 1},
    { name: 'Thriller', id: 2},
    { name: 'Comedy', id: 3},
    { name: 'Sci-fi', id: 4},
  ];

  getProductData(): Observable<IMovie[]> {
    return of(this.movies);
  }

  getCategoryData(): Observable<ICategory[]> {
    return of(this.categories);
  }


}
