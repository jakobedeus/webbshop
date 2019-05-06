import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { MockDataService } from '../services/mock-data.service';
import { DataService } from '../services/data.service';
import { ICategory } from '../interface/ICategory';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(service: DataService) {
    service.getProductData().subscribe((productData) => { this.movies = productData; });
    service.getCategoryData().subscribe((categoryData) => { this.categories = categoryData; });
  }

  movies: IMovie[];
  categories: ICategory[];


  loopCategory() {

    //console.log(this.categories);

    for (var i = 0; i < this.categories.length; i++) {
      var categoryID = this.categories[i].id;
      //console.log("Category id from API:" + categoryID);

      for (var a = 0; a < this.movies.length; a++) {

        // ProductCategory from Movie array
        var movieCategory = this.movies[a].productCategory;
        // console.log(movieCategory);

        // CategoryId from ProductCategory array
        for (var b = 0; b < movieCategory.length; b++) {
          var movieCategoryId = movieCategory[b].categoryId;
          // console.log("CategoryId from movie: " + movieCategoryId);

          if (this.categories[i].id == movieCategoryId) {
            console.log("Category id: " + this.categories[i].id + ", Movies with this cat id: " + this.movies[a].name);
          }
        }
      };

    };

    // 
  }

  ngOnInit() {
    // error: err => console.log("error: " + error),
    // complete: () => console.log("Complete")

  }
}
