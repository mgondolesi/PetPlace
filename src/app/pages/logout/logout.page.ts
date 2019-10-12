import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, ToastController} from '@ionic/angular';
import { UsuarioService } from 'src/app/usuario.service';
import { MascotaService } from 'src/app/mascota.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router, 
    private authService: UsuarioService,
    public toastController: ToastController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
  ) { }

  ngOnInit() {

    this.signout();
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
