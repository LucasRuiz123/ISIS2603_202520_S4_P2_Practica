import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {
  
  // Lista de emprendedores detallados quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedor: Emprendedor | null =null;
  constructor( private route:ActivatedRoute, private emprendedorService: EmprendedorService) {}
  getEmprendedorDetail(id: number): void {
    
    this.emprendedorService.getEmprendedorDetail(id).subscribe({
      next: (emprendedor) => {
        this.emprendedor = emprendedor;
        console.log('Detalle de este emprendedor:', this.emprendedor);
      },
      error: (error) => {
        console.error('Error cargando emprendedor:', error);
      }
    });
  }

  

  // Cuando el componente recibe un nuevo emprendedor, busca su detalle en la lista quemada
  // notese que esto es solo un placeholder hasta que implementen el servicio y el API
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
    this.getEmprendedorDetail(+id);
    }
  }

}
