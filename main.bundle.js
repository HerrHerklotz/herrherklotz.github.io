webpackJsonp([1,4],{

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 181;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(233);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(291),
        styles: [__webpack_require__(287)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__x_card_x_card_component__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// For angular material2:
// npm install --save @angular/animations https://www.npmjs.com/package/@angular/material 
// npm install --save @angular/material
// npm install --save hammerjs -> import 'hammerjs';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__x_card_x_card_component__["a" /* XCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var XCardComponent = (function () {
    function XCardComponent() {
    }
    XCardComponent.prototype.ngOnInit = function () {
    };
    return XCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], XCardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], XCardComponent.prototype, "subtitle", void 0);
XCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'x-card',
        template: __webpack_require__(292),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [])
], XCardComponent);

//# sourceMappingURL=x-card.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)();
// imports


// module
exports.push([module.i, ":host {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 180px;\r\n            flex: 1 0 180px;  /* -> min-height == 180px*/\r\n    max-height: 240px;\r\n\r\n    display: -webkit-box;\r\n\r\n    display: -ms-flexbox;\r\n\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n\r\n    margin: 12px;\r\n\r\n    border-radius: 3px;\r\n    /*font-size: .8em;\r\n    color: #9E9E9E;*/\r\n    background: white;\r\n\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n@media(min-width:768px) { /*768px*/\r\n    :host {\r\n        -webkit-box-flex: 1;\r\n            -ms-flex: 1 0 auto;\r\n                flex: 1 0 auto; /* -> min-width == 0*/\r\n        margin:24px;\r\n        height: 240px;\r\n        max-width: 600px;\r\n    }\r\n}\r\n\r\nsection.title {\r\n    color:rgba(255,255,255, 0.9);\r\n    font-family: Roboto, sans-serif;\r\n\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-smoothing: antialiased;\r\n\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n\r\n    padding: 24px 16px 24px 16px;\r\n}\r\n\r\n.title h2 {\r\n    margin: 0;\r\n    font-weight: normal;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<main>\n    <x-card class=\"bg\" style=\"background-image: url(img/developer_c.jpg);\" title=\"Developer\" subtitle=\"about projects\"></x-card>\n\n    <x-card class=\"bg\" style=\"background-image: url(img/traveller_c.jpg);\" title=\"Traveller\" subtitle=\"about locations\"></x-card>\n\n    <x-card class=\"bg\" style=\"background-image: url(img/berliner_c.jpg);\" title=\"Berliner\" subtitle=\"about me\"></x-card>\n</main>\n<footer>\n    <a md-icon-button target=\"_blank\" href=\"https://github.com/HerrHerklotz\">\n        <i class=\"fa fa-github-square i-24 i-light\"></i>\n    </a>\n    <a md-icon-button target=\"_blank\" href=\"https://plus.google.com/u/0/105005430597149963571\">\n        <i class=\"fa fa-google-plus-square i-24 i-light\"></i>\n    </a>\n    <a md-icon-button target=\"_blank\" href=\"https://twitter.com/herrherklotz\">\n        <i class=\"fa fa-twitter-square i-24 i-light\"></i>\n    </a>\n    <a md-icon-button target=\"_blank\" href=\"https://www.xing.com/profile/Oliver_Herklotz\">\n        <i class=\"fa fa-xing-square i-24 i-light\"></i>\n    </a>\n</footer>"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<section></section>\n<section class=\"title\">\n    <h2>{{title}}</h2>\n    <small>{{subtitle}}</small>\n</section>"

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ })

},[337]);
//# sourceMappingURL=main.bundle.js.map