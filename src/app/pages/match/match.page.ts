import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { MatchFunctionsService } from 'src/app/services/match-functions.service'
import { MascotaService } from 'src/app/services/mascota.service';
import { Storage } from '@ionic/storage';
import { Mascota } from 'src/model/mascota.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  matches: any[] = [];
  pendientes: any[] = [];
  userId:string;
  mascotas : Mascota[] =[];

  constructor(private matchService: MatchService,
              private matchServiceFunctions: MatchFunctionsService,
              private storage: Storage,
              private mascotaService: MascotaService) { }

  ngOnInit() {

    this.storage.get('usuario').then((val) => {                    //como en el login guarde los datos de usuario, obtengo el "username"
      this.userId = val._id;
    }).catch((error) => {
      console.log('get error for ', error);
    });

  
    this.matchService.misMatches()  //los aceptados
      .subscribe(
        (data) => { // Success
          // this.matches = data['match'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )

      this.matchService.pendientes()  //los pendientes
      .subscribe(
        (data) => { // Success
          this.pendientes = data['match'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )

      this.matchService.todosMisMatches().subscribe((res)=>{
        console.log(res)
        this.matches = res['match'];
        
        this.matches.forEach((elem)=>{
          let mascotaEmi = new Mascota(res.mascotaEmi);
          let mascotaRece = new Mascota(res.mascotaRece);
          console.log(elem.mascotaEmi,elem.mascotaRece)
          this.mascotaService.getMascotaByID(mascotaRece).subscribe((res)=>{
          
            console.log(res)
            Object.assign(elem,{nombreReceptor:res.nombre});
          },(err)=>{
            console.log(err)
          })
          this.mascotaService.getMascotaByID(mascotaEmi).subscribe((res)=>{
            Object.assign(elem,{nombreEmisor:res.nombre});
          },(err)=>{
            console.log(err)
          })
        })
        console.log(this.matches)
      },(err)=>{
        console.log(err)
      }
      )
  }
 
  aceptar(match){
        
    this.matchServiceFunctions.aceptar(match);  //aceptar el match
    
  }

  

  rechazar(match){
        
    this.matchServiceFunctions.rechazar(match);  //rechaza el match
  
  }
  
  doRefresh(event) {
    console.log('Begin async operation');

    this.ngOnInit()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}

