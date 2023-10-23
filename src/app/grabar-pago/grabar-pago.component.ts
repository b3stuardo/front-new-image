import { Component } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';
import { Router } from '@angular/router';
import { Producto } from '../producto';

@Component({
  selector: 'app-grabar-pago',
  templateUrl: './grabar-pago.component.html',
  styleUrls: ['./grabar-pago.component.css']
})
export class GrabarPagoComponent {
  pago: Pago = new Pago();
  pagos: Pago[];

  productosDelCarrito: Producto[];
  total: number = 0;

  constructor(private pagoServicio: PagoService, private router: Router){}

  ngOnInit(){
    this.pagoServicio.obtenerListaDePagos().subscribe((response) => {
      this.pagos = response;
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
      console.log(dato);
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
      this.irAListaDeProductos();
    });
  }

  irAListaDeProductos(){
    this.router.navigate(['/facturas']);
  }

  onSubmit(){
    this.guardarCliente();
  }

}
