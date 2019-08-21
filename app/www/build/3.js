webpackJsonp([3],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedModule", function() { return NewsfeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsfeed__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsfeedModule = /** @class */ (function () {
    function NewsfeedModule() {
    }
    NewsfeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */]
            ]
        })
    ], NewsfeedModule);
    return NewsfeedModule;
}());

//# sourceMappingURL=newsfeed.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsFeed = /** @class */ (function () {
    function NewsFeed(navCtrl, modalCtrl, items, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = items;
        this.toastCtrl = toastCtrl;
        this.press = 0;
        this.likes = 10;
        this.cardItems = [
            {
                user_avtar: 'assets/img/marty-avatar.png',
                user_name: 'Marty McFly',
                date: 'November 5, 1955',
                image: 'assets/img/advance-card-bttf.png',
                content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
            },
            {
                user_avtar: 'assets/img/sarah-avatar.png.jpeg',
                user_name: 'Sarah Connor',
                date: 'May 12, 1984',
                image: 'assets/img/advance-card-tmntr.jpg',
                content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
            },
            {
                user_avtar: 'assets/img/ian-avatar.png',
                user_name: 'Dr. Ian Malcolm',
                date: 'June 28, 1990',
                image: 'assets/img/advance-card-jp.jpg',
                content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
            }
        ];
    }
    NewsFeed.prototype.addNewsFeed = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('NewsfeedCreate');
        addModal.onDidDismiss(function (item) {
            if (item) {
                console.log(item);
                _this.cardItems.push(item);
            }
        });
        addModal.present();
    };
    NewsFeed.prototype.dblClickEvent = function (ev, user_name) {
        this.press++;
        if (this.press == 2) {
            var toast = this.toastCtrl.create({
                message: "You have liked this.",
                duration: 2000,
                position: 'top'
            });
            toast.present();
            this.press = 0;
            this.likes++;
        }
    };
    NewsFeed = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'news-feed',template:/*ion-inline-start:"F:\Facultad\Ing. de Software\GitHub\PetPlace\PetPlace\app\src\pages\newsfeed\newsfeed.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ \'News Feed\' | translate }}</ion-title>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only (click)="addNewsFeed()" ><ion-icon name="add"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-card *ngFor="let item of cardItems">\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img [src]="item.user_avtar">\n\n      </ion-avatar>\n\n      <h2>{{item.user_name}}</h2>\n\n      <p>{{item.date}}</p>\n\n    </ion-item>\n\n\n\n    <img (tap)="dblClickEvent($event,item.user_name)"  [src]="item.image">\n\n\n\n    <ion-card-content>\n\n      <p>{{item.content}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n\n          {{likes}} Likes\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color="primary" clear small icon-start>\n\n          <ion-icon name=\'text\'></ion-icon>\n\n          4 Comments\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Facultad\Ing. de Software\GitHub\PetPlace\PetPlace\app\src\pages\newsfeed\newsfeed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewsFeed);
    return NewsFeed;
}());

//# sourceMappingURL=newsfeed.js.map

/***/ })

});
//# sourceMappingURL=3.js.map