import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorService {

  handle(error: any) {
    switch (error.status) {
      case 404:
        console.log('404');
        break;
      case 503:
          console.log('503');
          break;
      default:
        break;
    }
  }

  constructor() { }

}
