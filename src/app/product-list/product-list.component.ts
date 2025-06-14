import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  productos: Product[] = [{
    title: 'Iphone 16',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp'
  },
  {
    title: 'Iphone 15',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp'
  },
  {
    title: 'Iphone 14',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp'
  },
  {
    title: 'Iphone 13',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp'
  },
  {
    title: 'Iphone 12',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp'
  }]
}
