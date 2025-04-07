// auth/components/register/register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      username: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    if (this.registerForm.invalid) return;

    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.loading = false;
        localStorage.setItem('token', res.token); // guardamos el token que devuelve el backend
        this.router.navigate(['/dashboard']); // redirigir al dashboard
      },
      error: () => {
        this.loading = false;
        this.error = 'No se pudo registrar. Intenta de nuevo.';
      }
    });
  }
}
