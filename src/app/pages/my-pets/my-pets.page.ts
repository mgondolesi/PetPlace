import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.page.html',
  styleUrls: ['./my-pets.page.scss'],
})
export class MyPetsPage implements OnInit {

  mascotas: any[] = [];
  data: any;
  msj: any;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    public storage: Storage,
    public dataService: DataService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.storage.get('token').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
      this.data = val;
    })

    this.mascotaService.getMascotas()
      .subscribe(
        (data) => { // Success
          this.mascotas = data['mascota'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.ngOnInit()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  goToCreate() {
    this.router.navigate(['/create-pet']);
  }
  ionViewDidLoad() {
    //por que se repite este metodo?
    this.mascotaService.getMascotas()
      .subscribe(
        (data) => { // Success
          this.mascotas = data['mascota'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }
  goToEdit(mascota) {
    let parametro: NavigationExtras = {
      state: {
        mascota: mascota
      }
    };
    this.router.navigate(['/edit-pet'], parametro)
    console.log(parametro);
  }
  goToView(mascota) {
    this.storage.set("mascota", mascota)
    this.dataService.setData(mascota);
    this.router.navigate(['/profile'], mascota)
    console.log(mascota);
  }
  borrar(mascota) {
    this.loading.present();
    this.mascotaService.borrarMascota(mascota).subscribe(
      data => {
        console.log(data);
        this.toastController.create({
          message: (data.msj),
          duration: 3000
        }).then((toastData) => {
          console.log(toastData);
          toastData.present();
        });
        this.ngOnInit()
        this.loading.dismiss();
      },
      (error) => {
        console.error(error);
        this.loading.dismiss();
      }
    )
  }
}

