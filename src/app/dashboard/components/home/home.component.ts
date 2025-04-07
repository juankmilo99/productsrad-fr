import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = 'Usuario'; // Valor por defecto

  ngOnInit() {
    this.loadUserName();
  }

  private loadUserName() {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica el payload del token
        this.userName = payload.name || 'Usuario'; // Asigna el nombre del usuario
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    }
  }
}
