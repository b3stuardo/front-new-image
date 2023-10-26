import { Component } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Router } from '@angular/router';
import { Oferta } from '../oferta';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-grabar-oferta',
  templateUrl: './grabar-oferta.component.html',
  styleUrls: ['./grabar-oferta.component.css']
})
export class GrabarOfertaComponent {
  oferta: Oferta = new Oferta();
  ofertas: Oferta[]; 

  constructor(private ofertaServicio: OfertaService, private router: Router, private toast: NgToastService){}

  ngOnInit(){
    this.ofertaServicio.obtenerListaDeOfertas().subscribe((response) => {
      this.ofertas = response;
    });
  }

  guardarProducto(){
    this.ofertaServicio.grabarNuevaOferta(this.oferta).subscribe((dato) => {
      console.log(dato);
      window.alert('Oferta grabada correctamente');
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
      window.alert('OFerta grabada correctamente');
      this.irAListaDeProductos();
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/ofertas']);
  }

  onSubmit(){
    this.guardarProducto();
  }

}
