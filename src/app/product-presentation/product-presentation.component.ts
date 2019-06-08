import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';
import { ICategory } from '../interface/ICategory';

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
    
  }

  addMovieToCart(movie) {
    document.getElementById("cart").classList.add("showCart"), 3000;
    // document.getElementById("cart").style.display= "block";

    this.cartData.sendAddedMovie(movie);

  }



}
