import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = 'http://localhost/api-NewImage/public/api/usuario';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/index`);
  }

  grabarNuevoUsuario(direccion: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, direccion);
  }
}
