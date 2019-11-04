import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from '../../app/config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(public http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({})}; 

  matchear(datos) : Observable<any>{                    
    return this.http.post(URL+"crearMatch", datos,{headers: this.httpOptions.headers});               
  }

  aceptar(datos) : Observable<any>{                    
    return this.http.post(URL+"aceptarMatch", datos,{headers: this.httpOptions.headers});               
  }
  
  rechazar(datos) : Observable<any>{                    
    return this.http.post(URL+"rechazarMatch", datos,{headers: this.httpOptions.headers});               
  }

  misMatchs() : Observable<any>{                    
    return this.http.get(URL+"misMatch",{headers: this.httpOptions.headers});               
  }

}