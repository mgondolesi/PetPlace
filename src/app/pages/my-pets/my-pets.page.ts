import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';
import { Storage } from '@ionic/storage';

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
}
