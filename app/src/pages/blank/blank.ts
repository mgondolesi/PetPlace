import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
  providers: [
    GooglePlus
  ]
})
export class BlankPage {
  

  constructor(private googlePlus: GooglePlus) {
  }


  login_google(){
    this.googlePlus.login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));
    }

}
