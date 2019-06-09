import { Component, OnInit } from '@angular/core';
import { ICart } from '../interface/ICart';
import * as moment from 'moment';
import { IOrders } from '../interface/IOrders';
import { IOrderrows } from '../interface/IOrderrows';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { InteractionService } from '../services/interaction.service';
import { IMovie } from '../interface/IMovies';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: DataService, private httpClient: HttpClient, private fb: FormBuilder, private cartData: InteractionService) {}

  cartItems: ICart[] = [];

  totalCartPrice: number;

  orderRows: IOrderrows[] = [];

  order: IOrders;

  profileForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    address: [''],
    phone: ['']
  
  });


  ngOnInit() {

    this.cartData.cartSource$.subscribe(
      cartItems => { this.printCart(cartItems) })
      
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
  }

  printCart(cartItems) {
    this.cartData.getCartFromStorage(this.cartItems);
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
    this.cartData.loopCartPrice(cartItems);
    this.cartItems = this.cartData.cartItems;
  }

  addToCart(movieToAdd: IMovie) {

    this.cartData.sendAddedMovie(movieToAdd);
  }

  removeFromCart(movieToRemove: IMovie) {
    this.cartData.sendRemovedMovie(movieToRemove);

  }

  addMovieInCart(movieToAdd: IMovie) {
    this.cartData.sendAddMovieInCart(movieToAdd);
  }

  emptyCart() {
    this.cartData.sendEmptyCart();
  }

  

  submitOrder(totalCartPrice, email, paymentMethod) {

    for (let i = 0; i < this.cartItems.length; i++) {
      let orderId = this.cartItems[i].movie.id;
      let orderAmount = this.cartItems[i].amount;

      this.orderRows.push({ productId: orderId, amount: orderAmount});
    }
    const companyId = 20;
    let date = moment().format('YYYY-MM-DDTHH:mm:ss');
    // let paymentMethod: "Kort";
    let status: 1;

    let newOrder = { created: date, createdBy: email, paymentMethod: paymentMethod, totalPrice: totalCartPrice, status: status, orderRows: this.orderRows, companyId: companyId }

    this.service.addOrder(newOrder)
      .subscribe(data => {

      });
  }

}
