import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private route: ActivatedRoute, service: DataService) {
    this.route.paramMap.subscribe(pmap => {
      const id = pmap.get('id');
      service.getSingleProductData(id).subscribe((singleProductData) => { this.movie = singleProductData; });
     });
  }

  movie: IMovie;


  ngOnInit() {

    
  }

  



}
