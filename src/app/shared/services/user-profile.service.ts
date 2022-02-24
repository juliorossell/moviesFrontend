import { Injectable } from '@angular/core';
import { IAuthIdentity } from '../interfaces/auth-identity';

@Injectable()
export class UserProfileService {

  constructor() {}

  setTokenInSessionStorage(body: IAuthIdentity) {
    sessionStorage.setItem('token', body.token);
    sessionStorage.setItem('userInfo', JSON.stringify(body.userInfo));
  }
}
