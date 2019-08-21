webpackJsonp([2],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, viewCtrl, formBuilder, camera, users, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isDisabled = true;
        this.caption_name = "EDIT";
        this.account = {
            user_name: 'arnoldschwarzenegger',
            user_email: 'arnold.sc@terminator.net',
            user_password: 'password',
            user_state: 'California',
            profile_image: 'asset/img/src/img.jpg',
            full_name: 'Arnold Schwarzenegger',
            about: 'Former Governor of California'
        };
        this.form = formBuilder.group({
            image: [''], user_name: [''], user_password: [''], user_email: [''], user_state: [''],
        });
        this.profileDetails = [
            {
                full_name: "Arnold Schwarzenegger",
                about: "Former Governor of California",
                followers: 230,
                following: 170
            },
        ];
    }
    ProfilePage.prototype.openFollowers = function () {
        this.navCtrl.push('Followers');
    };
    ProfilePage.prototype.openFollowing = function () {
        this.navCtrl.push('Following');
    };
    ProfilePage.prototype.changedSmtng = function () {
        this.caption_name = "SAVE";
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        if (this.caption_name == "EDIT") {
            this.isDisabled = false;
            this.caption_name = "CANCEL";
        }
        else if (this.caption_name == "SAVE") {
            console.log(this.isReadyToSave);
            if (!(this.account.user_name && this.account.user_email && this.account.user_password && this.account.user_state)) {
                var toast = this.toastCtrl.create({
                    message: "Validation errors !",
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var loading_1 = this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loading_1.present();
                setTimeout(function () {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "You have successfully updated your details .",
                        duration: 2000,
                        position: 'top'
                    });
                    _this.caption_name = "EDIT";
                    _this.isDisabled = true;
                    toast.present();
                }, 2000);
            }
        }
        else if (this.caption_name == "CANCEL") {
            this.isDisabled = true;
            this.caption_name = "EDIT";
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'image': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ProfilePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'image': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ProfilePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['image'].value + ')';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "fileInput", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-page',template:/*ion-inline-start:"F:\Facultad\Ing. de Software\GitHub\PetPlace\PetPlace\app\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ \'Profile\' | translate }}</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="editProfile()" class="editSaveToggleBtn">{{caption_name}}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="fixed-content">\n\n\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="saveProfile()">\n\n      <div class="upperDiv">\n\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]"\n\n               (change)="processWebImage($event)"/>\n\n        <div class="profile-image-wrapper" (click)="getPicture()">\n\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.image.value">\n\n            <ion-icon name="ios-camera-outline" class="ios-camera-outline" md="ios-camera-outline" style="color: white !important"></ion-icon>\n\n            <div>\n\n            </div>\n\n          </div>\n\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()"\n\n               *ngIf="this.form.controls.image.value"></div>\n\n        </div>\n\n\n\n        <h3 class="full_name">{{profileDetails[0].full_name}}</h3>\n\n        <h3 class="userDetails">{{profileDetails[0].about}}</h3>\n\n\n\n        <ion-item (click)="openFollowers()" no-lines style="background: #16a085 !important;">\n\n          <ion-avatar item-start>\n\n            <img src="../../assets/img/users/followings.png">\n\n          </ion-avatar>\n\n          <h3 style="color: white">Following</h3>\n\n          <ion-badge class="amount" item-end>{{profileDetails[0].following}}</ion-badge>\n\n        </ion-item>\n\n        <ion-item no-lines (click)="openFollowing()" style="background: #16a085 !important;">\n\n          <ion-avatar item-start>\n\n            <img src="../../assets/img/users/followers.png">\n\n          </ion-avatar>\n\n          <h3 style="color: white">Follower</h3>\n\n          <ion-badge class="amount" item-end>{{profileDetails[0].followers}}</ion-badge>\n\n        </ion-item>\n\n      </div>\n\n      <ion-list style="padding: 20px !important; border-bottom: 0.55px solid #fff; !important;">\n\n        <ion-item style="border-top: 0.55px solid #fff; !important;">\n\n          <ion-label class="label_here">User Name :</ion-label>\n\n          <ion-input class="inputFields" type="text" formControlName="user_name" (keyup)="changedSmtng()"\n\n                     disabled="{{isDisabled}}"\n\n                     [(ngModel)]="account.user_name"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label class="label_here">Email :</ion-label>\n\n          <ion-input class="inputFields" type="email" formControlName="user_email" (keyup)="changedSmtng()"\n\n                     disabled="{{isDisabled}}"\n\n                     [(ngModel)]="account.user_email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label class="label_here">Password :</ion-label>\n\n          <ion-input class="inputFields" type="password" formControlName="user_password" (keyup)="changedSmtng()"\n\n                     disabled="{{isDisabled}}"\n\n                     [(ngModel)]="account.user_password"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item style="border-bottom: 0.55px solid #fff; !important;">\n\n          <ion-label class="label_here">State :</ion-label>\n\n          <ion-input class="inputFields" type="text" formControlName="user_state" (keyup)="changedSmtng()"\n\n                     disabled="{{isDisabled}}"\n\n                     [(ngModel)]="account.user_state"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Facultad\Ing. de Software\GitHub\PetPlace\PetPlace\app\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map