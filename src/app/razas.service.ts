import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { URL } from '../app/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  constructor(public http: HttpClient,
    ) { }
  httpOptions = {headers: new HttpHeaders({})}
  getAllRazas() {                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.get(URL+"getAllRazas");               // el return devuelve lo que me mando la api (usuario y token)
  }
}
