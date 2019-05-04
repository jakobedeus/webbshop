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
  movies: IMovie[];

  constructor(private route: ActivatedRoute) { }

  getMovies() {
    this.getMovies(); Array<IMovie>
  ()}

  ngOnInit(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      return id;
     });

  }



}
