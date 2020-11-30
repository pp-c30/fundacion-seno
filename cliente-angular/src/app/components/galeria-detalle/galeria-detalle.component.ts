import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GaleriaService } from "../../services/galeria.service";

@Component({
  selector: 'app-galeria-detalle',
  templateUrl: './galeria-detalle.component.html',
  styleUrls: ['./galeria-detalle.component.css']
})
export class GaleriaDetalleComponent implements OnInit {
  id_galeria:number;
  descripcion:string;
  lista_imagenes:any = [];

  constructor(private activeRoute:ActivatedRoute,private galeriaServ:GaleriaService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        this.id_galeria = params.id_galeria;
        this.descripcion = params.descripcion;
      }
    );

    this.obtenerImagenesGaleria();
  }
  obtenerImagenesGaleria()
  {
    this.galeriaServ.getImageGaleria(this.id_galeria).subscribe(
      resultado => {
        this.lista_imagenes = resultado;
      },
      error => console.log(error)
    )
  }

}
