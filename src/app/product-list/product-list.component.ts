import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    this.repetidos();
  }

  products = products;

  categories = new Set<string>();

  repetidos() {
    for(let elem of products) {
      if(this.categories.has(elem.category)) {
        continue;
      } else {
        this.categories.add(elem.category);
      }
    }
    return undefined;
  }
    
}
