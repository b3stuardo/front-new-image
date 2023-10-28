import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from './servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseURL = 'http://4.157.65.162/api/servicio';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeServicios(): Observable<Servicio[]>{
    return this.httpClient.get<Servicio[]>(`${this.baseURL}/index`);
  }

  grabarNuevoServicio(direccion: Servicio): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, direccion);
  }
}
