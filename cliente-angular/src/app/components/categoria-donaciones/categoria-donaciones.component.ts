import { Component, OnInit } from '@angular/core';
import { ICatDon } from "src/app/models/categoria_donaciones";
import { CategoriaDonacionesService } from "../../services/categoria-donaciones.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { $ } from 'protractor';


@Component({
  selector: 'app-categoria-donaciones',
  templateUrl: './categoria-donaciones.component.html',
  styleUrls: ['./categoria-donaciones.component.css']
})
export class CategoriaDonacionesComponent implements OnInit {

  listCatDon:ICatDon[] = [];

  formCatego: FormGroup;

  buscarCatego:any;

  p:number = 1;

  constructor(private catdonServ:CategoriaDonacionesService, private fb: FormBuilder) 
  {
    this.formCatego = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_categoria_donaciones:['']
    })
   }

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
