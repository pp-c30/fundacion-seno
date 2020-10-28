import { Component, OnInit } from '@angular/core';
import { ILocalidad } from "src/app/models/localidad";
import { IProvincia } from "src/app/models/provincia";
import { LocalidadService } from "../../services/localidad.service";
import { ProvinciaService } from "../../services/provincia.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { $ } from 'protractor';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {
  listLocalidad:ILocalidad[] = [];
  listProvincia:IProvincia[] = [];

  formLocalidad:FormGroup;

  buscarLocalidad:any;

  p:number = 1;

  constructor(private localidadServ:LocalidadService, private fb: FormBuilder, private provinciaServ:ProvinciaService) 
  {
    this.formLocalidad = this.fb.group({

      id_localidad:[''],
      nombre:['',[Validators.required, Validators.minLength(4)]],
      provincia:['',[Validators.required]],
      codigo_postal:['',[Validators.required, Validators.minLength(4)]]

    })
   }

  ngOnInit(): void {
    this.obtenerLocalidad();
    this.obtenerProvincias();
  }

  obtenerLocalidad()
  {
    this.localidadServ.getLocalidad().subscribe(
      resultado => this.listLocalidad = resultado,
      error => console.log(error)
      
    )
  }

  guardarLocalidad()
  {
    
    if(this.formLocalidad.value.id_localidad)
    {
      //se actualiza
      this.localidadServ.updateLocalidad(this.formLocalidad.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerLocalidad();
        this.formLocalidad.reset();
      },
        error => console.log(error)
      )

    }else{
      this.localidadServ.saveLocalidad(this.formLocalidad.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerLocalidad();
          this.formLocalidad.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarLocalidad(localidad:ILocalidad)
  { 
    this.formLocalidad.setValue(localidad)
  }

  eliminarLocalidad(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta localidad?')){
      
    this.localidadServ.deleteLocalidad(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerLocalidad();
        alert(respuesta);
        
      },
      error => alert("No se puede eliminar una localidad que este en uso")
      );
    }
 
  }
  obtenerProvincias()
  {
    this.provinciaServ.getProvincia().subscribe(
      respuesta =>{
        this.listProvincia = respuesta;
      }
    )
  }

}
