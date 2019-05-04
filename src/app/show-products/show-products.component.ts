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
  // movies: IMovie[];
  // constructor(private service: DataService) {}

  // ngOnInit() {
  //   this.service.getData().subscribe(data => {
  //      this.movies = data; 
  //   });
  // }

  constructor(service: DataService) { 
    service.getProductData().subscribe((productData) => { this.movies = productData; });
    service.getCategoryData().subscribe((categoryData) => { this.categories = categoryData; });
  }

  movies: IMovie[];
  categories: ICategory[];


  category5: true;



  ngOnInit() {
    // error: err => console.log("error: " + error),
    // complete: () => console.log("Complete")
  }

}
