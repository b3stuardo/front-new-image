import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { DireccionService } from '../direccion.service';
import { Router } from '@angular/router';
import { Direccion } from '../direccion';

@Component({
  selector: 'app-grabar-cliente',
  templateUrl: './grabar-cliente.component.html',
  styleUrls: ['./grabar-cliente.component.css']
})
export class GrabarClienteComponent {

  cliente: Cliente = new Cliente();
  direcciones: Direccion[];

  constructor(private clienteServicio: ClienteService, private direccionService: DireccionService,private router: Router){}

  ngOnInit(){
    this.direccionService.obtenerListaDeDirecciones().subscribe((response) => {
      this.direcciones = response;
    });
  }

  guardarCliente(){
    console.log('Grabando...');
    this.clienteServicio.grabarNuevoCliente(this.cliente).subscribe((dato) => {
      console.log(dato);
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.guardarCliente();
  }
}
