import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interface/IMovies';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(service: DataService, private cartData: InteractionService) {
    service.getProductData().subscribe((productData) => { this.movies = productData; this.loopBannerMovies() });
  }

  movies: IMovie[];
  interstellar: any[] = [];

  loopBannerMovies() {
    this.interstellar.push(this.movies[1]);
  }

  addMovieToCart(movie) {
    this.cartData.sendAddedMovie(movie);
  }
  
  ngOnInit() {

  }

}
