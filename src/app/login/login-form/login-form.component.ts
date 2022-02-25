

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, delay, map, Subject, takeUntil, tap } from 'rxjs';
import { FormService } from 'src/app/shared/services/form-service';
import { SecurityService } from 'src/app/shared/services/micro-services/security-service';
import { SocketWebService } from 'src/app/shared/services/socket-web.service';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })
  loadingPage: boolean = false;
  errorMessage = '';

  private destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private securityService: SecurityService,
    private userProfileService: UserProfileService,
    private router: Router,
    private socket: SocketWebService,
  ) {
    localStorage.clear();
  }

  ngOnInit() {
    //
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  onSubmitForm() {

    this.formService.markFormGroupAsTouched(this.loginForm);
    if (this.loginForm.valid) {

      this.loadingPage = true;
      const formValues = this.loginForm.getRawValue();
      this.securityService.login(formValues)
        .pipe(
          delay(1000),
          takeUntil(this.destroy$),
          map((res: any) => {
            this.userProfileService.setTokenInLocalStorage(res.body),
            this.socket.emitEvent('client:userLogged', res.body )
          }),
          tap(() => this.loadingPage = false),
          tap(() => this.router.navigate(['modules/managment/movies'])),
          catchError(async() => {
            this.loadingPage = false;
            this.errorMessage = '*EL ID O CONTRASEÑA NO COINCIDEN';
          })
        )
      .subscribe();

    }
  }
}
