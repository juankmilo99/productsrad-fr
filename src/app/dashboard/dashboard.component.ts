import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarCollapsed = false;
  isLargeScreen = false;

  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 1024;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}
