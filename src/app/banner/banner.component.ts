import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interface/IMovies';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(service: DataService) {
    service.getProductData().subscribe((productData) => { this.movies = productData; this.loopBannerMovies() });
  }

  movies: IMovie[];

  interstellar: any[] = [];

  

  loopBannerMovies() {

    this.interstellar.push(this.movies[1]);
  }
  
  ngOnInit() {

  }

}
