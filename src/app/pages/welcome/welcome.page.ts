import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit {

  //creo la variable para obtener la info del usuario
  
  data: any;
 

  constructor(private storage: Storage) {
  
    
    }

  ngOnInit() {

    const menuCtrl = document.querySelector('ion-menu-controller');

    function openFirst() {
      menuCtrl.enable(true, 'first');
     menuCtrl.open('first');
    }

    function openEnd() {
      menuCtrl.open('end');
    }

    function openCustom() {
      menuCtrl.enable(true, 'custom');
      menuCtrl.open('custom');
    }

      this.storage.get('usuario').then((val) => {
        this.data = val.name;
      }).catch((error) => {
        console.log('get error for ' , error);
      });
    }
  

}
