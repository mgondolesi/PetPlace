import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController,  AlertController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { MascotaService } from 'src/app/mascota.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.page.html',
  styleUrls: ['./create-pet.page.scss'],
})
export class CreatePetPage implements OnInit {

  form: NgForm;
  formularioRegistro: FormGroup;
  constructor(
    private authService: MascotaService,
    public router: Router, 
    public formBuilder: FormBuilder,
    private storage: Storage,
    public toastController: ToastController,
    public alertController: AlertController,
    public loading: LoadingService,
  ) {  }
  ngOnInit() {
  }
  // Dismiss Register Modal
  
  
  register(form) {
    this.loading.present();
    this.authService.registrarMascota(form.value).subscribe(            //Ejecuta el metodo registrar(datos) de usuario.service y le manda los datos del form (que serian "form.value")
      data => {                                         //Si la api devuelve data almacena los datos en SQLite

          this.router.navigate(['/welcome']);
          
          this.toastController.create({
            message: data.msj,
            duration: 3000
          }).then((toastData)=>{
            console.log(toastData);
            toastData.present();
          }); 

          this.loading.dismiss();

         
      
      },
      error => {  
                               
        console.log(error);                                //Si la api devuelve error almacena los datos en SQLite
          
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
        
      }
    );
  }

}


