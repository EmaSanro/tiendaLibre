import { Component, Input, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  products = products;

  @Input() category !: string;

}
