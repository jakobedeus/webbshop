import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IDataService } from '../interface/IDataService';
import { Observable } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICategory } from '../interface/ICategory';
import { ICart } from '../interface/ICart';
import { IOrders } from '../interface/IOrders';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };


@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) { }

  getProductData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getSingleProductData(id): Observable<IMovie> {
    return this.http.get<IMovie>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + id);
  }

  getCategoryData(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

  getOrderData(): Observable<IOrders[]> {
    return this.http.get<IOrders[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=20');
  }

  addOrder(order): Observable<IOrders> {
    console.log(order);
    return this.http.post<IOrders>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }


  movies: IMovie[];
  moviesUrl = 'api/movies';


  searchMovies(term: string): Observable<IMovie[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<IMovie[]>(this.moviesUrl, options)
  }
}