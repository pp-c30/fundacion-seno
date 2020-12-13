import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IEvento } from 'src/app/models/evento';
import { EventoService } from "../../services/evento.service";

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.component.html',
  styleUrls: ['./evento-detalle.component.css']
})
export class EventoDetalleComponent implements OnInit {
 id_evento:number;
 titulo:string;
 fecha_hora:any;
 descripcion:string;
 lista_imagenes:any = [];

  constructor(private activeRoute:ActivatedRoute,private eventoServ:EventoService) 
  { }

  ngOnInit(): void { 

    this.activeRoute.queryParams.subscribe(
      params => {
        this.id_evento = params.id_evento;
        this.titulo = params.titulo;
        this.fecha_hora = params.fecha_hora
        this.descripcion = params.descripcion;
      }
    );

    this.obtenerImagenesEvento();

  }

  obtenerImagenesEvento()
  {
    this.eventoServ.getImageEvento(this.id_evento).subscribe(
      resultado => {
        this.lista_imagenes = resultado;
      },
      error => console.log(error)
    )
  }

}
