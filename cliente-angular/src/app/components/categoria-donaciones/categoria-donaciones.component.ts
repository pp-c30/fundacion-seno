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

  constructor(private categoServ:CategoriaDonacionesService, private fb: FormBuilder) 
  { 

    this.formCatego = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_categoria_donaciones:['']
    })

  } 

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria()
  {
    this.categoServ.getCategoriaDon().subscribe(
      resultado => this.listCatDon = resultado,
      error => console.log(error)
      
    )
  }
  guardarCategoria()
  {
    
    if(this.formCatego.value.id_categoria_donaciones)
    {
      //se actualiza
      this.categoServ.updateCategoriaDon(this.formCatego.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerCategoria();
        this.formCatego.reset();
      },
        error => console.log(error)
      )

    }else{
      this.categoServ.saveCategoriaDon(this.formCatego.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerCategoria();
          this.formCatego.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarCategoria(categoria:ICatDon)
  { 
    this.formCatego.setValue(categoria)
  }

  eliminarCategoria(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta categoria?')){
      
    this.categoServ.deleteCategoriaD(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerCategoria();
        alert(respuesta);
        
      },
      error => alert("No se puede eliminar una categoria que este en uso")
      );
    }
 
  }
}