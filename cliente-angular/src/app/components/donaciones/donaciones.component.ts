import { Component, OnInit } from '@angular/core';
import { IDonaciones } from "src/app/models/donaciones";
import { ICatDon } from "src/app/models/categoria_donaciones";
import { DonacionesService } from "../../services/donaciones.service";
import { CategoriaDonacionesService } from "../../services/categoria-donaciones.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { $ } from "protractor";

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Ingrese una descripcion',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['italic'],
      
    ]
};

  listDonaciones:IDonaciones[] = [];


  listCatDon:ICatDon[] = [];

  formDonacion:FormGroup;

  buscarDonacion:any;

  p:number = 1;

  constructor(private donacionServ:DonacionesService, private fb:FormBuilder, private categodServ:CategoriaDonacionesService) 
  { 
    this.formDonacion = this.fb.group({

      id_donaciones:[''],
      titulo:['',[Validators.required, Validators.minLength(4)]],
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      categoria:['',[Validators.required]],
      contacto:['',[Validators.required, Validators.minLength(4)]],
      estado:['',[Validators.required]]

    })
  }

  ngOnInit(): void {
    this.obtenerDonacion();
    this.obtenerCategoD();
  }

  obtenerDonacion()
  {
    this.donacionServ.getDonacion().subscribe(
      resultado => this.listDonaciones = resultado,
      error => console.log(error)
    )
  }

  guardarDonacion()
  {
    if(this.formDonacion.value.id_donaciones)
    {
      this.donacionServ.updateDonacion(this.formDonacion.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerDonacion();
        this.formDonacion.reset();
      },
        error => console.log(error)
      )

    }else{
      this.donacionServ.saveDonacion(this.formDonacion.value).subscribe(
        resultado =>{
          console.log(resultado);
          this.obtenerDonacion();
          this.formDonacion.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarDonacion(donaciones:IDonaciones)
  {
      this.formDonacion.setValue(donaciones)
  }

  eliminarDonacion(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta donacion?')){
      
    this.donacionServ.deleteDonacion(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerDonacion();
        alert(respuesta);
        
      },
      error => alert("No se puede eliminar una donacion que esta en uso")
      );
    }
 
  }

  obtenerCategoD()
  {
    this.categodServ.getCategoriaDon().subscribe(
      respuesta =>{
        this.listCatDon = respuesta;
      }
    )
  }
}
