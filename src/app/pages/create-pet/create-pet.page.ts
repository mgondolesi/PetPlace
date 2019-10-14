import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController,  AlertController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { MascotaService } from 'src/app/services/mascota.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { RazasService } from 'src/app/services/razas.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.page.html',
  styleUrls: ['./create-pet.page.scss'],
})
export class CreatePetPage implements OnInit {

  form: NgForm;
  formularioRegistro: FormGroup;
  data: any;
  razap: any;
  nrop:any;
  sex:any;
  fna: any;
  ped:any;
  razas: any[] = [];
  

  constructor(
    private authService: MascotaService,
    public router: Router, 
    public formBuilder: FormBuilder,
    private storage: Storage,
    public toastController: ToastController,
    public alertController: AlertController,
    public loading: LoadingService,
    public razasService: RazasService,

  ) {  }
  ngOnInit() {
    this.storage.get('token').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
    this.data = val;
   
    })
    this.razasService.getAllRazas()
    .subscribe(
      (data) => { // Success
        this.razas = data['raza'];
        console.log(this.razas)
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  // Dismiss Register Modal
  

  onChange(valor){
    console.log(valor.detail.value);
    this.razap = valor.detail.value;
   }

   onChangeS(valor){
    console.log(valor.detail.value);
    this.nrop = valor.detail.value;
   }

  radioSelect(valor){
    console.log(valor.detail.value);
    this.sex = valor.detail.value;
  }
  onChangef(valor){
    console.log(valor.detail.value);
    this.fna = valor.detail.value;
  }


  radioSelectP(valor){
    console.log(valor.detail.value);
    this.ped = valor.detail.value;
  }

  register(form) {
   
    
    const formulario = {
      nombre: form.value.nombre,
      raza: this.razap,
      sexo: this.sex,
      nroPariciones: this.nrop,
      fNacimiento: this.fna,
      foto: "ada",
      ubicacion: form.value.ubicacion,
      descripcion: form.value.descripcion,
      pedigree: this.ped,
      token: this.data
  
       // ww w .j a  v a  2s.  c  o  m 
  }; 
    this.loading.present();
    
    this.authService.registrarMascota(formulario).subscribe(            //Ejecuta el metodo registrar(datos) de usuario.service y le manda los datos del form (que serian "form.value")
      data => {                                         //Si la api devuelve data almacena los datos en SQLite


          console.log(formulario);

          //this.router.navigate(['/welcome']);
          
          this.toastController.create({
            message: data.msj,
            duration: 3000
          }).then((toastData)=>{
            console.log(toastData);
            toastData.present();
          }); 
          
          this.router.navigate(['/my-pets']);
          this.loading.dismiss();

         
      
      },
      error => {  
                               
        console.log(error);                                //Si la api devuelve error almacena los datos en SQLite
        console.log(formulario);
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


