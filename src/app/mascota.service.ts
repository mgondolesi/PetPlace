import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders,  } from '@angular/common/http';
import { URL } from '../app/config';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
 
  constructor(public http: HttpClient,
              ) { }
       
              
  registrarMascota(datos) : Observable<any>{  
    const httpOptions = {headers: new HttpHeaders({})};                         //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
    return this.http.post(URL+"registerM",datos,{headers: httpOptions.headers});               // el return devuelve lo que me mando la api (usuario y token)
  }


  getMascotas(token) { 
    console.log(token)                          //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.post(URL+"misMascotas", token);               // el return devuelve lo que me mando la api (usuario y token)
  }

  getAllMascotas(token) {                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.post(URL+"getAllMascotas",token);               // el return devuelve lo que me mando la api (usuario y token)
  }
  
  getAllRazas() {
    console.log()
    return this.http.get(URL+"getAllRazas");
  }
}