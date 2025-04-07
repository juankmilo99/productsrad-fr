import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarCollapsed: boolean = false; // Recibe el estado del sidebar
  @Output() toggleSidebar = new EventEmitter<void>();
  userName: string = 'Usuario'; // Valor por defecto

  ngOnInit() {
    this.loadUserName();
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
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
