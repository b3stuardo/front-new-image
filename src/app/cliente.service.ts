import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost/api-NewImage/public/api/cliente';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}/index`);
  }

  grabarNuevoCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, cliente);
  }
}
