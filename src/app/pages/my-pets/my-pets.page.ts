import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.page.html',
  styleUrls: ['./my-pets.page.scss'],
})
export class MyPetsPage implements OnInit {

  mascotas: any[] = [];
  data: any;

  constructor(
    public router: Router, 
    public navCtrl: NavController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    public storage: Storage,
  ) {
    
   }

  ngOnInit() {
    this.mascotaService.getMascotas()
    .subscribe(
      (data) => { // Success
        this.mascotas = data['mascota'];
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )

    
  }
  goToCreate() {
    this.router.navigate(['/create-pet']);  }

  ionViewDidLoad(){

    this.mascotaService.getMascotas()
    .subscribe(
      (data) => { // Success
        this.mascotas = data['mascota'];
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  } 
  borrar(mascota){
    this.loading.present();
    this.mascotaService.borrarMascota(mascota)
    .subscribe(
      (data) => { 
        this.mascotas = data['mascota'];
        console.log(data);
        this.router.navigate(['/my-pets']);
        this.loading.dismiss();
      },
      (error) =>{
        console.error(error);
        this.loading.dismiss();  
      }
    )
  }
}

