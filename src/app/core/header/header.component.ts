import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, Subject, takeUntil, tap } from 'rxjs';
import { SecurityService } from 'src/app/shared/services/micro-services/security-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loadingPage: boolean = false;
  private destroy$ = new Subject();
  constructor(
    private securityService: SecurityService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.loadingPage = true;
    const token = localStorage.getItem('token') || 'null';
    this.securityService.logout(token)
      .pipe(
        delay(1000),
        takeUntil(this.destroy$),
        tap(() => localStorage.clear()),
        tap(() => this.loadingPage = false),
        tap(() => this.router.navigate(['login'])),
        catchError(async() => {
          this.loadingPage = false;
        })
      )
    .subscribe();
  }

}
