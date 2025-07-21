import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

const URL = 'https://687d6c2a918b64224331c7e8.mockapi.io/api/v1/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http : HttpClient) {  }


  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  getProductById(id: string) : Observable<Product> {
    return this.http.get<Product>(`${URL}/${id}`);
  }
}
