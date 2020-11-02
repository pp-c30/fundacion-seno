import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoE } from "../models/categoria-evento";
import { IconOptions } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class CategoriaEventoService {

  constructor(private http:HttpClient) { }

  getCategoria()
  {
    return this.http.get<ICategoE[]>('http://localhost:3000/categoria_eventos');
  }

  saveCategoria(unaCatego:ICategoE)
  {
    return this.http.post('http://localhost:3000/categoria_eventos',unaCatego);
    
  }

  updateCategoria(unaCatego:ICategoE)
  {
    let id:number = unaCatego.id_categoria_eventos;
    return this.http.put('http://localhost:3000/categoria_eventos/'+id,unaCatego);
  }

  deleteCategoria(id:number)
  {
    return this.http.delete('http://localhost:3000/categoria_eventos/'+id);
  }

}

