import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 149.99 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 199.99 }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(product => product.id === id);
    return of(product);
  }
}