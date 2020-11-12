import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GaleriaService } from "src/app/services/galeria.service";
import { IGaleriaDetalle } from "src/app/models/galeria_detalle";

@Component({
  selector: 'app-admin-detalle-galeria',
  templateUrl: './admin-detalle-galeria.component.html',
  styleUrls: ['./admin-detalle-galeria.component.css']
})
export class AdminDetalleGaleriaComponent implements OnInit {

  id_imggaleria:number

  imagenes_galeria:IGaleriaDetalle[] = [];

  constructor(private activateRoute:ActivatedRoute, private galeriaServ:GaleriaService) { 

  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      params =>{
        this.id_imggaleria = params.id_imggaleria;
      }
    );

      this.listarImagenGaleria(this.id_imggaleria);

  }

  listarImagenGaleria(id_imggaleria:number)
  {
    this.galeriaServ.getImageGaleria(id_imggaleria).subscribe(
      resultado =>{
        this.imagenes_galeria = resultado;
      },
      error => console.log(error)
    )
  }



}
