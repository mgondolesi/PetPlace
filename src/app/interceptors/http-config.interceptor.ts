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
  import { Router } from '@angular/router';
  import { ToastController } from '@ionic/angular';
  import { LoadingService } from 'src/app/loading.service';

  const TOKEN_KEY = 'token';
  @Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    
    constructor(
      public storage: Storage,
      private router: Router, 
      public toastController: ToastController,
      public loading: LoadingService,
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
            this.loading.present();
            return next.handle(request).pipe(
              map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  this.loading.dismiss()
                }
                this.loading.dismiss()
                return event;
              }),
              
              catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                  this.loading.dismiss()
                  this.router.navigate(['/home']);
                  this.toastController.create({
                    message: "Por favor, inicie sesion",
                    duration: 3000
                  }).then((toastData)=>{
                    console.log(toastData);
                    toastData.present();
                  });
                }
                console.error(error);
                return throwError(error);
               
              })
            );
            
          })
          
        );
    }
  }
  
 