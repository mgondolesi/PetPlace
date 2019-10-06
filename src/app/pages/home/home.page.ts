import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NavController, NavParams, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';
import { ToastController } from '@ionic/angular'
import { LoadingService } from 'src/app/loading.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [
    GooglePlus
  ]
})

export class HomePage {

  form: NgForm;

  constructor(
    private googlePlus: GooglePlus,
    public navCtrl: NavController, 
    private router: Router,  
    private authService: UsuarioService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public loading: LoadingService, )
    { }

//click en "registrar", te envía a la pantalla de registro (regist.page)
  regis(){
    this.router.navigate(['/regist'])
  }

  //Metodo que recibe el formulario con el email y la pass. 
  signin(form){  
    this.loading.present();                                     //Ejecuta la pantallita de cargando por 5 seg. maximo
    this.authService.login(form.value).subscribe(              //Ejecuta el metodo login de usuario.service y la manda los datos del form (que serian "form.value")
      
      data => {                                                //Si la api devuelve data. Recibe la data desde la api y guarda el token y los datos de usaurio
        this.storage.set("token", data.token);                 //Despues te manda a la pantalla welcome.page
        this.storage.set("usuario", data.usuario);
        this.router.navigate(['/welcome'])

        console.log(form.value);
        console.log(data.token);
        this.loading.dismiss();                               // si paso menos de 5 seg. y termino el proceso, saca la pantalla de carga
      },

      error => {                                            //Si la api devuelve error. Se muestra en un toast el msj con el error 

        console.log(error);

        this.toastController.create({
          message: error.error.msg,
          duration: 3000
        })
        .then((toastData)=>{
          console.log(toastData);
          toastData.present();
        });
        this.loading.dismiss();
      },
    );
  }
 
  login_google(){
    this.loading.present();                                                               //Click en login google
    this.googlePlus.login({})                                                   //Ejecuta el metodo de la api de google 
      .then(res =>  this.authService.logingoogle(res).subscribe( data => {      //Ejecuta el metodo logingoogle de usuario.service y la manda los datos del usuario de google (que serian "res")
        if(data.ok){                                                            //Si la api devuelve data: ok, guarda el token y usaurio

          this.storage.set("token", data.token);
          this.storage.set("usuario", data.usuario);
          this.router.navigate(['/welcome'])                                    //despues de manda a la pantalla welcome.page
          console.log(res);
          console.log(data);
          this.loading.dismiss();  
        }
      },
      error => {                                                        //si devuevle error, muestra un toast con el error
        console.log(error);
        console.log(res);
        this.toastController.create({
          message: error.error.msg,
          duration: 3000
        }).then((toastData)=>{
          console.log(toastData);
          toastData.present();
        }); 
        this.loading.dismiss();
      },
      () => {
        
      }))
      .catch(err => console.error(err));
     
    }
}
