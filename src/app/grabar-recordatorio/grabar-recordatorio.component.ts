import { Component } from '@angular/core';
import { RecordatorioService } from '../recordatorio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recordatorio } from '../recordatorio';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-grabar-recordatorio',
  templateUrl: './grabar-recordatorio.component.html',
  styleUrls: ['./grabar-recordatorio.component.css']
})
export class GrabarRecordatorioComponent {
  
  recordatorio: Recordatorio = new Recordatorio();

  constructor(private recordatorioServicio: RecordatorioService, private citaServicio: CitaService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void{
    const idCita = +this.route.snapshot.paramMap.get('id')!;
    this.recordatorio.idCita = idCita;
  }

  guardarProducto(){
    this.recordatorioServicio.grabarNuevoRecordatorio(this.recordatorio).subscribe((dato) => {
      console.log(dato);
      this.irAListaDeProductos();
      
    }, error => {
      console.log(error);
    });
  }


  irAListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarProducto();
  }
}
