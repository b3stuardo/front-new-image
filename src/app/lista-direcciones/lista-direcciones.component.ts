import { Component } from '@angular/core';
import { Direccion } from '../direccion';
import { DireccionService } from '../direccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-direcciones',
  templateUrl: './lista-direcciones.component.html',
  styleUrls: ['./lista-direcciones.component.css']
})
export class ListaDireccionesComponent {

  direcciones: Direccion[];

  constructor(private direccionServicio: DireccionService, private router: Router){}

  ngOnInit(){
    this.direccionServicio.obtenerListaDeDirecciones().subscribe((dato) => {
      this.direcciones = dato;
    });
  }
  
}
