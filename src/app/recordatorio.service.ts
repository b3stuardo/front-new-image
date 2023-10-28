import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recordatorio } from './recordatorio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {

  private baseURL = 'http://4.157.65.162/api/recordatorio';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeRecordatorio(): Observable<Recordatorio[]>{
    return this.httpClient.get<Recordatorio[]>(`${this.baseURL}/index`);
  }

  grabarNuevoRecordatorio(recordatorio: Recordatorio): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/store`, recordatorio);
  }
  
}
