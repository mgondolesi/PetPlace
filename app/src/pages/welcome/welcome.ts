import {Component} from '@angular/core';
import {App,IonicPage, NavController, ToastController, LoadingController, ViewController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../providers";
import {UsersPage} from "../users_lists/users_lists";
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers:[
    GooglePlus
  ]

})
export class WelcomePage {
  form: FormGroup;
  isReadyToSave: boolean;
  falsemsg:string;
  // @ViewChild(Nav) nav: Nav;
  pages: any[] = [
    {title: 'Users Lists', component: 'UsersPage'}
  ];
  account: { email: string , password:string} = {
    email: '',
    password: ''
  };
  private signinErrorString: string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public translateService: TranslateService,
              public loadingCtrl: LoadingController,public formBuilder: FormBuilder,
              public viewCtrl: ViewController,public app: App,public user: User,
              private googlePlus: GooglePlus) {

    this.form = formBuilder.group({
      user_name: ['',Validators.required],
      user_pass: ['', Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.translateService.get('ERROR').subscribe((value) => {
      this.signinErrorString = value;
    })

    this.falsemsg = "Usuario Incorrecto";
  }


  login_google(){
  this.googlePlus.login({})
  .then(res => console.log(res))
  .catch(err => console.error(err));
  }

  signIn(){
    if (!this.form.valid) {
      let toast = this.toastCtrl.create({
        message: "Email and password both are required to Sign In.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }
    else  {
      let loading = this.loadingCtrl.create({
        content: 'Signing in  wait...'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.user.login(this.account).subscribe((resp) => {
          this.navCtrl.setRoot(UsersPage);
          
          // this.navCtrl.push(this.pages[0].component);
        }, (err) => {
          let toast = this.toastCtrl.create({
            message: err.error.msg,//"opps ! some issues had occured please try again later !", //this.signinErrorString
            duration: 3000,
            position: 'top'
          });
          toast.present();
        });
      }, 2000);
    }
  }

  signup() {
    this.navCtrl.push('UsersPage');
  }
}
