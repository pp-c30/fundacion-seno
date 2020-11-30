import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEvento } from "../models/evento";
import { IEventoDetalle } from "../models/eventoDetalle";
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http:HttpClient) { 

  }

  updateEvento(evento:IEvento)
  {
    let id_evento = evento.id_evento;
    return this.http.put('http://localhost:3000/eventos/'+id_evento,evento);
  }

  saveEvento(unEvento:IEvento,files:FileList){
    const fd = new FormData();

    fd.append('titulo',unEvento.titulo);
    fd.append('descripcion',unEvento.descripcion);
    fd.append('fecha_hora',unEvento.fecha_hora);
    fd.append('organizadora',unEvento.organizadora);
    fd.append('responsable',unEvento.responsable);
    fd.append('categoria',unEvento.categoria);
    fd.append('precio',unEvento.precio);
    fd.append('estado_home',unEvento.estado_home);

    for (let index = 0; index < files.length; index++) {
      fd.append('img_evento',files[index]);
    }

    return this.http.post('http://localhost:3000/eventos',fd)
  }

  getEvento()
  {
    return this.http.get<IEvento[]>('http://localhost:3000/eventos');
  }

  getImageEvento(id_evento:number)
  {
    return this.http.get<IEventoDetalle[]>('http://localhost:3000/eventos-imagenes/'+id_evento);
  }

  addImageEvento(id_evento:number,files:FileList)
  {
    const fd = new FormData();

    for (let index = 0; index < files.length; index++) {
      fd.append('img_evento',files[index]);
    }
    return this.http.put('http://localhost:3000/agregar-imagenes-evento/'+id_evento,fd);
  }
  
  deleteImageEvento(id_img_evento:number, public_id:string)
  {
    return this.http.delete('http://localhost:3000/detalles-imagen-evento/'+id_img_evento+'/'+public_id);
  }

  deleteEvento(id_evento:number)
  {
    return this.http.delete('http://localhost:3000/eventos/'+id_evento);
  }

  //metodo  encargado de editar un registro y poner la portada en estado 0(cero)
  assingPortada(id_img_evento:number,id_evento:number)
  {
    return this.http.get('http://localhost:3000/evento-portada/'+id_img_evento+'/'+id_evento);
  }
}
