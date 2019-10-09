import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.page.html',
  styleUrls: ['./my-pets.page.scss'],
})
export class MyPetsPage implements OnInit {

  constructor(
    public router: Router, 
    public navCtrl: NavController,
  ) {
    
   }

  ngOnInit() {
  }
  goToCreate() {
    this.router.navigate(['/create-pet']);  }
}
