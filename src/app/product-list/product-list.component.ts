import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit {

  products : Product[] = [];
  categories : string[] = [];

  constructor(private productsdata: ProductsDataService) {  }
  
  
  ngOnInit(): void {
    this.productsdata.getProducts().subscribe(products => {
      this.products = products;
    })
    setTimeout(() => {
      this.getCategories();
    }, 1000);
  }

  getCategories() : void {
    this.products.forEach(product => {
      if(!this.categories.includes(product.category)) {
        this.categories.push(product.category);
      }
    })
  }


}
