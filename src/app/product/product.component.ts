import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
// import { products } from '../products';
import { ProductCartService } from '../product-cart.service';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cart : ProductCartService, private productData : ProductsDataService) {}

  product !: Product;
  imagenActual !: string;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     this.productData.getProductById(params.get('productId') || '').subscribe(product => {
      this.product = product;
      this.imagenActual = this.product.images.image1;
      });
    })
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
