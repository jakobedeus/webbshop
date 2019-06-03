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

  // Lägg subscriben utanför constructor för att komma åt den på två ställen.

  search(searchTerm: string) {

    if (searchTerm) {
        this.service.searchMovies(searchTerm)
        .subscribe(movies => this.movies = movies);
        console.log(this.movies);
        document.getElementById("searchResult").classList.add("showSearchResult");
        return searchTerm;
    }  
  }

  closeSearch() {
    document.getElementById("searchResult").classList.remove("showSearchResult");
  }

  addMovieToCart(movie) {
    document.getElementById("cart").classList.add("showCart");
    this.cartData.sendAddedMovie(movie);
  }
}
