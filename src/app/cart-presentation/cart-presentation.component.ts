import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interface/ICart';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interface/IMovies';

@Component({
  selector: 'app-cart-presentation',
  templateUrl: './cart-presentation.component.html',
  styleUrls: ['./cart-presentation.component.css']
})
export class CartPresentationComponent implements OnInit {

  constructor(private cartData: InteractionService) { }

  @Input() cartItem: ICart[] = [];


  ngOnInit() { 

    

    
  }


  
}
