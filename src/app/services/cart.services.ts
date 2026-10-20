import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {
    cartcount = signal<number>(0)

    addToCart(){
        
        this.cartcount.update(current =>{
            const cartcount = current + 1;

            return cartcount
        })
    }
}