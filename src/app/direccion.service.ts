import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Direccion } from './direccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private baseURL = 'http://localhost/api-NewImage/public/api/direccion';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeDirecciones(): Observable<Direccion[]>{
    return this.httpClient.get<Direccion[]>(`${this.baseURL}/index`);
  }

  grabarNuevaDireccion(direccion: Direccion): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, direccion);
  }
}
