import { Component } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
import { CitaService } from '../cita.service';
import { Cita } from '../cita';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-grabar-servicio',
  templateUrl: './grabar-servicio.component.html',
  styleUrls: ['./grabar-servicio.component.css']
})
export class GrabarServicioComponent {
  
  servicio: Servicio = new Servicio();
  servicios: Servicio[];
  citas: Cita[];
  productos: Producto[];
  ofertas: Oferta[];

  constructor(private servicioServicio: ServicioService, private citaServicio: CitaService, private productoServicio: ProductoService, private ofertaServicio: OfertaService, private router: Router){}

  ngOnInit(){
    this.servicioServicio.obtenerListaDeServicios().subscribe((response) => {
      this.servicios = response;
    });

    this.citaServicio.obtenerListaDeCitas().subscribe((response) => {
      this.citas = response;
    });

    this.productoServicio.obtenerListaDeProductos().subscribe((response) => {
      this.productos = response;
    });

    this.ofertaServicio.obtenerListaDeOfertas().subscribe((response) => {
      this.ofertas = response;
    });
  }

  guardarCita(){
    console.log('Grabando...', this.servicio);
    this.servicioServicio.grabarNuevoServicio(this.servicio).subscribe((dato) => {
      console.log(dato);
      window.alert('Servico grabado correctamente');
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
      window.alert('Servicio grabado correctamente');
      this.irAListaDeProductos();
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/servicios']);
  }

  onSubmit(){
    this.guardarCita();
  }
}
