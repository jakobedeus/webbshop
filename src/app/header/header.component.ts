import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'webbshop-jakob-edeus';

  cart: boolean = false;

  // toggleCart() {
  //   document.getElementById("cart").classList.toggle("showCart");
  //   this.cart = true;
  // }

  
  
  constructor() { }

  ngOnInit() {



    
  }

}
