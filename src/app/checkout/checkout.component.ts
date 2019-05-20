import { Component, OnInit } from '@angular/core';
import { ICart } from '../interface/ICart';
import * as moment from 'moment';
import { IOrders } from '../interface/IOrders';
import { IOrderrows } from '../interface/IOrderrows';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  cartItems: ICart[] = [];

  totalCartPrice: number;

  orderRows: IOrderrows[] = [];

  order: IOrders[] = [];

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
  }

  submitOrder(totalCartPrice, email) {

    for (let i = 0; i < this.cartItems.length; i++) {
      let orderName = this.cartItems[i].movie.name;
      let orderAmount = this.cartItems[i].amount;

      this.orderRows.push({name: orderName, amount: orderAmount});
    }
    let companyId = 20;
    var date = moment().format(); 

    this.order.push({created: date, createdBy: email, totalPrice: totalCartPrice, orderRows: this.orderRows, companyId: companyId })
    
    console.log(this.order)
  }
  
}
