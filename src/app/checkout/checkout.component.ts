import { Component, OnInit } from '@angular/core';
import { ICart } from '../interface/ICart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  cartItems: ICart[] = [];

  totalCartPrice: number;

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
  }


  submitOrder(totalOrderPrice) {
    console.log(totalOrderPrice);
    
  }

}
