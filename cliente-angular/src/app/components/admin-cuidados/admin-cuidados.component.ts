import { Component, OnInit } from '@angular/core';
import { ICuidados } from "src/app/models/cuidados";
import { CuidadosService } from "../../services/cuidados.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IHtmlInputEvent } from "src/app/models/imputElement";
import { $ } from 'protractor';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { IconOptions } from '@angular/material/icon';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin-cuidados',
  templateUrl: './admin-cuidados.component.html',
  styleUrls: ['./admin-cuidados.component.css']
})
export class AdminCuidadosComponent implements OnInit {
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
  listCuidados: ICuidados[] = [];

  imagenes_url = [];

  formCuidados:FormGroup;

  archivos:FileList;

  buscarCuidados:any;

  p:number = 1 ;

  ocultar_boton_file:any = 'display:block';

  constructor(private router:Router, private spinner:NgxSpinnerService,private cuidadosServ:CuidadosService, private fb: FormBuilder) 
  {
    this.formCuidados = this.fb.group({
      id_cuidados:[null],
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      titulo:['',[Validators.required, Validators.minLength(4)]],
      archivos:['']
    })
   }

  ngOnInit(): void {
    this.obtenerCuidados();
  }

  obtenerCuidados()
  {
    this.cuidadosServ.getCuidados().subscribe(
      resultado => this.listCuidados = resultado,
      error => console.log(error)
      
    )
  }

  guardarCuidados()
  {
    if(this.formCuidados.value.id_cuidados)
    {
      this.spinner.show();
      this.cuidadosServ.updateCuidados(this.formCuidados.value).subscribe(
        resultado =>{
          console.log(resultado);
          this.obtenerCuidados();
          this.formCuidados.reset();
          this.spinner.hide();
        },
        error => console.log(error)
      )

    }else{
    this.spinner.show();
    this.cuidadosServ.saveCuidados(this.formCuidados.value,this.archivos).subscribe(
      resultado =>{
        console.log(resultado);
        this.imagenes_url =[];
        this.obtenerCuidados();
        this.formCuidados.reset();
        this.spinner.hide();
      },
      error => console.log(error)
    );
    }  
  }

  editarCuidados(cuidados:ICuidados)
  { 
    this.ocultar_boton_file = 'display:none';
    this.formCuidados.setValue({
      id_cuidados:cuidados.id_cuidados,
      descripcion:cuidados.descripcion,
      titulo:cuidados.titulo,
      archivos:''
    });
  }

  vaciarForm()
  {
    this.ocultar_boton_file = 'display:block';
    this.formCuidados.setValue({
      id_cuidados:null,
      descripcion:'',
      titulo:'',
      archivos:''
    });
  }


  eliminarCuidados(id_cuidados:number)
  {
    if(confirm('Estas seguro que quieres eliminar este cuidado?'))
    {
      this.cuidadosServ.deleteCuidados(id_cuidados).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerCuidados();
        }
      );
    } 
  }

  mostrarImagenSeleccionada(cuidados:IHtmlInputEvent)
  {
    this.imagenes_url = [];
    this.archivos = cuidados.target.files;
    if(this.archivos)
    {
      for (let index = 0; index < this.archivos.length; index++) {
        
        const  reader = new FileReader();

        //se hace lectura de los archivos
        reader.readAsDataURL(this.archivos[index]);

        reader.onload = () => {
          this.imagenes_url.push(reader.result);
        }

      }
    }
  }

  detalleCuidados( id_cuidados:number)
  {
    this.router.navigate(['/admin-detalle-cuidados',id_cuidados]);
  }
}
