import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './oferta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private baseURL = 'http://4.157.65.162/api/oferta';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeOfertas(): Observable<Oferta[]>{
    return this.httpClient.get<Oferta[]>(`${this.baseURL}/index`);
  }

  grabarNuevaOferta(oferta: Oferta): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, oferta);
  }
}
