import { Component, OnInit } from '@angular/core';
import { IDonaciones } from "src/app/models/donaciones";

import { DonacionesService } from "../../services/donaciones.service";
@Component({
  selector: 'app-donaciones-detalle',
  templateUrl: './donaciones-detalle.component.html',
  styleUrls: ['./donaciones-detalle.component.css']
})
export class DonacionesDetalleComponent implements OnInit {
  listDonaciones:IDonaciones[] = [];
  constructor(private donacionServ:DonacionesService,) { }

  ngOnInit(): void {
    this.obtenerDonacion();

  }
  obtenerDonacion()
  {
    this.donacionServ.getDonacion().subscribe(
      resultado => this.listDonaciones = resultado,
      error => console.log(error)
    )
  }
}
