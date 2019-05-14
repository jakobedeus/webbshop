import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interface/ICart';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interface/IMovies';

@Component({
  selector: 'app-cart-presentation',
  templateUrl: './cart-presentation.component.html',
  styleUrls: ['./cart-presentation.component.css']
})
export class CartPresentationComponent implements OnInit {

  constructor(private cartData: InteractionService) { }

  @Input() cartItem: ICart[] = [];


  ngOnInit() { 

    // this.cartData.cartSource$.subscribe(
    //   cartItem => {
    //     this.addToCart(cartItem)
    //   })

    
  }

  // addToCart(movieToAdd: IMovie) {

  //   let addedMovie = false;

  //   for (let i = 0; i < this.cartItem.length; i++) {

  //     if (movieToAdd.id === this.cartItem[i].movie.id) {

  //       this.cartItem[i].amount++;

  //       addedMovie = true;
  //     }
  //   }

  //   if (addedMovie === false) {

  //     this.cartItem.push({ movie: movieToAdd, amount: 1 });
  //   }
  // }


  // removeFromCart(movieToRemove: IMovie) {

  //   for (let i = 0; i < this.cartItem.length; i++) {

  //     if (movieToRemove.id === this.cartItem[i].movie.id) {
  //       if (this.cartItem[i].amount > 1) {

  //         this.cartItem[i].amount--;

  //       } else {
  //         this.cartItem.splice(i, 1)
  //       }
  //     }

  //   }

  // }


  
}
