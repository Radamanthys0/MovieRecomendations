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
    response = response.clone({
      body: [
        {
          id: '1',
          title: 'The Lord of The Rings: The fellowship of the rings',
          sinopse:
            'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
          img: 'assets/img/fellowship.PNG',
          rating: 9.9,
          type: 'movie',
        },
        {
          id: '2',
          title: 'The Lord of the Rings: The Two Towers',
          sinopse:
            "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
          img: 'assets/img/2_towers.PNG',
          rating: 10,
          type: 'movie',
        },
        {
          id: '3',
          title: 'The Lord of the Rings: The Return of the King',
          sinopse:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          img: 'assets/img/return_king.PNG',
          rating: 10,
          type: 'movie',
        },
      ],
    });
    // return next.handle(request);
    return of(response).pipe(delay(1000));
  }
}
