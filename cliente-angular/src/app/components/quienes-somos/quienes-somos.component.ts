import { Component, OnInit } from '@angular/core';
import { QuienesService } from "../../services/quienes.service";
import { IQuienes} from "src/app/models/quienes";

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  lista_quienes:IQuienes[] = [];
  anio = new Date().getFullYear();

  constructor(private quienesServ:QuienesService) { }

  ngOnInit(): void {
    this.obtenerQuienes();
  }
  obtenerQuienes()
  {
    this.quienesServ.getQuienes().subscribe(
      resultado => {
        this.lista_quienes = resultado;
      }
    )
  }

}
