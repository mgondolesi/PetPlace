import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
    

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.page.html',
  styleUrls: ['./edit-pet.page.scss'],
})
export class EditPetPage implements OnInit {

  mascotas: any[] = [];
  data: any;
  msj: any;
  id: any;
  sub: any;
  nombre: any;
  mascMod: any;
    
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    public storage: Storage,
    public toastController: ToastController,
    private route: ActivatedRoute,
  ) {
    // this.nombre = this.mascMod
    // console.log("logueando esto", this.nombre)            para pasar al ngmodel del html, pero noanda
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.mascMod = this.router.getCurrentNavigation().extras.state.mascota;
      }
    })
    console.log("esto es la data ",this.mascMod)
    this.storage.get('token').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
    this.data = val;
   
    })
    this.mascotaService.getMascotas()
      .subscribe(
        (data) => { // Success
          this.mascotas = data['mascota'];
          // console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }

}
