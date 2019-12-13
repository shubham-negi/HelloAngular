import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean;

  public isAuthenticated(): boolean {
    localStorage.getItem('token') ? this.isLogin = true : this.isLogin = false;
    return this.isLogin;
  }

  constructor() { }
}
