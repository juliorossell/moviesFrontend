import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';
import { FormService } from '../../shared/services/form-service';
import { SecurityService } from '../../shared/services/micro-services/security-service';
import { SpinnerModule } from '../../shared/components/spinner/spinner.module';
import { SocketWebService } from 'src/app/shared/services/socket-web.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    RouterModule
  ],
  declarations: [ SignUpComponent ],
  providers: [FormService, SecurityService, SocketWebService]
})
export class SignUpModule { }
