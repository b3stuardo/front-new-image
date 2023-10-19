import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private baseURL = 'http://localhost/api-NewImage/public/api/cita';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeCitas(): Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(`${this.baseURL}/index`);
  }

  grabarNuevaCita(cita: Cita): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, cita);
  }
  
}
