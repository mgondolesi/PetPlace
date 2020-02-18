import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { MatchFunctionsService } from 'src/app/services/match-functions.service'
import { MascotaService } from 'src/app/services/mascota.service';
import { Storage } from '@ionic/storage';
import { Mascota } from 'src/model/mascota.model';
import { LoadingService } from 'src/app/services/loading.service';

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
  allMascotas: any[] = [];
  loading: boolean = true;


  constructor(private matchService: MatchService,
              private matchServiceFunctions: MatchFunctionsService,
              private storage: Storage,
              private mascotaService: MascotaService,
              private loadingService: LoadingService) { }

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

/*      this.matchService.todosMisMatches().subscribe((res)=>{
        console.log(res)
        this.matches = res['match'];
        
        this.matches.forEach((elem)=>{
//          let mascotaEmi = new Mascota(res.mascotaEmi);
  //        let mascotaRece = new Mascota(res.mascotaRece);
          console.log(elem.mascotaEmi,elem.mascotaRece)
          this.mascotaService.getMascotaByIDAux(elem.mascotaRece).subscribe((res)=>{
          
            console.log(res)
            Object.assign(elem,{nombreReceptor:res.nombre});
          },(err)=>{
            console.log(err)
          })
          this.mascotaService.getMascotaByIDAux(elem.mascotaEmi).subscribe((res)=>{
            Object.assign(elem,{nombreEmisor:res.nombre});
          },(err)=>{
            console.log(err)
          })
        })
        console.log(this.matches)
      },(err)=>{
        console.log(err)
      }
      )*/
      this.matchService.todosMisMatches().subscribe((res)=>{
        this.loadingService.present;
        
        console.log(res);
        this.matches = res['match'];
        this.mascotaService.getAllMascotas().subscribe((data)=>{
          console.log(data)
          this.allMascotas = data['mascota'];
          this.matches.forEach((match)=>{
            let mascotaEmi = this.allMascotas.filter(elem=> elem._id == match.mascotaEmi)
            let mascotaRece = this.allMascotas.filter(elem=> elem._id == match.mascotaRece)
            console.log(mascotaEmi,mascotaRece);
            if(match.emisor==this.userId) {
              Object.assign(match,{esEmisor: true});
            } else {
              Object.assign(match,{esEmisor: false});
            }
            Object.assign(match,{nombreEmisor:mascotaEmi[0].nombre.charAt(0).toUpperCase()+mascotaEmi[0].nombre.slice(1)});
            Object.assign(match,{nombreReceptor:mascotaRece[0].nombre.charAt(0).toUpperCase()+mascotaRece[0].nombre.slice(1)});
            console.log(mascotaEmi[0],mascotaRece[0])
            this.loadingService.dismiss;
          })          
        })
        
  
      },(err)=>{
        console.log(err)
        
      })
      
  }
 
  aceptar(match){
        
    this.matchServiceFunctions.aceptar(match);  //aceptar el match
    
  }

  funcion(){
    
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

