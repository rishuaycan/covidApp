import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../interfaces/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) {
    console.log('Servicio Iniciado');

   }


   getPaciente(objFiltro: string): Observable<Paciente[]> {
    const url = `${environment.base_url}/pacientes`;

    return this.http.post<Paciente[]>(`${environment.base_url}/pacientes`,objFiltro);
   }


}
