import { bd } from './../../../db';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let response = new HttpResponse();
    debugger;

    if (request.params.get('id')) {
      const id = request.params.get('id');
      debugger;
      const movie = bd.movies.find((movie) => movie.id === id);

      response = response.clone({
        body: [movie],
      });
    } else {
      response = response.clone({
        body: bd.movies,
      });
    }

    return of(response).pipe(delay(1000));
  }
}
