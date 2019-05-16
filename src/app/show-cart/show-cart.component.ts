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

  constructor(private cartData: InteractionService) { }

  ngOnInit() {

    this.cartData.cartSource$.subscribe(
      cartItems => {
        this.addToCart(cartItems)
      })

      if( localStorage.getItem("cart") !== null) {
        this.getCartFromStorage(this.cartItems);
        document.getElementById("cartBtn").classList.add("showEmptyCartBtn");
      }
    
  }

  totalPrice: any;

  addToCart(movieToAdd: IMovie) {
    
    let addedMovie = false;

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;
        

        this.totalPrice = movieToAdd.price * this.cartItems[i].amount;

        // console.log(this.totalPrice);
        // this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: this.totalPrice });
        this.addToCartFromStorage(this.cartItems);
        addedMovie = true;
      }
    }

    if (addedMovie === false) {
      this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: movieToAdd.price });
      this.addToCartFromStorage(this.cartItems);
    }
  }

  removeFromCart(movieToRemove: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToRemove.id === this.cartItems[i].movie.id) {
        if (this.cartItems[i].amount > 1) {
          this.cartItems[i].amount--;
          this.addToCartFromStorage(this.cartItems);
          // this.totalPrice = movieToRemove.price * this.cartItems[i].amount;
        } else {
          this.cartItems.splice(i, 1);
          this.addToCartFromStorage(this.cartItems);
        }
      }
    }
  }

  emptyCart() {

    if( localStorage.getItem("cart") !== null) { 
      this.cartItems.splice(0, this.cartItems.length);
      this.addToCartFromStorage(this.cartItems);
    }
  }

  addToCartFromStorage(cartItems) {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  getCartFromStorage(cartItems) {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
  }

}