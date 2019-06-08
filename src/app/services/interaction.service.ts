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

  numberOfCartItems = 0;

  constructor(private http: HttpClient) {}

  totalCartPrice: number;

  cartItems: ICart[] = [];

  sendAddedMovie(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;
        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;
        this.numberOfCartItems++;
        this.cartCounter(this.numberOfCartItems);
        this.addToCartFromStorage(this.cartItems);
        this.loopCartPrice(this.totalCartPrice);
        // this.toggleCart();

        addedMovie = true;
      }
    }

    if (addedMovie === false) {

      this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: movieToAdd.price });
      this.numberOfCartItems++;
      this.cartCounter(this.numberOfCartItems);

    }

    this.loopCartPrice(this.totalCartPrice);
    this.addToCartPriceFromStorage(this.totalCartPrice);
    this.addToCartFromStorage(this.cartItems);
    
    // this.toggleCart();


    this.cartSource.next(movieToAdd);
  }

  sendAddMovieInCart(movieToAdd: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;
        
        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;
        this.numberOfCartItems++;
        this.cartCounter(this.numberOfCartItems);
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
          this.numberOfCartItems--;
          this.cartCounter(this.numberOfCartItems);
          this.addToCartFromStorage(this.cartItems);
          this.loopCartPrice(this.totalCartPrice);
        } else {
 
          this.cartItems.splice(i, 1);
          this.addToCartFromStorage(this.cartItems);
          this.loopCartPrice(this.totalCartPrice);
          this.numberOfCartItems--;
          this.cartCounter(this.numberOfCartItems);
          
        }
      }
    }
    this.cartSource.next(movieToRemove);
  }

  sendEmptyCart() {

    // if (localStorage.getItem("cart") !== null) {
      this.cartItems.splice(0, this.cartItems.length);
      this.addToCartFromStorage(this.cartItems);
      this.loopCartPrice(this.totalCartPrice);
      localStorage.setItem("totalCartPrice", JSON.stringify('0'));
      localStorage.setItem("cartCounter", JSON.stringify('0'));
      this.numberOfCartItems = 0;


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

  cartCounter(numberOfCartItems) {
    localStorage.setItem("cartCounter", JSON.stringify(this.numberOfCartItems));
  }

  //   toggleCart() {
  //   document.getElementById("cart").classList.toggle("showCart");
  // }

  sendLoopCartItemsAmount(numberOfCartItems) {
    // this.numberOfCartItems = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.numberOfCartItems++;
    }
    this.cartSource.next();
  }
}