import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  clientes: Cliente[];

  constructor(private clienteServicio: ClienteService, private router: Router){}

  ngOnInit(){
    this.clienteServicio.obtenerListaDeClientes().subscribe((dato) => {
      this.clientes = dato;
    });
  }
  
}
