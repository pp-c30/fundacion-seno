import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IQuienes } from "../models/quienes";
@Injectable({
  providedIn: 'root'
})
export class QuienesService {

  constructor(private http:HttpClient) { }

  getQuienes()
  {
    return this.http.get<IQuienes[]>('http://localhost:3000/quienes');
  }

  saveQuienes(quienes:IQuienes)
  {
    return this.http.post('http://localhost:3000/quienes',quienes);
  }

  updateQuienes(quienes:IQuienes)
  {
    let id:number = quienes.id_qs;
    return this.http.put('http://localhost:3000/quienes/'+id,quienes);
  }

  deleteQuienes(id:number)
  {
    return this.http.delete('http://localhost:3000/quienes/'+id);
  }
}
