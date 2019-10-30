import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController,AlertController } from '@ionic/angular';
import { MascotaService } from 'src/app/services/mascota.service';
import { Storage } from '@ionic/storage';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { RazasService } from 'src/app/services/razas.service';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { isNull } from '@angular/compiler/src/output/output_ast';
    

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.page.html',
  styleUrls: ['./edit-pet.page.scss'],
})
export class EditPetPage implements OnInit {

  mascotas: any[] = [];
  data: any;
  msj: any;
  id: any;
  sub: any;
  nombre: any;
  nombre2: String;
  mascMod: any;
  form: NgForm;
  formularioRegistro: FormGroup;
  razap2: any;
  razap: any;
  nrop: any;
  sex: any;
  fna: any;
  ped: any;
  razas: any[] = [];
  file2: File;
  uploadText: any;
  fileTransfer: FileTransferObject;
  fotoPath: any;
  fotoOptions: FileUploadOptions;
  options: any;
  path: string;
  respuesta: any;
  sexoH = false;
  sexoM = false;
  sexo: String;
  fnac: String;
  pariciones: String = "0";

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public loading: LoadingService,
    public mascotaService: MascotaService,
    public storage: Storage,
    public toastController: ToastController,
    private route: ActivatedRoute,
    private authService: MascotaService,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public razasService: RazasService,
    private transfer: FileTransfer,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private file: File,
  ) {
    // this.nombre = this.mascMod
    // console.log("logueando esto", this.nombre)            para pasar al ngmodel del html, pero noanda
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.mascMod = this.router.getCurrentNavigation().extras.state.mascota;
      }
    })

    this.storage.get('token').then((val) => {                           //como en el login guarde los datos de usuario, obtengo el "username"
      this.data = val;
      console.log(val, "token")
    })

    console.log("esto es la data ", this.mascMod)
    // this.storage.set("mascota", this.mascMod);
    let mascota = this.mascMod;
    if (mascota != null) {
      this.nombre2 = mascota.nombre.toString();
      this.razap = mascota.raza.toString();
      this.sexo = mascota.sexo.toString();
      // this.pariciones = if (mascota.nroPariciones.toString() != undefined) {

      // };
      this.fnac = mascota.fNacimiento.toString()
      // this.pedigree = mascota.nombre.toString();
      // this.foto = mascota.nombre.toString();
      // this.fNac = mascota.nombre.toString();



      console.log(mascota, "asdad");

    }
    else {
      this.router.navigate(['/my-pets'])
    }
    this.razasService.getAllRazas()
      .subscribe(
        (data) => { // Success
          this.razas = data['raza'];
          console.log(this.razas)
        },
        (error) => {
          console.error(error);
        }
      )
    if (this.sexo == "Hembra") {
      this.sexoH = true
      console.log("sexo", this.sexo)
    } 
    else {
      this.sexoM = true
    }
   
  }
  
  // Dismiss Register Modal
  onChange(valor) {
    console.log(valor.detail.value);
    this.razap = valor.detail.value;
  }
  razaSelected(newform) {
    let selectedForm = this.razas.find((f)=>{
      return f.id === newform;
    });
    this.razas=selectedForm;
}
  onChangeS(valor) {
    console.log(valor.detail.value);
    this.nrop = valor.detail.value;
  }
  radioSelect(valor) {
    console.log(valor.detail.value);
    this.sex = valor.detail.value
  }
  onChangef(valor) {
    console.log(valor.detail.value);
    this.fna = valor.detail.value;
  }
  radioSelectP(valor) {
    console.log(valor.detail.value);
    this.ped = valor.detail.value;
  }
  changeListener($event): void {
    this.file2 = $event;
    console.log(this.file2);
  }
  
  checkSexM(){
      if (this.razap == "macho") {
        return true
      }
  }

  selectFile() {
    this.fileChooser.open().then((uri)=>{
        this.filePath.resolveNativePath(uri).then((navigatepath)=>{
          this.fileTransfer = this.transfer.create();
          this.path= navigatepath;
          console.log("path: "+this.path);
          console.log("navigatepath: "+navigatepath);
          this.options={
            fileKey: 'image',
            fileName:  'Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)',
            chunkedMode: false,
            mimeType: 'image/jpeg',
            params: { 'desc': 'Foto de perfil' },
            headers: {},
          }
        })
      })
    }

   async uploadFile(){ 
          this.uploadText= 'Subiendo...';
          console.log("options: "+this.options.fileName);
          return new Promise<any>((resolve)=>{ this.fileTransfer.upload(this.path,'https://pet-place-d.herokuapp.com/api/addImage', this.options).then((data)=>{
            console.log("transferencia termianada: "+JSON.stringify(data)),
           // console.log("data "+data.response);
            this.uploadText="";
           
            resolve(data);
            
          },(err)=>{
            this.uploadText="";
            console.log(err);
                       }) 
                     });
        };

  async obtenerUrn(){
    
    return new Promise<any>((resolve)=>{ this.uploadFile().then((data)=>{
  
    console.log("la papa"+JSON.stringify(eval(data.response)).replace("\\", ""))
    
    var x = {
      url: (JSON.stringify(eval(data.response)).replace("\\", ""))
      }
      console.log("la var: "+x.url);
     resolve(x.url);
  });
}); 
  }
 

 AbortUpload(){
   this.fileTransfer.abort();
   alert("Subida cancelada.");
 }

   async register(form) {
   
   // this.uploadFile(); al ejecutarlo acá, ejecuto la funcion de la api que me guarda el url de cldnry. 
   //deberiamos verificar que este "ok", si es asi fuardamos el "form" y despues el link.(alto bondi).
    this.obtenerUrn().then((dat)=> {
    this.fotoPath= dat.substring(1,dat.length-1);
    console.log("la url de la foto:  "+ this.fotoPath);

  
    
    const formulario = {
      nombre: form.value.nombre,
      raza: this.razap,
      sexo: this.sex,
      nroPariciones: this.nrop,
      fNacimiento: this.fna,
      foto: this.fotoPath,
      ubicacion: form.value.ubicacion,
      descripcion: form.value.descripcion,
      pedigree: this.ped,
      token: this.data
    };
    
  
    this.loading.present();
    this.authService.registrarMascota(formulario).subscribe(            //Ejecuta el metodo registrar(datos) de usuario.service y le manda los datos del form (que serian "form.value")
      data => {                                      //Si la api devuelve data almacena los datos en SQLite
        console.log(formulario);
        //this.router.navigate(['/welcome']);
        this.toastController.create({
          message: data.msj,
          duration: 3000
        }).then((toastData) => {
          console.log(toastData);
          toastData.present();
        });
        this.router.navigate(['/my-pets']);
        this.loading.dismiss();
      },
      error => {
        console.log(error);                                //Si la api devuelve error almacena los datos en SQLite
        console.log(formulario);
        this.toastController.create({
          message: error.error.msg,
          duration: 3000
        }).then((toastData) => {
          console.log(toastData);
          toastData.present();
        });
        this.loading.dismiss();
      },
    );
  });
  }
}


