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

    // for (var i = 0; i < this.categories.length; i++) {
    //   var categoryID = this.categories[i].id;
    //   console.log("Category id from API:" + categoryID);
    // };

    for (var a = 0; a < this.movies.length; a++) {

      // ProductCategory from Movie array
      var movieCategory = this.movies[a].productCategory;
      // console.log(movieCategory);

      // CategoryId from ProductCategory array
      for (var b = 0; b < movieCategory.length; b++) {
        var movieCategoryId = movieCategory[b].categoryId;
        // console.log("CategoryId from movie: " + movieCategoryId);

        if (this.categories[0].id == movieCategoryId) {
          var moviesCategory1 = this.categories[0].id + movieCategoryId;
          // Pusha till en array?
          console.log("API cat: " + this.categories[0].id + " API cat name: " + this.categories[0].name +  ", Movie cat: " + movieCategoryId + " Movie Name: " + this.movies[a].name)
        }
        if (this.categories[1].id == movieCategoryId) {
          var moviesCategory2 = this.categories[1].id + movieCategoryId;
          console.log("API cat: " + this.categories[1].id + " API cat name: " + this.categories[1].name +  ", Movie cat: " + movieCategoryId + " Movie Name: " + this.movies[a].name)
        }
        if (this.categories[2].id == movieCategoryId) {
          var moviesCategory3 = this.categories[2].id + movieCategoryId;
          console.log("API cat: " + this.categories[2].id + " API cat name: " + this.categories[2].name +  ", Movie cat: " + movieCategoryId + " Movie Name: " + this.movies[a].name)
        }
        if (this.categories[3].id == movieCategoryId) {
          var moviesCategory4 = this.categories[3].id + movieCategoryId;
          console.log("API cat: " + this.categories[3].id + " API cat name: " + this.categories[3].name +  ", Movie cat: " + movieCategoryId + " Movie Name: " + this.movies[a].name)
        }

          // console.log("Category Id from API: " + this.categories[2].id + " Movies with category id: " + movieCategoryId)
        
      }
    };

    // 
  }


  ngOnInit() {
    // error: err => console.log("error: " + error),
    // complete: () => console.log("Complete")



    // const category = this.categories;

    // for(var i = 0; i < category.length; i++) {
    //   console.log(1);
    // };


    // var cat5 = this.categories[0].id;
    // var cat6 = this.categories[1].id;
    // var cat7 = this.categories[2].id;
    // var cat8 = this.categories[3].id;
  }




}
