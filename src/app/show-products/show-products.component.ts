import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { ICategory } from '../interface/ICategory';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  movieCategoryId: number;

  constructor(service: DataService, interactionService: InteractionService) {

    service.getCategoryData().subscribe((categoryData) => {
      this.categories = categoryData;

      service.getProductData().subscribe((productData) => { this.movies = productData; this.loopCategory() });
    });
  }

  movies: IMovie[];
  categories: ICategory[] = [];
  thrillerMovies: IMovie[] = [];
  sciFiMovies: IMovie[] = [];
  actionMovies: IMovie[] = [];
  comedyMovies: IMovie[] = [];

  actionLength: number;

  thrillerLength:number;

  comedyLength:number;

  sciFiLength:number;



  ngOnInit() {
    




    // this.interactionService.cartSource$.subscribe(
    //   cartItems => { this.printCart(cartItems) })
  }

  loopCategory() {

    for (var a = 0; a < this.movies.length; a++) {
      var movieCategory = this.movies[a].productCategory;

      for (var b = 0; b < movieCategory.length; b++) {
        this.movieCategoryId = movieCategory[b].categoryId;

        if (this.movieCategoryId === this.categories[0].id) {
          this.actionMovies.push(this.movies[a]);

          this.actionLength = this.actionMovies.length;

        }

        if (this.movieCategoryId === this.categories[1].id) {
          this.thrillerMovies.push(this.movies[a]);
          this.thrillerLength = this.thrillerMovies.length;
        }

        if (this.movieCategoryId === this.categories[2].id) {
          this.comedyMovies.push(this.movies[a]);

          this.comedyLength = this.comedyMovies.length;

        }

        if (this.movieCategoryId === this.categories[3].id) {
          this.sciFiMovies.push(this.movies[a]);

          this.sciFiLength = this.sciFiMovies.length;

          // console.log(sciFiLength)
        }
      }
    }
    

    
  }
  






}
