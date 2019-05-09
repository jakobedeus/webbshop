import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interface/IMovies';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() movie: IMovie[];

  

  constructor(private data: InteractionService) { }
  
  cartItem: ICart[];

  ngOnInit() {
    this.data.currentCart.subscribe(cartItem => this.cartItem = cartItem);
  }

  newMessage() {
    this.data.changeMessage([
      { name: 'Batman in action', description: 'Drama', year: 1993, price: 10, added: 6, imageUrl: 'https://www.munchkin.com/media/catalog/product/3/1/31001_white_hot_safety_bath_ducky.jpg', id: 1, productCategory :[{"categoryId":7,"category":null}]}
    ]);
  }

}
