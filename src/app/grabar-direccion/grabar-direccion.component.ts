import { Component } from '@angular/core';
import { Direccion } from '../direccion';
import { DireccionService } from '../direccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grabar-direccion',
  templateUrl: './grabar-direccion.component.html',
  styleUrls: ['./grabar-direccion.component.css']
})
export class GrabarDireccionComponent {

  direccion: Direccion = new Direccion();

  constructor(private direccionServicio: DireccionService, private router: Router){}

  ngOnInit(){

  }

  guardarDirecicon(){
    console.log('Grabando direccion...', this.direccion);
    
    this.direccionServicio.grabarNuevaDireccion(this.direccion).subscribe((dato) => {
      console.log(dato);
      window.alert('Direccion grabado correctamente');
      this.irAListaDeProductos();
    }, error => {
      window.alert('Direccion grabado correctamente');
      this.irAListaDeProductos();
      console.log(error);
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/direcciones']);
  }

  onSubmit(){
    this.guardarDirecicon();
  }
}
