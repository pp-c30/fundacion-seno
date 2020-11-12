import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvinciaComponent} from ".//components/provincia/provincia.component";
import { LocalidadComponent } from ".//components/localidad/localidad.component";
import { TipoAcompaniamientoComponent } from ".//components/tipo-acompaniamiento/tipo-acompaniamiento.component";
import { CategoriaDonacionesComponent } from "./components/categoria-donaciones/categoria-donaciones.component";
import { CategoriaGaleriaComponent } from "./components/categoria-galeria/categoria-galeria.component";
import { DonacionesComponent } from './components/donaciones/donaciones.component'
import { CategoriaEventoComponent } from "./components/categoria-evento/categoria-evento.component";
import { AdminDetalleEventoComponent } from './components/admin-detalle-evento/admin-detalle-evento.component';
import { AdminEventoComponent } from "./components/admin-evento/admin-evento.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EventoDetalleComponent } from "./components/evento-detalle/evento-detalle.component";


const routes: Routes = [
  {
    path:"",
    redirectTo:'/provincia',
    pathMatch:'full'
  },
  {
    path:"provincia",component:ProvinciaComponent,
  },
  {
    path:"evento-detalle",component:EventoDetalleComponent,
  },
  {
    path:"eventos",component:EventosComponent,
  },
  {
    path:"admin-detalle-evento/:id_evento",component:AdminDetalleEventoComponent,
  },
  {
    path:"admin-evento",component:AdminEventoComponent,
  },
  {
    path:"categoria-galeria",component:CategoriaGaleriaComponent,
  },
  {
  path:"localidad",component:LocalidadComponent
  },
  {
    path:"tipo-acompaniamiento",component:TipoAcompaniamientoComponent
    },
  {
    path:"categoria-donaciones",component:CategoriaDonacionesComponent
  },
  {
    path:"donaciones",component:DonacionesComponent
  },
  {
    path:"categoria-evento",component:CategoriaEventoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
