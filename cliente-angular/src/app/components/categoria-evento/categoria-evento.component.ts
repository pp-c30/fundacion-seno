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

  constructor(private categoeServ:CategoriaEventoService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  obtenerCategoE()
  {
    this.categoeServ.getCategoE().subscribe(
      resultado => this.listCategoE = resultado,
      error => console.log(error)
    )
  }

  guardarCategoE()
  {
    if(this.formCategoE.value.id_categoria_eventos)
    {
      this.categoeServ.updateCategoE(this.formCategoE.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerCategoE();
        this.formCategoE.reset();
      },
        error => console.log(error)
      )

    }else{
      this.categoeServ.saveCategoE(this.formCategoE.value).subscribe(
        resultado =>{
          console.log(resultado);
          this.obtenerCategoE();
          this.formCategoE.reset();
        },
        error => console.log(error)
      );
    }
  }

  eliminarCategoE(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta categoria?')){
      
      this.categoeServ.deleteCategoE(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCategoE();
          alert(respuesta);
          
        },
        error => alert("No se puede eliminar una categoria que este en uso")
        );
      }
  }

  editarCategoE(categoE:ICategoE)
  {
    this.formCategoE.setValue(categoE);
  }
}
