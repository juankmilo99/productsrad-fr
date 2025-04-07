import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [

      {path: 'home', component: HomeComponent },
      { path: 'productos', component: ProductListComponent },
      { path: 'productos/create', component: ProductFormComponent },
      { path: 'productos/edit/:id', component: ProductFormComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
