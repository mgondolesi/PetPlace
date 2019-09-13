import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  formularioRegistro : FormGroup;

  constructor(public navCtrl: NavController, 
    public router: Router,
    public navParams: NavParams,
    private fb : FormBuilder,
    private pusuario : UsuarioService,
    private storage: Storage, 
    private menuController: MenuController) {

      this.formularioRegistro = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        correo: ['', Validators.required],
        usuario: ['', Validators.required],
        clave: ['', Validators.required],
      });
  }

  ngOnInit() {

  }

  guardar(){
    this.pusuario.registrar(this.formularioRegistro.value).subscribe(
      data => {

        if(data.ok){

          this.storage.set("token", data.token);
          this.storage.set("usuario", data.usuarioNew);

          this.menuController.enable(true);

          this.navCtrl.navigateRoot('../pages/home/home.page');
        }

      }, err => {

      }
    )
  }

}
