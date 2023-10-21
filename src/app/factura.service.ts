import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from './factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private baseURL = 'http://localhost/api-NewImage/public/api/factura';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeFacturas(): Observable<Factura[]>{
    return this.httpClient.get<Factura[]>(`${this.baseURL}/index`);
  }

  grabarNuevaFactura(direccion: Factura): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, direccion);
  }

}
