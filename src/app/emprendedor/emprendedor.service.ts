import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendedor } from "./emprendedor";
@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<Emprendedor[]>(this.apiUrl+"/emprendedores.json");
  }

  getEmprendedorDetail(id: number): Observable<Emprendedor> {
  return this.http.get<Emprendedor>(`${this.apiUrl}/${id}/emprendedor.json`);
  }
}
