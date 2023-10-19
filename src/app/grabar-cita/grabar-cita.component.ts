import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';
import { HorarioService } from '../horario.service';
import { Router } from '@angular/router';
import { Horario } from '../horario';

@Component({
  selector: 'app-grabar-cita',
  templateUrl: './grabar-cita.component.html',
  styleUrls: ['./grabar-cita.component.css']
})
export class GrabarCitaComponent {

  cita: Cita = new Cita();
  horarios: Horario[];

  constructor(private citaServicio: CitaService, private horarioService: HorarioService,private router: Router){}

  ngOnInit(){
    this.cita.idEstado = 1;
    this.horarioService.obtenerListaDeHorarios().subscribe((response) => {
      this.horarios = response;
    });
  }

  guardarCita(){
    console.log('Grabando...', this.cita);
    this.citaServicio.grabarNuevaCita(this.cita).subscribe((dato) => {
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
    this.guardarCita();
  }
}
