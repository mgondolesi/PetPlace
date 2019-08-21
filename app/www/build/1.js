webpackJsonp([1],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.account = {
            name: '',
            email: '',
            password: '',
            lastname: '',
            username: '',
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4____["a" /* FirstRunPage */]);
        }, function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4____["a" /* FirstRunPage */]);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: "You have successfully signed up . Please sign in .",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage.prototype.welcomePage = function () {
        this.navCtrl.push('WelcomePage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Julian\Documents\GitHub\PetPlace\app\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="welcomePage()">\n\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ \'Sign up\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form (submit)="doSignup()">\n\n    <ion-list>\n\n\n\n    <!--  <ion-item>\n\n        <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Phone\' | translate }}</ion-label>\n\n        <ion-input type="number" [(ngModel)]="account.number" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Date Of Birth\' | translate }}</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label>Gender</ion-label>\n\n        <ion-select>\n\n          <ion-option value="f">Female</ion-option>\n\n          <ion-option value="m">Male</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Interest</ion-label>\n\n        <ion-select multiple="true" okText="Okay" cancelText="Dismiss">\n\n          <ion-option>Coading</ion-option>\n\n          <ion-option>Watching</ion-option>\n\n          <ion-option>Partying</ion-option>\n\n          <ion-option>Playing</ion-option>\n\n          <ion-option>Gyming</ion-option>\n\n          <ion-option>Singing</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    -->\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Nombre\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Apellido\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.lastname" name="lastname"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'Usuario\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n      <div padding>\n\n        <button ion-button class="signUpBtn" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Julian\Documents\GitHub\PetPlace\app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map