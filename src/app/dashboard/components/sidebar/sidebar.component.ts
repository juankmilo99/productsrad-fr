import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  closeSidebar() {
    this.close.emit();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
