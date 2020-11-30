import { Component, OnInit } from '@angular/core';
import { EventoService } from "../../services/evento.service";
import { IEvento } from "src/app/models/evento";
import { Router,NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  lista_eventos:IEvento[] = [];
  anio = new Date().getFullYear();

  constructor(private eventoServ:EventoService, private router:Router)
  {
 
  }

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos()
  {
    this.eventoServ.getEvento().subscribe(
      resultado => {
        this.lista_eventos = resultado;
      }
    )
  }


  verMas(evento:IEvento)
  {
    let datosExtras :NavigationExtras = {
      queryParams:evento
    };
    this.router.navigate(['evento-detalle'],datosExtras);
  }
}
