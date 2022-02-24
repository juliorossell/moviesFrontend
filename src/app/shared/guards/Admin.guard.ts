import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IRole } from '../interfaces/role';


@Injectable()
export class CanActivateAdminGuard implements CanActivate {
  adminRole = 'admin';
  constructor(private router: Router) {
    //
  }

  canActivate(): boolean {
    return this.checkAdminRole();
  }

  checkAdminRole(): boolean {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || 'null');
    if (userInfo) {
      const isadmin = userInfo.roles.some( (x: IRole) => x.name === this.adminRole )
      if (isadmin) return true;
    }
    this.router.navigate(['forbidden']);
    return false;
  }

}
