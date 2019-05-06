import { IMovie } from './IMovies';
import { Observable } from "rxjs";
import { ICategory } from './ICategory';

export interface IDataService {
  getProductData(): Observable<IMovie[]>;
  getCategoryData(): Observable<ICategory[]>;
  }
  