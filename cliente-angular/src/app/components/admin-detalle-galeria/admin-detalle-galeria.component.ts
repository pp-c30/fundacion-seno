import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GaleriaService } from "src/app/services/galeria.service";
import { IGaleriaDetalle } from "src/app/models/galeria_detalle";
import { FormBuilder,FormGroup } from "@angular/forms";
import { IHtmlInputEvent } from "../../models/inputElement"
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-admin-detalle-galeria',
  templateUrl: './admin-detalle-galeria.component.html',
  styleUrls: ['./admin-detalle-galeria.component.css']
})
export class AdminDetalleGaleriaComponent implements OnInit {

  id_galeria:number

  imagenes_galeria:IGaleriaDetalle[] = [];

  formDetalleGaleria:FormGroup;

  archivos:FileList;

  imagenes_leidas = [];
  
  constructor(private spinner:NgxSpinnerService ,private fb:FormBuilder, private activateRoute:ActivatedRoute, private galeriaServ:GaleriaService) { 
    this.formDetalleGaleria = this.fb.group({
      archivo:['']
    });
  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      params =>{
        this.id_galeria = params.id_galeria;
      }
    );

      this.listarImagenesGaleria(this.id_galeria);
  }

  listarImagenesGaleria(id_galeria:number)
    {
      this.galeriaServ.getImageGaleria(id_galeria).subscribe(
        resultado =>{
          this.imagenes_galeria = resultado;
        },
        error => console.log(error)
      )
    }

  mostrarImagenesSeleccionadas(galeria:IHtmlInputEvent)
  {
    this.archivos = galeria.target.files;
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

  agregarImagenesGaleria()
  {
    this.spinner.show();
    this.galeriaServ.addImageGaleria(this.id_galeria, this.archivos).subscribe(
      resultado =>{
        this.formDetalleGaleria.reset();
        this.listarImagenesGaleria(this.id_galeria);
        this.imagenes_leidas = [];
        this.spinner.hide();
      },
      error => console.log(error)
    )
  }

  eliminarImagenGaleria(id_img_galeria:number, public_id:string)
  {
    this.spinner.show();
    if(confirm('Esta Seguro de eliminar la imagen?')){
      this.galeriaServ.deleteImageGaleria(id_img_galeria, public_id).subscribe(
        resultado => {
          console.log(resultado);
          this.listarImagenesGaleria(this.id_galeria);
          this.spinner.hide();
          
        },
        
      );
    }
    
  }
  establecerPortada(id_img_galeria:number,id_galeria:number)
  {
    this.galeriaServ.assingPortada(id_img_galeria,id_galeria).subscribe(
      resultado => {
        //refrescamos la grilla
        this.listarImagenesGaleria(this.id_galeria);
      }
    );

  }
}
