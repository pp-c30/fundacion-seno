import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoria } from "../models/categoria_galeria";


@Injectable({
  providedIn: 'root'
})
export class CategoriaGaleriaService {

  constructor(private http:HttpClient) {

   }
   getCategoria()
  {
    return this.http.get<ICategoria[]>('http://localhost:3000/categoria_galeria');
  }

  saveCategoria(unaCategoria:ICategoria)
  {
    return this.http.post('http://localhost:3000/categoria_galeria',unaCategoria);
    
  }

  updateCategoria(unaCategoria:ICategoria)
  {
    let id:number = unaCategoria.id_categoria;
    return this.http.put('http://localhost:3000/categoria_galeria/'+id,unaCategoria);
  }

  deleteCategoria(id:number)
  {
    return this.http.delete('http://localhost:3000/categoria_galeria/'+id);
  }

}


