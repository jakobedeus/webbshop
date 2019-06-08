import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrders } from '../interface/IOrders';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(service: DataService) { 
      service.getOrderData().subscribe((orderData) => { this.orders = orderData;this.loopOrderAmout() });
  }

  orders: IOrders[];

  numberOfOrders = 0;

  loopOrderAmout() {
    for (let i = 0; i < this.orders.length; i++) {
      this.numberOfOrders++;
      // console.log(this.numberOfOrders)
    }
  }

  ngOnInit() {
  }

}
