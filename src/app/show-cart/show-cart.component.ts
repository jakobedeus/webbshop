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

  totalCartPrice: number = 0;

  addToCart(movieToAdd: IMovie) {
    
    let addedMovie = false;

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        this.cartItems[i].amount++;


        this.cartItems[i].totalprice = movieToAdd.price * this.cartItems[i].amount;
        this.totalCartPrice =  this.cartItems[i].totalprice;

        this.addToCartPriceFromStorage(this.totalCartPrice);
        this.addToCartFromStorage(this.cartItems);
        
        addedMovie = true;
      }
    } 

    if (addedMovie === false) {

      // this.addToCartPriceFromStorage(this.totalCartPrice);
      // this.totalCartPrice = this.totalCartPrice + movieToAdd.price;

      this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: movieToAdd.price });
      this.addToCartPriceFromStorage(movieToAdd.price);
      this.addToCartFromStorage(this.cartItems);
      
    }

    // this.totalCartPrice = this.totalCartPrice + this.totalCartPrice;
    // this.cartItems.push({ movie: movieToAdd, amount: null, totalprice: this.totalPricePerItem });



    // this.addToCartPriceFromStorage(this.totalCartPrice);

    // this.totalPricePerItem = this.totalPricePerItem + this.totalPricePerItem;
    // this.cartItems.push({ movie: movieToAdd, amount: 1, totalprice: this.totalPricePerItem });

    console.log(this.totalCartPrice);

  }
  

  removeFromCart(movieToRemove: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToRemove.id === this.cartItems[i].movie.id) {
        if (this.cartItems[i].amount > 1) {
          this.cartItems[i].amount--;
          this.cartItems[i].totalprice = movieToRemove.price * this.cartItems[i].amount;
          this.addToCartFromStorage(this.cartItems);
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

  addToCartPriceFromStorage(cartItems) {
    localStorage.setItem("totalCartPrice", JSON.stringify(this.totalCartPrice));
  }

}