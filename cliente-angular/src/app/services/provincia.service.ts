import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProvincia } from "../models/provincia";

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { 

  }
  getProvincia()
  {
    return this.http.get<IProvincia[]>('http://localhost:3000/provincia');
  }

  saveProvincia(unaProvincia:IProvincia)
  {
    return this.http.post('http://localhost:3000/provincia',unaProvincia);
    
  }

  updateProvincia(unaProvincia:IProvincia)
  {
    let id:number = unaProvincia.id_provincia;
    return this.http.put('http://localhost:3000/provincia/'+id,unaProvincia);
  }

  deleteProvincia(id:number)
  {
    return this.http.delete('http://localhost:3000/provincia/'+id);
  }

}
