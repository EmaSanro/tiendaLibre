import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../Product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  prodList!: Product[];
  quantityProds !: number;
  valueProds !: number;

  constructor(private cartService : ProductCartService) { }

  ngOnInit(): void { 
    this.cartService.list.subscribe(prods => { this.prodList = prods});
    this.totalValue();
    this.totalProds();
  }

  totalProds() {
    this.quantityProds = 0;
    for(let prod of this.prodList) {
      this.quantityProds += prod.quantity;
    }
    
    return this.quantityProds;
  }

  totalValue() : number {
    this.valueProds = 0;
    for(let prod of this.prodList) {
      this.valueProds += prod.price * prod.quantity;
    }
    return this.valueProds;
  }

  removeToCart(product: Product) {
    this.cartService.removeToCart(product);
    console.log(this.cartService.list)
    this.totalProds();
    this.totalValue();
  }
}
