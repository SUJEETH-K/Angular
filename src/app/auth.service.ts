import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';
  private apiUrl = 'https://fakestoreapi.com/products';
  private isAuthenticatedFlag = false;
  private userEmail: string | null = null;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user).pipe(
      tap((res: any) => {
        this.isAuthenticatedFlag = true;
        this.userEmail = user.email;
        localStorage.setItem('token', res.token);
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.isAuthenticatedFlag);
  }

  getUserEmail(): string {
    return this.userEmail!;
  }

  logout() {
    this.isAuthenticatedFlag = false;
    this.userEmail = null;
    localStorage.removeItem('token');
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}


const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = true;
    if (value) {
      resolve('First');
    }
    else {
      reject('First');
    }
  }, 1000);
});

first.then((value) => {
  console.log(value);
})
.catch((error) => {
    console.log(error);
})
  .finally(() => {
    console.log('finsihed');
})