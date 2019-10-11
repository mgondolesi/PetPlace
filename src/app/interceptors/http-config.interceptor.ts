import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Storage } from '@ionic/storage'
  import { Observable, throwError, from} from 'rxjs';
  import { map, catchError, switchMap } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  const TOKEN_KEY = 'token';
  @Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    
    constructor(
      public storage: Storage,
    ) { }
    intercept(request: HttpRequest<any>, 
                 next: HttpHandler): 
            Observable<HttpEvent<any>> {
      return from(this.storage.get(TOKEN_KEY))
        .pipe(
          switchMap(token => {
            if (token) {
              request = request.clone(
                { 
                headers: request.headers.set('Authorization','bearer '+token) 
              });
            }
            
            return next.handle(request).pipe(
              map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
              }),
              catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
              })
            );
          })
        );
    }
  }