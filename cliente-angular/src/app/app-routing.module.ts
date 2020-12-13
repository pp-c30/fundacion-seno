import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvinciaComponent} from ".//components/provincia/provincia.component";
import { LocalidadComponent } from ".//components/localidad/localidad.component";
import { TipoAcompaniamientoComponent } from ".//components/tipo-acompaniamiento/tipo-acompaniamiento.component";
import { CategoriaDonacionesComponent } from "./components/categoria-donaciones/categoria-donaciones.component";
import { CategoriaGaleriaComponent } from "./components/categoria-galeria/categoria-galeria.component";
import { DonacionesComponent } from './components/donaciones/donaciones.component'
import { CategoriaEventoComponent } from "./components/categoria-evento/categoria-evento.component";
import { AdminGaleriaComponent } from "./components/admin-galeria/admin-galeria.component";
import { AdminDetalleGaleriaComponent } from "src/app/components/admin-detalle-galeria/admin-detalle-galeria.component";
import { AdminDetalleEventoComponent } from './components/admin-detalle-evento/admin-detalle-evento.component';
import { AdminEventoComponent } from "./components/admin-evento/admin-evento.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EventoDetalleComponent } from "./components/evento-detalle/evento-detalle.component";
import { AdminCuidadosComponent } from "./components/admin-cuidados/admin-cuidados.component";
import { AdminDetalleCuidadosComponent } from "./components/admin-detalle-cuidados/admin-detalle-cuidados.component";
import { CuidadosComponent } from "./components/cuidados/cuidados.component";
import { CuidadosDetalleComponent } from "./components/cuidados-detalle/cuidados-detalle.component";
import { QuienesComponent } from "./components/quienes/quienes.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { GaleriaDetalleComponent } from "./components/galeria-detalle/galeria-detalle.component";
import { QuienesSomosComponent} from "./components/quienes-somos/quienes-somos.component";
import { IngresoComponent } from "./components/ingreso/ingreso.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { HomeComponent } from "./components/home/home.component";
import { DonacionesDetalleComponent } from "./components/donaciones-detalle/donaciones-detalle.component";

import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {
    path:"",
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:"provincia",component:ProvinciaComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"home",component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"donaciones-detalle",component:DonacionesDetalleComponent,
  },
  {
    path:"registro",component:RegistroComponent,
  },
  {
    path:"ingreso",component:IngresoComponent,
  },
  {
    path:"evento-detalle",component:EventoDetalleComponent,
  },
  {
    path:"eventos",component:EventosComponent,
  },
  {
    path:"galeria-detalle",component:GaleriaDetalleComponent,
  },
  {
    path:"galeria",component:GaleriaComponent,
  },
  {
    path:"quienes",component:QuienesComponent,
  },
  {
    path:"quienes-somos",component:QuienesSomosComponent,
  },
  {
    path:"admin-detalle-evento/:id_evento",component:AdminDetalleEventoComponent,
  },
  {
    path:"admin-evento",component:AdminEventoComponent,
  },
 
  {
    path:"cuidados-detalle",component:CuidadosDetalleComponent,
  },
  {
    path:"cuidados",component:CuidadosComponent,
  },
  {
    path:"admin-detalle-cuidados/:id_cuidados",component:AdminDetalleCuidadosComponent,
  },
  {
    path:"admin-cuidados",component:AdminCuidadosComponent,
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
  {
    path:"admin-galeria",component:AdminGaleriaComponent
  },
  {
    path:"admin-detalle-galeria/:id_galeria",component:AdminDetalleGaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }