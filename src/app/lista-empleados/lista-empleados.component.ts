import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { EmpleadoDTO } from '../empleado-dto';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {
  empleados: EmpleadoDTO[];

  constructor(private facturaServicio: EmpleadoService, private router: Router){}

  ngOnInit(){
    this.facturaServicio.obtenerListaDeEmpelados().subscribe((response) => {
      this.empleados = response;
    });
  }



}
