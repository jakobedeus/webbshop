import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() movie: IMovie[];

  constructor(private cartData: InteractionService) { }
  
  cartItem: ICart[];

  ngOnInit() {
    this.cartData.currentCart.subscribe(cartItem => this.cartItem = cartItem);
  }

  addToCart(movie) {
    this.cartData.newCart(movie);
  }

}
