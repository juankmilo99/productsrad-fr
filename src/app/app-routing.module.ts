import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AppComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: AppComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },



  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
