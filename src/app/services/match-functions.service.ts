import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MatchService } from './match.service';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})

export class MatchFunctionsService {

  userId: any;
  data: any;
  myMascota: any;

  constructor(private storage: Storage,
              private matchService: MatchService,
              ) { 
              
                  this.storage.get('usuario').then((val) => {                    //como en el login guarde los datos de usuario, obtengo el "username"
                  this.data = val.username;
                  this.userId = val._id;
                  }).catch((error) => {
                    console.log('get error for ', error);
                  });
                }

  
  async selectMascota(mascota){                      //este metodo necesita recibir una mascota y guarda el id de la misma                                            //match() 
    return new Promise((resolve, reject)=>{
      console.log("estoy en services: "+mascota)
      this.myMascota = mascota;
       resolve(this.myMascota);           //para despues usartlo en match(). asi que lo llamamos en welcome.page y lo almacenamos desde el html    
  });
}

  async match(mascota, miMascota){                               //hace el match en node js enviando todos los daots
    console.log('la del match:'+mascota, 'la mia: '+miMascota)
    await this.selectMascota(miMascota) 
             //aca creamos el match
    let datoss ={  receptor: mascota.amo,
                  emisor: this.userId,
                  mascotaEmi: this.myMascota,
                  mascotaRece: mascota._id};
    this.matchService.matchear(datoss)
      .subscribe(
        (datos) => { // Success
          console.log("match creado",datoss);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  aceptar(match){
        
    this.matchService.aceptar(match)  //aceptar el match
    .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  
  }

  rechazar(match){
        
    this.matchService.rechazar(match)  //rechaza el match
    .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  
  }

}
