import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private baseURL = 'http://localhost/api-NewImage/public/api/producto';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeProductos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}/index`);
  }

  grabarNuevoProducto(producto: Producto): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, producto);
  }
}
