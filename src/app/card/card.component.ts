import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  constructor(private cart : ProductCartService) {  }
  
  ngOnInit(): void {  }
  
  @Input() product !: Product;

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }

}
