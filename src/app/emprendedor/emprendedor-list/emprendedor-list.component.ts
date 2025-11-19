import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';


@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  // Lista de emprendedores quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedores: Emprendedor[] = [];
  
  emprendedorSeleccionado: Emprendedor | null = null;
  seleccionado = false;
  
  getEmprendedores(): void {
    this.emprendedorService.getEmprendedores().subscribe({
      next: (emprendedores) => {
        this.emprendedores = emprendedores;
        console.log('Emprendedores cargados:', this.emprendedores);
      },
      error: (error) => {
        console.error('Error cargando emprendedores:', error);
      }
    });
  }

  constructor(private emprendedorService: EmprendedorService) { }
  
  ngOnInit() {
    this.getEmprendedores();
  }
}
