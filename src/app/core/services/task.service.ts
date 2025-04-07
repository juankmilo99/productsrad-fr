import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://productsrad-bc.onrender.com/api/productos';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(producto: any) {
    return this.http.post(this.apiUrl, producto);
  }

  update(id: number, producto: any) {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
