import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders,  } from '@angular/common/http';
import { URL } from '../app/config';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(public http: HttpClient,
              public storage: Storage,
              public httpOptions: HttpHeaders
              ) { }
token : any;
public details(){
  const headers = new Headers();
  this.storage.get('token').then((val) => {
    this.token = val
})        
}
 headers = new HttpHeaders({
  'Authorization': `Bearer ${this.token}`
});
 options = {
  headers: this.headers
};
  registrarMascota(datos) : Observable<any>{                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
    return this.http.post(URL+"registerM",datos, this.options);               // el return devuelve lo que me mando la api (usuario y token)
  }


  getMascotas(token) {                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.post(URL+"misMascotas", token);               // el return devuelve lo que me mando la api (usuario y token)
  }

  getAllMascotas(token) {                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.post(URL+"getAllMascotas",token);               // el return devuelve lo que me mando la api (usuario y token)
  }
}