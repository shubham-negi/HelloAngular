import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor  {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req);
    // .do(evt => {
    //   if (evt instanceof HttpResponse) {
    //     console.log('---> status:', evt.status);
    //     console.log('---> filter:', req.params.get('filter'));
    //   }
    // });

  }

  constructor() { }
}
