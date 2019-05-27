import { Component, OnInit } from '@angular/core';
import { ICart } from '../interface/ICart';
import * as moment from 'moment';
import { IOrders } from '../interface/IOrders';
import { IOrderrows } from '../interface/IOrderrows';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InteractionService } from '../services/interaction.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: DataService, private httpClient: HttpClient) {}

  cartItems: ICart[] = [];

  totalCartPrice: number;

  orderRows: IOrderrows[] = [];

  order: IOrders;


  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.totalCartPrice = JSON.parse(localStorage.getItem("totalCartPrice"));
  }

  submitOrder(totalCartPrice, email) {

    for (let i = 0; i < this.cartItems.length; i++) {
      let orderId = this.cartItems[i].movie.id;
      let orderAmount = this.cartItems[i].amount;

      this.orderRows.push({ productId: orderId, amount: orderAmount });
    }
    const companyId = 20;
    let date = moment().format('YYYY-MM-DDTHH:mm:ss');
    let paymentMethod: "Kort";
    let status: true;

    let newOrder = { created: date, createdBy: email, paymentMethod: paymentMethod, totalPrice: totalCartPrice, status: status, orderRows: this.orderRows, companyId: companyId }

    // const newOrder: IOrders = { newOrder } as IOrders;

    // var newOrder = JSON.stringify(this.order);


    this.service.addOrder(newOrder)
      .subscribe(data => {

      });
  }

}
