import { Component } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ServicioService } from '../servicio.service';
import { Servicio } from '../servicio';

@Component({
  selector: 'app-grabar-pago',
  templateUrl: './grabar-pago.component.html',
  styleUrls: ['./grabar-pago.component.css']
})
export class GrabarPagoComponent {
  pago: Pago = new Pago();
  pagos: Pago[];

  servicios: Servicio[];

  productosDelCarrito: Producto[];
  total: number = 0;

  constructor(private pagoServicio: PagoService, private servicioServicio: ServicioService, private router: Router){}

  ngOnInit(){
    this.pagoServicio.obtenerListaDePagos().subscribe((response) => {
      this.pagos = response;
    });

    this.servicioServicio.obtenerListaDeServicios().subscribe((response) => {
      this.servicios = response;
    });

    let carritoStorage = localStorage.getItem('carrito') as string;
    this.productosDelCarrito = JSON.parse(carritoStorage);

    for (let prod of this.productosDelCarrito){
      var subTotal = prod.cantidad * prod.precio;
      this.total += subTotal;
      console.log('sub',this.total, subTotal, prod.cantidad, prod.precio)
    }

    this.pago.montoTotal = this.total;

    console.log('Totales...',this.productosDelCarrito, this.total, this.pago);
  }

  guardarCliente(){
    console.log('Grabando pago...', this.pago);
    this.pagoServicio.grabarNuevoPago(this.pago).subscribe((dato) => {
      localStorage.setItem('pago', JSON.stringify(this.pago));
      console.log('Pago grabado');
      this.irAListaDeProductos();
    }, error => {
      localStorage.setItem('pago', JSON.stringify(this.pago));
      console.log('Pago grabado');
      this.irAListaDeProductos();
    });
  }

  irAListaDeProductos(){
    this.router.navigate(['/grabar-factura']);
  }

  onSubmit(){
    this.guardarCliente();
  }

}
