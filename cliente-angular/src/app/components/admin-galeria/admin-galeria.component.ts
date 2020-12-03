import { Component, OnInit } from '@angular/core';
import { ILocalidad } from "src/app/models/localidad";
import { IGaleria } from "src/app/models/galeria";
import { ICategoria } from "src/app/models/categoria_galeria";
import { LocalidadService } from "../../services/localidad.service";
import { GaleriaService } from "../../services/galeria.service";
import { CategoriaGaleriaService } from "../../services/categoria-galeria.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IHtmlInputEvent } from "src/app/models/inputElement";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { $ } from 'protractor';
import { ProvinciaService } from "../../services/provincia.service";
import { IProvincia } from "../../models/provincia";
import { AngularEditorConfig } from '@kolkov/angular-editor';
 

@Component({
  selector: 'app-admin-galeria',
  templateUrl: './admin-galeria.component.html',
  styleUrls: ['./admin-galeria.component.css']
})
export class AdminGaleriaComponent implements OnInit {

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

  listLocalidad:ILocalidad[] = [];

  listCategoG:ICategoria[] = [];

  listGaleria:IGaleria[] = [];

  listProvincia:IProvincia[] = [];

  formGaleria:FormGroup;

  archivos:FileList;

  buscarGaleria:any;

  p:number = 1 ;

  imagenes_url = [];

  ocultar_boton_file:any = 'display:block';

  constructor(private router:Router, private galeriaServ:GaleriaService, private spinner: NgxSpinnerService, private fb: FormBuilder, private localidadServ:LocalidadService, private categoriaServ:CategoriaGaleriaService, private provinciaServ:ProvinciaService) { 

      this.formGaleria = this.fb.group({
        id_galeria:[null],
        descripcion:['',[Validators.required, Validators.minLength(4)]],
        fecha:['',[Validators.required]],
        localidad:['',[Validators.required]],
        provincia:['',[Validators.required]],
        categoria:['',[Validators.required]],
        tipo:['',[Validators.required]],
        estado_home:['',[Validators.required]],
        archivos:['']
      })
  }

  ngOnInit(): void {
    this.obtenerGaleria();
    this.obtenerCategoria();
    this.obtenerProvincias();
  }
  
  obtenerGaleria()
  {
    this.galeriaServ.getGaleria().subscribe(
      resultado => this.listGaleria = resultado,
      error => console.log(error)
    )
  }

  obtenerLocalidades(provincia:number)
  {
    this.localidadServ.getLocalidades(provincia).subscribe(
      respuesta =>{
        this.listLocalidad = respuesta;
      }
    )
  }

  obtenerCategoria()
  {
    this.categoriaServ.getCategoria().subscribe(
      respuesta =>{
        this.listCategoG = respuesta;
      }
    )
  }

  obtenerProvincias()
  {
    this.provinciaServ.getProvincia().subscribe(
      resultado => {
        this.listProvincia = resultado;
      },
      error => console.log(error)
    )
  }

  guardarGaleria()
  {
    if (this.formGaleria.value.id_galeria)
    {
      this.spinner.show();
      this.galeriaServ.updateGaleria(this.formGaleria.value).subscribe(
        resultado =>{
            console.log(resultado);
            
            this.formGaleria.reset();
            this.obtenerGaleria();
            this.spinner.hide();
        },
        error => console.log(error)
      )

    }else{
    this.spinner.show();
    this.galeriaServ.saveGaleria(this.formGaleria.value,this.archivos).subscribe(
      resultado =>{
        console.log(resultado);
        this.imagenes_url =[];
        
        this.formGaleria.reset();
        this.obtenerGaleria();
        this.spinner.hide();
      },
      error => console.log(error)
    );
    } 
  } 

  editarGaleria(galeria:IGaleria)
  { 
    this.ocultar_boton_file = 'display:none';
    this.formGaleria.setValue({
      id_galeria:galeria.id_galeria,
      descripcion:galeria.descripcion,
      fecha:galeria.fecha,
      provincia:0,
      localidad:galeria.localidad,
      categoria:galeria.categoria,
      tipo:galeria.tipo,
      estado_home:galeria.estado_home,
      archivos:''
    });
  }

  vaciarForm()
  {
    this.ocultar_boton_file = 'display:block';
    this.formGaleria.setValue({
      id_galeria:null,
      descripcion:'',
      fecha:'',
      provincia:0,
      localidad:0,
      categoria:'',
      tipo:'',
      estado_home:'',
      archivos:''
    });
  }

  eliminarGaleria(id_galeria:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta Galeria?')){
      
      this.galeriaServ.deleteGaleria(id_galeria).subscribe(
        resultado =>{
          console.log(resultado)
          this.obtenerGaleria();
        }
      );
    }
  }

  mostrarImagenSeleccionada(galeria:IHtmlInputEvent)
  {
    this.imagenes_url = [];

    this.archivos = galeria.target.files; 

    if(this.archivos)
    {
      for (let index = 0; index < this.archivos.length; index++) {
        
        const reader = new FileReader();

        //se hace lectura de los archivos
        reader.readAsDataURL(this.archivos[index])

        reader.onload = () => {
            this.imagenes_url.push(reader.result)
        }
      }
    }
  }

  //metodo de mostrar detalles
  detalleGaleria(id_galeria:number)
  {
    this.router.navigate(['/admin-detalle-galeria',id_galeria])
  } 
}
