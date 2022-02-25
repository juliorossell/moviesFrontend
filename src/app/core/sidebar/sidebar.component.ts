import { Component, OnInit } from '@angular/core';
import { IRole } from 'src/app/shared/interfaces/role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  adminRole = 'admin';
  constructor() { }

  ngOnInit() {
  }

  isAdminUser() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');
    if (userInfo) {
      const isadmin = userInfo.roles.some( (x: IRole) => x.name === this.adminRole )
      if (isadmin) return true;
    }
    return false;
  }

}
