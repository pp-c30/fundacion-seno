import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoE } from "../models/categoria-evento";

@Injectable({
  providedIn: 'root'
})
export class CategoriaEventoService {

  constructor(private http:HttpClient) { }

  getCategoE()
  {
    return this.http.get<ICategoE[]>('http://localhost:3000/categoria_eventos');
  }

  deleteCategoE(id:number)
  {
    return this.http.delete('http://localhost:3000/categoria_eventos'+id);
  }

  saveCategoE(unaCategoE:ICategoE)
  {
    return this.http.post('http://localhost:3000/categoria_eventos',unaCategoE);
  }

  updateCategoE(unaCategoE:ICategoE)
  {
    let id:number = unaCategoE.id_categoria_eventos;
    return this.http.put('http://localhost:3000/categoria_evento'+id,unaCategoE);
  }
}
