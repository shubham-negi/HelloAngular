import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  isLogin: boolean;

  constructor() {
    this.token = localStorage.getItem('access-token');
  }

  public isAuthenticated(): boolean {
    if (this.token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    return this.isLogin;
  }

  getToken(): string {
    return this.token;
  }

}
