import { Component, Input, OnInit } from '@angular/core';

import { ProductsDataService } from '../products-data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  
  @Input() category !: string;
  
  products !: Product[];

  constructor(private data : ProductsDataService) {

  }

  ngOnInit(): void {
    this.data.getProducts().subscribe((products) => {
      this.products = products;
    })
  }


}
