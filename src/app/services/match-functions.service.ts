import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MatchService } from './match.service';

@Injectable({
  providedIn: 'root'
})

export class MatchFunctionsService {

  userId: any;
  data: any;

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


  match(mascota){              //aca creamos el match
    let datos ={ receptor: mascota.amo,
                  emisor: this.userId};
    this.matchService.matchear(datos)
      .subscribe(
        (datos) => { // Success
          console.log("match creado");
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
