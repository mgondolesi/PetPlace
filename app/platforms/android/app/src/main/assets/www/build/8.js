webpackJsonp([8],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerModule", function() { return FollowerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__following__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowerModule = /** @class */ (function () {
    function FollowerModule() {
    }
    FollowerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__following__["a" /* Following */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__following__["a" /* Following */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__following__["a" /* Following */]
            ]
        })
    ], FollowerModule);
    return FollowerModule;
}());

//# sourceMappingURL=following.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Following; });
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



var Following = /** @class */ (function () {
    function Following(navCtrl, navParams, items, toastCtrl, loadingCtrl) {
        // console.log(this.items.query());
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        var items_here = [
            ['input1', 'input2'],
            ['input3', 'input4'],
            ['input5', 'input6'],
            ['input7', 'input8'],
            ['input9', 'input10'],
            ['input11', 'input12'],
            ['input13', 'input14'],
            ['input15', 'input16'],
            ['input17', 'input18'],
            ['input19', 'input20'],
        ];
        items_here[2]['about'] = "Application Developer";
        items_here[2]['name'] = "Sibabrat Swain";
        items_here[2]['profilePic'] = "../../assets/img/users/user1.jpg";
        items_here[0]['about'] = "Co-founder and CTO";
        items_here[0]['name'] = "Devadatta Sahoo ";
        items_here[0]['profilePic'] = "../../assets/img/users/user2.png";
        items_here[1]['about'] = "Software Developer";
        items_here[1]['name'] = "Pitabas Behera";
        items_here[1]['profilePic'] = "../../assets/img/users/user3.jpeg";
        items_here[3]['about'] = "Human Resources Executive ";
        items_here[3]['name'] = "Rutuparna Singh";
        items_here[3]['profilePic'] = "../../assets/img/users/user4.jpeg";
        items_here[4]['about'] = "Application Developer";
        items_here[4]['name'] = "Ashutosh kumar choubey";
        items_here[4]['profilePic'] = "../../assets/img/users/user5.jpeg";
        items_here[5]['about'] = "Electric Utilities Consultant";
        items_here[5]['name'] = "Manish Mishra";
        items_here[5]['profilePic'] = "../../assets/img/users/user6.jpeg";
        items_here[6]['about'] = "Co Founder at FDSHive";
        items_here[6]['name'] = "Bikash Sahoo";
        items_here[6]['profilePic'] = "../../assets/img/users/user7.jpeg";
        items_here[7]['about'] = "Business Consultant; Web Analyst";
        items_here[7]['name'] = "Monisha K";
        items_here[7]['profilePic'] = "../../assets/img/users/user8.jpeg";
        items_here[8]['about'] = "Software Developer";
        items_here[8]['name'] = "Nambrata Mital";
        items_here[8]['profilePic'] = "../../assets/img/users/user9.jpeg";
        items_here[9]['about'] = "Application Developer";
        items_here[9]['name'] = "Gokulananda Dash";
        items_here[9]['profilePic'] = "../../assets/img/users/user10.jpeg";
        // console.log(items_here);
        this.currentItems = items_here;
        // console.log(this.currentItems);
        // this.currentItems = this.items.query()
    }
    Following.prototype.unfollowSomeOne = function (user, slidingItem) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "You have un-followed " + user['name'] + " successfully .",
                duration: 2000,
                position: 'top'
            });
            slidingItem.close();
            toast.present();
        }, 2000);
    };
    Following = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'following',template:/*ion-inline-start:"E:\Facultad\Ing. de Software\GitHub\PetPlace\app\src\pages\following\following.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ \'Following\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img [src]="item.profilePic">\n\n        </ion-avatar>\n\n        <h2>{{item.name}}</h2>\n\n        <p>{{item.about}}</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button  color="dark" icon-start (click)="unfollowSomeOne(item,slidingItem)">\n\n          <!--<ion-icon ios="ios-return-left" md="md-return-left"></ion-icon>-->\n\n          <ion-avatar item-start>\n\n            <img class="followings" src ="../../assets/img/users/followers.png">\n\n          </ion-avatar>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Facultad\Ing. de Software\GitHub\PetPlace\app\src\pages\following\following.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Following);
    return Following;
}());

//# sourceMappingURL=following.js.map

/***/ })

});
//# sourceMappingURL=8.js.map