import { Component, OnInit } from '@angular/core';
import { IProvincia } from 'src/app/models/provincia';

import { ProvinciaService } from "../../services/provincia.service";
import { FormBuilder, FormGroup, Form } from "@angular/forms";

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {
  listProvincias:IProvincia[] = [];

  formProvincia: FormGroup;

  constructor(private provinciaServ:ProvinciaService, private fb: FormBuilder) 
  { 

    this.formProvincia = this.fb.group({
      
      descripcion:['']
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
    //console.log(this.formProvincia.value);
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
