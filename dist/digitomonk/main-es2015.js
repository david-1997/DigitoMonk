(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _web_design_web_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-design/web-design.component */ "./src/app/web-design/web-design.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _web_development_web_development_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-development/web-development.component */ "./src/app/web-development/web-development.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");










const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "social",
        component: _social_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"]
    },
    {
        path: "graphicdesign",
        component: _web_design_web_design_component__WEBPACK_IMPORTED_MODULE_4__["WebDesignComponent"]
    },
    {
        path: "contact",
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: "webdesigning",
        component: _web_development_web_development_component__WEBPACK_IMPORTED_MODULE_6__["WebDevelopmentComponent"]
    },
    {
        path: "socialmedia",
        component: _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_7__["SocialMediaComponent"]
    }
    // {
    //   path:"product/:id",
    //   component:SingleproductComponent
    // },
    // {
    //   path:"category/Women",
    //   component:CategorylistComponent
    // },
    // {
    //   path:"category/Electronics",
    //   component:EcategoryComponent
    // },
    // {
    //   path:"category/Groceries",
    //   component:GcategoryComponent
    // },
    // {
    //   path:"create",
    //   component:CreateComponent
    // },
    // {
    //   path:"update",
    //   component:UpdateComponent
    // },
    // {
    //   path:"delete",
    //   component:DeleteComponent
    // }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'amacon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousal/carousal.component */ "./src/app/carousal/carousal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _singleproduct_singleproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singleproduct/singleproduct.component */ "./src/app/singleproduct/singleproduct.component.ts");
/* harmony import */ var _categorylist_categorylist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorylist/categorylist.component */ "./src/app/categorylist/categorylist.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _gcategory_gcategory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gcategory/gcategory.component */ "./src/app/gcategory/gcategory.component.ts");
/* harmony import */ var _ecategory_ecategory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ecategory/ecategory.component */ "./src/app/ecategory/ecategory.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _web_design_web_design_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web-design/web-design.component */ "./src/app/web-design/web-design.component.ts");
/* harmony import */ var lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lightgallery/angular/9 */ "./node_modules/lightgallery/angular/9/fesm2015/lightgallery-angular-9.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _web_development_web_development_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./web-development/web-development.component */ "./src/app/web-development/web-development.component.ts");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./social-media/social-media.component */ "./src/app/social-media/social-media.component.ts");



















