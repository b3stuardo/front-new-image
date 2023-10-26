import { Component } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent {
  servicios: Servicio[];

  constructor(private servicioServicio: ServicioService, private router: Router){}

  ngOnInit(){
    this.servicioServicio.obtenerListaDeServicios().subscribe((dato) => {
      this.servicios = dato;
    });
  }
}
