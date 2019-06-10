import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interface/IMovies';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: DataService, private cartData: InteractionService) { 
  }
  movies: IMovie[];

  ngOnInit() {
  }

  numberOfSearchResults: number;
  searchTerm: string;

  search(searchTerm: string) {

    if (searchTerm) {
        this.service.searchMovies(searchTerm)
        .subscribe(movies => this.movies = movies);
        this.numberOfSearchResults = this.movies.length;
        document.getElementById("searchResult").classList.add("showSearchResult");
        this.searchTerm = searchTerm;
        return searchTerm;
    }  
  }

  closeSearch() {
    document.getElementById("searchResult").classList.remove("showSearchResult");
  }

  addMovieToCart(movie) {
    // document.getElementById("cart").classList.add("showCart");
    this.cartData.sendAddedMovie(movie);
  }
}
