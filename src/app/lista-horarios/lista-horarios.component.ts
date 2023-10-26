import { Component } from '@angular/core';
import { HorarioService } from '../horario.service';
import { Router } from '@angular/router';
import { Horario } from '../horario';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.component.html',
  styleUrls: ['./lista-horarios.component.css']
})
export class ListaHorariosComponent {
  horarios: Horario[];

  constructor(private horarioServicio: HorarioService, private router: Router){}

  ngOnInit(){
    this.horarioServicio.obtenerListaDeHorarios().subscribe((dato) => {
      this.horarios = dato;
    });
  }
  
}
