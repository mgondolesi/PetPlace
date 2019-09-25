import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController,  AlertController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {

  form: NgForm;
  formularioRegistro: FormGroup;
  constructor(
    private authService: UsuarioService,
    public router: Router, 
    public formBuilder: FormBuilder,
    private storage: Storage,
    public toastController: ToastController,
    public alertController: AlertController
  ) {  }
  ngOnInit() {
  }
  // Dismiss Register Modal
  
  
  register(form) {
    this.authService.registrar(form.value).subscribe(
      data => {
          //almacena los datos en SQLite
          this.storage.set("token", data.token);
          this.storage.set("usuario", data.usuario);
          this.router.navigate(['/home']);

          //console.log(form.value);
          //Obtengo los datos de SQLite
          this.storage.get('usuario').then((val) => {
            console.log('los datos del usuario son:', val);
          });
         
      
      },
      error => {
        console.log(error);
          
          this.toastController.create({
            message: error.error.msg,
            duration: 3000
          }).then((toastData)=>{
            console.log(toastData);
            toastData.present();
          }); 
      },
      () => {
        
      }
    );
  }

}

