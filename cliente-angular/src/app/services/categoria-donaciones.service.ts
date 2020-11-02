import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICatDon } from "../models/categoria_donaciones";

@Injectable({
  providedIn: 'root'
})
export class CategoriaDonacionesService {

  constructor(private http:HttpClient) { 

  }
  getCategoriaDon()
  {
    return this.http.get<ICatDon[]>('http://localhost:3000/categoria_donaciones');
  }

  saveCategoriaDon(unaCategoD:ICatDon)
  {
    return this.http.post('http://localhost:3000/categoria_donaciones',unaCategoD);
  }

  updateCategoriaDon(unaCategoD:ICatDon)
  {
    let id:number = unaCategoD.id_categoria_donaciones;
    return this.http.put('http://localhost:3000/categoria_donaciones/'+id,unaCategoD);
  }

  deleteCategoriaD(id:number)
  {
    return this.http.delete('http://localhost:3000/categoria_donaciones/'+id);
  }
}
