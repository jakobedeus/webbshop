import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private route: ActivatedRoute, service: DataService, private cartData: InteractionService) {
    this.route.paramMap.subscribe(pmap => {
      const id = pmap.get('id');
      service.getSingleProductData(id).subscribe((singleProductData) => { this.movie = singleProductData; });
      this.cartData.currentCart.subscribe(cartItems => this.cartItems = cartItems);
     });

  }

  cartItems: ICart[];

  movie: IMovie;


  ngOnInit() {

    
  }

  addToCart(movie) {
    this.cartData.newCart(movie);
  }

  



}
