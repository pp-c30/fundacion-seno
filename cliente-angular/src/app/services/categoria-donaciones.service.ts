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
    return this.http.get<ICatDon[]>('http://localhost:3000/categoria_donaciones')
  }

}
