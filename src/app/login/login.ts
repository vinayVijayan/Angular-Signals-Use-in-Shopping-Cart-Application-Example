import { Component, inject } from '@angular/core';
import { Ngconentex } from '../ngconentex/ngconentex';
import { CartService, Product } from '../services/cart.services';

@Component({
  imports: [Ngconentex],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  constructor(){

  }
private cartService = inject(CartService);

totalCount = this.cartService.totalCount
totalPrice = this.cartService.totalPrice
cartItems = this.cartService.cartitems;
  productList:Product[] = [
    { name: 'Wireless Mouse', price: 25 },
    { name: 'Mechanical Keyboard', price: 120 },
    { name: 'HD Monitor', price: 300 },
    { name: 'USB-C Cable', price: 15 }
  ];
onProductAdded(product:Product){
this.cartService.addToCart(product)
}

  clearAll() {
    this.cartService.clearCart();
  }

}
