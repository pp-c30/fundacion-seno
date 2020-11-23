import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { formatDate } from '@angular/common';
import { ICuidados } from "../models/cuidados";
import { ICuidadosDetalle } from "../models/cuidadosDetalle";

@Injectable({
  providedIn: 'root'
})
export class CuidadosService {

  constructor(private http:HttpClient) { }

  updateCuidados(cuidados:ICuidados)
  {
    let id_cuidados = cuidados.id_cuidados;
    return this.http.put('http://localhost:3000/cuidados/'+id_cuidados,cuidados);
  }

  saveCuidados(unCuidados:ICuidados,files:FileList){
    const fd = new FormData();

    fd.append('titulo',unCuidados.titulo);
    fd.append('descripcion',unCuidados.descripcion);

    for (let index = 0; index < files.length; index++) {
      fd.append('img_cuidados',files[index]);
    }

    return this.http.post('http://localhost:3000/cuidados',fd)
  }

  getCuidados()
  {
    return this.http.get<ICuidados[]>('http://localhost:3000/cuidados');
  }

  getImageCuidados(id_cuidados:number)
  {
    return this.http.get<ICuidadosDetalle[]>('http://localhost:3000/cuidados-imagenes/'+id_cuidados);
  }

  addImageCuidados(id_cuidados:number,files:FileList)
  {
    const fd = new FormData();

    for (let index = 0; index < files.length; index++) {
      fd.append('img_cuidados',files[index]);
    }
    return this.http.put('http://localhost:3000/agregar-imagenes-cuidados/'+id_cuidados,fd);
  }
  
  deleteImageCuidados(id_img_cuidados:number, public_id:string)
  {
    return this.http.delete('http://localhost:3000/detalles-imagen-cuidados/'+id_img_cuidados+'/'+public_id)
  }

  deleteCuidados(id_cuidados:number)
  {
    return this.http.delete('http://localhost:3000/cuidados/'+id_cuidados);
  }

  //metodo  encargado de editar un registro y poner la portada en estado 0(cero)
  assingPortada(id_img_cuidados:number,id_cuidados:number)
  {
    return this.http.get('http://localhost:3000/cuidados-portada/'+id_img_cuidados+'/'+id_cuidados);
  }
}


