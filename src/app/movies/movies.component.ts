import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DataService) {}

  movie: IMovie;


  ngOnInit() {

    this.route.paramMap.subscribe(pmap => {
      const id = pmap.get('id');
      this.service.getSingleProductData(id).subscribe((singleProductData) => { this.movie = singleProductData; });
     });
  }

  



}
