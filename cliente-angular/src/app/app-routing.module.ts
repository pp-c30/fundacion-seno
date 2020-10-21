import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ProvinciaComponent} from ".//components/provincia/provincia.component";


const routes: Routes = [
  {
    path:"provincia",component:ProvinciaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
