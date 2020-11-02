import { Component, OnInit } from '@angular/core';
import { ICategoE } from "../../models/categoria-evento";
import { CategoriaEventoService } from "../../services/categoria-evento.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { $ } from "protractor";

@Component({
  selector: 'app-categoria-evento',
  templateUrl: './categoria-evento.component.html',
  styleUrls: ['./categoria-evento.component.css']
})
export class CategoriaEventoComponent implements OnInit {
  listCategoE:ICategoE[] = [];

  formCategoE:FormGroup;

  buscarCategoE:any;

  p:number = 1;

  constructor(private categoServ:CategoriaEventoService, private fb: FormBuilder) 
  {
    this.formCategoE = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_categoria_eventos:['']
    })

  } 

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria()
  {
    this.categoServ.getCategoria().subscribe(
      resultado => this.listCategoE = resultado,
      error => console.log(error)
      
    )
  }
  guardarCategoria()
  {
    
    if(this.formCategoE.value.id_categoria_eventos)
    {
      //se actualiza
      this.categoServ.updateCategoria(this.formCategoE.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerCategoria();
        this.formCategoE.reset();
      },
        error => console.log(error)
      )

    }else{
      this.categoServ.saveCategoria(this.formCategoE.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerCategoria();
          this.formCategoE.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarCategoria(categoria:ICategoE)
  { 
    this.formCategoE.setValue(categoria)
  }

  eliminarCategoria(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta categoria?')){
      
    this.categoServ.deleteCategoria(id).subscribe(
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

   

  
 
