import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvinciaComponent} from ".//components/provincia/provincia.component";
import { LocalidadComponent } from ".//components/localidad/localidad.component";
import { TipoAcompaniamientoComponent } from ".//components/tipo-acompaniamiento/tipo-acompaniamiento.component";
import { CategoriaDonacionesComponent } from "./components/categoria-donaciones/categoria-donaciones.component";

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
  path:"localidad",component:LocalidadComponent
  },
  {
    path:"tipo-acompaniamiento",component:TipoAcompaniamientoComponent
    },
  {
    path:"categoria-donaciones",component:CategoriaDonacionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
