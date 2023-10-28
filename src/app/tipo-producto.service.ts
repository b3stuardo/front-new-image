import { Injectable } from '@angular/core';
import { TipoProducto } from './tipo-producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  private baseURL = 'http://4.157.65.162/api/tipoproducto/index';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeTiposProductos(): Observable<TipoProducto[]>{
    return this.httpClient.get<TipoProducto[]>(this.baseURL);
  }

  grabarNuevoTipoProducto(tipoProducto: TipoProducto): Observable<Object>{
    return this.httpClient.post(this.baseURL, tipoProducto);
  }
}
