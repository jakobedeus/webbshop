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
      service.getOrderData().subscribe((orderData) => { this.orders = orderData; });
  }

  orders: IOrders[];

  ngOnInit() {

    for (let i = 0; i < this.orders.length; i++) {
      if(this.orders[i].companyId === 0) {
        console.log("Hej");
      }
      
    }

   
  }

}
