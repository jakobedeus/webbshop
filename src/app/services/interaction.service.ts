import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICart } from '../interface/ICart';
import { HttpParams, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private cartSource = new Subject<IMovie>();
  
  cartSource$ = this.cartSource.asObservable();

  constructor() { 
    
  }


  sendMovie(movie: IMovie) {
    this.cartSource.next(movie);
  } 
}