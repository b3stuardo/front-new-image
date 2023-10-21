import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoDTO } from './empleado-dto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseURL = 'http://localhost/api-NewImage/public/api/empleado';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeEmpelados(): Observable<EmpleadoDTO[]>{
    return this.httpClient.get<EmpleadoDTO[]>(`${this.baseURL}/index`);
  }

  grabarNuevoEmpleado(empleado: Empleado): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}/store`, empleado);
  }
}
