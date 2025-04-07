import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = 'https://productsrad-bc.onrender.com/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.API}/login`, credentials);
  }
  register(data: {
    nombre: string;
    username: string;
    correo: string;
    password: string;
  }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.API}/register`, {
      ...data,
      fechaCreacion: new Date(),
      activo: true
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
