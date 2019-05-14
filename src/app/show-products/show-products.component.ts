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
  newVal: number;
  movieCategoryId: number;

  constructor(service: DataService) {
    service.getProductData().subscribe((productData) => { this.movies = productData; });
    service.getCategoryData().subscribe((categoryData) => { this.categories = categoryData; });
  }

  movies: IMovie[];
  categories: ICategory[];

  // getCategory() {
  //   var x = document.getElementById("mySelect");
  //   console.log(x);
  // }

  cat5: true;
  cat6: true;
  cat7: true;
  cat8: true;


  loopCategory(event) {
    this.newVal = event.target.value;

    for (var i = 0; i < this.categories.length; i++) {
      var categoryID = this.categories[i];

      for (var a = 0; a < this.movies.length; a++) {
        
        // ProductCategory from Movie array
        var movieCategory = this.movies[a].productCategory;

        // CategoryId from ProductCategory array
        for (var b = 0; b < movieCategory.length; b++) {

          this.movieCategoryId = movieCategory[b].categoryId;
          // console.log("CategoryId from movie: " + movieCategoryId);
              // console.log("Value from select" + newVal);
              // console.log("Category from movie" + movieCategoryId);
          // if (categoryID.id == movieCategoryId) {
            if (this.newVal == this.movieCategoryId) {

            // console.log(this.movies[a].name);

            var movieCategoryFeed = this.movies[a].name;

            // var movieCategoryFeed = this.movies[a].name;
            // console.log(movieCategoryFeed);

            // this.movies.push({name: categoryID.id, id: this.movies[i].id})
            // var movieCategoryFinal = this.movies[a].name  + categoryID.name;

            // console.log(this.categories);
          }
        }
      };
    }; 
  }


  ngOnInit() {
    // error: err => console.log("error: " + error),
    // complete: () => console.log("Complete")

    


  }
}
