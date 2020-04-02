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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_config_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/config.dev */ "./src/environments/config.dev.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(http) {
        this.http = http;
    }
    getAllCountriesStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_1__["config"].GET_ALL_COUNTRIE_STAT_URL);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _symp_symp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symp/symp.component */ "./src/app/symp/symp.component.ts");
/* harmony import */ var _qa_qa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qa/qa.component */ "./src/app/qa/qa.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'information', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'symptoms', component: _symp_symp_component__WEBPACK_IMPORTED_MODULE_4__["SympComponent"] },
    { path: 'protectyourself', component: _symp_symp_component__WEBPACK_IMPORTED_MODULE_4__["SympComponent"] },
    { path: 'qa', component: _qa_qa_component__WEBPACK_IMPORTED_MODULE_5__["QaComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'corona';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _symp_symp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symp/symp.component */ "./src/app/symp/symp.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _qa_qa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./qa/qa.component */ "./src/app/qa/qa.component.ts");


















// import { BrowserAnimationsModule } from '@angular/animations'
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"],
        _symp_symp_component__WEBPACK_IMPORTED_MODULE_11__["SympComponent"],
        _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"],
        _qa_qa_component__WEBPACK_IMPORTED_MODULE_16__["QaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                    _info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"],
                    _symp_symp_component__WEBPACK_IMPORTED_MODULE_11__["SympComponent"],
                    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"],
                    _qa_qa_component__WEBPACK_IMPORTED_MODULE_16__["QaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class DialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        console.log(this.data);
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 3, vars: 0, consts: [["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_1_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".md-dialog-container[_ngcontent-%COMP%] {\r\n    background-color: turquoise;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJhcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubWQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onHome() {
        this.router.navigateByUrl('', { relativeTo: this.route });
    }
    onInfo() {
        this.router.navigateByUrl('information', { relativeTo: this.route });
    }
    onSymp() {
        this.router.navigateByUrl('symptoms', { relativeTo: this.route });
    }
    onProtect() {
        this.router.navigateByUrl('protectyourself', { relativeTo: this.route });
    }
    onQA() {
        this.router.navigateByUrl('qa', { relativeTo: this.route });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 0, consts: [[1, "header-wrapper"], ["src", "../../assets/icon.svg", "id", "tommy-logo"], ["id", "corona-title"], ["id", "home", 3, "click"], ["id", "info", 3, "click"], ["id", "symp", 3, "click"], ["id", "protect", 3, "click"], ["id", "qa", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_4_listener() { return ctx.onHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_6_listener() { return ctx.onInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_8_listener() { return ctx.onSymp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SYMPTOMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_10_listener() { return ctx.onProtect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PROTECT YOURSELF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_12_listener() { return ctx.onQA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Q & A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\nspan[_ngcontent-%COMP%] {cursor: context-menu;}\r\n@font-face {\r\n    font-family: Rubik;\r\n    src: url('Rubik-Medium.ttf');\r\n}\r\n.header-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n    position: fixed;\r\n    grid-template-areas: \"a b c d e f g h i j\";\r\n    grid-template-columns: repeat(10,1fr);\r\n    background-color: #0e1020;\r\n    height: 10vh;\r\n    box-shadow: 0 5px 13px 0 #070911;\r\n    top: 0%;\r\n    z-index: 1;\r\n}\r\n#home[_ngcontent-%COMP%]{\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: c;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -1vh;\r\n    transition: 0.3s;\r\n    text-align: center;\r\n}\r\n#home[_ngcontent-%COMP%]:hover{\r\n    color: #6afff3;\r\n\r\n}\r\n#info[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: d;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -1vh;\r\n    transition: 0.3s;\r\n}\r\n#protect[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: f;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -1vh;\r\n    transition: 0.3s;\r\n    left: 25px;\r\n}\r\n#info[_ngcontent-%COMP%]:hover{\r\n    color: #bf71ff;\r\n}\r\n#protect[_ngcontent-%COMP%]:hover{\r\n    color: #6afff3;\r\n\r\n}\r\n#symp[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: e;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -1vh;\r\n    transition: 0.3s;\r\n    left: 10px;\r\n}\r\n#symp[_ngcontent-%COMP%]:hover{\r\n    color: #9193a8;\r\n}\r\n#qa[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: g;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -1vh;\r\n    transition: 0.3s;\r\n    left: 25px;\r\n}\r\n#qa[_ngcontent-%COMP%]:hover{\r\n    color: #bf71ff;\r\n}\r\n#corona-title[_ngcontent-%COMP%]{\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: b;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -1vh;\r\n    right: 30%;\r\n}\r\n#tommy-logo[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n    position: relative;\r\n    top: -1vh;\r\n    width: 10vw;\r\n    height: 6.5vh;\r\n    cursor: pointer;\r\n}\r\n#username[_ngcontent-%COMP%]{\r\n    grid-area: d;\r\n    font-family: rubik;\r\n    font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGO0FBQ3ZGLE1BQU0sb0JBQW9CLENBQUM7QUFFM0I7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQXVDO0FBQzNDO0FBS0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUlBO0lBQ0ksNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdGh3YXkrR290aGljK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuc3BhbiB7Y3Vyc29yOiBjb250ZXh0LW1lbnU7fVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUnViaWs7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvUnViaWstTWVkaXVtLnR0Zik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5oZWFkZXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGIgYyBkIGUgZiBnIGggaSBqXCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTAyMDtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEzcHggMCAjMDcwOTExO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbiNob21le1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1hcmVhOiBjO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xdmg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaG9tZTpob3ZlcntcclxuICAgIGNvbG9yOiAjNmFmZmYzO1xyXG5cclxufVxyXG5cclxuI2luZm97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBncmlkLWFyZWE6IGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTF2aDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNwcm90ZWN0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1hcmVhOiBmO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xdmg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbGVmdDogMjVweDtcclxufVxyXG5cclxuI2luZm86aG92ZXJ7XHJcbiAgICBjb2xvcjogI2JmNzFmZjtcclxufVxyXG5cclxuI3Byb3RlY3Q6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzZhZmZmMztcclxuXHJcbn1cclxuXHJcbiNzeW1we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1hcmVhOiBlO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xdmg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuI3N5bXA6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzkxOTNhODtcclxufVxyXG5cclxuI3Fhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1hcmVhOiBnO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xdmg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbGVmdDogMjVweDtcclxufVxyXG5cclxuI3FhOmhvdmVye1xyXG4gICAgY29sb3I6ICNiZjcxZmY7XHJcbn1cclxuXHJcblxyXG5cclxuI2Nvcm9uYS10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGdyaWQtYXJlYTogYjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMXZoO1xyXG4gICAgcmlnaHQ6IDMwJTtcclxufVxyXG5cclxuI3RvbW15LWxvZ28ge1xyXG4gICAgZ3JpZC1hcmVhOiBhO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMXZoO1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBoZWlnaHQ6IDYuNXZoO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuI3VzZXJuYW1le1xyXG4gICAgZ3JpZC1hcmVhOiBkO1xyXG4gICAgZm9udC1mYW1pbHk6IHJ1YmlrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");







function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 ISRAEL STATISTICS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TOTAL CASES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " NEW CASES (LAST 24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TOTAL DEATHS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NEW DEATHS (LAST 24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " TOTAL RECOVERED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " SERIOUS CASES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r2.total_cases, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", stat_r2.total_new_cases_today, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r2.total_deaths, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", stat_r2.total_new_deaths_today, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r2.total_recovered, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r2.total_serious_cases, " ");
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, stat_r3.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r3.total_cases);
} }
class HomeComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.StatsArray = [];
        this.ResStat = [];
        this.AllCountriesArray = [];
        this.StatsToDisplay = [];
        this.searchText = "";
        this.open = true;
    }
    ngOnInit() {
        this.getIsrael();
        this.getAllCountries();
        this.searchTextChanged(this.searchText);
    }
    // 
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], { width: '400px', height: '450px', data: { name: this.name, animal: this.animal }, panelClass: 'myapp-background'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    // 
    getAllCountries() {
        this.api.getAllCountriesStat().subscribe((res) => {
            this.ResStat = res.countryitems["0"];
            Object.keys(this.ResStat).forEach(element => {
                this.AllCountriesArray.push({
                    "title": this.ResStat[element].title,
                    "total_cases": this.ResStat[element].total_cases,
                    "total_recovered": this.ResStat[element].total_recovered,
                    "total_deaths": this.ResStat[element].total_deaths,
                    "total_new_cases_today": this.ResStat[element].total_new_cases_today,
                    "total_new_deaths_today": this.ResStat[element].total_new_deaths_today,
                    "total_serious_cases": this.ResStat[element].total_serious_cases
                });
            });
            this.StatsToDisplay = this.AllCountriesArray;
        });
    }
    getIsrael() {
        this.api.getAllCountriesStat().subscribe((res) => {
            this.ResStat = res.countryitems;
            let index = 76;
            this.StatsArray.push({
                "title": this.ResStat["0"][index].title,
                "total_cases": this.ResStat["0"][index].total_cases,
                "total_recovered": this.ResStat["0"][index].total_recovered,
                "total_deaths": this.ResStat["0"][index].total_deaths,
                "total_new_cases_today": this.ResStat["0"][index].total_new_cases_today,
                "total_new_deaths_today": this.ResStat["0"][index].total_new_deaths_today,
                "total_serious_cases": this.ResStat["0"][index].total_serious_cases
            });
            console.log(this.StatsArray);
        });
    }
    searchTextChanged(text) {
        this.searchText = this.stripWhiteSpaces(text);
        this.StatsToDisplay = [];
        this.addTasksToDisplay(this.AllCountriesArray);
    }
    addTasksToDisplay(countriesStats) {
        countriesStats.forEach((AllCountriesArray) => {
            if ((AllCountriesArray.title).match(this.searchText)) {
                this.StatsToDisplay.push(AllCountriesArray);
            }
        });
    }
    stripWhiteSpaces(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 2, consts: [["id", "title"], [4, "ngFor", "ngForOf"], ["id", "worldtitle"], [3, "textChanged"], [1, "container2"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "israelCard"], ["id", "IsraelTitle"], [1, "grid-container"], ["id", "casesIL"], ["id", "deathsIL"], ["id", "otherIL"], [1, "card", 3, "click"], ["id", "countryName"], [1, "centertxt"], ["id", "totalCases"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CORONAVIRUS DISEASE REAL-TIME STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 29, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COVID-19 WORLD STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-search-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChanged", function HomeComponent_Template_app_search_bar_textChanged_5_listener($event) { return ctx.searchTextChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.StatsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.StatsToDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  color: #ffffff;\r\n  padding-top: 12vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 34px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n}\r\n#worldtitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  color: #ffffff;\r\n  padding-top: 7vh;\r\n  padding-bottom: 3vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 34px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n\r\n}\r\n#IsraelTitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  margin-top: 0.2vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 30px;\r\n  font-weight: inherit;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  grid-template-rows: auto auto;\r\n  grid-gap: 5px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  grid-auto-flow: column;\r\n}\r\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n}\r\n#casesIL[_ngcontent-%COMP%] {\r\n  color: #6afff3;\r\n  font-size: 1.8vw;\r\n  transition: 0.2s;\r\n}\r\n#casesIL[_ngcontent-%COMP%]:hover {\r\n  color: #6afff3;\r\n  font-size: 2vw ;\r\n}\r\n#deathsIL[_ngcontent-%COMP%] {\r\n  color: #bf71ff;\r\n  font-size: 1.8vw;\r\n  transition: 0.2s;\r\n}\r\n#deathsIL[_ngcontent-%COMP%]:hover {\r\n  color: #bf71ff;\r\n  font-size: 2vw ;\r\n}\r\n#otherIL[_ngcontent-%COMP%] {\r\n  color: #9193a8;\r\n  font-size: 1.8vw;\r\n  transition: 0.2s;\r\n}\r\n#otherIL[_ngcontent-%COMP%]:hover {\r\n  color: #9193a8;\r\n  font-size: 2vw ;\r\n}\r\n.item1[_ngcontent-%COMP%] {\r\n  grid-row: 1 ;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n}\r\n.centertxt[_ngcontent-%COMP%]{\r\n  display: flex; \r\n  align-items: center; \r\n  width: 100%; \r\n  text-align: center;\r\n}\r\n.container2[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  box-shadow: 0 4px 30px rgba(0,0,0,.5);\r\n  transition: 0.3s;\r\n  margin: 2vh;\r\n  background-color: #26273b;\r\n  padding: 2px 16px;\r\n  text-align: center;\r\n  height: 18vh;\r\n  font-weight: inherit;\r\n  border-radius: 6px;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  width: 30vh;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  width: 35vh;\r\n  box-shadow: 0 5px 14px 0 black;\r\n  background-color: #26273b;\r\n  height: 20vh;\r\n  color: #ffffff;\r\n}\r\n#totalCases[_ngcontent-%COMP%]{\r\n  color: #6afff3;\r\n  top: 2vh;\r\n  font-size: 2.5vw;\r\n  text-align: center;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: 100;\r\n  position: relative;\r\n}\r\n.israelCard[_ngcontent-%COMP%] {\r\n  padding: 40px;\r\n  width: 65%;\r\n  height: 270px;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n  border-radius: 20px;\r\n  background-color: #26273b;\r\n  margin: 60px auto;\r\n  transition: 0.2s;\r\n}\r\n.israelCard[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 5px 14px 0 black;\r\n}\r\n.highlight[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #294;\r\n}\r\n#countryName[_ngcontent-%COMP%]{\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n  font-size: 2vw;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUZBQXVGO0FBQ3ZGLFlBQVk7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCOztBQUV4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XHJcbi8qICMxY2JmZmYgKi9cclxuI3RpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZWZ0OiAyMHZoO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctdG9wOiAxMnZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDAuODM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuI3dvcmxkdGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxlZnQ6IDIwdmg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZy10b3A6IDd2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDAuODM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuXHJcbn1cclxuXHJcbiNJc3JhZWxUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGVmdDogMjB2aDtcclxuICBtYXJnaW4tdG9wOiAwLjJ2aDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMC44MztcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG4gIGdyaWQtZ2FwOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbiNjYXNlc0lMIHtcclxuICBjb2xvcjogIzZhZmZmMztcclxuICBmb250LXNpemU6IDEuOHZ3O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbiNjYXNlc0lMOmhvdmVyIHtcclxuICBjb2xvcjogIzZhZmZmMztcclxuICBmb250LXNpemU6IDJ2dyA7XHJcbn1cclxuXHJcbiNkZWF0aHNJTCB7XHJcbiAgY29sb3I6ICNiZjcxZmY7XHJcbiAgZm9udC1zaXplOiAxLjh2dztcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4jZGVhdGhzSUw6aG92ZXIge1xyXG4gIGNvbG9yOiAjYmY3MWZmO1xyXG4gIGZvbnQtc2l6ZTogMnZ3IDtcclxufVxyXG5cclxuI290aGVySUwge1xyXG4gIGNvbG9yOiAjOTE5M2E4O1xyXG4gIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuI290aGVySUw6aG92ZXIge1xyXG4gIGNvbG9yOiAjOTE5M2E4O1xyXG4gIGZvbnQtc2l6ZTogMnZ3IDtcclxufVxyXG5cclxuLml0ZW0xIHtcclxuICBncmlkLXJvdzogMSA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxufVxyXG4gIFxyXG4uY2VudGVydHh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIHdpZHRoOiAxMDAlOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsMCwwLC41KTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIG1hcmdpbjogMnZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2I7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTh2aDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAzMHZoO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDM1dmg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTRweCAwIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2I7XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jdG90YWxDYXNlc3tcclxuICBjb2xvcjogIzZhZmZmMztcclxuICB0b3A6IDJ2aDtcclxuICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pc3JhZWxDYXJkIHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgaGVpZ2h0OiAyNzBweDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5pc3JhZWxDYXJkOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE0cHggMCBibGFjaztcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyOTQ7XHJcbn1cclxuXHJcbiNjb3VudHJ5TmFtZXtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function InfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fact_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fact_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fact_r7.description);
} }
class InfoComponent {
    constructor() {
        this.FactsArray = [];
    }
    ngOnInit() {
        this.FactsData();
    }
    FactsData() {
        this.FactsArray = [
            {
                title: "harta1",
                description: "class InfoComponent implements OnInitexport implements OnInitexportimplements OnInitexportimplements OnInitexportimplements OnInitexport class InfoComponent implements OnInit class InfoComponent implements class InfoComponent implements class InfoComponent implements class InfoComponent implements"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            }
        ];
        return this.FactsArray;
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 4, vars: 1, consts: [["id", "title"], [1, "container2"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["src", "../../assets/world.png", 2, "width", "50px", "height", "50px"], ["id", "countryName"], [1, "centertxt"], ["id", "description"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INFORMATION & FACTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoComponent_div_3_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.FactsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\n\r\n#title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    left: 20vh;\r\n    color: #ffffff;\r\n    padding-top: 12vh;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    font-size: 34px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 0.83;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.container2[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 0 4px 30px rgba(0,0,0,.5);\r\n    transition: 0.3s;\r\n    margin: 2vh;\r\n    background-color: #26273b;\r\n    padding: 2px 16px;\r\n    text-align: center;\r\n    height: 18vh;\r\n    font-weight: inherit;\r\n    border-radius: 6px;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    width: 26vW;\r\n    \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    width: 28vW;\r\n    box-shadow: 0 5px 14px 0 black;\r\n    background-color: #26273b;\r\n    height: 50vh;\r\n    color: #ffffff;\r\n}\r\n\r\n#description[_ngcontent-%COMP%]{\r\n    \r\n    color: transparent;\r\n}\r\n\r\n#description[_ngcontent-%COMP%]:hover{\r\n    font-size: 1.5rem;\r\n    color: white; \r\n}\r\n\r\n#countryName[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 40px;\r\n    \r\n    font-size: 2rem;\r\n    background: -webkit-linear-gradient(#6afff3, #333);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoiYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuI3RpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMjB2aDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDEydmg7XHJcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMC44MztcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiA0MHB4O1xyXG59XHJcbiAgXHJcbi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsMCwwLC41KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBtYXJnaW46IDJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2I7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTh2aDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDI2dlc7XHJcbiAgICAvKiBjb2xvcjogIzI2MjczYjsgKi9cclxufVxyXG4gIFxyXG4uY2FyZDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAyOHZXO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTRweCAwIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb257XHJcbiAgICAvKiBmb250LXNpemU6IDJyZW07ICovXHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbjpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuI2NvdW50cnlOYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzZhZmZmMywgIzMzMyk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4gIFxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/qa/qa.component.ts":
/*!************************************!*\
  !*** ./src/app/qa/qa.component.ts ***!
  \************************************/
/*! exports provided: QaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaComponent", function() { return QaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");




function QaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quest_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quest_r9.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quest_r9.description);
} }
class QaComponent {
    constructor() {
        this.panelOpenState = false;
        this.questions = [];
    }
    ngOnInit() {
        this.QuestionsData();
    }
    QuestionsData() {
        this.questions = [
            {
                title: `WHAT IS SARS-CoV-2 / COVID-19?`,
                description: "Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2) is the name given to the 2019 novel coronavirus. COVID-19 is the name given to the disease associated with the virus. SARS-CoV-2 is a new strain of coronavirus that has not been previously identified in humans."
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            },
            {
                title: "harta2",
                description: "harta2"
            }
        ];
        return this.questions;
    }
}
QaComponent.ɵfac = function QaComponent_Factory(t) { return new (t || QaComponent)(); };
QaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QaComponent, selectors: [["app-qa"]], decls: 3, vars: 1, consts: [["id", "title"], [4, "ngFor", "ngForOf"], [1, "panel"], [1, "questTitle"]], template: function QaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QUESTIONS AND ANSWERS ABOUT THE CORONAVIRUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QaComponent_div_2_Template, 8, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\n\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  color: #ffffff;\r\n  padding-top: 12vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 34px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.panel[_ngcontent-%COMP%]{\r\n    transition: 0.3s;\r\n}\r\n\r\n\r\n.panel[_ngcontent-%COMP%]:hover{\r\nbackground-color: #1c1d2c !important;   \r\n}\r\n\r\n\r\n.panel[_ngcontent-%COMP%]:focus{\r\n    background-color: #26273b !important;   \r\n}\r\n\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\r\n    background: #26273b;\r\n}\r\n\r\n\r\n.questTitle[_ngcontent-%COMP%]{\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9xYS9xYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7O0FBR3ZGO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7O0FBRUE7Ozs7OztHQU1HOzs7QUFFSDtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7OztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQiLCJmaWxlIjoiYXBwL3FhL3FhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuI3RpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZWZ0OiAyMHZoO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctdG9wOiAxMnZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDAuODM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLyogLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI3M2I7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNzNiO1xyXG59ICovXHJcblxyXG4ucGFuZWx7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ucGFuZWw6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6ICMxYzFkMmMgIWltcG9ydGFudDsgICBcclxufVxyXG5cclxuLnBhbmVsOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYiAhaW1wb3J0YW50OyAgIFxyXG59XHJcbiAgICBcclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNzNiO1xyXG59IFxyXG5cclxuLnF1ZXN0VGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qa',
                templateUrl: './qa.component.html',
                styleUrls: ['./qa.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchBarComponent {
    constructor() {
        this.textChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serachText = "";
    }
    ngOnInit() {
    }
    onChange(event) {
        const text = event.target.value;
        this.serachText = text;
        this.textChanged.emit(text);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], outputs: { textChanged: "textChanged" }, decls: 4, vars: 0, consts: [[1, "search-box"], ["placeholder", "Search country...", 1, "input-box", 3, "keyup"], [1, "icon-box"], ["src", "../../assets/search.svg", "alt", "search-icon", 2, "width", "15px", "height", "16px", "margin-right", "10px"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchBarComponent_Template_input_keyup_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\n\r\n.search-box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background: #26273b;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    width: 65vw;\r\n    height: 45px;\r\n    border-radius: 30px;\r\n    position: relative;\r\n    left: 17vw;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.input-box[_ngcontent-%COMP%]{\r\n    border-color: transparent;\r\n    width: 91%;\r\n    background-color: transparent;\r\n    direction: ltr;\r\n    outline: none;\r\n    background: #26273b;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n    line-height: 1.43;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 16px;\r\n    margin-right: 10px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDY1dnc7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTd2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3h7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDkxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xyXG59XHJcblxyXG4uaWNvbi1ib3h7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css']
            }]
    }], function () { return []; }, { textChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/symp/symp.component.ts":
/*!****************************************!*\
  !*** ./src/app/symp/symp.component.ts ***!
  \****************************************/
/*! exports provided: SympComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SympComponent", function() { return SympComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SympComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SympComponent.ɵfac = function SympComponent_Factory(t) { return new (t || SympComponent)(); };
SympComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SympComponent, selectors: [["app-symp"]], decls: 15, vars: 0, consts: [["id", "title"], [1, "grid-container"], ["id", "coughimg", "src", "../../assets/cough.png"], ["id", "symptext"], ["src", "../../assets/fever.png", 1, "images"], ["src", "../../assets/shortness-of-breath.png", 1, "images"], ["src", "../../assets/difficulty-breathing.png", 1, "images"]], template: function SympComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CORONAVIRUS SYMPTOMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COUGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FEVER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SHORTNESS OF BREATH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DIFFICULTY BREATHING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\n\r\n#title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    left: 20vh;\r\n    color: #ffffff;\r\n    padding-top: 12vh;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    font-size: 34px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 0.83;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    \r\n    padding: 10px;\r\n    padding-top: 30px;\r\n  }\r\n\r\n#symptext[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    font-size: 34px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 0.83;\r\n    letter-spacing: normal;\r\n    margin-bottom: 30px;   \r\n}\r\n\r\n.images[_ngcontent-%COMP%]{\r\n    margin-top: 8vh;\r\n    width: 22vw;\r\n    transition: 0.3s;\r\n}\r\n\r\n.images[_ngcontent-%COMP%]:hover{\r\n    -webkit-filter: drop-shadow(5px 5px 5px #222 );\r\n    filter: drop-shadow(5px 5px 5px #222);\r\n}\r\n\r\n#coughimg[_ngcontent-%COMP%] {\r\n    width: 22vw;\r\n    transition: 0.3s;\r\n}\r\n\r\n#coughimg[_ngcontent-%COMP%]:hover{\r\n    -webkit-filter: drop-shadow(10px 10px 10px #222 );\r\n    filter: drop-shadow(5px 5px 5px #222);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zeW1wL3N5bXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQscUNBQXFDO0FBQ3pDIiwiZmlsZSI6ImFwcC9zeW1wL3N5bXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdGh3YXkrR290aGljK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiN0aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDIwdmg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxMnZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuODM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIC8qIGdyaWQtZ2FwOiAzMHB4OyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiNzeW1wdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjgzO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7ICAgXHJcbn1cclxuXHJcbi5pbWFnZXN7XHJcbiAgICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgICB3aWR0aDogMjJ2dztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5pbWFnZXM6aG92ZXJ7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMiApO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjMjIyKTtcclxufVxyXG5cclxuI2NvdWdoaW1nIHtcclxuICAgIHdpZHRoOiAyMnZ3O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuI2NvdWdoaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMTBweCAxMHB4ICMyMjIgKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMik7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SympComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-symp',
                templateUrl: './symp.component.html',
                styleUrls: ['./symp.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/config.dev.ts":
/*!****************************************!*\
  !*** ./src/environments/config.dev.ts ***!
  \****************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    GET_ALL_COUNTRIE_STAT_URL: "https://thevirustracker.com/free-api?countryTotals=ALL",
};


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

module.exports = __webpack_require__(/*! C:\Users\RonNabet\Desktop\Corona\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map