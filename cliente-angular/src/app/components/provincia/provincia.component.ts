import { Component, OnInit } from '@angular/core';
import { IProvincia } from 'src/app/models/provincia';

import { ProvinciaService } from "../../services/provincia.service";

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {
  listProvincias:IProvincia[] = [];

  constructor(private provinciaServ:ProvinciaService) { }

  ngOnInit(): void {
    this.obtenerProvincia();
  }

  obtenerProvincia()
  {
    this.provinciaServ.getProvincia().subscribe(
      resultado => this.listProvincias = resultado,
      error => console.log(error)
      
    )
  }

}
