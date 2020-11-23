import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CuidadosService } from "../../services/cuidados.service";


@Component({
  selector: 'app-cuidados-detalle',
  templateUrl: './cuidados-detalle.component.html',
  styleUrls: ['./cuidados-detalle.component.css']
})
export class CuidadosDetalleComponent implements OnInit {
  id_cuidados:number;
  descripcion:string;
  titulo:string;
 
  lista_imagenes:any = [];

  constructor(private activeRoute:ActivatedRoute,private cuidadosServ:CuidadosService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        this.id_cuidados = params.id_cuidados;
        this.titulo = params.titulo;
        this.descripcion = params.descripcion;
      }
    );

    this.obtenerImagenesCuidados();
  }

  obtenerImagenesCuidados()
  {
    this.cuidadosServ.getImageCuidados(this.id_cuidados).subscribe(
      resultado => {
        this.lista_imagenes = resultado;
      },
      error => console.log(error)
    )
  }

}
