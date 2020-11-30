import { Component, OnInit } from '@angular/core';
import { IEvento } from "src/app/models/evento";
import { ICategoE } from "src/app/models/categoria-evento";
import { EventoService } from "../../services/evento.service";
import { CategoriaEventoService } from "../../services/categoria-evento.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IHtmlInputEvent } from "src/app/models/imputElement";
import { $ } from 'protractor';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-evento',
  templateUrl: './admin-evento.component.html',
  styleUrls: ['./admin-evento.component.css']
})
export class AdminEventoComponent implements OnInit {
  listEvento: IEvento[] = [];

  listCategoria:ICategoE[] = [];

  imagenes_url = [];

  formEvento:FormGroup;

  archivos:FileList;

  buscarEvento:any;

  p:number = 1 ;

  ocultar_boton_file:any = 'display:block';


  constructor(private router:Router, private spinner:NgxSpinnerService,private eventoServ:EventoService, private fb: FormBuilder, private categoriaServ:CategoriaEventoService) 
  {
    this.formEvento = this.fb.group({
      id_evento:[null],
      titulo:['',[Validators.required, Validators.minLength(4)]],
      categoria:['',[Validators.required]],
      descripcion:['',[Validators.required, Validators.minLength(4)]],
      fecha_hora:['',[Validators.required]],
      organizadora:['',[Validators.required, Validators.minLength(4)]],
      responsable:['',[Validators.required, Validators.minLength(4)]],
      precio:['',[Validators.required]],
      estado_home:['',[Validators.required]],
      archivos:['']
    })
   }

  ngOnInit(): void {
    this.obtenerEvento();
    this.obtenerCategoria();
  }
  
  obtenerEvento()
  {
    this.eventoServ.getEvento().subscribe(
      resultado => this.listEvento = resultado,
      error => console.log(error)
      
    )
  }

  guardarEvento()
  {
    if(this.formEvento.value.id_evento)
    {
      this.spinner.show();
      this.eventoServ.updateEvento(this.formEvento.value).subscribe(
        resultado =>{
          console.log(resultado);
          this.obtenerEvento();
          this.formEvento.reset();
          this.spinner.hide();
        },
        error => console.log(error)
      )

    }else{
    this.spinner.show();
    this.eventoServ.saveEvento(this.formEvento.value,this.archivos).subscribe(
      resultado =>{
        console.log(resultado);
        this.imagenes_url =[];
        this.obtenerEvento();
        this.formEvento.reset();
        this.spinner.hide();
      },
      error => console.log(error)
    );
    }  
  }

  editarEvento(evento:IEvento)
  { 
    this.ocultar_boton_file = 'display:none';
    this.formEvento.setValue({
      id_evento:evento.id_evento,
      titulo:evento.titulo,
      descripcion:evento.descripcion,
      fecha_hora:evento.fecha_hora,
      organizadora:evento.organizadora,
      responsable:evento.responsable,
      categoria:evento.categoria,
      precio:evento.precio,
      estado_home:evento.estado_home,
      archivos:''
    });
  }

  vaciarForm()
  {
    this.ocultar_boton_file = 'display:block';
    this.formEvento.setValue({
      id_evento:null,
      titulo:'',
      descripcion:'',
      fecha_hora:'',
      organizadora:'',
      responsable:'',
      categoria:'',
      precio:'',
      estado_home:'',
      archivos:''
    });
  }

  eliminarEvento(id_evento:number)
  {
    if(confirm('Estas seguro que quieres eliminar este evento?'))
    {
      this.eventoServ.deleteEvento(id_evento).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerEvento();
        }
      );
    } 
  }

  mostrarImagenSeleccionada(evento:IHtmlInputEvent)
  {

    this.imagenes_url = [];

    this.archivos = evento.target.files;
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

  obtenerCategoria()
  {
    this.categoriaServ.getCategoria().subscribe(
      respuesta =>{
        this.listCategoria = respuesta;
      }
    )
  }

  detalleEvento( id_evento:number)
  {
    this.router.navigate(['/admin-detalle-evento',id_evento]);
  }

  
}
