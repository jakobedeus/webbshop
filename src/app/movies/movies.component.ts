import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';
import { ICategory } from '../interface/ICategory';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // cartItems: IMovie[];

  constructor(private route: ActivatedRoute, service: DataService, private cartData: InteractionService) {
    this.route.paramMap.subscribe(pmap => {
      const id = pmap.get('id');
      service.getSingleProductData(id).subscribe((singleProductData) => { this.movie = singleProductData; });
      // this.cartData.cartSource$.subscribe(cartItems => this.cartItems = cartItems);

      service.getCategoryData().subscribe((categoryData) => { this.categories = categoryData; });
     });

  }

  categories;
  movie: IMovie;

  ngOnInit() {

  }

  addMovieToCart(movie) {
    this.cartData.sendAddedMovie(movie);
  }
}
