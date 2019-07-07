import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrders } from '../interface/IOrders';
import { IExtendedOrders } from '../interface/IOrderrows';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: DataService) {}

  orders: IOrders[];

  numberOfOrders = 0;

  extendedOrder: IExtendedOrders[] = [];

  loopOrderAmout() {
    for (let i = 0; i < this.orders.length; i++) {
      this.numberOfOrders++;
    }
  }

  emptyOrder(orderToRemove) {
    
    this.numberOfOrders--;

    this.service.removeOrder(orderToRemove.id).subscribe();
    for (let i = 0; i < this.orders.length; i++) {

      if (orderToRemove.id === this.orders[i].id) {

        this.orders.splice(i, 1);
      }
    }
  }


  ngOnInit() { 

    this.service.getOrderData().subscribe((orderData) => {

      this.orders = orderData; this.loopOrderAmout();

    });
  }
}

