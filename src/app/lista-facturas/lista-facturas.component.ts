import { Component } from '@angular/core';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent {

  facturas: Factura[];

  constructor(private facturaServicio: FacturaService, private router: Router){}

  ngOnInit(){
    this.facturaServicio.obtenerListaDeFacturas().subscribe((response) => {
      this.facturas = response;
    });
  }



  irAListaDeProductos(){
    this.router.navigate(['/productos']);
  }


}
