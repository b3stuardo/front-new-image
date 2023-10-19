import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario } from './horario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private baseURL = 'http://localhost/api-NewImage/public/api/horario';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeHorarios(): Observable<Horario[]>{
    return this.httpClient.get<Horario[]>(`${this.baseURL}/index`);
  }

  grabarNuevoHorario(horario: Horario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, horario);
  }
}
