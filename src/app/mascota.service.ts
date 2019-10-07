import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../app/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(public http: HttpClient) { }


  registrarMascota(datos, token) : Observable<any>{                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
    return this.http.post(URL+"registerM", datos, token);               // el return devuelve lo que me mando la api (usuario y token)
  }


}