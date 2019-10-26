import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/model/mascota.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mascota: any[] = [];
 data:any;
  constructor( 
                     
               public dataService: DataService,
               public storage: Storage,
               public mascotaServices: MascotaService,
               ){ }

  ngOnInit() {
  
   this.storage.get('mascota').then((val) => {
    const _id =val;
    this.mascotaServices.getMascotaByID(_id).subscribe((unaMascota)=>{
     this.data=JSON.stringify(unaMascota); 
				let obj=JSON.parse(this.data); 
				let obj2=obj[Object.keys(obj)[0]];
        this.mascota = unaMascota['mascota'];
        console.log(obj2.nombre)
    });
    });
      }
}
