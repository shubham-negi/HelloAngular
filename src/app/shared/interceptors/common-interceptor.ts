import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const CONTENT_TYPE = 'application/json; charset=utf-8';
const ACCEPT_CONTENT = 'application/json';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        accept: ACCEPT_CONTENT,
        'Content-Type': CONTENT_TYPE,
        author: '@_snegi'

      }
    });
    return next.handle(authReq).pipe(
      catchError(this.handleError)
    );
  }

}
