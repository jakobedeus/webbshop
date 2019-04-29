import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  @Input() avalibleMovies: IMovie[];

  constructor(dataService: MockDataService) {
    this.avalibleMovies = dataService.getData();

  }

  // avalibleMovies: IMovie[] = [
  //   { name: 'Batman in love', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 1},
  //   { name: 'Silly Batman', description: 'Comedy', year: 2003, price: 100, added: 9, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 2},
  //   { name: 'Batman suspence', description: 'Thriller', year: 1976, price: 20, added: 7, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 3},
  //   { name: 'Batman', description: 'Action', year: 1873, price: 45, added: 8, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Test.png', id: 4}
  // ];
  // @Input() movies: IMovie;


  click() {
    console.log(this.avalibleMovies)
  }


  ngOnInit() {
  }

}
