import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthIdentity } from '../../interfaces/auth-identity';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private httpClient: HttpClient) {}

  login(body: any) {
    const url = `${environment.urlSecurity}/signin`;
    const reqHeader = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .post<IAuthIdentity>(url, body, { headers: reqHeader, observe: 'response' });
  }

  signUp(body: any) {
    const url = `${environment.urlSecurity}/signup`;
    const reqHeader = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .post<IAuthIdentity>(url, body, { headers: reqHeader, observe: 'response' });
  }

  logout(token: string) {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-access-token': token,
    });
    const url = `${environment.urlSecurity}/logout`;
    return this.httpClient.delete(url, { headers: reqHeader, observe: 'response' });
  }
}
