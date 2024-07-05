import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://127.0.0.1:8000/api/productss'; 
  private apiCatUrl = 'http://127.0.0.1:8000/api/categories'; 

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => response['hydra:member'] as Article[]),
      catchError((error: any) => {
        console.error('Erreur lors de la récupération de la liste des articles', error);
        return throwError(error);
      })
    );
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error(`Erreur lors de la récupération de l article avec l'ID ${id}`, error);
        return throwError(error);
      })
    );
  }

  createArticle(article: Article): Observable<Article> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/ld+json' // utilise 'application/ld+json' au lieu de 'application/json'
    });

    return this.http.post<Article>(this.apiUrl, article, { headers })
      .pipe(
        catchError(this.handleError) 
      );
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.apiUrl}/${article.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/ld+json'
    });

    return this.http.put<Article>(url, article, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteArticle(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Y a une erreur chef :', error);
    return throwError('Essaye plus tard !');
  }
}