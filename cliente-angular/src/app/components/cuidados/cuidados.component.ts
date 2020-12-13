import { Component, OnInit } from '@angular/core';
import { CuidadosService } from "../../services/cuidados.service";
import { ICuidados } from "src/app/models/cuidados";
import { Router,NavigationExtras } from "@angular/router";
import { IconOptions } from '@angular/material/icon';



@Component({
  selector: 'app-cuidados',
  templateUrl: './cuidados.component.html',
  styleUrls: ['./cuidados.component.css']
})
export class CuidadosComponent implements OnInit {
  lista_cuidados:ICuidados[] = [];
 

  constructor(private cuidadosServ:CuidadosService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerCuidados();
  }

  obtenerCuidados()
  {
    this.cuidadosServ.getCuidados().subscribe(
      resultado => {
        this.lista_cuidados = resultado;
      }
    )
  }

  verMas(cuidados:ICuidados)
  {
    let datosExtras :NavigationExtras = {
      queryParams:cuidados
    };
    this.router.navigate(['cuidados-detalle'],datosExtras);
  }
}
