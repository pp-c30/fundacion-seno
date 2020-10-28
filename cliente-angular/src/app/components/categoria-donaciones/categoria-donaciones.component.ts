import { Component, OnInit } from '@angular/core';
import { ICatDon } from "src/app/models/categoria_donaciones";
import { CategoriaDonacionesService } from "../../services/categoria-donaciones.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";



@Component({
  selector: 'app-categoria-donaciones',
  templateUrl: './categoria-donaciones.component.html',
  styleUrls: ['./categoria-donaciones.component.css']
})
export class CategoriaDonacionesComponent implements OnInit {

  listCatDon:ICatDon[] = [];

  constructor(private catdonServ:CategoriaDonacionesService) { }

  ngOnInit(): void {
    this.obetenerCatDon();
  }

  obetenerCatDon()
  {
    this.catdonServ.getCategoriaDon().subscribe(
      resultado => this.listCatDon = resultado,
      error => console.log(error)
    )
  }

}
