import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit() {

    var movieCategory = this.movie.productCategory;

    console.log(movieCategory);
  }

}
