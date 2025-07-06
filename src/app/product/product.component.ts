import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { products } from '../products';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  product !: Product | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products.find(product => {return product.title === params.get('productId')})
    })
  }

}
