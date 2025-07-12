import { Injectable } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private productsList : Product[] = [];
  private cartList : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  list : Observable<Product[]> = this.cartList.asObservable();
  constructor() {  }

  addToCart(product: Product) {
    let item = this.productsList.find((p) => p.title == product.title);
    if(!item) {
      this.productsList.push({... product});
    } else {
      item.quantity += product.quantity;
    }
    console.log(this.productsList);
    this.cartList.next(this.productsList);
  }
}
