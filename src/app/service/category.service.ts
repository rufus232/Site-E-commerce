import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Category } from '../interface/category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => response['hydra:member'] as Category[]),
      catchError((error: any) => {
        console.error('Erreur lors de la récupération de la liste des produits', error);
        return throwError(error);
      })
    );
  }
  

  
  async getCategoriesAsync() {
    try {
      const req = await fetch(this.apiUrl);
      if (req.ok) {
        const data = await req.json();
        console.log("Réponse", data);
        return data;
      }
      return false;
    } catch (err) {
      console.error(err);
      throw new Error('Error getting categories from API');
    }
  }

  createCategories(category: Category): Observable<Category> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/ld+json' // Utilisation de 'application/ld+json' au lieu de 'application/json'
    });

    return this.http.post<Category>(this.apiUrl, category, { headers })
      .pipe(
        catchError(this.handleError) // Gestion des erreurs avec la méthode handleError
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Y a une erreur chef :', error);
    return throwError('Essaye plus tard !');
  }

  updateCategories(category: Category): Observable<Category> {
    const url = `${this.apiUrl}/${category.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/ld+json'
    });

    return this.http.put<Category>(url, category, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteCategories(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}