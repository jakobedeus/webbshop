import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interface/IDataService';
import { Observable } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICategory } from '../interface/ICategory';
import { IOrders } from '../interface/IOrders';


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
    return this.http.post<IOrders>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

  removeOrder(orderIdToRemove: number): Observable<IOrders>{
    return this.http.delete<IOrders>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + orderIdToRemove);
  }  

  searchMovies(searchTerm): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText='+ searchTerm);
  }
}