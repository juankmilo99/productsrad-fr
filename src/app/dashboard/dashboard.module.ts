import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    ProductFormComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(), // <--- Importante
    ToastrModule.forRoot(),



  ]
})
export class DashboardModule { }
