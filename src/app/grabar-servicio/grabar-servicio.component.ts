import { Component } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grabar-servicio',
  templateUrl: './grabar-servicio.component.html',
  styleUrls: ['./grabar-servicio.component.css']
})
export class GrabarServicioComponent {

  
  servicio: Servicio = new Servicio();
  servicios: Servicio[];

  constructor(private servicioServicio: ServicioService, private router: Router){}

  ngOnInit(){
    this.servicioServicio.obtenerListaDeServicios().subscribe((response) => {
      this.servicios = response;
    });
  }

  guardarCita(){
    console.log('Grabando...', this.servicio);
    this.servicioServicio.grabarNuevoServicio(this.servicio).subscribe((dato) => {
      console.log(dato);
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarCita();
  }
}
