import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interface/IDataService';
import { Observable } from 'rxjs';
import { IMovie } from '../interface/IMovies';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService{
  constructor(private http: HttpClient) { }

  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
    
  }
  
}