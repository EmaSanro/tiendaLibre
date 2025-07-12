import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { products } from '../products';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cart : ProductCartService) {}

  product !: Product | undefined;
  imagenActual !: string | undefined;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products.find(product => {return product.title === params.get('productId')})
    })
    this.imagenActual = this.product?.image[0];
  }

  changeImage(image: string) {
    this.imagenActual = image;

    let images = document.querySelectorAll('.images img');
    images.forEach((image) => {
      
      image.classList.remove('active');
      
      if(this.imagenActual === image.getAttribute('src')) {
        image.classList.toggle('active');
      }
    })
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }
  
}
