import { Component, OnInit, Input } from '@angular/core';
import { ICart } from '../interface/ICart';

@Component({
  selector: 'app-cart-presentation',
  templateUrl: './cart-presentation.component.html',
  styleUrls: ['./cart-presentation.component.css']
})
export class CartPresentationComponent implements OnInit {

  constructor() { }

  @Input() cartItem: ICart[];

  ngOnInit() {

    // for(var i = 0;this.cartItem.length; i++) {
      
    // }
  }

  

  
}
