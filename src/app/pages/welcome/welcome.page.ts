import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, ToastController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html', 
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit {

  //creo la variable para obtener la info del usuario
  
  data: any;
  tkn: any;
  navigate : any;


  constructor(private storage: Storage,
    private platform    : Platform,
    private splashScreen: SplashScreen,
    private statusBar   : StatusBar,
    private router: Router, 
    private authService: UsuarioService,
    public toastController: ToastController,)  {
  
      this.sideMenu();
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
      this.navigate =
      [
        {
          title : "Home",
          url   : "/home",
          icon  : "home"
        },
        {
          title : "Chat",
          url   : "/chat",
          icon  : "chatboxes"
        },
        {
          title : "Contacts",
          url   : "/contacts",
          icon  : "contacts"
        },
        {
          title : "Logout",
          icon  : "logout",
          
          
        },
      ]
    }
    
  
  
    
  
  ngOnInit() {

  
    this.storage.get('usuario').then((val) => {
      this.data = val.username;
      }).catch((error) => {
        console.log('get error for ' , error);
      });
    }
    
    
    signout(){
      this.authService.logout().subscribe(
        
        data => {
          this.storage.set("token", data)
          this.router.navigate(['/home'])
  
          console.log(data);
        },
  
        error => {
  
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
