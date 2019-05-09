import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICart } from '../interface/ICart';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private cartSource = new BehaviorSubject<IMovie[]>([]);
  currentCart = this.cartSource.asObservable();
  private cart : ICart[] = [];

  constructor() { }
  

  newCart(movie) {
    this.cart.push(movie);
    this.cartSource.next(this.cart);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
