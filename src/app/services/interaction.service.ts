import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICart } from '../interface/ICart';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {


  private cartSource = new Subject<IMovie>();
  
  cartItem : ICart[] = [];
  cartSource$ = this.cartSource.asObservable();

  constructor() { 
    
  }


  sendMovie(movie: IMovie) {
    this.cartSource.next(movie);
  }
}

    // if( movie.id === this.cart.id) {
    //   var newAmount = cartFromStorage.amount + amount;
    //   this.cart.push(newAmount);
    //   this.cartSource.next(this.cart);
    // } else {
    //   this.cart.push(movie, amount);
    //   this.cartSource.next(this.cart);
    // }

    

      // this.cart.push(movie, amount);
      // this.cartSource.next(this.cart);
 
