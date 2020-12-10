import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from "src/app/services/autenticacion.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autServ:AutenticacionService, private route:Router )
  {

  }
  canActivate()
  {
    if (this.autServ.verificarUsuarioLogueado() == true) 
    {
      return true;
    }else{
      this.route.navigate(['/ingreso']);
      return false;
    }
  }
}
