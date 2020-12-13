import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/models/evento';
import { EventoService } from "../../services/evento.service";
import { ActivatedRoute } from "@angular/router";
import { Router,NavigationExtras } from "@angular/router";
import { GaleriaService } from "../../services/galeria.service";
import { IGaleria } from "src/app/models/galeria";
import { IAcomp } from "src/app/models/tipo_acompaniamiento";
import { TipoAcompaniamientoService } from "../../services/tipo-acompaniamiento.service";
import { CuidadosService } from "../../services/cuidados.service";
import { ICuidados } from "src/app/models/cuidados";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id_evento:number;
  titulo:string;
  descripcion:string;
  lista_imagenes:any = [];
  lista_eventos:IEvento[] = [];
  lista_galeria:IGaleria[] = [];
  listAcomp:IAcomp[] = [];
  lista_cuidados:ICuidados[] = [];

  constructor(private cuidadosServ:CuidadosService, private acompServ:TipoAcompaniamientoService, private activeRoute:ActivatedRoute,private eventoServ:EventoService, private router:Router, private galeriaServ:GaleriaService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        this.id_evento = params.id_evento;
        this.titulo = params.titulo;
        this.descripcion = params.descripcion;
      }
    );
    this.obtenerEventos();
    this.obtenerImagenesEvento();
    this.obtenerGaleria();
    this.obtenerAcomp();
    this.obtenerCuidados();
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
  obtenerEventos()
  {
    this.eventoServ.getEvento().subscribe(
      resultado => {
        this.lista_eventos = resultado;
      }
    )
  }
  verMasEventos(evento:IEvento)
  {
    let datosExtras :NavigationExtras = {
      queryParams:evento
    };
    this.router.navigate(['evento-detalle'],datosExtras);
  }

  obtenerGaleria()
  {
    this.galeriaServ.getGaleria().subscribe(
      resultado => {
        this.lista_galeria = resultado;
      }
    )
  }

  obtenerAcomp()
  {
    this.acompServ.getAcomp().subscribe(
      resultado => this.listAcomp = resultado,
      error => console.log(error)
      
    )
  }


  obtenerCuidados()
  {
    this.cuidadosServ.getCuidados().subscribe(
      resultado => {
        this.lista_cuidados = resultado;
      }
    )
  }

  verMasCuidados(cuidados:ICuidados)
  {
    let datosExtras :NavigationExtras = {
      queryParams:cuidados
    };
    this.router.navigate(['cuidados-detalle'],datosExtras);
  }

  verMasGalerias(galeria:IGaleria)
  {
    let datosExtras :NavigationExtras = {
      queryParams:galeria
    };
    this.router.navigate(['galeria'],datosExtras);
  }
  verMasDescripcion(tipo:IAcomp)
  {
    let datosExtras :NavigationExtras = {
      queryParams:tipo
    };
    this.router.navigate(['quienes-somos'],datosExtras);
  }
}
