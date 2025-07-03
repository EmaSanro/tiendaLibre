import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {

  technology: Product[] = [{
    title: 'Iphone 16',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 15',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 14',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 13',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 12',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 11',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone X',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 8',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  {
    title: 'Iphone 7',
    description : 'Iphone 16 Rosa 256GB 8GB RAM',
    price: 2000000,
    image : 'img/iphone16.webp',
    quantity: 0
  },
  ]

  appliances: Product[] = [
    {
      title: 'Lavarropas Automatico',
      description : 'Lavarropas Automatico 8kg',
      price: 999999,
      image : 'img/lavarropa.jpg',
      quantity: 0
    },
    {
      title: 'Lavarropas SemiAutomatico',
      description : 'Lavarropas Automatico 8kg',
      price: 999999,
      image : 'img/lavarropa.jpg',
      quantity: 0
    },
    {
      title: 'LavaSecarropas',
      description : 'Lavarropas Automatico 8kg',
      price: 999999,
      image : 'img/lavarropa.jpg',
      quantity: 0
    },
    {
      title: 'Lavarropas',
      description : 'Lavarropas Automatico 8kg',
      price: 999999,
      image : 'img/lavarropa.jpg',
      quantity: 0
    },
    {
      title: 'Lavarropas samsung',
      description : 'Lavarropas Automatico 8kg',
      price: 999999,
      image : 'img/lavarropa.jpg',
      quantity: 0
    },
    {
      title: 'Secarropas',
      description : 'Lavarropas Automatico 8kg',
      price: 999999,
      image : 'img/lavarropa.jpg',
      quantity: 0
    },
  ]
  
  upQuantity(product: Product) {
    product.quantity++;
  }
  
  downQuantity(product: Product) {
    if(product.quantity == 0) {
      return;
    }
    product.quantity--;
  }
}
