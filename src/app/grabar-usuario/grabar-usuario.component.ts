import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { DireccionService } from '../direccion.service';
import { Router } from '@angular/router';
import { Direccion } from '../direccion';

@Component({
  selector: 'app-grabar-usuario',
  templateUrl: './grabar-usuario.component.html',
  styleUrls: ['./grabar-usuario.component.css']
})
export class GrabarUsuarioComponent {
  usuario: Usuario = new Usuario();
  direcciones: Direccion[];

  constructor(private usuarioServicio: UsuarioService, private direccionService: DireccionService,private router: Router){}

  ngOnInit(){
    this.direccionService.obtenerListaDeDirecciones().subscribe((response) => {
      this.direcciones = response;
    });
  }

  guardarCliente(){
    console.log('Grabando...', this.usuario);
    this.usuarioServicio.grabarNuevoUsuario(this.usuario).subscribe((response) => {
      console.log(response);
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
