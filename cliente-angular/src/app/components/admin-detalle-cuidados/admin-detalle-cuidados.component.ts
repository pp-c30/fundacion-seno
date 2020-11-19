import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IHtmlInputEvent } from "../../models/imputElement";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder,FormGroup } from "@angular/forms";
import { CuidadosService } from "../../services/cuidados.service";
import { ICuidadosDetalle } from "../../models/cuidadosDetalle";

@Component({
  selector: 'app-admin-detalle-cuidados',
  templateUrl: './admin-detalle-cuidados.component.html',
  styleUrls: ['./admin-detalle-cuidados.component.css']
})
export class AdminDetalleCuidadosComponent implements OnInit {
  id_cuidados:number;

  imagenes_cuidados:ICuidadosDetalle[] = [];

  formDetalleCuidados:FormGroup;

  archivos:FileList;

  imagenes_leidas = [];

  constructor(private spinner:NgxSpinnerService, private fb:FormBuilder, private activatedRoute:ActivatedRoute,private cuidadosServ:CuidadosService) 
  {
    this.formDetalleCuidados = this.fb.group({
      archivo:['']
    });
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id_cuidados = params.id_cuidados
      }
    );

    this.listarImagenesCuidados(this.id_cuidados);
  }

  listarImagenesCuidados(id_cuidados:number)
  {
    this.cuidadosServ.getImageCuidados(id_cuidados).subscribe(
      resultado => {
        this.imagenes_cuidados = resultado;
      },
      error => console.log(error)
    )
  }

  mostrarImagenesSeleccionadas(cuidados:IHtmlInputEvent) 
  {
    this.archivos = cuidados.target.files;
    if(this.archivos)
    {
      for (let index = 0; index < this.archivos.length; index++) {
        const reader = new FileReader();
        reader.readAsDataURL(this.archivos[index]);
        reader.onload = () =>{
          this.imagenes_leidas.push(reader.result);
        }  
      }
    }
  }

  agregarImagenesCuidados()
  {
    this.spinner.show();
     this.cuidadosServ.addImageCuidados(this.id_cuidados,this.archivos).subscribe(
       resultado => {
        this.formDetalleCuidados.reset();
        this.listarImagenesCuidados(this.id_cuidados);
        this.imagenes_leidas = [];
        this.spinner.hide();
       },
       error => console.log(error)
     )
  }

  eliminarImagenCuidados(id_img_cuidados:number, public_id:string)
  {
    this.spinner.show();
    if(confirm('Esta seguro que quiere eliminar esta imagen?')){
      this.cuidadosServ.deleteImageCuidados(id_img_cuidados,public_id).subscribe(
        resultado => {
          console.log('resultado');
          this.listarImagenesCuidados(this.id_cuidados);
          this.spinner.hide();
        }
      );
    }
   
  }

  establecerPortada(id_img_cuidados:number,id_cuidados:number)
  {
    this.cuidadosServ.assingPortada(id_img_cuidados,id_cuidados).subscribe(
      resultado => {
        //refrescamos la grilla
        this.listarImagenesCuidados(this.id_cuidados);
      }
    );

  }

}
