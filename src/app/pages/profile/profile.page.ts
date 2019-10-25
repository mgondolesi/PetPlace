import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 
  mascota: any;

  constructor( 
                     
               public dataService: DataService){ }

  ngOnInit() {
   this.mascota=this.dataService.getData();
   console.log(this.mascota);
      }
}
