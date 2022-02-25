import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, takeUntil, map, tap, catchError, Subject } from 'rxjs';
import { SocketWebService } from 'src/app/shared/services/socket-web.service';
import { FormService } from '../../shared/services/form-service';
import { SecurityService } from '../../shared/services/micro-services/security-service';
import { UserProfileService } from '../../shared/services/user-profile.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  loadingPage: boolean = false;
  private destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private securityService: SecurityService,
    private userProfileService: UserProfileService,
    private router: Router,
    private socket: SocketWebService,
  ) { }


  ngOnInit() {
  }

  ngOnDestroy(): void {
      this.destroy$.unsubscribe();
  }

  onSubmitForm() {

    this.formService.markFormGroupAsTouched(this.signUpForm);
    if (this.signUpForm.valid) {

      this.loadingPage = true;
      const formValues = this.signUpForm.getRawValue();
      this.securityService.signUp(formValues)
        .pipe(
          delay(2000),
          takeUntil(this.destroy$),
          map((res: any) => this.userProfileService.setTokenInLocalStorage(res.body)),
          tap(() => this.loadingPage = false),
          tap(() => this.router.navigate(['modules/managment/movies'])),
          catchError(async() => {
            this.loadingPage = false;
          })
        )
      .subscribe();

    }
  }

}
