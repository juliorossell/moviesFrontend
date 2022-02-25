import { Injectable } from '@angular/core';
import { IAuthIdentity } from '../interfaces/auth-identity';

@Injectable()
export class UserProfileService {

  constructor() {}

  setTokenInLocalStorage(body: IAuthIdentity) {
    localStorage.setItem('token', body.token);
    localStorage.setItem('userInfo', JSON.stringify(body.userInfo));
  }
}
