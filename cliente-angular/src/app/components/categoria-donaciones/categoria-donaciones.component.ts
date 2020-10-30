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
    this.obtenerCatDon();
  }

  obtenerCatDon()
  {
    this.catdonServ.getCategoriaDon().subscribe(
      resultado => this.listCatDon = resultado,
      error => console.log(error)
    )
  }

  eliminarCatDon(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta categoria?')){
      
      this.catdonServ.deleteCategoriaD(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCatDon();
          alert(respuesta);
          
        },
        error => alert("No se puede eliminar una categoria que este en uso")
        );
      }
  }

  guardarCatDon()
  {
    if(this.formCatego.value.id_categoria_donaciones)
    {
      this.catdonServ.updateCategoriaDon(this.formCatego.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerCatDon();
        this.formCatego.reset();
      },
        error => console.log(error)
      )

    }else{
      this.catdonServ.saveCategoriaDon(this.formCatego.value).subscribe(
        resultado =>{
          console.log(resultado);
          this.obtenerCatDon();
          this.formCatego.reset();
        },
        error => console.log(error)
      );
    }
  }

  editarCatDon(categoD:ICatDon)
  {
    this.formCatego.setValue(categoD);
  }

}
