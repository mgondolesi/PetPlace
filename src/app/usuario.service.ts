import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { URL } from '../app/config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }
  httpOptions = {headers: new HttpHeaders({})};     

  registrar(datos) : Observable<any>{                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
    return this.http.post(URL+"register", datos);               // el return devuelve lo que me mando la api (usuario y token)
  }

  login(accountInfo): Observable<any> {                         //idem regisrar pero con la info de login
    return this.http.post(URL+"login", accountInfo);            // el return devuelve lo que me mando la api (usuario y token)
   }

   logingoogle(accountInfo):  Observable<any>{                 //idem regisrar pero con la info de login de google
    return this.http.post(URL+"login/google", accountInfo);   // el return devuelve lo que me mando la api (usuario, token, estado "ok" )
   }
   logout(): Observable<any>{                                 //no manda nada solo recibe token=null
      return this.http.get(URL+"logout");
   }

   
}
