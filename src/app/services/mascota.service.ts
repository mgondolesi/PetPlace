import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders,  } from '@angular/common/http';
import { URL } from '../../app/config';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
 
  constructor(
    public http: HttpClient,
    ) { }
 
  httpOptions = {headers: new HttpHeaders({})}; 
              
  registrarMascota(datos) : Observable<any>{  
                         //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
    return this.http.post(URL+"registerM",datos,{headers: this.httpOptions.headers});               // el return devuelve lo que me mando la api (usuario y token)
  }


  getMascotas() {                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.get(URL+"misMascotas", {headers: this.httpOptions.headers});               // el return devuelve lo que me mando la api (usuario y token)
  }

  getAllMascotas() {                           //metodo que ejecuta POST registerUser de la api con los "datos" desde el metodo register(form) de regist.page
  return this.http.get(URL+"getAllMascotas",{headers: this.httpOptions.headers});               // el return devuelve lo que me mando la api (usuario y token)
  }

  borrarMascota(mascota){
    return this.http.post(URL+"borrarMascota",mascota,{headers: this.httpOptions.headers});   
    }

  modificarMascota(mascota){
  return this.http.post(URL+"modificarMascota",mascota,{headers: this.httpOptions.headers});   
  }
    
}