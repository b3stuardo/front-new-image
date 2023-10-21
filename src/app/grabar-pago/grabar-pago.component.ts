import { Component } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grabar-pago',
  templateUrl: './grabar-pago.component.html',
  styleUrls: ['./grabar-pago.component.css']
})
export class GrabarPagoComponent {
  pago: Pago = new Pago();
  pagos: Pago[];

  constructor(private pagoServicio: PagoService, private router: Router){}

  ngOnInit(){
    this.pagoServicio.obtenerListaDePagos().subscribe((response) => {
      this.pagos = response;
    });
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
