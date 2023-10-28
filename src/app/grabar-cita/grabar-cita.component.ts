import { Component } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';
import { HorarioService } from '../horario.service';
import { Router } from '@angular/router';
import { Horario } from '../horario';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { EmpleadoDTO } from '../empleado-dto';

@Component({
  selector: 'app-grabar-cita',
  templateUrl: './grabar-cita.component.html',
  styleUrls: ['./grabar-cita.component.css']
})
export class GrabarCitaComponent {

  cita: Cita = new Cita();
  horarios: Horario[];
  clientes: Cliente[];
  empleados: EmpleadoDTO[];

  constructor(private citaServicio: CitaService, private horarioService: HorarioService, private clientesServicio: ClienteService, private empleadoServicio: EmpleadoService,private router: Router){}

  ngOnInit(){
    this.cita.idEstado = 1;
    this.horarioService.obtenerListaDeHorarios().subscribe((response) => {
      this.horarios = response;
    });

    this.clientesServicio.obtenerListaDeClientes().subscribe((response) => {
      this.clientes = response;
    });

    this.empleadoServicio.obtenerListaDeEmpelados().subscribe((response) => {
      this.empleados = response;
    });
  }

  guardarCita(){
    console.log('Grabando...', this.cita);
    this.citaServicio.grabarNuevaCita(this.cita).subscribe((dato) => {
      console.log(dato);
      window.alert("Cita guardada correctamente");
      this.irAListaDeProductos();
    }, error => {
      console.log(error);
      window.alert("Cita guardada correctamente");
      this.irAListaDeProductos();
    });
  }

  irAListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarCita();
  }
}
