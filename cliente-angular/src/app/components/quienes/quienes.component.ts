import { Component, OnInit } from '@angular/core';
import { IQuienes } from "src/app/models/quienes";
import { QuienesService } from "../../services/quienes.service";
import { IHtmlInputEvent } from "src/app/models/imputElement";
import { $ } from 'protractor';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {
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
  listQuienes: IQuienes[] = [];
  
  buscarQuienes:any;

  formQuienes:FormGroup;

  p:number = 1 ;

  constructor(private spinner:NgxSpinnerService, private quienesServ:QuienesService,private fb: FormBuilder) 
  {
    this.formQuienes = this.fb.group({
      
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      id_qs:[''],
  
    })
   }

  ngOnInit(): void {
    this.obtenerQuienes();
  }

  obtenerQuienes()
  {
    this.quienesServ.getQuienes().subscribe(
      resultado => this.listQuienes = resultado,
      error => console.log(error)
      
    )
  }
  guardarQuienes()
  {
    
    if(this.formQuienes.value.id_qs)
    {
      //se actualiza
      this.quienesServ.updateQuienes(this.formQuienes.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        this.obtenerQuienes();
        this.formQuienes.reset();
      },
        error => console.log(error)
      )

    }else{
      this.quienesServ.saveQuienes(this.formQuienes.value).subscribe(
        resultado =>{
          console.log(resultado);
          //se refresca la grilla
          this.obtenerQuienes();
          this.formQuienes.reset();
        },
        error => console.log(error)
      );
    }  
  }

  editarQuienes(quienes:IQuienes)
  { 
    this.formQuienes.setValue(quienes)
  }

  eliminarQuienes(id:number)
  {
    if(confirm('Estas seguro que quieres eliminar esta descripcion?')){
      
    this.quienesServ.deleteQuienes(id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerQuienes();
        alert(respuesta);
        
      },
      error => alert("No se puede eliminar una descripcion que este en uso")
      );
    }
  }
  
}

