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

  constructor(private route: ActivatedRoute, service: DataService, private cartData: InteractionService) {
    this.route.paramMap.subscribe(pmap => {
      const id = pmap.get('id');

      service.getCategoryData().subscribe((categoryData) => {
        this.categories = categoryData;

        service.getSingleProductData(id).subscribe((singleProductData) => { this.movie = singleProductData; this.loopCategory() });
      });
    });

  }

  movieCategoryId: number;
  movie: IMovie;
  categories: ICategory[] = [];
  movieCategoryArray: any[] = [];


  ngOnInit() {
    window.scrollTo(0, 0);
  }

  loopCategory() {

    for (var b = 0; b < this.categories.length; b++) {

      for (var a = 0; a < this.movie.productCategory.length; a++) {

        if (this.movie.productCategory[a].categoryId === this.categories[b].id) {
          this.movieCategoryArray.push(this.categories[b].name);
        }
      }
    }
  }

  addMovieToCart(movie) {
    this.cartData.sendAddedMovie(movie);
  }


}
