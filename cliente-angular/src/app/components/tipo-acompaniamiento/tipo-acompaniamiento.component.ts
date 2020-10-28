import { Component, OnInit } from '@angular/core';
import { IAcomp } from "src/app/models/tipo_acompaniamiento";
import { TipoAcompaniamientoService } from "../../services/tipo-acompaniamiento.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { $ } from 'protractor';

@Component({
  selector: 'app-tipo-acompaniamiento',
  templateUrl: './tipo-acompaniamiento.component.html',
  styleUrls: ['./tipo-acompaniamiento.component.css']
})
export class TipoAcompaniamientoComponent implements OnInit {
  listAcomp:IAcomp[] = [];

  formAcomp: FormGroup;

  buscarAcomp:any;

  p:number = 1;

  constructor(private acompServ:TipoAcompaniamientoService, private fb: FormBuilder) 
  {
    this.formAcomp = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_acomp:['']
    })
   }

  ngOnInit(): void {
    this.obtenerAcomp();
  }

  obtenerAcomp()
  {
    this.acompServ.getAcomp().subscribe(
      resultado => this.listAcomp = resultado,
      error => console.log(error)
      
    )
  }
  guardarAcomp()
  {
    
    if(this.formAcomp.value.id_acomp)
    {
      //se actualiza
      this.acompServ.updateAcomp(this.formAcomp.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerAcomp();
        this.formAcomp.reset();
      },
        error => console.log(error)
      )

    }else{
      this.acompServ.saveAcomp(this.formAcomp.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerAcomp();
          this.formAcomp.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarAcomp(acompaniamiento:IAcomp)
  { 
    this.formAcomp.setValue(acompaniamiento)
  }

  eliminarAcomp(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar este tipo de acompañamiento?')){
      
    this.acompServ.deleteAcomp(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerAcomp();
        alert(respuesta);
        
      },
      error => alert("No se puede eliminar un tipo de acompañamiento que este en uso")
      );
    }
 
  }
}
