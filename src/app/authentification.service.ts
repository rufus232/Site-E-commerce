import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:8000/api';


  constructor(private http: HttpClient) {}
    register(data:any){
      return this.http.post(`${this.apiUrl}/register`, data);

    }
}
