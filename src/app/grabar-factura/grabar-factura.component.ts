import { Component } from '@angular/core';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grabar-factura',
  templateUrl: './grabar-factura.component.html',
  styleUrls: ['./grabar-factura.component.css']
})
export class GrabarFacturaComponent {

  factura: Factura = new Factura();
  facturas: Factura[];

  constructor(private facturaServicio: FacturaService, private router: Router){}

  ngOnInit(){
    this.facturaServicio.obtenerListaDeFacturas().subscribe((response) => {
      this.facturas = response;
    });
  }

  guardarCliente(){
    console.log('Grabando factura...', this.factura);
    this.facturaServicio.grabarNuevaFactura(this.factura).subscribe((dato) => {
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
