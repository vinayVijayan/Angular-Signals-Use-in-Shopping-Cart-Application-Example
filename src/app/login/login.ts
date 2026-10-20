import { Component, inject } from '@angular/core';
import { Ngconentex } from '../ngconentex/ngconentex';
import { Subscription } from 'rxjs';
import { count } from 'console';
import { CartService } from '../services/cart.services';

@Component({
  imports: [Ngconentex],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  constructor(){

  }
  private cart  = inject(CartService)
    cartCount = this.cart.cartcount;

  productList = [
    { name: 'Wireless Mouse', price: 25 },
    { name: 'Mechanical Keyboard', price: 120 },
    { name: 'HD Monitor', price: 300 },
    { name: 'USB-C Cable', price: 15 }
  ];
 

}
