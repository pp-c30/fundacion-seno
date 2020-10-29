import { Component, OnInit } from '@angular/core';
import { ICategoria } from "src/app/models/categoria_galeria";
import { CategoriaGaleriaService } from "../../services/categoria-galeria.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { $ } from 'protractor';
@Component({
  selector: 'app-categoria-galeria',
  templateUrl: './categoria-galeria.component.html',
  styleUrls: ['./categoria-galeria.component.css']
})
export class CategoriaGaleriaComponent implements OnInit {
  listCategorias:ICategoria[] = [];

  formCategoria: FormGroup;

  buscarCategoria:any;

  p:number = 1;

  constructor(private categoriaServ:CategoriaGaleriaService, private fb: FormBuilder) 
  {
    this.formCategoria = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_categoria:['']
    })
   }

  ngOnInit(): void {
    this.obtenerCategoria();
  }
  
  obtenerCategoria()
  {
    this.categoriaServ.getCategoria().subscribe(
      resultado => this.listCategorias = resultado,
      error => console.log(error)
      
    )
  }
  guardarCategoria()
  {
    
    if(this.formCategoria.value.id_categoria)
    {
      //se actualiza
      this.categoriaServ.updateCategoria(this.formCategoria.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerCategoria();
        this.formCategoria.reset();
      },
        error => console.log(error)
      )

    }else{
      this.categoriaServ.saveCategoria(this.formCategoria.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerCategoria();
          this.formCategoria.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarCategoria(categoria:ICategoria)
  { 
    this.formCategoria.setValue(categoria)
  }

  eliminarCategoria(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta categoria?')){
      
    this.categoriaServ.deleteCategoria(id).subscribe(
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
