import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from './../../../core/services/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  producto: any = {
    nombre: '',
    precio: 0,
    descripcion: '',
    stock: 0,
  };
  isEditMode = false;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TaskService: TaskService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.isEditMode = !!this.id;
    if (this.isEditMode) {
      this.TaskService.getById(this.id).subscribe((data) => {
        this.producto = data;
      });
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      this.toastr.warning('Por favor completa todos los campos correctamente');
      return;
    }

    if (this.isEditMode) {
      this.TaskService.update(this.id, this.producto).subscribe({
        next: () => {
          this.toastr.success('Producto actualizado');
          this.router.navigate(['/dashboard/productos']);
        },
        error: () => {
          this.toastr.error('Error al actualizar producto');
        },
      });
    } else {
      this.TaskService.create(this.producto).subscribe({
        next: () => {
          this.toastr.success('Producto creado');
          this.router.navigate(['/dashboard/productos']);
        },
        error: () => {
          this.toastr.error('Error al crear producto');
        },
      });
    }
  }
}
