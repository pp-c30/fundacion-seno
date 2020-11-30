import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from "@angular/router";
import { GaleriaService } from "../../services/galeria.service";
import { IGaleria } from "src/app/models/galeria";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  lista_galeria:IGaleria[] = [];
  anio = new Date().getFullYear();

  constructor(private galeriaServ:GaleriaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerGaleria();
  }
  obtenerGaleria()
  {
    this.galeriaServ.getGaleria().subscribe(
      resultado => {
        this.lista_galeria = resultado;
      }
    )
  }


  verMas(galeria:IGaleria)
  {
    let datosExtras :NavigationExtras = {
      queryParams:galeria
    };
    this.router.navigate(['galeria-detalle'],datosExtras);
  }

}
