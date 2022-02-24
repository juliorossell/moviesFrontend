import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { SignUpModule } from './login/sign-up/sign-up.module';
import { MainTemplateModule } from './core/main-template/main-template.module';
import { SocketWebService } from './shared/services/socket-web.service';
import { GuardModule } from './shared/guards/guard.module';
import { ForbiddenModule } from './shared/components/forbidden/forbidden.module';
@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    SignUpModule,
    SpinnerModule,
    MainTemplateModule,
    GuardModule,
    ForbiddenModule
  ],
  providers: [SocketWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
