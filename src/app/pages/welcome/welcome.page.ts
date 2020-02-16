import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { DataService } from 'src/app/services/data.service';
import { MatchFunctionsService } from 'src/app/services/match-functions.service'
import { MatchService } from 'src/app/services/match.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit {

  data: any;
  tkn: any;
  navigate: any;
  mascotas: any[] = [];
  data2: any;
  userId: any;
  misMascotas: any[] = [];
  matches: any[] = [];
  allMatches: any[] = [];

  constructor(private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public toastController: ToastController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    public dataService: DataService,
    private matchService: MatchFunctionsService,
    private matchServiceApi: MatchService,
  ) {
    this.sideMenu();        //metodos para el menu del costado.
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =                   //defino los items del menu del constado
      [
        {
          title: "PetPlace",           //nombre visible en el menu
          url: "/welcome",          //a donde te manda
          icon: "home"            //el icono que se muestra
        },
        {
          title: "Mis Mascotas",
          url: "/my-pets",
          icon: "paw"
        },
        {
          title: "Chat",
          url: "/chat",
          icon: "chatbubbles",
        },
        {
          title: "Matches",
          url: "/match",
          icon: "contacts",
        },
        {
          title: "Salir",
          url: "/logout",
          icon: "log-out",
        },
      ]
  }


  ngOnInit() {                  //ngOnInit es una instancia de la app (un estado)


    

    this.storage.get('usuario').then((val) => {                    //como en el login guarde los datos de usuario, obtengo el "username"
      this.data = val.username;
      this.userId = val._id;
    }).catch((error) => {
      console.log('get error for ', error);
    });

    this.matchServiceApi.misMatches()  //los aceptados
    .subscribe(
      (data) => { // Success
        this.matches = data['match'];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )


    this.mascotaService.getAllMascotas()  //todas las mascotas del feed
      .subscribe(
        (data2) => { // Success
          this.mascotas = data2['mascota'];
          this.mascotas = this.mascotas.filter(elem => elem.amo!=this.userId);
          console.log(this.mascotas);
          this.matchServiceApi.todosMisMatches()
            .subscribe(
              (data3) => {
                this.allMatches = data3['match']
                console.log(data3);
                this.mascotas.forEach((mascota)=>{
                  let matches = this.allMatches.filter(elem=> elem.mascotaEmi == mascota._id || elem.mascotaRece == mascota._id)
                  matches.forEach((match,index)=>{
                    // let matchList: any;
                    // matchList.push(match)
                    Object.assign(mascota,{matchInfo:match});
                  })
                })
                console.log(this.mascotas)
              },(error)=>{
                console.log(error)
              }
            );
              
        },
        (error) => {
          console.error(error);
        }
      )

      this.mascotaService.getMascotas()     //mis mascotas
      .subscribe(
        (data) => { // Success
          this.misMascotas = data['mascota'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }
  doRefresh(event) {
    console.log('Begin async operation');

    this.ngOnInit()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  goToView(mascota) {                           //manda la data para cambiar de pantalla 
    this.storage.set("mascota", mascota)
    this.dataService.setData(mascota);
    this.router.navigate(['/profile'], mascota._id)
    console.log(mascota);
  }


  async match(mascota, miMascota){ 
    console.log("prueba"+miMascota)
    console.log("datos: "+mascota._id, "mas datos: "+miMascota.detail.value)             //aca creamos el match llamando al service 
    this.matchService.match(mascota, miMascota.detail.value);                         
 }

}
