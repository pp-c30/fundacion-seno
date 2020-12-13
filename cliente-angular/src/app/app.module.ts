import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LocalidadComponent } from "./components/localidad/localidad.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { TipoAcompaniamientoComponent } from './components/tipo-acompaniamiento/tipo-acompaniamiento.component';
import { CategoriaDonacionesComponent } from './components/categoria-donaciones/categoria-donaciones.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { CategoriaGaleriaComponent } from './components/categoria-galeria/categoria-galeria.component';
import { CategoriaEventoComponent } from './components/categoria-evento/categoria-evento.component';
import { AuthGuard } from "./auth.guard";
import { AdminGaleriaComponent } from './components/admin-galeria/admin-galeria.component';
import { AdminDetalleGaleriaComponent } from './components/admin-detalle-galeria/admin-detalle-galeria.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdminEventoComponent } from './components/admin-evento/admin-evento.component';
import { AdminDetalleEventoComponent } from './components/admin-detalle-evento/admin-detalle-evento.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalleComponent } from './components/evento-detalle/evento-detalle.component';
import { CuidadosComponent } from './components/cuidados/cuidados.component';
import { CuidadosDetalleComponent } from './components/cuidados-detalle/cuidados-detalle.component';
import { AdminDetalleCuidadosComponent } from './components/admin-detalle-cuidados/admin-detalle-cuidados.component';
import { AdminCuidadosComponent } from './components/admin-cuidados/admin-cuidados.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { GaleriaDetalleComponent } from './components/galeria-detalle/galeria-detalle.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AngularEditorComponent, AngularEditorModule } from "@kolkov/angular-editor";
import { angularEditorConfig } from '@kolkov/angular-editor/lib/config';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { HomeComponent } from './components/home/home.component';
import { DonacionesDetalleComponent } from './components/donaciones-detalle/donaciones-detalle.component';




@NgModule({
  declarations: [
    AppComponent,
    ProvinciaComponent,
    MenuComponent,
    LocalidadComponent,
    TipoAcompaniamientoComponent,
    CategoriaDonacionesComponent,
    DonacionesComponent,
    CategoriaGaleriaComponent,
    CategoriaEventoComponent,
    AdminGaleriaComponent,
    AdminDetalleGaleriaComponent,
    AdminEventoComponent,
    AdminDetalleEventoComponent,
    EventosComponent,
    EventoDetalleComponent,
    CuidadosComponent,
    CuidadosDetalleComponent,
    AdminDetalleCuidadosComponent,
    AdminCuidadosComponent,
    QuienesComponent,
    GaleriaComponent,
    GaleriaDetalleComponent,
    QuienesSomosComponent,
    RegistroComponent,
    IngresoComponent,
    HomeComponent,
    DonacionesDetalleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    AngularEditorModule

  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
