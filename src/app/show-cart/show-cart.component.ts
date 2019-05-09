import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interface/ICart';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  cartItems: ICart[];
  
  constructor(private cartData: InteractionService) { }

  ngOnInit() {
    this.cartData.currentCart.subscribe(cartItems => this.cartItems = cartItems);
  }

  

}
