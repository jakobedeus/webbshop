import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interface/IMovies';
import { ICart } from '../interface/ICart';
import { ICategory } from '../interface/ICategory';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  private cartSource = new Subject<IMovie>();

  cartSource$ = this.cartSource.asObservable();
  numberOfCartItems: number;
  totalCartPrice: number;
  cartItems: ICart[] = [];

  constructor() {}

  sendAddedMovie(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;
        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;
        this.getCartCounter(this.numberOfCartItems);
        this.numberOfCartItems++;
        this.setCartCounter(this.numberOfCartItems);
        this.addToCartFromStorage(this.cartItems);
        this.loopCartPrice(this.totalCartPrice);

        addedMovie = true;
      }
    }

    if (addedMovie === false) {

      this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: movieToAdd.price });
      this.getCartCounter(this.numberOfCartItems);
      this.numberOfCartItems++;
      this.setCartCounter(this.numberOfCartItems);

    }

    this.loopCartPrice(this.totalCartPrice);
    this.addToCartFromStorage(this.cartItems);

    this.cartSource.next(movieToAdd);
  }

  sendAddMovieInCart(movieToAdd: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;
        
        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;
        this.getCartCounter(this.numberOfCartItems);
        this.numberOfCartItems++;
        this.setCartCounter(this.numberOfCartItems);
        this.addToCartFromStorage(this.cartItems);
        this.loopCartPrice(this.totalCartPrice);

      }
    }

    this.cartSource.next(movieToAdd);
  }

  sendRemovedMovie(movieToRemove: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToRemove.id === this.cartItems[i].movie.id) {
        if (this.cartItems[i].amount > 1) {
          this.cartItems[i].amount--;
          this.cartItems[i].totalprice = movieToRemove.price * this.cartItems[i].amount;
          this.getCartCounter(this.numberOfCartItems);
          this.numberOfCartItems--;
          this.setCartCounter(this.numberOfCartItems);
          this.addToCartFromStorage(this.cartItems);
          this.loopCartPrice(this.totalCartPrice);
        } else {
 
          this.cartItems.splice(i, 1);
          this.addToCartFromStorage(this.cartItems);
          this.loopCartPrice(this.totalCartPrice);
          this.getCartCounter(this.numberOfCartItems);
          this.numberOfCartItems--;
          this.setCartCounter(this.numberOfCartItems);
          
        }
      }
    }
    this.cartSource.next(movieToRemove);
  }

  sendEmptyCart() {

      this.cartItems.splice(0, this.cartItems.length);
      this.addToCartFromStorage(this.cartItems);
      this.loopCartPrice(this.totalCartPrice);
      localStorage.setItem("totalCartPrice", JSON.stringify('0'));
      this.numberOfCartItems = 0;
      localStorage.setItem("cartCounter", JSON.stringify(this.numberOfCartItems));
      this.cartSource.next();
  }


  loopCartPrice(cartItems) {
    this.totalCartPrice = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalCartPrice = this.totalCartPrice + this.cartItems[i].totalprice;
    }
    this.addToCartPriceFromStorage(this.totalCartPrice);
  }

  addToCartFromStorage(cartItems) {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  getCartFromStorage(cartItems) {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
  }

  addToCartPriceFromStorage(cartItems) {
    localStorage.setItem("totalCartPrice", JSON.stringify(this.totalCartPrice));
  }

  setCartCounter(numberOfCartItems) {
    localStorage.setItem("cartCounter", JSON.stringify(this.numberOfCartItems));
  }

  getCartCounter(numberOfCartItems) {
    this.numberOfCartItems = JSON.parse(localStorage.getItem("cartCounter"));
  }

  sendLoopCartItemsAmount(numberOfCartItems) {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.numberOfCartItems++;
    }
    this.cartSource.next();
  }

}