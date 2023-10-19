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
      this.showSuccess();

    }, error => {
      console.log(error);
      this.showError();
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarProducto();
  }

  showSuccess() {
    console.log('toast...')
    this.toast.success({detail:"SUCCESS",summary:'Grabado correctamente',duration:5000});
  }
  
  showError() {
    this.toast.error({detail:"ERROR",summary:'Error al intentar grabar',sticky:true, duration: 5000});
  }

}
