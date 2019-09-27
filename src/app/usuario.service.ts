import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../app/config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }


  registrar(datos) : Observable<any>{
    return this.http.post(URL+"register", datos);
  }

  login(accountInfo): Observable<any> {
    return this.http.post(URL+"login", accountInfo);
   }

   logingoogle(accountInfo):  Observable<any>{
    return this.http.post(URL+"login/google", accountInfo);
   }
   logout(): Observable<any>{
      return this.http.get(URL+"logout");
   }
}
