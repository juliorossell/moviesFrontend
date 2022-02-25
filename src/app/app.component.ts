import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { SocketWebService } from './shared/services/socket-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';

  constructor(private socketWebService: SocketWebService, private router: Router){
    this.onListenSocketEvents();
  }

  onListenSocketEvents() {
    this.socketWebService.listen('server:disconnectedAnotherUser')
    .pipe(
      filter((res: any) => this.userIsLogged(res)),
      filter((res: any) => this.anotherToken(res.token)),
      tap(() => alert('Se inicio sesión desde otro dispositivo')),
      tap(() => localStorage.clear()),
      tap(() => this.router.navigate(['login'])),
    )
    .subscribe()

  }

  userIsLogged(user: any) {
    const userSesion = JSON.parse(localStorage.getItem('userInfo') || 'null');
    return userSesion && userSesion._id === user.userInfo._id;
  }

  anotherToken(token: any) {
    const tokenInSession = localStorage.getItem('token');
    return  tokenInSession !== token;
  }



}
