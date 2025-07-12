import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../Product';
import { ProductCartService } from '../product-cart.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  prodList!: Product[];
  quantityProds : number = 0;
  sumProds : number = 0;

  constructor(private cartService : ProductCartService) { }

  ngOnInit(): void { 
    this.cartService.list.subscribe(prods => { this.prodList = prods});
    this.totalSumProds();
    this.totalQuantityProds();
  }

  totalQuantityProds() {
    for(let prod of this.prodList) {
      this.quantityProds += prod.quantity;
    }
    return this.quantityProds;
  }

  totalSumProds() : number {
    for(let prod of this.prodList) {
      this.sumProds += prod.price * prod.quantity;
    }
    return this.sumProds;
  }
}
