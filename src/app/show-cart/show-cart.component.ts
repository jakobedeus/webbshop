import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interface/ICart';
import { InteractionService } from '../services/interaction.service';
import { BehaviorSubject } from 'rxjs';
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

  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    for(let i = 0; i < this.cartItems.length; i++) {
    
      if(movieToAdd.id == this.cartItems[i].movie.id) {
        
        this.cartItems[i].amount++;
 
        addedMovie = true;
      } 
  }

  if(addedMovie === false) {

    this.cartItems.push({ movie: movieToAdd, amount: 1 });

    
  }
}

}