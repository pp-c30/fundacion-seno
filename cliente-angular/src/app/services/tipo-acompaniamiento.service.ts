import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAcomp } from "../models/tipo_acompaniamiento";
@Injectable({
  providedIn: 'root'
})
export class TipoAcompaniamientoService {

  constructor(private http:HttpClient) {
    
   }
   getAcomp()
  {
    return this.http.get<IAcomp[]>('http://localhost:3000/acompaniamiento');
  }

  saveAcomp(unAcomp:IAcomp)
  {
    return this.http.post('http://localhost:3000/acompaniamiento',unAcomp);
    
  }

  updateAcomp(unAcomp:IAcomp)
  {
    let id:number = unAcomp.id_acomp;
    return this.http.put('http://localhost:3000/acompaniamiento/'+id,unAcomp);
  }

  deleteAcomp(id:number)
  {
    return this.http.delete('http://localhost:3000/acompaniamiento/'+id);
  }
}
