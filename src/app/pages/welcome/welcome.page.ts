import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, ToastController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from 'src/app/usuario.service';
import { MascotaService } from 'src/app/mascota.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html', 
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit {

 
  
  data: any;
  tkn: any;
  navigate : any;
  mascotas: any[] = [];  
  data2: any;

  constructor(private storage: Storage,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    private router: Router, 
    private authService: UsuarioService,
    public toastController: ToastController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    )  {
  
      this.sideMenu();        //metodos para el menu del costado.
      this.initializeApp();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      
      
      });
    }
    sideMenu()                            
    {
      this.navigate =                   //defino los items del menu del constado
      [
        {
          title : "Home",           //nombre visible en el menu
          url   : "/welcome",          //a donde te manda
          icon  : "home"            //el icono que se muestra
        },
        {
          title : "My Pets",
          url   : "/my-pets",
          icon  : "paw"
        },
        {
          title : "Logout",
          icon  : "logout",
        },
      ]
    }
    
  
  
    
  
  ngOnInit() {                  //ngOnInit es una instancia de la app (un estado)

  
    this.storage.get('usuario').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
      this.data = val.username;
      }).catch((error) => {
        console.log('get error for ' , error);
      });



    this.storage.get('token').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
    this.data2 = val;
    console.log(this.data2);

    const formulario = {
      token: this.data2
    };
    this.mascotaService.getAllMascotas(formulario)
    .subscribe(
      (data2) => { // Success
        this.mascotas = data2['mascota'];
        console.log(data2);
      },
      (error) =>{
        console.error(error);
      }
    )

    }) 


      
      
    }
    

    
    signout(){                                      //Click en logout
      this.loading.present();  
      this.authService.logout().subscribe(          //Ejecuta el metodo logout de usuario.service
        
        data => {                                   //Si la api devuelve data, manda token=null para sacarle el token al usuario y lo almacena     
          this.storage.set("token", data)
          this.router.navigate(['/home'])            //Luego te manda al home.page
  
          console.log(data);
          this.loading.dismiss();  
        },
  
        error => {                                //si devuelve error te manda un toast con el mismo.
          this.loading.dismiss();  
          console.log(error);
  
          this.toastController.create({
            message: error.error.msg,
            duration: 3000
          })
          .then((toastData)=>{
            console.log(toastData);
            toastData.present();
          });
        },
      );
    }

  }
