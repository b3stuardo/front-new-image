import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { Direccion } from '../direccion';
import { EmpleadoService } from '../empleado.service';
import { DireccionService } from '../direccion.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-grabar-empleado',
  templateUrl: './grabar-empleado.component.html',
  styleUrls: ['./grabar-empleado.component.css']
})
export class GrabarEmpleadoComponent {
  empleado: Empleado = new Empleado();
  usuario: Usuario = new Usuario();
  usuarios: Usuario[];
  direcciones: Direccion[];

  constructor(private empleadoServicio: EmpleadoService, private usuarioServicio: UsuarioService,private direccionService: DireccionService,private router: Router){}

  ngOnInit(){
    this.direccionService.obtenerListaDeDirecciones().subscribe((response) => {
      this.direcciones = response;
    });

    this.usuarioServicio.obtenerListaDeUsuarios().subscribe((response) => {
      this.usuarios = response;
      console.log('usuarios... ', this.usuarios)
    })
  }

  guardarCliente(){
    console.log('Grabando...', this.empleado);
    this.empleado.usuario = this.usuario;
    this.empleado.idUsuario = this.usuario.idUsuario;
    this.empleadoServicio.grabarNuevoEmpleado(this.empleado).subscribe((dato) => {
      console.log(dato);
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
    });
  }
  
  irAListaDeProductos(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.guardarCliente();
  }
}

