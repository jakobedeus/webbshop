import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { ICart } from '../interface/ICart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'webbshop-jakob-edeus';

  cart: boolean = false;

  toggleCart() {
    document.getElementById("cart").classList.add("showCart");
    document.getElementById("cart").classList.add("hideCart"),1000;
    this.cart = true;
  }

  
  constructor(private cartData: InteractionService) { }

  cartItems: ICart[] = [];

  numberOfCartItems: number;

  totalCartPrice: number;

  ngOnInit() {

    this.cartData.cartSource$.subscribe(
      cartItems => { this.printCart(cartItems) })


    // this.numberOfCartItems = 0;
    // for (let i = 0; i < this.cartItems.length; i++) {
    //   this.numberOfCartItems++;
    // }
    this.numberOfCartItems = JSON.parse(localStorage.getItem("cartCounter"));

    
  }

  printCart(cartItems) {
    this.cartData.getCartFromStorage(this.cartItems);
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
    this.cartData.loopCartPrice(cartItems);
    this.numberOfCartItems = JSON.parse(localStorage.getItem("cartCounter"));
    this.cartItems = this.cartData.cartItems;
  }

}
