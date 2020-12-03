import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ILocalidad } from "../models/localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private http:HttpClient) { 

  }
  getLocalidades(id_provincia:number)
  {
    return this.http.get<ILocalidad[]>('http://localhost:3000/localidades/'+id_provincia);
  }

  getLocalidad()
  {
    return this.http.get<ILocalidad[]>('http://localhost:3000/localidad');
  }
  saveLocalidad(unaLocalidad:ILocalidad)
  {
    return this.http.post('http://localhost:3000/localidad',unaLocalidad);
  }

  updateLocalidad(unaLocalidad:ILocalidad)
  {
    let id:number = unaLocalidad.id_localidad;
    return this.http.put('http://localhost:3000/localidad/'+id,unaLocalidad);
  }

  deleteLocalidad(id:number)
  {
    return this.http.delete('http://localhost:3000/localidad/'+id);
  }
}
