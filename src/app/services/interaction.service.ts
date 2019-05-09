import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../interface/ICart';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private cart = new BehaviorSubject<ICart[]>([]);
  currentCart = this.cart.asObservable();

  constructor() { }

  changeMessage(cartItem:ICart[]) {
    this.cart.next([]);

    console.log(cartItem);


  }
}
