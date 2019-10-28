import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: UsuarioService,
    public toastController: ToastController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    public dataService: DataService,
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
          title: "Home",           //nombre visible en el menu
          url: "/welcome",          //a donde te manda
          icon: "home"            //el icono que se muestra
        },
        {
          title: "My Pets",
          url: "/my-pets",
          icon: "paw"
        },
        {
          title: "Logout",
          url: "/logout",
          icon: "log-out",
        },
      ]
  }
  ngOnInit() {                  //ngOnInit es una instancia de la app (un estado)

    this.storage.get('usuario').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
      this.data = val.username;
    }).catch((error) => {
      console.log('get error for ', error);
    });

    this.mascotaService.getAllMascotas()
      .subscribe(
        (data2) => { // Success
          this.mascotas = data2['mascota'];
          console.log(data2);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  goToView(mascota) {
    this.storage.set("mascota", mascota)
    this.dataService.setData(mascota);
    this.router.navigate(['/profile'], mascota._id)
    console.log(mascota);
  }
}
