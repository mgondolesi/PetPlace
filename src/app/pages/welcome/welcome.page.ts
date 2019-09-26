import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  //data: any;
  data: 'usuario';

  constructor(private storage: Storage) {
  
    
    }

  ngOnInit() {

   
      this.storage.get('usuario').then((val) => {
        this.data = val;
      }).catch((error) => {
        console.log('get error for ' , error);
      });
    }
  

}
