import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {

  form: NgForm;
  formularioRegistro: FormGroup;
  constructor(
    private authService: UsuarioService,
    public router: Router, 
    public formBuilder: FormBuilder,
    private storage: Storage,
  ) {  }
  ngOnInit() {
  }
  // Dismiss Register Modal
  

  register(form) {
    this.authService.registrar(form.value).subscribe(
      data => {
        if(data.ok){

          this.storage.set("token", data.token);
          this.storage.set("usuario", data.usuarioNew);
          console.log(form.value);
        }
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    );
  }

}

