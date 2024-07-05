import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api/productss';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => response['hydra:member'] as Product[]),
      catchError((error: any) => {
        console.error('Erreur lors de la récupération de la liste des produits', error);
        return throwError(error);
      })
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error(`Erreur lors de la récupération du produit avec l'ID ${id}`, error);
        return throwError(error);
      })
    );
  }
}
