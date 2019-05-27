import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICart } from '../interface/ICart';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { IOrders } from '../interface/IOrders';

@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  private cartSource = new Subject<IMovie>();
  
  cartSource$ = this.cartSource.asObservable();

  constructor(private http: HttpClient) { 
    
  }

  sendMovie(movie: IMovie) {
    this.cartSource.next(movie);
  }

  

}