import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interface/ICart';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interface/IMovies';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  cartItems: ICart[] = [];

  totalCartPrice: number;

  numberOfCartItems: number;

  constructor(private cartData: InteractionService) {}

  ngOnInit() {

    this.cartData.cartSource$.subscribe(
      cartItems => { this.printCart(cartItems) })

    if (localStorage.getItem("cart") !== null) {
      this.cartData.getCartFromStorage(this.cartItems);
      // this.numberOfCartItems = JSON.parse(localStorage.getItem("cartCounter"));
      this.cartItems = this.cartData.cartItems;
    }
    
    if (localStorage.getItem("totalCartPrice") !== null) {
      this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
      this.numberOfCartItems = JSON.parse(localStorage.getItem("cartCounter"));
    }
  }

  printCart(cartItems) {
    this.cartData.getCartFromStorage(this.cartItems);
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
    this.cartData.loopCartPrice(cartItems);
    this.numberOfCartItems = JSON.parse(localStorage.getItem("cartCounter"));
    this.cartItems = this.cartData.cartItems;
  }

  loopCartItemsAmount(numberOfCartItems) {
    this.cartData.sendLoopCartItemsAmount(numberOfCartItems);
  }

  addToCart(movieToAdd: IMovie) {

    this.cartData.sendAddedMovie(movieToAdd);
  }

  removeFromCart(movieToRemove: IMovie) {
    this.cartData.sendRemovedMovie(movieToRemove);

  }

  addMovieInCart(movieToAdd: IMovie) {
    this.cartData.sendAddMovieInCart(movieToAdd);
  }

  emptyCart() {
    this.cartData.sendEmptyCart();
  }
}