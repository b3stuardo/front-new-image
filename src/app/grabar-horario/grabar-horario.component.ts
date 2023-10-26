import { Component } from '@angular/core';
import { Horario } from '../horario';
import { HorarioService } from '../horario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grabar-horario',
  templateUrl: './grabar-horario.component.html',
  styleUrls: ['./grabar-horario.component.css']
})
export class GrabarHorarioComponent {

  horario: Horario = new Horario();

  constructor(private horarioServicio: HorarioService, private router: Router){}

  ngOnInit(){

  }

  guardarDirecicon(){
    console.log('Grabando direccion...', this.horario);
    
    this.horarioServicio.grabarNuevoHorario(this.horario).subscribe((dato) => {
      console.log(dato);
      window.alert('Horario grabado correctamente');
      this.irAListaDeProductos();
    }, error => {
      window.alert('Horario grabado correctamente');
      this.irAListaDeProductos();
      console.log(error);
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/horarios']);
  }

  onSubmit(){
    this.guardarDirecicon();
  }
}
