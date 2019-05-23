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

  constructor(private cartData: InteractionService) { }

  ngOnInit() {

    this.cartData.cartSource$.subscribe(
      cartItems => {
        this.addToCart(cartItems)
      })

    if (localStorage.getItem("cart") !== null) {
      this.getCartFromStorage(this.cartItems);

      document.getElementById("cartBtn").classList.add("showEmptyCartBtn");
    }

    if (localStorage.getItem("totalCartPrice") !== null) {
      this.getCartPriceFromStorage(this.totalCartPrice);
    }


  }

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;


        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;

        this.addToCartFromStorage(this.cartItems);
        this.loopCartPrice(this.totalCartPrice);

        addedMovie = true;
      }
    }

    if (addedMovie === false) {

      this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: movieToAdd.price });
      this.addToCartFromStorage(this.cartItems);


    }
    this.loopCartPrice(this.totalCartPrice);
    this.addToCartPriceFromStorage(this.totalCartPrice);

  }


  removeFromCart(movieToRemove: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToRemove.id === this.cartItems[i].movie.id) {
        if (this.cartItems[i].amount > 1) {
          this.cartItems[i].amount--;
          this.cartItems[i].totalprice = movieToRemove.price * this.cartItems[i].amount;
          this.addToCartFromStorage(this.cartItems);
          this.loopCartPrice(this.totalCartPrice);
        } else {
          this.cartItems.splice(i, 1);
          this.addToCartFromStorage(this.cartItems);
          this.loopCartPrice(this.totalCartPrice);
        }
      }
    }
  }

  addMovieInCart(movieToAdd: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;
        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;
        this.addToCartFromStorage(this.cartItems);
        this.loopCartPrice(this.totalCartPrice);
      }
    }
  }

  emptyCart() {

    if (localStorage.getItem("cart") !== null) {
      this.cartItems.splice(0, this.cartItems.length);
      this.addToCartFromStorage(this.cartItems);
      this.loopCartPrice(this.totalCartPrice);
    }
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

  getCartPriceFromStorage(cartItems) {
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
  }

}