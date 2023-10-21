import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { DireccionService } from '../direccion.service';
import { Router } from '@angular/router';
import { Direccion } from '../direccion';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-grabar-cliente',
  templateUrl: './grabar-cliente.component.html',
  styleUrls: ['./grabar-cliente.component.css']
})
export class GrabarClienteComponent {

  cliente: Cliente = new Cliente();
  usuario: Usuario = new Usuario();
  usuarios: Usuario[];
  direcciones: Direccion[];

  constructor(private clienteServicio: ClienteService, private usuarioServicio: UsuarioService, private direccionService: DireccionService,private router: Router){}

  ngOnInit(){
    this.direccionService.obtenerListaDeDirecciones().subscribe((response) => {
      this.direcciones = response;
    });

    this.usuarioServicio.obtenerListaDeUsuarios().subscribe((response) => {
      this.usuarios = response;
    })
  }

  guardarCliente(){
    console.log('Grabando cliente...', this.cliente);
    
    this.cliente.usuario = this.usuario;
    this.cliente.idUsuario = this.usuario.idUsuario;

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