// import { LightgalleryModule } from 'lightgallery/angular';





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_19__["LightgalleryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_4__["CarousalComponent"],
        _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__["ProductlistComponent"],
        _singleproduct_singleproduct_component__WEBPACK_IMPORTED_MODULE_7__["SingleproductComponent"],
        _categorylist_categorylist_component__WEBPACK_IMPORTED_MODULE_8__["CategorylistComponent"],
        _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
        _update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"],
        _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"],
        _gcategory_gcategory_component__WEBPACK_IMPORTED_MODULE_13__["GcategoryComponent"],
        _ecategory_ecategory_component__WEBPACK_IMPORTED_MODULE_14__["EcategoryComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _social_social_component__WEBPACK_IMPORTED_MODULE_17__["SocialComponent"],
        _web_design_web_design_component__WEBPACK_IMPORTED_MODULE_18__["WebDesignComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
        _web_development_web_development_component__WEBPACK_IMPORTED_MODULE_21__["WebDevelopmentComponent"],
        _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_22__["SocialMediaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_19__["LightgalleryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _carousal_carousal_component__WEBPACK_IMPORTED_MODULE_4__["CarousalComponent"],
                    _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__["ProductlistComponent"],
                    _singleproduct_singleproduct_component__WEBPACK_IMPORTED_MODULE_7__["SingleproductComponent"],
                    _categorylist_categorylist_component__WEBPACK_IMPORTED_MODULE_8__["CategorylistComponent"],
                    _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                    _update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"],
                    _delete_delete_component__WEBPACK_IMPORTED_MODULE_12__["DeleteComponent"],
                    _gcategory_gcategory_component__WEBPACK_IMPORTED_MODULE_13__["GcategoryComponent"],
                    _ecategory_ecategory_component__WEBPACK_IMPORTED_MODULE_14__["EcategoryComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _social_social_component__WEBPACK_IMPORTED_MODULE_17__["SocialComponent"],
                    _web_design_web_design_component__WEBPACK_IMPORTED_MODULE_18__["WebDesignComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                    _web_development_web_development_component__WEBPACK_IMPORTED_MODULE_21__["WebDevelopmentComponent"],
                    _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_22__["SocialMediaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_19__["LightgalleryModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/carousal/carousal.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousal/carousal.component.ts ***!
  \************************************************/
/*! exports provided: CarousalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarousalComponent", function() { return CarousalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CarousalComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CarousalComponent.ɵfac = function CarousalComponent_Factory(t) { return new (t || CarousalComponent)(); };
CarousalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarousalComponent, selectors: [["app-carousal"]], decls: 20, vars: 0, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cheap-clothing-sites-1582222798.png?crop=1.00xw:1.00xh;0,0&resize=980:*", "alt", "first image", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://univers-technologues.com/wp-content/uploads/2018/06/Gadgets-Latest-Electronic-Gadgets.jpg", "alt", "second image", 1, "d-block", "w-100"], ["src", "https://www.goodfood.com.au/content/dam/images/h/1/a/y/j/i/image.related.wideLandscape.940x529.h1arb8.png/1549516460064.jpg", "alt", "third image", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarousalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%]{\n    margin:40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzYWwvY2Fyb3VzYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2FsL2Nhcm91c2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuICAgIG1hcmdpbjo0MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarousalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousal',
                templateUrl: './carousal.component.html',
                styleUrls: ['./carousal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/categorylist/categorylist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/categorylist/categorylist.component.ts ***!
  \********************************************************/
/*! exports provided: CategorylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorylistComponent", function() { return CategorylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CategorylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, clo_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clo_r1.name);
} }
class CategorylistComponent {
    constructor(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
        });
        this.product.listcategory('Women').subscribe((data) => {
            this.listData = data; //fetching the data 
        });
    }
}
CategorylistComponent.ɵfac = function CategorylistComponent_Factory(t) { return new (t || CategorylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategorylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategorylistComponent, selectors: [["app-categorylist"]], decls: 2, vars: 1, consts: [[1, "row", "m-5"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3"], [1, "card", 2, "width", "20 rem"], ["alt", "clo.alt", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "product", 1, "btn", "btn-primary"]], template: function CategorylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategorylistComponent_div_1_Template, 11, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5bGlzdC9jYXRlZ29yeWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categorylist',
                templateUrl: './categorylist.component.html',
                styleUrls: ['./categorylist.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
        var plan = localStorage.getItem("plan");
        if (plan == "1") {
            this.plan1 = true;
        }
        if (plan == "2") {
            this.plan2 = true;
        }
        if (plan == "3") {
            this.plan3 = true;
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 104, vars: 3, consts: [[1, "site-wrapper"], [1, "inner-frame"], ["id", "plans", 1, "pricing"], [1, "container"], ["id", "pricing", 1, "section"], [1, "row", "mt-5", "pt-4"], [1, "col-lg-4", "planbox"], [1, "pricing-box", "mt-4"], [2, "display", "flex", "justify-content", "space-between"], [1, "mdi", "mdi-account", "h1"], ["type", "checkbox", 2, "width", "20px", 3, "checked", "change"], [1, "f-20"], [1, "mt-4", "pt-2"], [1, "mb-2", "f-18"], [1, "mb-2", 2, "display", "flex", "font-size", "20px"], [1, "mdi", "mdi-checkbox-marked-circle", "text-success", "f-18", "mr-2"], [1, "pricing-plan", "mt-4", "pt-2"], [1, "text-muted"], [1, "plan", "pl-3", "text-dark"], [1, "text-muted", "mb-0"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_11_listener() { return ctx.plan1 = !ctx.plan1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Profile Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Engaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Measuring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u20B925,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_43_listener() { return ctx.plan2 = !ctx.plan2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Templates Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Gathering Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Redeem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u20B935,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_76_listener() { return ctx.plan3 = !ctx.plan3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Graphic Design & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Final");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u20B915,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.plan1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.plan2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.plan3);
    } }, styles: [".pricing-box[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.1);\r\n    padding: 35px 50px;\r\n    border-radius: 20px;\r\n    position: relative;\r\n  }\r\n  \r\n  .pricing-box[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\r\n    font-size: 34px;\r\n  }\r\n  \r\n  .planbox[_ngcontent-%COMP%]{\r\n\r\n    background: white;\r\n    margin-bottom: 10px;\r\n    \r\n  }\r\n  \r\n  .pricing-badge[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 999;\r\n    right: 0;\r\n    width: 100%;\r\n    display: block;\r\n    font-size: 15px;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    height: 100px;\r\n  }\r\n  \r\n  .pricing-badge[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    float: right;\r\n    transform: rotate(45deg);\r\n    right: -67px;\r\n    top: 17px;\r\n    position: relative;\r\n    text-align: center;\r\n    width: 200px;\r\n    font-size: 13px;\r\n    margin: 0;\r\n    padding: 7px 10px;\r\n    font-weight: 500;\r\n    color: #ffffff;\r\n    background: #fb7179;\r\n  }\r\n  \r\n  .mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\r\n      margin-bottom: .5rem!important;\r\n  }\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n      line-height: 1.7;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .pl-3[_ngcontent-%COMP%]\r\n  {\r\n      padding-left: 0 !important;\r\n  }\r\n  \r\n  *[_ngcontent-%COMP%]{\r\n    font-family: Brockmann Webfont, sans-serif;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFWSxpREFBaUQ7SUFDekQsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osUUFBUTtJQUNSLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUVKLHdCQUF3QjtJQUNoQyxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUNBO01BQ0ksOEJBQThCO0VBQ2xDOztFQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLGVBQWU7RUFDbkI7O0VBRUE7O01BRUksMEJBQTBCO0VBQzlCOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2luZy1ib3gge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDMwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDMwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogMzVweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNpbmctYm94IC5wbGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnBsYW5ib3h7XHJcblxyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IGJsYWNrOyAqL1xyXG4gIH1cclxuXHJcbiAgLnByaWNpbmctYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJpY2luZy1iYWRnZSAuYmFkZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHJpZ2h0OiAtNjdweDtcclxuICAgIHRvcDogMTdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZiNzE3OTtcclxuICB9XHJcbiAgLm1iLTIsIC5teS0yIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW0haW1wb3J0YW50O1xyXG4gIH1cclxuICBwIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsLTNcclxuICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgKntcclxuICAgIGZvbnQtZmFtaWx5OiBCcm9ja21hbm4gV2ViZm9udCwgc2Fucy1zZXJpZjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CreateComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", cat_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1);
} }
class CreateComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.category = ['Women', 'Groceries', 'Electronics'];
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('give a unique id', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('copy image address', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    changeCity(e) {
        this.category.setValue(e.target.value, {
            onlySelf: true
        });
    }
    sendData() {
        this.productService.postProduct(this.userForm.value).subscribe((productdata) => {
            alert('New item' + this.userForm.value.name + ' has been created!');
            this.router.navigate(['/']); //redirecting to home page after action is completed
        });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 31, vars: 2, consts: [[1, "container"], [3, "formGroup", "submit"], [1, "col-lg-3"], ["for", ""], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "number", "formControlName", "id", 1, "form-control"], ["formControlName", "category", 1, "custom-select", 3, "change"], ["value", "", "disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "price", 1, "form-control"], ["type", "text", "formControlName", "image", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["type", "submit", 1, "btn-btn-primary"], [3, "ngValue"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateComponent_Template_form_submit_1_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_select_change_13_listener($event) { return ctx.changeCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Choose the Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_option_16_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/delete/delete.component.ts":
/*!********************************************!*\
  !*** ./src/app/delete/delete.component.ts ***!
  \********************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class DeleteComponent {
    constructor(productservice, router) {
        this.productservice = productservice;
        this.router = router;
        this.productservice.listProduct().subscribe((data) => {
            this.listData = data;
        });
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    delData() {
        let count = 0;
        for (let i = 0; i < this.listData.length; i++) {
            if (this.userForm.value.name == this.listData[i].name) {
                count++;
                //assigning the list item object id to id variable
                this.userForm.value.id = this.listData[i]._id;
            }
        }
        if (count == 0) {
            alert('Product not found');
        }
        console.log('inside delData method' + this.userForm.value.name + this.userForm.value.id);
        this.productservice.delProduct(this.userForm.value.id).subscribe((data) => {
            alert(this.userForm.value.name + ' has been deleted');
            this.router.navigate(['/']); //redirect to home page
        });
    }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteComponent, selectors: [["app-delete"]], decls: 8, vars: 1, consts: [[1, "container"], [3, "formGroup", "submit"], [1, "col-lg-3"], ["for", ""], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col-lg-3", "p-4"], ["type", "submit", "value", "DELETE", 1, "btn-btn-primary"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DeleteComponent_Template_form_submit_1_listener() { return ctx.delData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete',
                templateUrl: './delete.component.html',
                styleUrls: ['./delete.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ecategory/ecategory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecategory/ecategory.component.ts ***!
  \**************************************************/
/*! exports provided: EcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcategoryComponent", function() { return EcategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function EcategoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, clo_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clo_r1.name);
} }
class EcategoryComponent {
    constructor(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
        });
        this.product.listcategory('Electronics').subscribe((data) => {
            this.listData = data;
        });
    }
}
EcategoryComponent.ɵfac = function EcategoryComponent_Factory(t) { return new (t || EcategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EcategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcategoryComponent, selectors: [["app-ecategory"]], decls: 2, vars: 1, consts: [[1, "row", "m-5"], ["class", "col-lg-3 m-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "m-3"], [1, "card", 2, "width", "20 rem"], ["alt", "clo.alt", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "product", 1, "btn", "btn-primary"]], template: function EcategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EcategoryComponent_div_1_Template, 11, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VjYXRlZ29yeS9lY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ecategory',
                templateUrl: './ecategory.component.html',
                styleUrls: ['./ecategory.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gcategory/gcategory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gcategory/gcategory.component.ts ***!
  \**************************************************/
/*! exports provided: GcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GcategoryComponent", function() { return GcategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function GcategoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, clo_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clo_r1.name);
} }
class GcategoryComponent {
    constructor(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
        });
        this.product.listcategory('Groceries').subscribe((data) => {
            this.listData = data;
        });
    }
}
GcategoryComponent.ɵfac = function GcategoryComponent_Factory(t) { return new (t || GcategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GcategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GcategoryComponent, selectors: [["app-gcategory"]], decls: 2, vars: 1, consts: [[1, "row", "m-5"], ["class", "col-lg-3 m-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "m-3"], [1, "card", 2, "width", "20 rem"], ["alt", "clo.alt", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "product", 1, "btn", "btn-primary"]], template: function GcategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GcategoryComponent_div_1_Template, 11, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2djYXRlZ29yeS9nY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GcategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gcategory',
                templateUrl: './gcategory.component.html',
                styleUrls: ['./gcategory.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
    resetPosition() {
        let myDiv = document.getElementById("detail");
        myDiv.scrollTop = 0;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 504, vars: 0, consts: [["data-new-gr-c-s-check-loaded", "14.1193.0", "data-gr-ext-installed", "", 1, "body", "home", "page-template", "page-template-elementor_header_footer", "page", "page-id-2031", "wp-custom-logo", "elementor-default", "elementor-template-full-width", "elementor-kit-5", "elementor-page", "elementor-page-2031", "e--ua-isTouchDevice", "e--ua-blink", "e--ua-chrome", "e--ua-webkit"], [1, "floating-nav"], [1, "div-block-17"], ["data-animation", "default", "data-easing2", "ease", "data-easing", "ease", "data-collapse", "medium", "data-w-id", "0666e8b8-d79e-edc1-51e9-c5e487526a92", "role", "banner", "data-duration", "400", 1, "navbar-2", "w-nav", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["role", "navigation", 1, "nav-menu-2", "w-nav-menu"], ["href", "#hero", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], ["src", "assets/Digito-Monk-Logo.png", 2, "width", "40px", "margin-left", "10px"], ["href", "#services", 1, "floating-nav__link", "w-nav-link"], ["href", "#feedback", 1, "floating-nav__link", "w-nav-link"], ["href", "#faq", 1, "floating-nav__link", "w-nav-link"], ["href", "#sub", "ms-hide-element", "true", 1, "floating-nav__link", "w-nav-link"], ["href", "#contact", "ms-hide-element", "true", 1, "floating-nav__link", "login", "w-nav-link"], ["aria-label", "menu", "role", "button", "tabindex", "0", "aria-controls", "w-nav-overlay-0", "aria-haspopup", "menu", "aria-expanded", "false", 1, "w-nav-button", 2, "-webkit-user-select", "text"], [1, "w-icon-nav-menu"], ["data-wf-ignore", "", "id", "w-nav-overlay-0", 1, "w-nav-overlay"], [1, "top-nav"], ["href", "#", 1, "nav__logo-wrapper", "w-inline-block"], ["src", "assets/Digito-Monk-Logo-1.png", "loading", "lazy", "alt", "", 1, "image-84"], [1, "site-wrapper"], [1, "inner-frame"], ["id", "hero", 1, "hero"], [1, "container"], [1, "hero__wrapper"], ["data-w-id", "8d8766e3-2749-093c-6cdd-8c088828d5f8", 1, "heading-5", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["data-w-id", "c50a6184-8e34-64d9-e902-7e44828e6215", 1, "inline", 2, "opacity", "1", "font-size", "25px", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "button__wrapper"], ["href", "#plans", "data-w-id", "c6288447-6c4a-d637-39e8-3980fec408ae", 1, "button", "w-inline-block", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["data-w-id", "f8b46005-0252-910f-0790-c51ccade384b", 1, "available-component", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["data-w-id", "316837f8-528a-b56f-48e4-3137d46769ff", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dcbd9d163b3fb9f534e99d_8C5oW45T3h.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "1.8333333333333333", "data-duration", "1.8333333333333333", 1, "lottie-animation"], [1, "small-print"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65da64662ed568152b486d2d_25.svg", "loading", "lazy", "data-w-id", "b6b533bd-6d39-1760-75b0-7dddde4807d0", "alt", "", 1, "hero__shape-1", 2, "will-change", "transform", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65da646706ce29b68e68850c_Group%2075.svg", "loading", "lazy", "data-w-id", "7cf09021-c425-283c-6217-b3640a03411f", "alt", "", 1, "hero__shape-2", 2, "will-change", "transform", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "section--logo-marquee"], [1, "marquee-wrapper", "logo-marquee__wrapper"], [1, "marquee-inner"], [1, "marquee-item"], ["id", "dent", "src", "assets/Dentist-Logo-2.png", "alt", "Logo 1", 2, "width", "200px"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dbefb4433c528b462fbcba_60.svg", "alt", "Icon 1"], ["src", "assets/Full-Part.png", "alt", "Logo 2", 2, "width", "200px"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dbefb4433c528b462fbcba_60.svg", "alt", "Icon 2"], ["src", "assets/althena name Logo (1).png", "alt", "Logo 3", 2, "width", "200px"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dbefb4433c528b462fbcba_60.svg", "alt", "Icon 3"], ["src", "assets/Talento logo svg_LOGO COLOR (2).png", "alt", "Logo 4", 2, "width", "200px"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dbefb4433c528b462fbcba_60.svg", "alt", "Icon 4"], ["data-w-id", "c75706e2-332b-24fb-e490-08229aecd2b1", 1, "hero__work-slider"], ["data-w-id", "53a157e5-c975-466d-d53f-cd606895d10f", 1, "latest-projects__wrapper", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65da6378a1ebd53e3cbf8aca_Vector.svg", "loading", "lazy", "data-w-id", "8ff12bfd-4380-553d-a03a-c5c27e18fd45", "alt", "", 1, "hero-badge", 2, "will-change", "transform", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "badge__text"], ["data-w-id", "c75706e2-332b-24fb-e490-08229aecd2b2", 1, "hero__images-wrapper", 2, "opacity", "1", "transform", "translate3d(-27.2938px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d", "will-change", "transform"], [1, "hero__image-wrapper"], ["src", "assets/DM16.png", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/DM16.png 500w, assets/DM16.png 800w, assets/DM16.png 1064w", "alt", "", 1, "image-fill"], ["src", "assets/w1.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/w1.jpeg 500w, assets/w1.jpeg 800w, assets/w1.jpeg 1064w", "alt", "", 1, "image-fill"], ["src", "assets/w2.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/w2.jpeg 500w, assets/w2.jpeg 800w, assets/w2.jpeg 1064w", "alt", "", 1, "image-fill"], ["src", "assets/w3.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/w3.jpeg 500w, assets/w3.jpeg 800w, assets/w3.jpeg 1064w", "alt", "", 1, "image-fill"], ["src", "assets/w4.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/w4.jpeg 500w, assets/w4.jpeg 800w, assets/w4.jpeg 1064w", "alt", "", 1, "image-fill"], ["src", "assets/w5.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/w5.jpeg 500w, assets/w5.jpeg 800w, assets/w5.jpeg 1064w", "alt", "", 1, "image-fill"], ["src", "assets/w6.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 250px, 385px", "srcset", "assets/w6.jpeg 500w, assets/w6.jpeg 800w, assets/w6.jpeg 1064w", "alt", "", 1, "image-fill"], ["id", "services", 1, "scop"], ["data-w-id", "8d8766e3-2749-093c-6cdd-8c088828d5f8", 1, "heading-5", 2, "text-align", "center", "margin-top", "40px", "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["data-w-id", "c50a6184-8e34-64d9-e902-7e44828e6215", 1, "inline", 2, "opacity", "1", "text-align", "center", "font-size", "25px", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["data-elementor-type", "wp-page", "data-elementor-id", "2031", "data-elementor-post-type", "page", 1, "elementor", "elementor-2031"], ["data-particle_enable", "false", "data-particle-mobile-disabled", "false", "data-id", "2114769", "data-element_type", "section", "data-settings", "{\"background_background\":\"gradient\"}", 1, "elementor-section", "elementor-top-section", "elementor-element", "elementor-element-2114769", "elementor-section-boxed", "elementor-section-height-default", "elementor-section-height-default", "elementskit-parallax-multi-container"], [1, "elementor-container", "elementor-column-gap-default", "row"], ["routerLink", "socialmedia", "data-id", "15e8dfe", "data-element_type", "column", "data-settings", "{\"background_background\":\"classic\"}", 1, "elementor-column", "col-lg-4", "col-md-4", "elementor-top-column", "elementor-element", "elementor-element-15e8dfe", 2, "margin-bottom", "20px", "cursor", "pointer"], [1, "elementor-widget-wrap", "elementor-element-populated", 2, "background-image", "url(assets/w9.jpeg)", "padding", "0"], ["data-id", "bd898bd", "data-element_type", "widget", "data-settings", "{\"ekit_we_effect_on\":\"none\"}", "data-widget_type", "elementskit-icon-box.default", 1, "elementor-element", "elementor-element-bd898bd", "ekit-equal-height-enable", "elementor-widget", "elementor-widget-elementskit-icon-box"], [1, "elementor-widget-container"], [1, "ekit-wid-con"], [1, "ekit_global_links"], [1, "elementskit-infobox", "text-", "text-", "icon-lef-right-aligin", "elementor-animation-float"], [1, "box-body"], [1, "elementskit-info-box-title"], ["routerLink", "webdesigning", "data-id", "90c4fc7", "data-element_type", "column", "data-settings", "{\"background_background\":\"classic\"}", 1, "elementor-column", "col-lg-4", "col-md-4", "elementor-top-column", "elementor-element", "elementor-element-90c4fc7", 2, "margin-bottom", "20px", "cursor", "pointer"], [1, "elementor-widget-wrap", "elementor-element-populated", 2, "background-image", "url(assets/w10.jpeg)"], ["data-id", "97b8377", "data-element_type", "widget", "data-settings", "{\"ekit_we_effect_on\":\"none\"}", "data-widget_type", "elementskit-icon-box.default", 1, "elementor-element", "elementor-element-97b8377", "ekit-equal-height-enable", "elementor-widget", "elementor-widget-elementskit-icon-box"], ["routerLink", "graphicdesign", "data-id", "d80343b", "data-element_type", "column", "data-settings", "{\"background_background\":\"classic\"}", 1, "elementor-column", "col-lg-4", "col-md-4", "elementor-top-column", "elementor-element", "elementor-element-d80343b", 2, "margin-bottom", "20px", "cursor", "pointer", 3, "activate"], [1, "elementor-widget-wrap", "elementor-element-populated", 2, "background-image", "url(assets/w12.jpeg)"], ["data-id", "48c4ae0", "data-element_type", "widget", "data-settings", "{\"ekit_we_effect_on\":\"none\"}", "data-widget_type", "elementskit-icon-box.default", 1, "elementor-element", "elementor-element-48c4ae0", "ekit-equal-height-enable", "elementor-widget", "elementor-widget-elementskit-icon-box"], ["id", "feedback"], [1, "quote"], [1, "div-block-25", 2, "display", "flex", "justify-content", "center"], ["data-w-id", "e1335146-f762-6ea5-a1a7-beb0ed54e0db", 1, "div-block-26", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "max"], [1, "div-block-27"], [1, "text-block-3"], ["src", "assets/feedback.jpeg", "loading", "lazy", "sizes", "(max-width: 767px) 37vw, (max-width: 991px) 38vw, 17vw", "srcset", "assets/feedback.jpeg 500w, assets/feedback.jpeg 800w, assets/feedback.jpeg 976w", "alt", "", 1, "image-83"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd4e91904faf8444688ba5_Group%2078.svg", "loading", "lazy", "alt", "", 1, "image-72"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd4e91c235282b8aa09e65_61.svg", "loading", "lazy", "alt", "", 1, "image-73"], ["id", "faq", 1, "faq"], [1, "faq__flex"], ["data-w-id", "b160730a-bcb9-0fc4-d3f0-4a018350bbfe", 1, "faq__left", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "heading-4", 2, "font-size", "72px"], [1, "faq__list"], ["data-w-id", "b2c70162-34ec-fef7-01f0-fdadc767dcaa", 1, "faq__row"], [1, "faq__row-left"], [1, "faq__title"], [1, "faq__answer", 2, "display", "none"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de1a63fe4ae7ccfd483d80_Arrow-Right-1--Streamline-Ultimate.svg", "loading", "lazy", "alt", "", 1, "faq__arrow", 2, "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["data-w-id", "3908ec18-a8a6-7c44-0a76-b0da388557f5", 1, "faq__row"], ["data-w-id", "c059aaf4-52b9-113e-8db0-1a274dc9cc6f", 1, "faq__row"], ["data-w-id", "c57c727e-7ba4-b47b-7ba3-634ba88feb56", 1, "faq__row"], ["data-w-id", "1e6d7f24-c8d2-34f8-4bdc-cc2a548b30b1", 1, "faq__row"], ["data-w-id", "9542141f-41af-2b4c-27d2-b0c9accdb774", 1, "faq__row"], ["data-w-id", "74f57c7e-b9e5-bf15-e914-1689684b9f92", 1, "faq__row"], ["data-w-id", "9070053e-0472-d5de-1a41-78e9691f6e50", 1, "faq__row"], ["data-w-id", "fba94c58-f237-3d41-6cdf-29caacdcec3e", 1, "faq__row"], ["data-w-id", "9c556de5-30a5-0ebf-bd18-15beb5184906", 1, "faq__row"], ["data-w-id", "d86cfb2b-0e25-47cc-e7d7-ddf6595c83c4", 1, "faq__row"], ["data-w-id", "09aae1c8-0fbf-c237-0178-1794e6748f0f", 1, "faq__row"], ["data-w-id", "cf2daa55-f0c7-1a4c-d493-e3435eca7a77", 1, "faq__row"], ["data-w-id", "a79fed07-d776-c799-ce09-74c9ba26ea7b", 1, "call__card", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de1c417a9d965ed9d7def1_d.png", "loading", "lazy", "alt", "", 1, "image-81"], [1, "call__heading", "intro"], ["href", "https://api.whatsapp.com/send?phone=8508609988&text=Hello, I need help with Social Media Marketing!", "target", "_blank", 1, "button", "w-inline-block"], [1, "text-block-6"], ["href", "mailto:digitomonksolution@gmail.com", 1, "link-3"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de1cc490cb97b76d8bf636_Group%2082.svg", "loading", "lazy", "alt", "", 1, "image-78", "_3"], ["id", "sub", 1, "sub"], ["id", "pricing", 1, "section"], [1, "row", "mt-5", "pt-4"], [1, "col-lg-4", "planbox"], [1, "pricing-box", "mt-4"], [2, "display", "flex", "justify-content", "space-between"], [1, "mdi", "mdi-account", "h1"], [1, "f-20"], [1, "mt-4", "pt-2"], [1, "mb-2", "f-18"], [1, "mb-2", 2, "display", "flex"], [1, "mdi", "mdi-checkbox-marked-circle", "text-success", "f-18", "mr-2", 2, "font-size", "25px"], [1, "pricing-plan", "mt-4", "pt-2"], [1, "text-muted"], [1, "plan", "pl-3", "text-dark"], [1, "text-muted", "mb-0"], [1, "mdi", "mdi-account-multiple", "h1"], [1, "mdi", "mdi-account-multiple-plus", "h1"], [1, "mb-2"], [1, "mdi", "mdi-checkbox-marked-circle", "text-success", "f-18", "mr-2"], [1, "section--logo-marquee", 2, "width", "100%", "margin", "0"], [1, "marquee-wrapper", 2, "border-radius", "0"], [1, "marquee-inner1"], [1, "scope__pill", "marquee-item"], [1, "scope__pill", "_3", "marquee-item"], [1, "scope__pill", "_4", "marquee-item"], [1, "scope__pill", "_5", "marquee-item"], [1, "footer"], ["data-w-id", "4bc59bbe-187b-ea36-3122-efb5ac8b4b96", 1, "scope", "_2", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw-heading", 2, "font-size", "72px"], [1, "bb__sub"], [1, "button__wrapper", "m-t-40"], ["data-w-id", "224d725d-e235-14d1-b9e1-a551fd064e72", "href", "https://api.whatsapp.com/send?phone=8508609988&text=Hello, I need help with Social Media Marketing!", "target", "_blank", 1, "button", "w-inline-block", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["href", "#", 1, "footer__logo-wrapper", "w-inline-block"], ["src", "assets/Digito-Monk-Logo-1.png", "loading", "lazy", "alt", "", 1, "footer__text"], ["id", "contact", "data-w-id", "6e593d98-4d75-1f2e-ea69-5280f09c1dbd", 1, "div-block-22", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], ["href", "mailto:digitomonksolution@gmail.com", 1, "link", 2, "font-size", "25px"], ["src", "assets/email.png", 2, "width", "40px"], ["href", "https://www.instagram.com/digito.monk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "target", "_blank", 1, "link", 2, "font-size", "25px"], ["src", "assets/insta.png", 2, "width", "40px"], ["href", "https://api.whatsapp.com/send?phone=8508609988&text=Hello, I need help with Social Media Marketing!", "target", "_blank", 1, "link", 2, "font-size", "25px"], ["src", "assets/whatsapp_PNG21.png", 2, "width", "40px"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd6e3fc5c0b3458918a067_k27.svg", "loading", "lazy", "alt", "", 1, "image22"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd6e3f1a79d3dde1a6be41_line.svg", "loading", "lazy", "alt", "", 1, "image33"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Subscription Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Your Digital Destination to Maximize Your Reach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "and minimize your effort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "See plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Available now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Focus on your business. We'll handle the rest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Connect with your customers where they are active.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Web Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Build a strong online presence and increase sales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function HomeComponent_Template_div_activate_132_listener() { return ctx.resetPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h3", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Graphic Design & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Add a creative touch to your brand & stand out.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u201CDigitomonk has been a strategic partner in our digital marketing endeavors. Their data-driven approach and innovative solutions have significantly enhanced our online visibility and brand recognition.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Chelliah,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "ABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Commonly asked questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Why wouldn't I just hire a full-time designer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Is there a limit to how many requests I can have?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "How fast will I receive my designs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "On average, most requests are completed in just two days or less. However, more complex requests can take longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "What will I\u00A0receive in 48 hours?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Typical requests are delivered in 48 hours on average. This includes a brand concept, landing page, collection of social templates, etc. If a request is much larger in size, expect to receive deliverables every 24 hours until the entire request is complete.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Who are the designers?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "How does the pause feature work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "How do you handle larger requests?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Larger requests are broken down on Designjoy's end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "What programs do you design in?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Most requests are designed using Figma.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "How do I request designs?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "What if I don't like the design?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "No worries! We'll continue to revise the design until you're 100% satisfied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Is there any design work you don't cover?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.), and Adobe InDesign documents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "What if I only have a single request?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Are there any refunds if I don't like the service?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Due to the high quality nature of the work, there will be no refunds issued.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h4", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Book a 15-minute intro call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Schedule now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Prefer to email? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "digitomonksolution@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "section", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h4", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Profile Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Engaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Measuring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h4", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "\u20B925,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "h4", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Templates Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Gathering Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Redeem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h4", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\u20B935,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "i", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h4", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Graphic Design & Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " Target Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "100+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " Video Tuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " Displays ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "h4", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "span", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "\u20B915,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "p", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Per Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Landing pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "h2", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "See if DigitoMonk is right for you. (It totally is.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "p", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Get a guided tour through DigitoMonk, and find out how you and your team can change the way you source design, forever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Book a call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "img", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "img", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "\u00A0Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "\u00A0Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "a", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "img", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "\u00A0WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "img", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "img", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  \r\n  .marquee-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    \r\n    overflow: hidden;\r\n    background-color: #fff;\r\n    padding: 5px;\r\n    border-radius: 50px;\r\n}\r\n  \r\n  .marquee-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    white-space: nowrap;\r\n    width: 200%; \r\n    animation: marquee 5s linear infinite; \r\n}\r\n  \r\n  .marquee-inner1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  width: -moz-fit-content;\r\n  width: fit-content; \r\n  animation: marquee 13s linear infinite; \r\n}\r\n  \r\n  .marquee-item[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 30px; \r\n}\r\n  \r\n  .marquee-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 20px; \r\n}\r\n  \r\n  @keyframes marquee {\r\n    0% {\r\n        transform: translateX(0);\r\n    }\r\n    100% {\r\n        transform: translateX(-50%);\r\n    }\r\n}\r\n  \r\n  .hero__images-wrapper[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n  \r\n}\r\n  \r\n  .hero__image-wrapper[_ngcontent-%COMP%] {\r\n  \r\n  margin-right: 10px; \r\n}\r\n  \r\n  @media screen and (max-width: 767px) {\r\n  .marquee-item[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 5px; \r\n}\r\n\r\n#dent[_ngcontent-%COMP%]{\r\n  \r\n}\r\n}\r\n  \r\n  \r\n  \r\n  .pricing-box[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.1);\r\n  padding: 35px 50px;\r\n  border-radius: 20px;\r\n  position: relative;\r\n}\r\n  \r\n  .pricing-box[_ngcontent-%COMP%]   .plan[_ngcontent-%COMP%] {\r\n  font-size: 34px;\r\n}\r\n  \r\n  .planbox[_ngcontent-%COMP%]{\r\n\r\n  background: white;\r\n  margin-bottom: 10px;\r\n  \r\n}\r\n  \r\n  .pricing-badge[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 999;\r\n  right: 0;\r\n  width: 100%;\r\n  display: block;\r\n  font-size: 15px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  height: 100px;\r\n}\r\n  \r\n  .pricing-badge[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  float: right;\r\n  transform: rotate(45deg);\r\n  right: -67px;\r\n  top: 17px;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 200px;\r\n  font-size: 13px;\r\n  margin: 0;\r\n  padding: 7px 10px;\r\n  font-weight: 500;\r\n  color: #ffffff;\r\n  background: #fb7179;\r\n}\r\n  \r\n  .mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\r\n    margin-bottom: .5rem!important;\r\n}\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n    line-height: 1.7;\r\n}\r\n  \r\n  .pl-3[_ngcontent-%COMP%]\r\n{\r\n    padding-left: 0 !important;\r\n}\r\n  \r\n  *[_ngcontent-%COMP%]{\r\n  font-family: Brockmann Webfont, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXLEVBQUUsNERBQTREO0lBQ3pFLHFDQUFxQyxFQUFFLHFDQUFxQztBQUNoRjs7RUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBRSw0REFBNEQ7RUFDaEYsc0NBQXNDLEVBQUUscUNBQXFDO0FBQy9FOztFQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7RUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0VBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7O0VBSUE7RUFDRSwrREFBK0Q7RUFDL0QsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyxzREFBc0Q7QUFDeEQ7O0VBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUUseUJBQXlCO0FBQy9DOztFQUVBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0U7OEJBQzRCO0FBQzlCO0FBQ0E7O0VBRUE7Ozs7R0FJRzs7RUFHSDtFQUVVLGlEQUFpRDtFQUN6RCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGVBQWU7QUFDakI7O0VBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekM7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFlBQVk7RUFDWixRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxZQUFZO0VBRUosd0JBQXdCO0VBQ2hDLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0VBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7O0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztFQUVBO0VBQ0UsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAubWFycXVlZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogaGVpZ2h0OiAxNTBweDsgQWRqdXN0IGhlaWdodCBhcyBuZWVkZWQgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLm1hcnF1ZWUtaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDIwMCU7IC8qIFR3aWNlIHRoZSB3aWR0aCBvZiB0aGUgdmlld3BvcnQgdG8gZW5zdXJlIHNlYW1sZXNzIGxvb3AgKi9cclxuICAgIGFuaW1hdGlvbjogbWFycXVlZSA1cyBsaW5lYXIgaW5maW5pdGU7IC8qIEFkanVzdCBkdXJhdGlvbiB0byBjb250cm9sIHNwZWVkICovXHJcbn1cclxuXHJcbi5tYXJxdWVlLWlubmVyMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50OyAvKiBUd2ljZSB0aGUgd2lkdGggb2YgdGhlIHZpZXdwb3J0IHRvIGVuc3VyZSBzZWFtbGVzcyBsb29wICovXHJcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDEzcyBsaW5lYXIgaW5maW5pdGU7IC8qIEFkanVzdCBkdXJhdGlvbiB0byBjb250cm9sIHNwZWVkICovXHJcbn1cclxuXHJcbi5tYXJxdWVlLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4OyBcclxufVxyXG5cclxuLm1hcnF1ZWUtaXRlbSBpbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDIwcHg7IFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uaGVyb19faW1hZ2VzLXdyYXBwZXIge1xyXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgS2VlcHMgdGhlIHdyYXBwZXIgaW4gdmlldyB3aGlsZSBzY3JvbGxpbmcgKi9cclxuICAvKiB0b3A6IDUwcHg7IEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICAvKiB3aWR0aDogMTAwJTsgQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7IFByZXZlbnQgaW1hZ2VzIGZyb20gd3JhcHBpbmcgKi9cclxufVxyXG5cclxuLmhlcm9fX2ltYWdlLXdyYXBwZXIge1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW1hZ2VzICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm1hcnF1ZWUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgXHJcbn1cclxuXHJcbiNkZW50e1xyXG4gIC8qIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxufVxyXG5cclxuLyogLmhlcm9fX2ltYWdlLXdyYXBwZXIgaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7IFxyXG4gIGhlaWdodDogYXV0bztcclxufSAqL1xyXG5cclxuICBcclxuLnByaWNpbmctYm94IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMzBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDMwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDM1cHggNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByaWNpbmctYm94IC5wbGFuIHtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuXHJcbi5wbGFuYm94e1xyXG5cclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCBibGFjazsgKi9cclxufVxyXG5cclxuLnByaWNpbmctYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnByaWNpbmctYmFkZ2UgLmJhZGdlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgcmlnaHQ6IC02N3B4O1xyXG4gIHRvcDogMTdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogI2ZiNzE3OTtcclxufVxyXG4ubWItMiwgLm15LTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW0haW1wb3J0YW50O1xyXG59XHJcbnAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLnBsLTNcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbip7XHJcbiAgZm9udC1mYW1pbHk6IEJyb2NrbWFubiBXZWJmb250LCBzYW5zLXNlcmlmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ProductService {
    constructor(http) {
        this.http = http;
    }
    listcategory(name) {
        return this.http.get('https://amacon-server.herokuapp.com/category/' + name);
    }
    postProduct(data) {
        return this.http.post('https://amacon-server.herokuapp.com/addproduct/', data);
    }
    listProduct() {
        return this.http.get('https://amacon-server.herokuapp.com/');
    }
    delProduct(prodid) {
        return this.http.delete('https://amacon-server.herokuapp.com/del/' + prodid);
        //always check if the route is correct because i got err because i missed a slash
    }
    updateProduct(data) {
        return this.http.put('https://amacon-server.herokuapp.com/update', data);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/productlist/productlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/product", a1]; };
function ProductlistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, clo_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clo_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, clo_r1._id));
} }
class ProductlistComponent {
    constructor(product) {
        this.product = product;
        this.product.listProduct().subscribe((data) => {
            this.listData = data;
            // console.log(this.listData);
        });
    }
    ngOnInit() {
    }
}
ProductlistComponent.ɵfac = function ProductlistComponent_Factory(t) { return new (t || ProductlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
ProductlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductlistComponent, selectors: [["app-productlist"]], decls: 2, vars: 1, consts: [[1, "row", "m-2"], ["class", "col-lg-3 m-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "m-3"], [1, "card", 2, "width", "10 rem"], ["alt", "clo.alt", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function ProductlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductlistComponent_div_1_Template, 11, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RsaXN0L3Byb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productlist',
                templateUrl: './productlist.component.html',
                styleUrls: ['./productlist.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/singleproduct/singleproduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/singleproduct/singleproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: SingleproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleproductComponent", function() { return SingleproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SingleproductComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, clo_r1.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clo_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clo_r1.desc);
} }
function SingleproductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleproductComponent_div_0_div_1_Template, 13, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", clo_r1._id == ctx_r0.id);
} }
class SingleproductComponent {
    constructor(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.product.listProduct().subscribe((data) => {
            this.listData = data;
            // console.log(this.listData);
        });
    }
    ngOnInit() {
        this.prod = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        //   
    }
}
SingleproductComponent.ɵfac = function SingleproductComponent_Factory(t) { return new (t || SingleproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SingleproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleproductComponent, selectors: [["app-singleproduct"]], decls: 1, vars: 1, consts: [["class", "col-lg-6 m-5", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "m-5"], [4, "ngIf"], [1, "card", 2, "width", "40 rem"], ["alt", "clo.alt", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "cart", 1, "btn", "btn-primary"]], template: function SingleproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SingleproductComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZXByb2R1Y3Qvc2luZ2xlcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleproductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-singleproduct',
                templateUrl: './singleproduct.component.html',
                styleUrls: ['./singleproduct.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/social-media/social-media.component.ts":
/*!********************************************************!*\
  !*** ./src/app/social-media/social-media.component.ts ***!
  \********************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lightgallery/angular/9 */ "./node_modules/lightgallery/angular/9/fesm2015/lightgallery-angular-9.js");





class SocialMediaComponent {
    constructor() {
        this.settings = {
            counter: false,
            download: false,
            plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]]
        };
        this.onBeforeSlide = (detail) => {
            const { index, prevIndex } = detail;
            console.log(index, prevIndex);
        };
    }
    ngOnInit() {
    }
    setPlan() {
        localStorage.setItem("plan", "1");
    }
}
SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) { return new (t || SocialMediaComponent)(); };
SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["app-social-media"]], decls: 157, vars: 2, consts: [["id", "hiw", 1, "hiw"], [1, "container"], ["data-w-id", "283826cb-a957-8f8e-c810-93559e98a816", 1, "hiw__wrapper", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw-heading", 2, "font-size", "72px"], [1, "w-layout-grid", "grid"], ["id", "w-node-_4d1357d3-311e-f62e-4900-aa7c1e085e49-25345308", "data-w-id", "4d1357d3-311e-f62e-4900-aa7c1e085e49", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "p-small", 2, "margin-bottom", "30px"], [1, "hiw__icon-wrapper", "subscrobe"], ["data-w-id", "6bec910e-5701-0711-8bae-6915e2385242", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7682bf60c6a6b7ddbe5b_Animation%20-%201709078107438.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "2.7", "data-duration", "0", 1, "arrows"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "width", "100", "height", "100", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_25"], ["width", "100", "height", "100", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_25)"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,44.957298278808594,64.1725845336914)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(3,0,0,3,0,0)"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M10.890999794006348,-4.881999969482422 C10.96500015258789,-5.414999961853027 10.581000328063965,-5.906000137329102 10.034000396728516,-5.978000164031982 C9.487000465393066,-6.050000190734863 8.982999801635742,-5.677000045776367 8.909000396728516,-5.144000053405762 C8.909000396728516,-5.144000053405762 8.46399974822998,-1.9450000524520874 8.46399974822998,-1.9450000524520874 C6.460000038146973,-4.261000156402588 3.441999912261963,-5.695000171661377 0.10000000149011612,-5.695000171661377 C-5.952000141143799,-5.695000171661377 -10.899999618530273,-0.8790000081062317 -10.899999618530273,5.013000011444092 C-10.899999618530273,5.551000118255615 -10.45199966430664,5.986999988555908 -9.899999618530273,5.986999988555908 C-9.347999572753906,5.986999988555908 -8.899999618530273,5.551000118255615 -8.899999618530273,5.013000011444092 C-8.899999618530273,0.19699999690055847 -4.8480000495910645,-3.747999906539917 0.10000000149011612,-3.747999906539917 C2.930000066757202,-3.747999906539917 5.456999778747559,-2.5 7.083000183105469,-0.5139999985694885 C7.083000183105469,-0.5139999985694885 3.2320001125335693,-1.0140000581741333 3.2320001125335693,-1.0140000581741333 C2.684999942779541,-1.0850000381469727 2.181999921798706,-0.7099999785423279 2.1089999675750732,-0.1770000010728836 C2.0360000133514404,0.35600000619888306 2.4210000038146973,0.8450000286102295 2.9679999351501465,0.9160000085830688 C2.9679999351501465,0.9160000085830688 8.968000411987305,1.6950000524520874 8.968000411987305,1.6950000524520874 C9.515000343322754,1.7660000324249268 10.017000198364258,1.3930000066757202 10.090999603271484,0.8610000014305115 C10.090999603271484,0.8610000014305115 10.890999794006348,-4.881999969482422 10.890999794006348,-4.881999969482422z"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,55.04176712036133,35.82706069946289)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M9.899999618530273,-5.986999988555908 C10.45199966430664,-5.986999988555908 10.899999618530273,-5.551000118255615 10.899999618530273,-5.013000011444092 C10.899999618530273,0.8790000081062317 5.952000141143799,5.695000171661377 -0.10000000149011612,5.695000171661377 C-3.441999912261963,5.695000171661377 -6.459000110626221,4.26200008392334 -8.463000297546387,1.9459999799728394 C-8.463000297546387,1.9459999799728394 -8.909000396728516,5.144000053405762 -8.909000396728516,5.144000053405762 C-8.982999801635742,5.677000045776367 -9.487000465393066,6.050000190734863 -10.034000396728516,5.978000164031982 C-10.581000328063965,5.906000137329102 -10.96500015258789,5.414999961853027 -10.890999794006348,4.881999969482422 C-10.890999794006348,4.881999969482422 -10.090999603271484,-0.8610000014305115 -10.090999603271484,-0.8610000014305115 C-10.017000198364258,-1.3930000066757202 -9.515000343322754,-1.7660000324249268 -8.968000411987305,-1.6950000524520874 C-8.968000411987305,-1.6950000524520874 -2.9679999351501465,-0.9160000085830688 -2.9679999351501465,-0.9160000085830688 C-2.4210000038146973,-0.8450000286102295 -2.0350000858306885,-0.35600000619888306 -2.1080000400543213,0.1770000010728836 C-2.180999994277954,0.7099999785423279 -2.684999942779541,1.0839999914169312 -3.2320001125335693,1.0130000114440918 C-3.2320001125335693,1.0130000114440918 -7.083000183105469,0.5139999985694885 -7.083000183105469,0.5139999985694885 C-5.456999778747559,2.5 -2.930000066757202,3.747999906539917 -0.10000000149011612,3.747999906539917 C4.8480000495910645,3.747999906539917 8.899999618530273,-0.19699999690055847 8.899999618530273,-5.013000011444092 C8.899999618530273,-5.551000118255615 9.347999572753906,-5.986999988555908 9.899999618530273,-5.986999988555908z"], [1, "p-small"], ["id", "w-node-_73d92408-3dab-587e-0b05-17dcbbe15620-25345308", "data-w-id", "73d92408-3dab-587e-0b05-17dcbbe15620", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "folder"], ["data-w-id", "0ba5e2ac-eb5c-3ac2-fa81-2f6558a3fcce", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7aab8fc2f24ac753b3fa_qjUFzKKtCP.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "3.3666666666666667", "data-duration", "0", 1, "lottie-animation-2"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 400 400", "width", "400", "height", "400", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_32"], ["width", "400", "height", "400", "x", "0", "y", "0"], ["id", "__lottie_element_35"], ["d", "M0,0 L400,0 L400,400 L0,400z"], ["clip-path", "url(#__lottie_element_32)"], ["clip-path", "url(#__lottie_element_35)", "transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,9.101822853088379,-27.503589630126953)", "opacity", "1", 2, "display", "block"], ["transform", "matrix(1,0,0,1,189.48300170898438,200)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(1,0,0,1,0,0)"], ["fill", "rgb(244,207,23)", "fill-opacity", "1", "d", " M94.27100372314453,100.96099853515625 C94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 C-101.66200256347656,100.96099853515625 -107.65299987792969,94.96900177001953 -107.65299987792969,87.5780029296875 C-107.65299987792969,87.5780029296875 -107.65299987792969,-87.5780029296875 -107.65299987792969,-87.5780029296875 C-107.65299987792969,-94.96900177001953 -101.66200256347656,-100.96099853515625 -94.27100372314453,-100.96099853515625 C-94.27100372314453,-100.96099853515625 -54.79899978637695,-100.96099853515625 -54.79899978637695,-100.96099853515625 C-52.00400161743164,-100.96099853515625 -49.38999938964844,-99.58300018310547 -47.810001373291016,-97.27799987792969 C-47.810001373291016,-97.27799987792969 -36.61800003051758,-80.94300079345703 -36.61800003051758,-80.94300079345703 C-35.03799819946289,-78.63800048828125 -32.42399978637695,-77.26000213623047 -29.628999710083008,-77.26000213623047 C-29.628999710083008,-77.26000213623047 94.27100372314453,-77.26000213623047 94.27100372314453,-77.26000213623047 C101.66200256347656,-77.26000213623047 107.65299987792969,-71.26799774169922 107.65299987792969,-63.87699890136719 C107.65299987792969,-63.87699890136719 107.65299987792969,87.5780029296875 107.65299987792969,87.5780029296875 C107.65299987792969,94.96900177001953 101.66200256347656,100.96099853515625 94.27100372314453,100.96099853515625z"], ["transform", "matrix(1,0,0,1,189.48300170898438,190.16700744628906)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,255,255)", "fill-opacity", "1", "d", " M70.98163604736328,86.79447174072266 C70.98163604736328,86.79447174072266 -70.78938293457031,86.79447174072266 -70.78938293457031,86.79447174072266 C-75.94638061523438,86.79447174072266 -80.12738037109375,82.61345672607422 -80.12738037109375,77.45645141601562 C-80.12738037109375,77.45645141601562 -80.230712890625,-99.98755645751953 -80.230712890625,-99.98755645751953 C-80.230712890625,-105.1445541381836 -76.04969787597656,-109.32555389404297 -70.89269256591797,-109.32555389404297 C-70.89269256591797,-109.32555389404297 70.87928771972656,-109.32555389404297 70.87928771972656,-109.32555389404297 C76.03629302978516,-109.32555389404297 80.21729278564453,-105.1445541381836 80.21729278564453,-99.98755645751953 C80.21729278564453,-99.98755645751953 80.31963348388672,77.45645141601562 80.31963348388672,77.45645141601562 C80.31963348388672,82.61345672607422 76.13863372802734,86.79447174072266 70.98163604736328,86.79447174072266z"], ["transform", "matrix(1,0,0,1,189.48300170898438,103.73965454101562)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-56.0369987487793,0 C-56.0369987487793,0 56.0369987487793,0 56.0369987487793,0"], ["transform", "matrix(1,0,0,1,170.60299682617188,125.60265350341797)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-37.15700149536133,0 C-37.15700149536133,0 5.85099983215332,0 18.621999740600586,0"], ["transform", "matrix(1,0,0,1,183.2169952392578,147.4656524658203)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-49.77000045776367,0 C-49.77000045776367,0 -41.220001220703125,0 -29.55699920654297,0"], ["transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,200.83004760742188,232.67843627929688)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,219,37)", "fill-opacity", "1", "d", " M78.59400177001953,69.8290023803711 C78.59400177001953,69.8290023803711 -110.04199981689453,69.8290023803711 -110.04199981689453,69.8290023803711 C-117.55699920654297,69.8290023803711 -122.68699645996094,64.33200073242188 -121.5,57.54999923706055 C-121.5,57.54999923706055 -94.35099792480469,-57.54999923706055 -94.35099792480469,-57.54999923706055 C-93.16400146484375,-64.33200073242188 -86.10900115966797,-69.8290023803711 -78.59400177001953,-69.8290023803711 C-78.59400177001953,-69.8290023803711 110.04199981689453,-69.8290023803711 110.04199981689453,-69.8290023803711 C117.55699920654297,-69.8290023803711 122.68699645996094,-64.33200073242188 121.5,-57.54999923706055 C121.5,-57.54999923706055 94.35099792480469,57.54999923706055 94.35099792480469,57.54999923706055 C93.16400146484375,64.33200073242188 86.10900115966797,69.8290023803711 78.59400177001953,69.8290023803711z"], ["id", "w-node-_6d922881-bfff-0987-da98-c889636cd530-25345308", "data-w-id", "6d922881-bfff-0987-da98-c889636cd530", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "thum"], ["data-w-id", "386b46d3-b9a9-cafd-ce41-01c643b61282", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7bef199fcae74c186bfc_zrECMo2QK3.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "1.2", "data-duration", "0", 1, "lottie-animation-3"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 500 500", "width", "500", "height", "500", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_56"], ["width", "500", "height", "500", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_56)"], ["transform", "matrix(0.9999037384986877,-0.013874701224267483,0.013874701224267483,0.9999037384986877,100.42475891113281,88.44580078125)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M61.361000061035156,333.04998779296875 C61.361000061035156,333.04998779296875 29.204999923706055,333.04998779296875 29.204999923706055,333.04998779296875 C23.100000381469727,333.04998779296875 18.152000427246094,328.10198974609375 18.152000427246094,321.99700927734375 C18.152000427246094,321.99700927734375 18.152000427246094,208.4459991455078 18.152000427246094,208.4459991455078 C18.152000427246094,202.34100341796875 23.100000381469727,197.39300537109375 29.204999923706055,197.39300537109375 C29.204999923706055,197.39300537109375 61.361000061035156,197.39300537109375 61.361000061035156,197.39300537109375 C67.46600341796875,197.39300537109375 72.41500091552734,202.34100341796875 72.41500091552734,208.4459991455078 C72.41500091552734,208.4459991455078 72.41500091552734,321.99700927734375 72.41500091552734,321.99700927734375 C72.41500091552734,328.10198974609375 67.46600341796875,333.04998779296875 61.361000061035156,333.04998779296875z"], ["fill", "rgb(255,143,231)", "fill-opacity", "1", "d", " M255.0970001220703,208.5760040283203 C255.0970001220703,189.4290008544922 235.5570068359375,194.50799560546875 216.41000366210938,194.50799560546875 C216.41000366210938,194.50799560546875 206.7414093017578,195.27224731445312 206.7414093017578,195.27224731445312 C218.94088745117188,183.07586669921875 224.79808044433594,165.303955078125 224.44078063964844,151.89186096191406 C224.06423950195312,137.78448486328125 216.4313507080078,132.87713623046875 212.21478271484375,131.47091674804688 C207.29747009277344,128.3720703125 194.12283325195312,128.95802307128906 192.46543884277344,132.503173828125 C190.74058532714844,135.59725952148438 189.94137573242188,137.17002868652344 188.30519104003906,139.9917449951172 C181.2809295654297,152.4758758544922 170.57467651367188,164.41656494140625 156.00704956054688,176.28872680664062 C138.14834594726562,190.8435821533203 113.77799987792969,203.052001953125 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46900177001953,217.49000549316406 83.46900177001953,217.49000549316406 C83.46900177001953,217.49000549316406 83.46800231933594,217.49000549316406 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46800231933594,313.9580078125 83.46800231933594,313.9580078125 C83.46800231933594,313.9580078125 149.6529998779297,326.2860107421875 149.6529998779297,326.2860107421875 C157.906005859375,327.822998046875 169.43299865722656,328.4070129394531 187.64599609375,327.4020080566406 C205.85899353027344,326.3970031738281 223.37100219726562,320.12799072265625 223.37100219726562,320.12799072265625 C234.2270050048828,316.37799072265625 241.8419952392578,306.5690002441406 242.78500366210938,295.12298583984375 C242.78500366210938,295.12298583984375 247.32400512695312,251.57899475097656 247.32400512695312,251.57899475097656 C250.0030059814453,246.55799865722656 251.78399658203125,241.91099548339844 251.78399658203125,239.0279998779297 C251.78399658203125,239.0279998779297 255.0970001220703,208.5760040283203 255.0970001220703,208.5760040283203z"], ["transform", "matrix(1,0,0,1,81,85)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(0,0,0)", "stroke-opacity", "1", "stroke-width", "20", "d", "M0 0"], [1, "p-small", "revise"], [1, "button__wrapper", "m-t-40"], ["routerLink", "/contact", "data-w-id", "372e554a-cdb5-8116-3563-710a220123cb", 1, "button", "w-inline-block", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d", 3, "click"], [1, "text-block-2"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd2283937c19061858f77d_Group%2076.svg", "loading", "lazy", "alt", "", 1, "image-70"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd230f503738ef5ddfd8ee_Group%2077.svg", "loading", "lazy", "alt", "", 1, "image-71"], [1, "row", 2, "display", "flex", "justify-content", "space-around", 3, "settings", "onBeforeSlide"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/DM16.png", "data-responsive", "assets/DM16.png 480, assets/DM16.png 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/DM16.png", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w1.jpeg", "data-responsive", "assets/w1.jpeg 480, assets/w1.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w1.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w2.jpeg", "data-responsive", "assets/w2.jpeg 480, assets/w2.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w2.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w3.jpeg", "data-responsive", "assets/w3.jpeg 480, assets/w3.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w3.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w13.jpg", "data-responsive", "assets/w13.jpg 480, assets/w13.jpg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w13.jpg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w5.jpeg", "data-responsive", "assets/w5.jpeg 480, assets/w5.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w5.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w4.jpeg", "data-responsive", "assets/w4.jpeg 480, assets/w4.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w4.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w6.jpeg", "data-responsive", "assets/w6.jpeg 480, assets/w6.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w6.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w14.jpg", "data-responsive", "assets/w14.jpg 480, assets/w14.jpg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w14.jpg", 1, "img-responsive"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ready to elevate your social media game? Let\u2019s dive in today !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clipPath", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Accurate, Complete, Active Links to Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Posting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "clipPath", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clipPath", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Useful, Entertaining, Relevant Post, Photos, Videos, Lives, Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Engaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Like, Share, Comment and Follow Customers, Followers, Influencers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Paid Methods of Reaching Targeted Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Measuring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Used Platform and Website Analytics to see what's working");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialMediaComponent_Template_a_click_133_listener() { return ctx.setPlan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "See plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "lightgallery", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__["LightgalleryComponent"]], styles: ["@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');\r\n@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.gallery-item[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\nlightgallery[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.img-responsive[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjtBQUMxRixxRkFBcUY7QUFDckY7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsLW1lZGlhL3NvY2lhbC1tZWRpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGlnaHRnYWxsZXJ5QDIuMC4wLWJldGEuNC9jc3MvbGlnaHRnYWxsZXJ5LmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9saWdodGdhbGxlcnlAMi4wLjAtYmV0YS40L2Nzcy9sZy16b29tLmNzcycpO1xyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmdhbGxlcnktaXRlbSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmxpZ2h0Z2FsbGVyeSBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLXJlc3BvbnNpdmVcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-media',
                templateUrl: './social-media.component.html',
                styleUrls: ['./social-media.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocialComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], decls: 84, vars: 0, consts: [["id", "hiw", 1, "hiw"], [1, "container"], ["data-w-id", "283826cb-a957-8f8e-c810-93559e98a816", 1, "hiw__wrapper", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw-heading", 2, "font-size", "72px"], [1, "hiw__sub"], [1, "w-layout-grid", "grid"], ["id", "w-node-_4d1357d3-311e-f62e-4900-aa7c1e085e49-25345308", "data-w-id", "4d1357d3-311e-f62e-4900-aa7c1e085e49", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "subscrobe"], ["data-w-id", "6bec910e-5701-0711-8bae-6915e2385242", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7682bf60c6a6b7ddbe5b_Animation%20-%201709078107438.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "2.7", "data-duration", "0", 1, "arrows"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "width", "100", "height", "100", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_25"], ["width", "100", "height", "100", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_25)"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,44.957298278808594,64.1725845336914)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(3,0,0,3,0,0)"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M10.890999794006348,-4.881999969482422 C10.96500015258789,-5.414999961853027 10.581000328063965,-5.906000137329102 10.034000396728516,-5.978000164031982 C9.487000465393066,-6.050000190734863 8.982999801635742,-5.677000045776367 8.909000396728516,-5.144000053405762 C8.909000396728516,-5.144000053405762 8.46399974822998,-1.9450000524520874 8.46399974822998,-1.9450000524520874 C6.460000038146973,-4.261000156402588 3.441999912261963,-5.695000171661377 0.10000000149011612,-5.695000171661377 C-5.952000141143799,-5.695000171661377 -10.899999618530273,-0.8790000081062317 -10.899999618530273,5.013000011444092 C-10.899999618530273,5.551000118255615 -10.45199966430664,5.986999988555908 -9.899999618530273,5.986999988555908 C-9.347999572753906,5.986999988555908 -8.899999618530273,5.551000118255615 -8.899999618530273,5.013000011444092 C-8.899999618530273,0.19699999690055847 -4.8480000495910645,-3.747999906539917 0.10000000149011612,-3.747999906539917 C2.930000066757202,-3.747999906539917 5.456999778747559,-2.5 7.083000183105469,-0.5139999985694885 C7.083000183105469,-0.5139999985694885 3.2320001125335693,-1.0140000581741333 3.2320001125335693,-1.0140000581741333 C2.684999942779541,-1.0850000381469727 2.181999921798706,-0.7099999785423279 2.1089999675750732,-0.1770000010728836 C2.0360000133514404,0.35600000619888306 2.4210000038146973,0.8450000286102295 2.9679999351501465,0.9160000085830688 C2.9679999351501465,0.9160000085830688 8.968000411987305,1.6950000524520874 8.968000411987305,1.6950000524520874 C9.515000343322754,1.7660000324249268 10.017000198364258,1.3930000066757202 10.090999603271484,0.8610000014305115 C10.090999603271484,0.8610000014305115 10.890999794006348,-4.881999969482422 10.890999794006348,-4.881999969482422z"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,55.04176712036133,35.82706069946289)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M9.899999618530273,-5.986999988555908 C10.45199966430664,-5.986999988555908 10.899999618530273,-5.551000118255615 10.899999618530273,-5.013000011444092 C10.899999618530273,0.8790000081062317 5.952000141143799,5.695000171661377 -0.10000000149011612,5.695000171661377 C-3.441999912261963,5.695000171661377 -6.459000110626221,4.26200008392334 -8.463000297546387,1.9459999799728394 C-8.463000297546387,1.9459999799728394 -8.909000396728516,5.144000053405762 -8.909000396728516,5.144000053405762 C-8.982999801635742,5.677000045776367 -9.487000465393066,6.050000190734863 -10.034000396728516,5.978000164031982 C-10.581000328063965,5.906000137329102 -10.96500015258789,5.414999961853027 -10.890999794006348,4.881999969482422 C-10.890999794006348,4.881999969482422 -10.090999603271484,-0.8610000014305115 -10.090999603271484,-0.8610000014305115 C-10.017000198364258,-1.3930000066757202 -9.515000343322754,-1.7660000324249268 -8.968000411987305,-1.6950000524520874 C-8.968000411987305,-1.6950000524520874 -2.9679999351501465,-0.9160000085830688 -2.9679999351501465,-0.9160000085830688 C-2.4210000038146973,-0.8450000286102295 -2.0350000858306885,-0.35600000619888306 -2.1080000400543213,0.1770000010728836 C-2.180999994277954,0.7099999785423279 -2.684999942779541,1.0839999914169312 -3.2320001125335693,1.0130000114440918 C-3.2320001125335693,1.0130000114440918 -7.083000183105469,0.5139999985694885 -7.083000183105469,0.5139999985694885 C-5.456999778747559,2.5 -2.930000066757202,3.747999906539917 -0.10000000149011612,3.747999906539917 C4.8480000495910645,3.747999906539917 8.899999618530273,-0.19699999690055847 8.899999618530273,-5.013000011444092 C8.899999618530273,-5.551000118255615 9.347999572753906,-5.986999988555908 9.899999618530273,-5.986999988555908z"], [1, "p-small"], ["id", "w-node-_73d92408-3dab-587e-0b05-17dcbbe15620-25345308", "data-w-id", "73d92408-3dab-587e-0b05-17dcbbe15620", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "folder"], ["data-w-id", "0ba5e2ac-eb5c-3ac2-fa81-2f6558a3fcce", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7aab8fc2f24ac753b3fa_qjUFzKKtCP.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "3.3666666666666667", "data-duration", "0", 1, "lottie-animation-2"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 400 400", "width", "400", "height", "400", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_32"], ["width", "400", "height", "400", "x", "0", "y", "0"], ["id", "__lottie_element_35"], ["d", "M0,0 L400,0 L400,400 L0,400z"], ["clip-path", "url(#__lottie_element_32)"], ["clip-path", "url(#__lottie_element_35)", "transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,9.101822853088379,-27.503589630126953)", "opacity", "1", 2, "display", "block"], ["transform", "matrix(1,0,0,1,189.48300170898438,200)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(1,0,0,1,0,0)"], ["fill", "rgb(244,207,23)", "fill-opacity", "1", "d", " M94.27100372314453,100.96099853515625 C94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 C-101.66200256347656,100.96099853515625 -107.65299987792969,94.96900177001953 -107.65299987792969,87.5780029296875 C-107.65299987792969,87.5780029296875 -107.65299987792969,-87.5780029296875 -107.65299987792969,-87.5780029296875 C-107.65299987792969,-94.96900177001953 -101.66200256347656,-100.96099853515625 -94.27100372314453,-100.96099853515625 C-94.27100372314453,-100.96099853515625 -54.79899978637695,-100.96099853515625 -54.79899978637695,-100.96099853515625 C-52.00400161743164,-100.96099853515625 -49.38999938964844,-99.58300018310547 -47.810001373291016,-97.27799987792969 C-47.810001373291016,-97.27799987792969 -36.61800003051758,-80.94300079345703 -36.61800003051758,-80.94300079345703 C-35.03799819946289,-78.63800048828125 -32.42399978637695,-77.26000213623047 -29.628999710083008,-77.26000213623047 C-29.628999710083008,-77.26000213623047 94.27100372314453,-77.26000213623047 94.27100372314453,-77.26000213623047 C101.66200256347656,-77.26000213623047 107.65299987792969,-71.26799774169922 107.65299987792969,-63.87699890136719 C107.65299987792969,-63.87699890136719 107.65299987792969,87.5780029296875 107.65299987792969,87.5780029296875 C107.65299987792969,94.96900177001953 101.66200256347656,100.96099853515625 94.27100372314453,100.96099853515625z"], ["transform", "matrix(1,0,0,1,189.48300170898438,190.16700744628906)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,255,255)", "fill-opacity", "1", "d", " M70.98163604736328,86.79447174072266 C70.98163604736328,86.79447174072266 -70.78938293457031,86.79447174072266 -70.78938293457031,86.79447174072266 C-75.94638061523438,86.79447174072266 -80.12738037109375,82.61345672607422 -80.12738037109375,77.45645141601562 C-80.12738037109375,77.45645141601562 -80.230712890625,-99.98755645751953 -80.230712890625,-99.98755645751953 C-80.230712890625,-105.1445541381836 -76.04969787597656,-109.32555389404297 -70.89269256591797,-109.32555389404297 C-70.89269256591797,-109.32555389404297 70.87928771972656,-109.32555389404297 70.87928771972656,-109.32555389404297 C76.03629302978516,-109.32555389404297 80.21729278564453,-105.1445541381836 80.21729278564453,-99.98755645751953 C80.21729278564453,-99.98755645751953 80.31963348388672,77.45645141601562 80.31963348388672,77.45645141601562 C80.31963348388672,82.61345672607422 76.13863372802734,86.79447174072266 70.98163604736328,86.79447174072266z"], ["transform", "matrix(1,0,0,1,189.48300170898438,103.73965454101562)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-56.0369987487793,0 C-56.0369987487793,0 56.0369987487793,0 56.0369987487793,0"], ["transform", "matrix(1,0,0,1,170.60299682617188,125.60265350341797)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-37.15700149536133,0 C-37.15700149536133,0 5.85099983215332,0 18.621999740600586,0"], ["transform", "matrix(1,0,0,1,183.2169952392578,147.4656524658203)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-49.77000045776367,0 C-49.77000045776367,0 -41.220001220703125,0 -29.55699920654297,0"], ["transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,200.83004760742188,232.67843627929688)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,219,37)", "fill-opacity", "1", "d", " M78.59400177001953,69.8290023803711 C78.59400177001953,69.8290023803711 -110.04199981689453,69.8290023803711 -110.04199981689453,69.8290023803711 C-117.55699920654297,69.8290023803711 -122.68699645996094,64.33200073242188 -121.5,57.54999923706055 C-121.5,57.54999923706055 -94.35099792480469,-57.54999923706055 -94.35099792480469,-57.54999923706055 C-93.16400146484375,-64.33200073242188 -86.10900115966797,-69.8290023803711 -78.59400177001953,-69.8290023803711 C-78.59400177001953,-69.8290023803711 110.04199981689453,-69.8290023803711 110.04199981689453,-69.8290023803711 C117.55699920654297,-69.8290023803711 122.68699645996094,-64.33200073242188 121.5,-57.54999923706055 C121.5,-57.54999923706055 94.35099792480469,57.54999923706055 94.35099792480469,57.54999923706055 C93.16400146484375,64.33200073242188 86.10900115966797,69.8290023803711 78.59400177001953,69.8290023803711z"], ["id", "w-node-_6d922881-bfff-0987-da98-c889636cd530-25345308", "data-w-id", "6d922881-bfff-0987-da98-c889636cd530", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "thum"], ["data-w-id", "386b46d3-b9a9-cafd-ce41-01c643b61282", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7bef199fcae74c186bfc_zrECMo2QK3.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "1.2", "data-duration", "0", 1, "lottie-animation-3"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 500 500", "width", "500", "height", "500", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_56"], ["width", "500", "height", "500", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_56)"], ["transform", "matrix(0.9999037384986877,-0.013874701224267483,0.013874701224267483,0.9999037384986877,100.42475891113281,88.44580078125)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M61.361000061035156,333.04998779296875 C61.361000061035156,333.04998779296875 29.204999923706055,333.04998779296875 29.204999923706055,333.04998779296875 C23.100000381469727,333.04998779296875 18.152000427246094,328.10198974609375 18.152000427246094,321.99700927734375 C18.152000427246094,321.99700927734375 18.152000427246094,208.4459991455078 18.152000427246094,208.4459991455078 C18.152000427246094,202.34100341796875 23.100000381469727,197.39300537109375 29.204999923706055,197.39300537109375 C29.204999923706055,197.39300537109375 61.361000061035156,197.39300537109375 61.361000061035156,197.39300537109375 C67.46600341796875,197.39300537109375 72.41500091552734,202.34100341796875 72.41500091552734,208.4459991455078 C72.41500091552734,208.4459991455078 72.41500091552734,321.99700927734375 72.41500091552734,321.99700927734375 C72.41500091552734,328.10198974609375 67.46600341796875,333.04998779296875 61.361000061035156,333.04998779296875z"], ["fill", "rgb(255,143,231)", "fill-opacity", "1", "d", " M255.0970001220703,208.5760040283203 C255.0970001220703,189.4290008544922 235.5570068359375,194.50799560546875 216.41000366210938,194.50799560546875 C216.41000366210938,194.50799560546875 206.7414093017578,195.27224731445312 206.7414093017578,195.27224731445312 C218.94088745117188,183.07586669921875 224.79808044433594,165.303955078125 224.44078063964844,151.89186096191406 C224.06423950195312,137.78448486328125 216.4313507080078,132.87713623046875 212.21478271484375,131.47091674804688 C207.29747009277344,128.3720703125 194.12283325195312,128.95802307128906 192.46543884277344,132.503173828125 C190.74058532714844,135.59725952148438 189.94137573242188,137.17002868652344 188.30519104003906,139.9917449951172 C181.2809295654297,152.4758758544922 170.57467651367188,164.41656494140625 156.00704956054688,176.28872680664062 C138.14834594726562,190.8435821533203 113.77799987792969,203.052001953125 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46900177001953,217.49000549316406 83.46900177001953,217.49000549316406 C83.46900177001953,217.49000549316406 83.46800231933594,217.49000549316406 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46800231933594,313.9580078125 83.46800231933594,313.9580078125 C83.46800231933594,313.9580078125 149.6529998779297,326.2860107421875 149.6529998779297,326.2860107421875 C157.906005859375,327.822998046875 169.43299865722656,328.4070129394531 187.64599609375,327.4020080566406 C205.85899353027344,326.3970031738281 223.37100219726562,320.12799072265625 223.37100219726562,320.12799072265625 C234.2270050048828,316.37799072265625 241.8419952392578,306.5690002441406 242.78500366210938,295.12298583984375 C242.78500366210938,295.12298583984375 247.32400512695312,251.57899475097656 247.32400512695312,251.57899475097656 C250.0030059814453,246.55799865722656 251.78399658203125,241.91099548339844 251.78399658203125,239.0279998779297 C251.78399658203125,239.0279998779297 255.0970001220703,208.5760040283203 255.0970001220703,208.5760040283203z"], ["transform", "matrix(1,0,0,1,81,85)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(0,0,0)", "stroke-opacity", "1", "stroke-width", "20", "d", "M0 0"], [1, "p-small", "revise"], [1, "button__wrapper", "m-t-40"], ["href", "#plans", "data-w-id", "372e554a-cdb5-8116-3563-710a220123cb", 1, "button", "w-inline-block", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "text-block-2"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd2283937c19061858f77d_Group%2076.svg", "loading", "lazy", "alt", "", 1, "image-70"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd230f503738ef5ddfd8ee_Group%2077.svg", "loading", "lazy", "alt", "", 1, "image-71"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We didn\u2019t reinvent the wheel. Just design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Design as you know it is out the door. Design as you want it just arrived.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clipPath", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subscribe to a plan & request as many designs as you\u2019d like.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "clipPath", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "clipPath", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Receive your design within two business days on average.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "We'll revise the designs until you're 100% satisfied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "See plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function UpdateComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
function UpdateComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", cat_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r3);
} }
class UpdateComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.category = ['Women', 'Groceries', 'Electronics'];
        this.productService.listProduct().subscribe((data) => {
            this.listData = data;
        });
        this.ProdForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'select': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('give a unique id'),
            '_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Object ID-do not modify'),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('copy image address'),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    fill() {
        this.userForm.get('name').setValue(this.selectedproduct.name);
        this.userForm.get('_id').setValue(this.selectedproduct._id);
        this.userForm.get('id').setValue(this.selectedproduct.id);
        this.userForm.get('category').setValue(this.selectedproduct.category);
        this.userForm.get('price').setValue(this.selectedproduct.price);
        this.userForm.get('image').setValue(this.selectedproduct.image);
        this.userForm.get('description').setValue(this.selectedproduct.description);
    }
    update() {
        this.productService.updateProduct(this.userForm.value).subscribe((data) => {
            alert(this.userForm.value.name + ' item has been updated!');
            this.router.navigate(['/']);
        });
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-update"]], decls: 38, vars: 5, consts: [[1, "container"], [3, "formGroup"], [1, "col-lg-3"], ["for", ""], ["formControlName", "select", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", "disabled", "", "selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "formGroup", "submit"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "number", "formControlName", "id", 1, "form-control"], ["formControlName", "category", 1, "custom-select"], ["value", "", "disabled", ""], ["type", "text", "formControlName", "price", 1, "form-control"], ["type", "text", "formControlName", "image", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], [1, "col-lg-3", "p-4"], ["type", "submit", "value", "UPDATE", 1, "btn-btn-primary"], [3, "ngValue"]], template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a product to modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateComponent_Template_select_ngModelChange_5_listener($event) { return ctx.selectedproduct = $event; })("change", function UpdateComponent_Template_select_change_5_listener() { return ctx.fill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UpdateComponent_option_7_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UpdateComponent_Template_form_submit_8_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Choose the Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UpdateComponent_option_23_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ProdForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedproduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update',
                templateUrl: './update.component.html',
                styleUrls: ['./update.component.css']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/web-design/web-design.component.ts":
/*!****************************************************!*\
  !*** ./src/app/web-design/web-design.component.ts ***!
  \****************************************************/
/*! exports provided: WebDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDesignComponent", function() { return WebDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lightgallery/angular/9 */ "./node_modules/lightgallery/angular/9/fesm2015/lightgallery-angular-9.js");





class WebDesignComponent {
    constructor() {
        this.settings = {
            counter: false,
            download: false,
            plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]]
        };
        this.onBeforeSlide = (detail) => {
            const { index, prevIndex } = detail;
            console.log(index, prevIndex);
        };
    }
    ngOnInit() {
    }
    setPlan() {
        localStorage.setItem("plan", "3");
    }
}
WebDesignComponent.ɵfac = function WebDesignComponent_Factory(t) { return new (t || WebDesignComponent)(); };
WebDesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebDesignComponent, selectors: [["app-web-design"]], decls: 103, vars: 2, consts: [["id", "hiw", 1, "hiw"], [1, "container"], ["data-w-id", "283826cb-a957-8f8e-c810-93559e98a816", 1, "hiw__wrapper", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw-heading", 2, "font-size", "72px"], [1, "hiw__sub"], [1, "w-layout-grid", "grid"], ["id", "w-node-_4d1357d3-311e-f62e-4900-aa7c1e085e49-25345308", "data-w-id", "4d1357d3-311e-f62e-4900-aa7c1e085e49", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "subscrobe"], ["data-w-id", "6bec910e-5701-0711-8bae-6915e2385242", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7682bf60c6a6b7ddbe5b_Animation%20-%201709078107438.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "2.7", "data-duration", "0", 1, "arrows"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "width", "100", "height", "100", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_25"], ["width", "100", "height", "100", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_25)"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,44.957298278808594,64.1725845336914)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(3,0,0,3,0,0)"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M10.890999794006348,-4.881999969482422 C10.96500015258789,-5.414999961853027 10.581000328063965,-5.906000137329102 10.034000396728516,-5.978000164031982 C9.487000465393066,-6.050000190734863 8.982999801635742,-5.677000045776367 8.909000396728516,-5.144000053405762 C8.909000396728516,-5.144000053405762 8.46399974822998,-1.9450000524520874 8.46399974822998,-1.9450000524520874 C6.460000038146973,-4.261000156402588 3.441999912261963,-5.695000171661377 0.10000000149011612,-5.695000171661377 C-5.952000141143799,-5.695000171661377 -10.899999618530273,-0.8790000081062317 -10.899999618530273,5.013000011444092 C-10.899999618530273,5.551000118255615 -10.45199966430664,5.986999988555908 -9.899999618530273,5.986999988555908 C-9.347999572753906,5.986999988555908 -8.899999618530273,5.551000118255615 -8.899999618530273,5.013000011444092 C-8.899999618530273,0.19699999690055847 -4.8480000495910645,-3.747999906539917 0.10000000149011612,-3.747999906539917 C2.930000066757202,-3.747999906539917 5.456999778747559,-2.5 7.083000183105469,-0.5139999985694885 C7.083000183105469,-0.5139999985694885 3.2320001125335693,-1.0140000581741333 3.2320001125335693,-1.0140000581741333 C2.684999942779541,-1.0850000381469727 2.181999921798706,-0.7099999785423279 2.1089999675750732,-0.1770000010728836 C2.0360000133514404,0.35600000619888306 2.4210000038146973,0.8450000286102295 2.9679999351501465,0.9160000085830688 C2.9679999351501465,0.9160000085830688 8.968000411987305,1.6950000524520874 8.968000411987305,1.6950000524520874 C9.515000343322754,1.7660000324249268 10.017000198364258,1.3930000066757202 10.090999603271484,0.8610000014305115 C10.090999603271484,0.8610000014305115 10.890999794006348,-4.881999969482422 10.890999794006348,-4.881999969482422z"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,55.04176712036133,35.82706069946289)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M9.899999618530273,-5.986999988555908 C10.45199966430664,-5.986999988555908 10.899999618530273,-5.551000118255615 10.899999618530273,-5.013000011444092 C10.899999618530273,0.8790000081062317 5.952000141143799,5.695000171661377 -0.10000000149011612,5.695000171661377 C-3.441999912261963,5.695000171661377 -6.459000110626221,4.26200008392334 -8.463000297546387,1.9459999799728394 C-8.463000297546387,1.9459999799728394 -8.909000396728516,5.144000053405762 -8.909000396728516,5.144000053405762 C-8.982999801635742,5.677000045776367 -9.487000465393066,6.050000190734863 -10.034000396728516,5.978000164031982 C-10.581000328063965,5.906000137329102 -10.96500015258789,5.414999961853027 -10.890999794006348,4.881999969482422 C-10.890999794006348,4.881999969482422 -10.090999603271484,-0.8610000014305115 -10.090999603271484,-0.8610000014305115 C-10.017000198364258,-1.3930000066757202 -9.515000343322754,-1.7660000324249268 -8.968000411987305,-1.6950000524520874 C-8.968000411987305,-1.6950000524520874 -2.9679999351501465,-0.9160000085830688 -2.9679999351501465,-0.9160000085830688 C-2.4210000038146973,-0.8450000286102295 -2.0350000858306885,-0.35600000619888306 -2.1080000400543213,0.1770000010728836 C-2.180999994277954,0.7099999785423279 -2.684999942779541,1.0839999914169312 -3.2320001125335693,1.0130000114440918 C-3.2320001125335693,1.0130000114440918 -7.083000183105469,0.5139999985694885 -7.083000183105469,0.5139999985694885 C-5.456999778747559,2.5 -2.930000066757202,3.747999906539917 -0.10000000149011612,3.747999906539917 C4.8480000495910645,3.747999906539917 8.899999618530273,-0.19699999690055847 8.899999618530273,-5.013000011444092 C8.899999618530273,-5.551000118255615 9.347999572753906,-5.986999988555908 9.899999618530273,-5.986999988555908z"], [1, "p-small"], ["id", "w-node-_73d92408-3dab-587e-0b05-17dcbbe15620-25345308", "data-w-id", "73d92408-3dab-587e-0b05-17dcbbe15620", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "folder"], ["data-w-id", "0ba5e2ac-eb5c-3ac2-fa81-2f6558a3fcce", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7aab8fc2f24ac753b3fa_qjUFzKKtCP.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "3.3666666666666667", "data-duration", "0", 1, "lottie-animation-2"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 400 400", "width", "400", "height", "400", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_32"], ["width", "400", "height", "400", "x", "0", "y", "0"], ["id", "__lottie_element_35"], ["d", "M0,0 L400,0 L400,400 L0,400z"], ["clip-path", "url(#__lottie_element_32)"], ["clip-path", "url(#__lottie_element_35)", "transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,9.101822853088379,-27.503589630126953)", "opacity", "1", 2, "display", "block"], ["transform", "matrix(1,0,0,1,189.48300170898438,200)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(1,0,0,1,0,0)"], ["fill", "rgb(244,207,23)", "fill-opacity", "1", "d", " M94.27100372314453,100.96099853515625 C94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 C-101.66200256347656,100.96099853515625 -107.65299987792969,94.96900177001953 -107.65299987792969,87.5780029296875 C-107.65299987792969,87.5780029296875 -107.65299987792969,-87.5780029296875 -107.65299987792969,-87.5780029296875 C-107.65299987792969,-94.96900177001953 -101.66200256347656,-100.96099853515625 -94.27100372314453,-100.96099853515625 C-94.27100372314453,-100.96099853515625 -54.79899978637695,-100.96099853515625 -54.79899978637695,-100.96099853515625 C-52.00400161743164,-100.96099853515625 -49.38999938964844,-99.58300018310547 -47.810001373291016,-97.27799987792969 C-47.810001373291016,-97.27799987792969 -36.61800003051758,-80.94300079345703 -36.61800003051758,-80.94300079345703 C-35.03799819946289,-78.63800048828125 -32.42399978637695,-77.26000213623047 -29.628999710083008,-77.26000213623047 C-29.628999710083008,-77.26000213623047 94.27100372314453,-77.26000213623047 94.27100372314453,-77.26000213623047 C101.66200256347656,-77.26000213623047 107.65299987792969,-71.26799774169922 107.65299987792969,-63.87699890136719 C107.65299987792969,-63.87699890136719 107.65299987792969,87.5780029296875 107.65299987792969,87.5780029296875 C107.65299987792969,94.96900177001953 101.66200256347656,100.96099853515625 94.27100372314453,100.96099853515625z"], ["transform", "matrix(1,0,0,1,189.48300170898438,190.16700744628906)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,255,255)", "fill-opacity", "1", "d", " M70.98163604736328,86.79447174072266 C70.98163604736328,86.79447174072266 -70.78938293457031,86.79447174072266 -70.78938293457031,86.79447174072266 C-75.94638061523438,86.79447174072266 -80.12738037109375,82.61345672607422 -80.12738037109375,77.45645141601562 C-80.12738037109375,77.45645141601562 -80.230712890625,-99.98755645751953 -80.230712890625,-99.98755645751953 C-80.230712890625,-105.1445541381836 -76.04969787597656,-109.32555389404297 -70.89269256591797,-109.32555389404297 C-70.89269256591797,-109.32555389404297 70.87928771972656,-109.32555389404297 70.87928771972656,-109.32555389404297 C76.03629302978516,-109.32555389404297 80.21729278564453,-105.1445541381836 80.21729278564453,-99.98755645751953 C80.21729278564453,-99.98755645751953 80.31963348388672,77.45645141601562 80.31963348388672,77.45645141601562 C80.31963348388672,82.61345672607422 76.13863372802734,86.79447174072266 70.98163604736328,86.79447174072266z"], ["transform", "matrix(1,0,0,1,189.48300170898438,103.73965454101562)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-56.0369987487793,0 C-56.0369987487793,0 56.0369987487793,0 56.0369987487793,0"], ["transform", "matrix(1,0,0,1,170.60299682617188,125.60265350341797)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-37.15700149536133,0 C-37.15700149536133,0 5.85099983215332,0 18.621999740600586,0"], ["transform", "matrix(1,0,0,1,183.2169952392578,147.4656524658203)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-49.77000045776367,0 C-49.77000045776367,0 -41.220001220703125,0 -29.55699920654297,0"], ["transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,200.83004760742188,232.67843627929688)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,219,37)", "fill-opacity", "1", "d", " M78.59400177001953,69.8290023803711 C78.59400177001953,69.8290023803711 -110.04199981689453,69.8290023803711 -110.04199981689453,69.8290023803711 C-117.55699920654297,69.8290023803711 -122.68699645996094,64.33200073242188 -121.5,57.54999923706055 C-121.5,57.54999923706055 -94.35099792480469,-57.54999923706055 -94.35099792480469,-57.54999923706055 C-93.16400146484375,-64.33200073242188 -86.10900115966797,-69.8290023803711 -78.59400177001953,-69.8290023803711 C-78.59400177001953,-69.8290023803711 110.04199981689453,-69.8290023803711 110.04199981689453,-69.8290023803711 C117.55699920654297,-69.8290023803711 122.68699645996094,-64.33200073242188 121.5,-57.54999923706055 C121.5,-57.54999923706055 94.35099792480469,57.54999923706055 94.35099792480469,57.54999923706055 C93.16400146484375,64.33200073242188 86.10900115966797,69.8290023803711 78.59400177001953,69.8290023803711z"], ["id", "w-node-_6d922881-bfff-0987-da98-c889636cd530-25345308", "data-w-id", "6d922881-bfff-0987-da98-c889636cd530", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "thum"], ["data-w-id", "386b46d3-b9a9-cafd-ce41-01c643b61282", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7bef199fcae74c186bfc_zrECMo2QK3.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "1.2", "data-duration", "0", 1, "lottie-animation-3"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 500 500", "width", "500", "height", "500", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_56"], ["width", "500", "height", "500", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_56)"], ["transform", "matrix(0.9999037384986877,-0.013874701224267483,0.013874701224267483,0.9999037384986877,100.42475891113281,88.44580078125)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M61.361000061035156,333.04998779296875 C61.361000061035156,333.04998779296875 29.204999923706055,333.04998779296875 29.204999923706055,333.04998779296875 C23.100000381469727,333.04998779296875 18.152000427246094,328.10198974609375 18.152000427246094,321.99700927734375 C18.152000427246094,321.99700927734375 18.152000427246094,208.4459991455078 18.152000427246094,208.4459991455078 C18.152000427246094,202.34100341796875 23.100000381469727,197.39300537109375 29.204999923706055,197.39300537109375 C29.204999923706055,197.39300537109375 61.361000061035156,197.39300537109375 61.361000061035156,197.39300537109375 C67.46600341796875,197.39300537109375 72.41500091552734,202.34100341796875 72.41500091552734,208.4459991455078 C72.41500091552734,208.4459991455078 72.41500091552734,321.99700927734375 72.41500091552734,321.99700927734375 C72.41500091552734,328.10198974609375 67.46600341796875,333.04998779296875 61.361000061035156,333.04998779296875z"], ["fill", "rgb(255,143,231)", "fill-opacity", "1", "d", " M255.0970001220703,208.5760040283203 C255.0970001220703,189.4290008544922 235.5570068359375,194.50799560546875 216.41000366210938,194.50799560546875 C216.41000366210938,194.50799560546875 206.7414093017578,195.27224731445312 206.7414093017578,195.27224731445312 C218.94088745117188,183.07586669921875 224.79808044433594,165.303955078125 224.44078063964844,151.89186096191406 C224.06423950195312,137.78448486328125 216.4313507080078,132.87713623046875 212.21478271484375,131.47091674804688 C207.29747009277344,128.3720703125 194.12283325195312,128.95802307128906 192.46543884277344,132.503173828125 C190.74058532714844,135.59725952148438 189.94137573242188,137.17002868652344 188.30519104003906,139.9917449951172 C181.2809295654297,152.4758758544922 170.57467651367188,164.41656494140625 156.00704956054688,176.28872680664062 C138.14834594726562,190.8435821533203 113.77799987792969,203.052001953125 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46900177001953,217.49000549316406 83.46900177001953,217.49000549316406 C83.46900177001953,217.49000549316406 83.46800231933594,217.49000549316406 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46800231933594,313.9580078125 83.46800231933594,313.9580078125 C83.46800231933594,313.9580078125 149.6529998779297,326.2860107421875 149.6529998779297,326.2860107421875 C157.906005859375,327.822998046875 169.43299865722656,328.4070129394531 187.64599609375,327.4020080566406 C205.85899353027344,326.3970031738281 223.37100219726562,320.12799072265625 223.37100219726562,320.12799072265625 C234.2270050048828,316.37799072265625 241.8419952392578,306.5690002441406 242.78500366210938,295.12298583984375 C242.78500366210938,295.12298583984375 247.32400512695312,251.57899475097656 247.32400512695312,251.57899475097656 C250.0030059814453,246.55799865722656 251.78399658203125,241.91099548339844 251.78399658203125,239.0279998779297 C251.78399658203125,239.0279998779297 255.0970001220703,208.5760040283203 255.0970001220703,208.5760040283203z"], ["transform", "matrix(1,0,0,1,81,85)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(0,0,0)", "stroke-opacity", "1", "stroke-width", "20", "d", "M0 0"], [1, "p-small", "revise"], [1, "button__wrapper", "m-t-40"], ["routerLink", "/contact", "data-w-id", "372e554a-cdb5-8116-3563-710a220123cb", 1, "button", "w-inline-block", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d", 3, "click"], [1, "text-block-2"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd2283937c19061858f77d_Group%2076.svg", "loading", "lazy", "alt", "", 1, "image-70"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd230f503738ef5ddfd8ee_Group%2077.svg", "loading", "lazy", "alt", "", 1, "image-71"], [1, "row", 2, "display", "flex", "justify-content", "space-around", 3, "settings", "onBeforeSlide"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/DM16.png", "data-responsive", "assets/DM16.png 480, assets/DM16.png 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/DM16.png", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w1.jpeg", "data-responsive", "assets/w1.jpeg 480, assets/w1.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w1.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w2.jpeg", "data-responsive", "assets/w2.jpeg 480, assets/w2.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w2.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w3.jpeg", "data-responsive", "assets/w3.jpeg 480, assets/w3.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w3.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w13.jpg", "data-responsive", "assets/w13.jpg 480, assets/w13.jpg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w13.jpg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w5.jpeg", "data-responsive", "assets/w5.jpeg 480, assets/w5.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w5.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w4.jpeg", "data-responsive", "assets/w4.jpeg 480, assets/w4.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w4.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w6.jpeg", "data-responsive", "assets/w6.jpeg 480, assets/w6.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w6.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w14.jpg", "data-responsive", "assets/w14.jpg 480, assets/w14.jpg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w14.jpg", 1, "img-responsive"]], template: function WebDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We didn\u2019t reinvent the wheel. Just design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Design as you know it is out the door. Design as you want it just arrived.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clipPath", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subscribe to a plan & request as many designs as you\u2019d like.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "clipPath", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "clipPath", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Receive your design within two business days on average.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "We'll revise the designs until you're 100% satisfied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebDesignComponent_Template_a_click_79_listener() { return ctx.setPlan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "See plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "lightgallery", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__["LightgalleryComponent"]], styles: ["@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');\r\n@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.gallery-item[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\nlightgallery[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.img-responsive[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRlc2lnbi93ZWItZGVzaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGLHFGQUFxRjtBQUNyRjtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93ZWItZGVzaWduL3dlYi1kZXNpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xpZ2h0Z2FsbGVyeUAyLjAuMC1iZXRhLjQvY3NzL2xpZ2h0Z2FsbGVyeS5jc3MnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGlnaHRnYWxsZXJ5QDIuMC4wLWJldGEuNC9jc3MvbGctem9vbS5jc3MnKTtcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5nYWxsZXJ5LWl0ZW0ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5saWdodGdhbGxlcnkgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZlXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebDesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-design',
                templateUrl: './web-design.component.html',
                styleUrls: ['./web-design.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/web-development/web-development.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/web-development/web-development.component.ts ***!
  \**************************************************************/
/*! exports provided: WebDevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDevelopmentComponent", function() { return WebDevelopmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lightgallery/angular/9 */ "./node_modules/lightgallery/angular/9/fesm2015/lightgallery-angular-9.js");





class WebDevelopmentComponent {
    constructor() {
        this.settings = {
            counter: false,
            download: false,
            plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]]
        };
        this.onBeforeSlide = (detail) => {
            const { index, prevIndex } = detail;
            console.log(index, prevIndex);
        };
    }
    ngOnInit() {
    }
    setPlan() {
        localStorage.setItem("plan", "2");
    }
}
WebDevelopmentComponent.ɵfac = function WebDevelopmentComponent_Factory(t) { return new (t || WebDevelopmentComponent)(); };
WebDevelopmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebDevelopmentComponent, selectors: [["app-web-development"]], decls: 132, vars: 2, consts: [["id", "hiw", 1, "hiw"], [1, "container"], ["data-w-id", "283826cb-a957-8f8e-c810-93559e98a816", 1, "hiw__wrapper", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw-heading", 2, "font-size", "72px"], [1, "w-layout-grid", "grid"], ["id", "w-node-_4d1357d3-311e-f62e-4900-aa7c1e085e49-25345308", "data-w-id", "4d1357d3-311e-f62e-4900-aa7c1e085e49", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "p-small", 2, "margin-bottom", "30px"], [1, "hiw__icon-wrapper", "subscrobe"], ["data-w-id", "6bec910e-5701-0711-8bae-6915e2385242", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7682bf60c6a6b7ddbe5b_Animation%20-%201709078107438.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "2.7", "data-duration", "0", 1, "arrows"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "width", "100", "height", "100", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_25"], ["width", "100", "height", "100", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_25)"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,44.957298278808594,64.1725845336914)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(3,0,0,3,0,0)"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M10.890999794006348,-4.881999969482422 C10.96500015258789,-5.414999961853027 10.581000328063965,-5.906000137329102 10.034000396728516,-5.978000164031982 C9.487000465393066,-6.050000190734863 8.982999801635742,-5.677000045776367 8.909000396728516,-5.144000053405762 C8.909000396728516,-5.144000053405762 8.46399974822998,-1.9450000524520874 8.46399974822998,-1.9450000524520874 C6.460000038146973,-4.261000156402588 3.441999912261963,-5.695000171661377 0.10000000149011612,-5.695000171661377 C-5.952000141143799,-5.695000171661377 -10.899999618530273,-0.8790000081062317 -10.899999618530273,5.013000011444092 C-10.899999618530273,5.551000118255615 -10.45199966430664,5.986999988555908 -9.899999618530273,5.986999988555908 C-9.347999572753906,5.986999988555908 -8.899999618530273,5.551000118255615 -8.899999618530273,5.013000011444092 C-8.899999618530273,0.19699999690055847 -4.8480000495910645,-3.747999906539917 0.10000000149011612,-3.747999906539917 C2.930000066757202,-3.747999906539917 5.456999778747559,-2.5 7.083000183105469,-0.5139999985694885 C7.083000183105469,-0.5139999985694885 3.2320001125335693,-1.0140000581741333 3.2320001125335693,-1.0140000581741333 C2.684999942779541,-1.0850000381469727 2.181999921798706,-0.7099999785423279 2.1089999675750732,-0.1770000010728836 C2.0360000133514404,0.35600000619888306 2.4210000038146973,0.8450000286102295 2.9679999351501465,0.9160000085830688 C2.9679999351501465,0.9160000085830688 8.968000411987305,1.6950000524520874 8.968000411987305,1.6950000524520874 C9.515000343322754,1.7660000324249268 10.017000198364258,1.3930000066757202 10.090999603271484,0.8610000014305115 C10.090999603271484,0.8610000014305115 10.890999794006348,-4.881999969482422 10.890999794006348,-4.881999969482422z"], ["transform", "matrix(-0.9352908730506897,-0.3538799285888672,0.3538799285888672,-0.9352908730506897,55.04176712036133,35.82706069946289)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M9.899999618530273,-5.986999988555908 C10.45199966430664,-5.986999988555908 10.899999618530273,-5.551000118255615 10.899999618530273,-5.013000011444092 C10.899999618530273,0.8790000081062317 5.952000141143799,5.695000171661377 -0.10000000149011612,5.695000171661377 C-3.441999912261963,5.695000171661377 -6.459000110626221,4.26200008392334 -8.463000297546387,1.9459999799728394 C-8.463000297546387,1.9459999799728394 -8.909000396728516,5.144000053405762 -8.909000396728516,5.144000053405762 C-8.982999801635742,5.677000045776367 -9.487000465393066,6.050000190734863 -10.034000396728516,5.978000164031982 C-10.581000328063965,5.906000137329102 -10.96500015258789,5.414999961853027 -10.890999794006348,4.881999969482422 C-10.890999794006348,4.881999969482422 -10.090999603271484,-0.8610000014305115 -10.090999603271484,-0.8610000014305115 C-10.017000198364258,-1.3930000066757202 -9.515000343322754,-1.7660000324249268 -8.968000411987305,-1.6950000524520874 C-8.968000411987305,-1.6950000524520874 -2.9679999351501465,-0.9160000085830688 -2.9679999351501465,-0.9160000085830688 C-2.4210000038146973,-0.8450000286102295 -2.0350000858306885,-0.35600000619888306 -2.1080000400543213,0.1770000010728836 C-2.180999994277954,0.7099999785423279 -2.684999942779541,1.0839999914169312 -3.2320001125335693,1.0130000114440918 C-3.2320001125335693,1.0130000114440918 -7.083000183105469,0.5139999985694885 -7.083000183105469,0.5139999985694885 C-5.456999778747559,2.5 -2.930000066757202,3.747999906539917 -0.10000000149011612,3.747999906539917 C4.8480000495910645,3.747999906539917 8.899999618530273,-0.19699999690055847 8.899999618530273,-5.013000011444092 C8.899999618530273,-5.551000118255615 9.347999572753906,-5.986999988555908 9.899999618530273,-5.986999988555908z"], [1, "p-small"], ["id", "w-node-_73d92408-3dab-587e-0b05-17dcbbe15620-25345308", "data-w-id", "73d92408-3dab-587e-0b05-17dcbbe15620", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "folder"], ["data-w-id", "0ba5e2ac-eb5c-3ac2-fa81-2f6558a3fcce", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7aab8fc2f24ac753b3fa_qjUFzKKtCP.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "3.3666666666666667", "data-duration", "0", 1, "lottie-animation-2"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 400 400", "width", "400", "height", "400", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_32"], ["width", "400", "height", "400", "x", "0", "y", "0"], ["id", "__lottie_element_35"], ["d", "M0,0 L400,0 L400,400 L0,400z"], ["clip-path", "url(#__lottie_element_32)"], ["clip-path", "url(#__lottie_element_35)", "transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,9.101822853088379,-27.503589630126953)", "opacity", "1", 2, "display", "block"], ["transform", "matrix(1,0,0,1,189.48300170898438,200)", "opacity", "1", 2, "display", "block"], ["opacity", "1", "transform", "matrix(1,0,0,1,0,0)"], ["fill", "rgb(244,207,23)", "fill-opacity", "1", "d", " M94.27100372314453,100.96099853515625 C94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 -94.27100372314453,100.96099853515625 C-101.66200256347656,100.96099853515625 -107.65299987792969,94.96900177001953 -107.65299987792969,87.5780029296875 C-107.65299987792969,87.5780029296875 -107.65299987792969,-87.5780029296875 -107.65299987792969,-87.5780029296875 C-107.65299987792969,-94.96900177001953 -101.66200256347656,-100.96099853515625 -94.27100372314453,-100.96099853515625 C-94.27100372314453,-100.96099853515625 -54.79899978637695,-100.96099853515625 -54.79899978637695,-100.96099853515625 C-52.00400161743164,-100.96099853515625 -49.38999938964844,-99.58300018310547 -47.810001373291016,-97.27799987792969 C-47.810001373291016,-97.27799987792969 -36.61800003051758,-80.94300079345703 -36.61800003051758,-80.94300079345703 C-35.03799819946289,-78.63800048828125 -32.42399978637695,-77.26000213623047 -29.628999710083008,-77.26000213623047 C-29.628999710083008,-77.26000213623047 94.27100372314453,-77.26000213623047 94.27100372314453,-77.26000213623047 C101.66200256347656,-77.26000213623047 107.65299987792969,-71.26799774169922 107.65299987792969,-63.87699890136719 C107.65299987792969,-63.87699890136719 107.65299987792969,87.5780029296875 107.65299987792969,87.5780029296875 C107.65299987792969,94.96900177001953 101.66200256347656,100.96099853515625 94.27100372314453,100.96099853515625z"], ["transform", "matrix(1,0,0,1,189.48300170898438,190.16700744628906)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,255,255)", "fill-opacity", "1", "d", " M70.98163604736328,86.79447174072266 C70.98163604736328,86.79447174072266 -70.78938293457031,86.79447174072266 -70.78938293457031,86.79447174072266 C-75.94638061523438,86.79447174072266 -80.12738037109375,82.61345672607422 -80.12738037109375,77.45645141601562 C-80.12738037109375,77.45645141601562 -80.230712890625,-99.98755645751953 -80.230712890625,-99.98755645751953 C-80.230712890625,-105.1445541381836 -76.04969787597656,-109.32555389404297 -70.89269256591797,-109.32555389404297 C-70.89269256591797,-109.32555389404297 70.87928771972656,-109.32555389404297 70.87928771972656,-109.32555389404297 C76.03629302978516,-109.32555389404297 80.21729278564453,-105.1445541381836 80.21729278564453,-99.98755645751953 C80.21729278564453,-99.98755645751953 80.31963348388672,77.45645141601562 80.31963348388672,77.45645141601562 C80.31963348388672,82.61345672607422 76.13863372802734,86.79447174072266 70.98163604736328,86.79447174072266z"], ["transform", "matrix(1,0,0,1,189.48300170898438,103.73965454101562)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-56.0369987487793,0 C-56.0369987487793,0 56.0369987487793,0 56.0369987487793,0"], ["transform", "matrix(1,0,0,1,170.60299682617188,125.60265350341797)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-37.15700149536133,0 C-37.15700149536133,0 5.85099983215332,0 18.621999740600586,0"], ["transform", "matrix(1,0,0,1,183.2169952392578,147.4656524658203)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(61,137,255)", "stroke-opacity", "1", "stroke-width", "9", "d", " M-49.77000045776367,0 C-49.77000045776367,0 -41.220001220703125,0 -29.55699920654297,0"], ["transform", "matrix(1.0460044145584106,0.09151352941989899,-0.09151352941989899,1.0460044145584106,200.83004760742188,232.67843627929688)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(255,219,37)", "fill-opacity", "1", "d", " M78.59400177001953,69.8290023803711 C78.59400177001953,69.8290023803711 -110.04199981689453,69.8290023803711 -110.04199981689453,69.8290023803711 C-117.55699920654297,69.8290023803711 -122.68699645996094,64.33200073242188 -121.5,57.54999923706055 C-121.5,57.54999923706055 -94.35099792480469,-57.54999923706055 -94.35099792480469,-57.54999923706055 C-93.16400146484375,-64.33200073242188 -86.10900115966797,-69.8290023803711 -78.59400177001953,-69.8290023803711 C-78.59400177001953,-69.8290023803711 110.04199981689453,-69.8290023803711 110.04199981689453,-69.8290023803711 C117.55699920654297,-69.8290023803711 122.68699645996094,-64.33200073242188 121.5,-57.54999923706055 C121.5,-57.54999923706055 94.35099792480469,57.54999923706055 94.35099792480469,57.54999923706055 C93.16400146484375,64.33200073242188 86.10900115966797,69.8290023803711 78.59400177001953,69.8290023803711z"], ["id", "w-node-_6d922881-bfff-0987-da98-c889636cd530-25345308", "data-w-id", "6d922881-bfff-0987-da98-c889636cd530", 1, "hiw__column", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d"], [1, "hiw__icon-wrapper", "thum"], ["data-w-id", "386b46d3-b9a9-cafd-ce41-01c643b61282", "data-animation-type", "lottie", "data-src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65de7bef199fcae74c186bfc_zrECMo2QK3.json", "data-loop", "1", "data-direction", "1", "data-autoplay", "1", "data-is-ix2-target", "0", "data-renderer", "svg", "data-default-duration", "1.2", "data-duration", "0", 1, "lottie-animation-3"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 500 500", "width", "500", "height", "500", "preserveAspectRatio", "xMidYMid meet", 2, "width", "100%", "height", "100%", "transform", "translate3d(0px, 0px, 0px)", "content-visibility", "visible"], ["id", "__lottie_element_56"], ["width", "500", "height", "500", "x", "0", "y", "0"], ["clip-path", "url(#__lottie_element_56)"], ["transform", "matrix(0.9999037384986877,-0.013874701224267483,0.013874701224267483,0.9999037384986877,100.42475891113281,88.44580078125)", "opacity", "1", 2, "display", "block"], ["fill", "rgb(0,0,0)", "fill-opacity", "1", "d", " M61.361000061035156,333.04998779296875 C61.361000061035156,333.04998779296875 29.204999923706055,333.04998779296875 29.204999923706055,333.04998779296875 C23.100000381469727,333.04998779296875 18.152000427246094,328.10198974609375 18.152000427246094,321.99700927734375 C18.152000427246094,321.99700927734375 18.152000427246094,208.4459991455078 18.152000427246094,208.4459991455078 C18.152000427246094,202.34100341796875 23.100000381469727,197.39300537109375 29.204999923706055,197.39300537109375 C29.204999923706055,197.39300537109375 61.361000061035156,197.39300537109375 61.361000061035156,197.39300537109375 C67.46600341796875,197.39300537109375 72.41500091552734,202.34100341796875 72.41500091552734,208.4459991455078 C72.41500091552734,208.4459991455078 72.41500091552734,321.99700927734375 72.41500091552734,321.99700927734375 C72.41500091552734,328.10198974609375 67.46600341796875,333.04998779296875 61.361000061035156,333.04998779296875z"], ["fill", "rgb(255,143,231)", "fill-opacity", "1", "d", " M255.0970001220703,208.5760040283203 C255.0970001220703,189.4290008544922 235.5570068359375,194.50799560546875 216.41000366210938,194.50799560546875 C216.41000366210938,194.50799560546875 206.7414093017578,195.27224731445312 206.7414093017578,195.27224731445312 C218.94088745117188,183.07586669921875 224.79808044433594,165.303955078125 224.44078063964844,151.89186096191406 C224.06423950195312,137.78448486328125 216.4313507080078,132.87713623046875 212.21478271484375,131.47091674804688 C207.29747009277344,128.3720703125 194.12283325195312,128.95802307128906 192.46543884277344,132.503173828125 C190.74058532714844,135.59725952148438 189.94137573242188,137.17002868652344 188.30519104003906,139.9917449951172 C181.2809295654297,152.4758758544922 170.57467651367188,164.41656494140625 156.00704956054688,176.28872680664062 C138.14834594726562,190.8435821533203 113.77799987792969,203.052001953125 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46900177001953,217.49000549316406 83.46900177001953,217.49000549316406 C83.46900177001953,217.49000549316406 83.46800231933594,217.49000549316406 83.46800231933594,217.49000549316406 C83.46800231933594,217.49000549316406 83.46800231933594,313.9580078125 83.46800231933594,313.9580078125 C83.46800231933594,313.9580078125 149.6529998779297,326.2860107421875 149.6529998779297,326.2860107421875 C157.906005859375,327.822998046875 169.43299865722656,328.4070129394531 187.64599609375,327.4020080566406 C205.85899353027344,326.3970031738281 223.37100219726562,320.12799072265625 223.37100219726562,320.12799072265625 C234.2270050048828,316.37799072265625 241.8419952392578,306.5690002441406 242.78500366210938,295.12298583984375 C242.78500366210938,295.12298583984375 247.32400512695312,251.57899475097656 247.32400512695312,251.57899475097656 C250.0030059814453,246.55799865722656 251.78399658203125,241.91099548339844 251.78399658203125,239.0279998779297 C251.78399658203125,239.0279998779297 255.0970001220703,208.5760040283203 255.0970001220703,208.5760040283203z"], ["transform", "matrix(1,0,0,1,81,85)", "opacity", "1", 2, "display", "block"], ["stroke-linecap", "round", "stroke-linejoin", "miter", "fill-opacity", "0", "stroke-miterlimit", "10", "stroke", "rgb(0,0,0)", "stroke-opacity", "1", "stroke-width", "20", "d", "M0 0"], [1, "p-small", "revise"], [1, "button__wrapper", "m-t-40"], ["routerLink", "/contact", "data-w-id", "372e554a-cdb5-8116-3563-710a220123cb", 1, "button", "w-inline-block", 2, "opacity", "1", "transform", "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transform-style", "preserve-3d", 3, "click"], [1, "text-block-2"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd2283937c19061858f77d_Group%2076.svg", "loading", "lazy", "alt", "", 1, "image-70"], ["src", "https://cdn.prod.website-files.com/5837424ae11409586f837994/65dd230f503738ef5ddfd8ee_Group%2077.svg", "loading", "lazy", "alt", "", 1, "image-71"], [1, "row", 2, "display", "flex", "justify-content", "space-around", 3, "settings", "onBeforeSlide"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/DM16.png", "data-responsive", "assets/DM16.png 480, assets/DM16.png 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/DM16.png", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w1.jpeg", "data-responsive", "assets/w1.jpeg 480, assets/w1.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w1.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w2.jpeg", "data-responsive", "assets/w2.jpeg 480, assets/w2.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w2.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w3.jpeg", "data-responsive", "assets/w3.jpeg 480, assets/w3.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w3.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w13.jpg", "data-responsive", "assets/w13.jpg 480, assets/w13.jpg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w13.jpg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w5.jpeg", "data-responsive", "assets/w5.jpeg 480, assets/w5.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w5.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w4.jpeg", "data-responsive", "assets/w4.jpeg 480, assets/w4.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w4.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w6.jpeg", "data-responsive", "assets/w6.jpeg 480, assets/w6.jpeg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w6.jpeg", 1, "img-responsive"], ["data-lg-size", "480-475-480, 800-791-800, 1406-1390", "data-src", "assets/w14.jpg", "data-responsive", "assets/w14.jpg 480, assets/w14.jpg 800", "data-sub-html", "", 1, "gallery-item", 2, "width", "25%"], ["src", "assets/w14.jpg", 1, "img-responsive"]], template: function WebDevelopmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ready to take your website to the next level? Let\u2019s create magic together!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Templates Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clipPath", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose any template as you lik.e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gathering Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "clipPath", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "clipPath", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Collectings Images, Videos, Texts and much more..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Hosting the developed design in desired URL for 1 year.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Redeem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "clipPath", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "g", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Offering Free Changes for 3 Months, post that will be charged accordingly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebDevelopmentComponent_Template_a_click_108_listener() { return ctx.setPlan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "See plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "lightgallery", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__["LightgalleryComponent"]], styles: ["@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');\r\n@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.gallery-item[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\nlightgallery[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n.img-responsive[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRldmVsb3BtZW50L3dlYi1kZXZlbG9wbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjtBQUMxRixxRkFBcUY7QUFDckY7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvd2ViLWRldmVsb3BtZW50L3dlYi1kZXZlbG9wbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGlnaHRnYWxsZXJ5QDIuMC4wLWJldGEuNC9jc3MvbGlnaHRnYWxsZXJ5LmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9saWdodGdhbGxlcnlAMi4wLjAtYmV0YS40L2Nzcy9sZy16b29tLmNzcycpO1xyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmdhbGxlcnktaXRlbSB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmxpZ2h0Z2FsbGVyeSBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLXJlc3BvbnNpdmVcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebDevelopmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-development',
                templateUrl: './web-development.component.html',
                styleUrls: ['./web-development.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Helyxon\amacon-client-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map