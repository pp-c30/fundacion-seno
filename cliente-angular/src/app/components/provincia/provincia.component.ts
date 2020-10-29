import { Component, OnInit } from '@angular/core';
import { IProvincia } from 'src/app/models/provincia';
import { ProvinciaService } from "../../services/provincia.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { $ } from 'protractor';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {
  listProvincias:IProvincia[] = [];

  formProvincia: FormGroup;

  buscarProvincia:any;

  p:number = 1;

  constructor(private provinciaServ:ProvinciaService, private fb: FormBuilder) 
  { 

    this.formProvincia = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_provincia:['']
    })

  } 

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
  guardarProvincia()
  {
    
    if(this.formProvincia.value.id_provincia)
    {
      //se actualiza
      this.provinciaServ.updateProvincia(this.formProvincia.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerProvincia();
        this.formProvincia.reset();
      },
        error => console.log(error)
      )

    }else{
      this.provinciaServ.saveProvincia(this.formProvincia.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerProvincia();
          this.formProvincia.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarProvincia(provincia:IProvincia)
  { 
    this.formProvincia.setValue(provincia)
  }

  eliminarProvincia(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta provincia?')){
      
    this.provinciaServ.deleteProvincia(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerProvincia();
        alert(respuesta);
        
      },
      error => alert("No se puede eliminar una provincia que este en uso")
      );
    }
 
  }
}
