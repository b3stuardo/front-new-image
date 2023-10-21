import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago } from './pago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  
  private baseURL = 'http://localhost/api-NewImage/public/api/pago';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDePagos(): Observable<Pago[]>{
    return this.httpClient.get<Pago[]>(`${this.baseURL}/index`);
  }

  grabarNuevoPago(direccion: Pago): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, direccion);
  }
}
