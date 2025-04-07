import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from './../../../core/services/task.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  productos: any[] = [];
  productoSeleccionado: any;
  modalRef?: BsModalRef;

  constructor(
    private TaskService: TaskService,
    private router: Router,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.TaskService.getAll().subscribe((data) => {
      this.productos = data;
    });
  }

  editarProducto(id: number) {
    this.router.navigate(['/dashboard/productos/edit', id]);
  }

  abrirModal(template: TemplateRef<any>, producto: any) {
    this.productoSeleccionado = producto;
    this.modalRef = this.modalService.show(template);
  }

  cerrarModal() {
    this.modalRef?.hide();
  }

  confirmarEliminar() {
    if (this.productoSeleccionado?.id) {
      this.TaskService.delete(this.productoSeleccionado.id).subscribe({
        next: () => {
          this.toastr.success('Producto eliminado');
          this.cerrarModal();
          this.cargarProductos(); // Refresca la lista
        },
        error: () => {
          this.toastr.error('Error al eliminar producto');
        },
      });
    }
  }
}
