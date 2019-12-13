import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('access-token') != null) {
      console.log('has token!');
      const token = localStorage.getItem('access-token');
      // if the token is  stored in localstorage add it to http header
      const headers = new HttpHeaders().set("access-token", "TOKEN-02020232323-TETS");
      //clone http to the custom AuthRequest and send it to the server 
      const AuthRequest = request.clone({ headers: headers });
      return next.handle(AuthRequest)
    } else {
      console.log('didn\'t has token!');
      return next.handle(request);
    }
  }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const customReq = request.clone({
  //   });
  //   return next.handle(customReq);
  // }
  constructor() { }
}
