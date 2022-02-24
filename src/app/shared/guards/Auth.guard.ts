import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private router: Router) {
    //
  }

  canActivate(): boolean {
    return this.checkAuthenticated();
  }

  checkAuthenticated(): boolean {
    const tokenSesion = sessionStorage.getItem('token');
    if (tokenSesion) {
      return true;
    } else {
      sessionStorage.clear();
      this.router.navigate(['login']);
      return false;
    }
  }
}
