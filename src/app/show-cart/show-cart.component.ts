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
  }

  // totalPrice: number;

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToAdd.id === this.cartItems[i].movie.id) {
        
        this.cartItems[i].amount++;
        // this.totalPrice = movieToAdd.price * this.cartItems[i].amount;
        localStorage.setItem("cart", JSON.stringify(this.cartItems));
  
        addedMovie = true;
      }
    }

    if (addedMovie === false) {

      this.cartItems.push({ movie: movieToAdd, amount: 1 });
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    }
  }


  removeFromCart(movieToRemove: IMovie) {

    for (let i = 0; i < this.cartItems.length; i++) {

      if (movieToRemove.id === this.cartItems[i].movie.id) {
        if (this.cartItems[i].amount > 1) {

          this.cartItems[i].amount--;
          // this.totalPrice = movieToRemove.price * this.cartItems[i].amount;
          localStorage.setItem("cart", JSON.stringify(this.cartItems));

        } else {
          this.cartItems.splice(i, 1)
          localStorage.setItem("cart", JSON.stringify(this.cartItems));
        }
      }

    }

  }

}