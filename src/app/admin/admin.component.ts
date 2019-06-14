import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrders } from '../interface/IOrders';
import { IMovie } from '../interface/IMovies';
import { IExtendedOrders } from '../interface/IOrderrows';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: DataService) { }


  movie: IMovie;

  orders: IOrders[];

  numberOfOrders = 0;

  extendedOrder: IExtendedOrders[] = [];

  loopOrderAmout() {
    for (let i = 0; i < this.orders.length; i++) {
      this.numberOfOrders++;
    }
  }

  emptyOrder(orderIdToRemove) {
    this.service.removeOrder(orderIdToRemove).subscribe((data) => { });
  }

  ngOnInit() {

    this.service.getOrderData().subscribe((orderData) => {
      this.orders = orderData; this.loopOrderAmout();

      for (let a = 0; a < this.orders.length; a++) {

        let orderRows = this.orders[a].orderRows;

        if (orderRows.length >= 0) {
          this.extendedOrder.push({ order: this.orders[a], movieName: [], movieId: [] })
        }

        else {

          for (let b = 0; b < orderRows.length; b++) {

            let productId = orderRows[b].productId;

            this.extendedOrder.push({ order: this.orders[a], movieName: [], movieId: [] })

            this.service.getSingleProductData(productId).subscribe((productData) => {
              this.extendedOrder[a].movieName.push(productData.name);
              this.extendedOrder[a].movieId.push(productData.id);

              console.log(this.extendedOrder[a].movieId + " " + this.extendedOrder[a].movieName);

            });
          }
        }
      }
    });
  }
}

