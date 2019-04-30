import { IMovie } from './IMovies';
import { Observable } from "rxjs";

export interface IDataService {
    getData(): Observable<IMovie[]>;
  }
  