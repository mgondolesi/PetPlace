import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NavController, NavParams, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';



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
    private formBuilder: FormBuilder )
    { }


  regis(){
    this.router.navigate(['/regist'])
  }

  signin(form){
    this.authService.login(form.value).subscribe(
      data => {
      

        this.router.navigate(['/welcome'])
        console.log(form.value);
        //
        
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    );
  }

  login_google(){
    this.googlePlus.login({})
      .then(res =>  this.authService.logingoogle(res).subscribe( data => {
        if(data.ok){

       //   this.storage.set("token", data.token);
         // this.storage.set("usuario", data.usuarioNew);
          this.router.navigate(['/welcome'])
          console.log(res);
          console.log(data);
        }
      },
      error => {
        console.log(error);
        console.log(res);
      },
      () => {
        
      }))
      .catch(err => console.error(err));
     
    }
}
