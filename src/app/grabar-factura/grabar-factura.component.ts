import { Component } from '@angular/core';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { Pago } from '../pago';

@Component({
  selector: 'app-grabar-factura',
  templateUrl: './grabar-factura.component.html',
  styleUrls: ['./grabar-factura.component.css']
})
export class GrabarFacturaComponent {

  factura: Factura = new Factura();
  facturas: Factura[];
  productosDelCarrito: Producto[];
  pago: Pago;

  constructor(private facturaServicio: FacturaService, private router: Router){}

  ngOnInit(){
    this.facturaServicio.obtenerListaDeFacturas().subscribe((response) => {
      this.facturas = response;

      let carritoStorage = localStorage.getItem('carrito') as string;
      this.productosDelCarrito = JSON.parse(carritoStorage);
  
      let pagoStorage = localStorage.getItem('pago') as string;
      this.pago = JSON.parse(pagoStorage);
      this.factura.idPago = this.pago.idPago;
      this.factura.totalCobrar = this.pago.montoTotal;
    });

  }

  guardarCliente(){
    console.log('Grabando factura...', this.factura);
    this.facturaServicio.grabarNuevaFactura(this.factura).subscribe((dato) => {
      console.log(dato);
      localStorage.removeItem('carrito');
      localStorage.removeItem('pago');
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
      localStorage.removeItem('carrito');
      localStorage.removeItem('pago');
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
