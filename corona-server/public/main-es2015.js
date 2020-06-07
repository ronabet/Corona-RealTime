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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_config_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/config.dev */ "./src/environments/config.dev.ts");





class ApiService {
    constructor(http) {
        this.http = http;
        this.params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('country', 'israel');
        this.headersOptios = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('x-rapidapi-key', 'fd565ad5a2msh8156f64d17d4454p1c66fdjsn1f30d420a80a');
        this.options = { params: this.params1, headers: this.headersOptios };
    }
    getAllCountriesStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ALL_COUNTRIE_STAT_URL);
    }
    getAllCountriesSecondery() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ALL_COUNTRIES_API_URL2, { headers: this.headersOptios });
    }
    getIsraelStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ISRAEL, this.options);
    }
    getWorldStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_WORLD_STAT, { headers: this.headersOptios });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });
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
        console.log(this.data.name);
        this.total_cases = this.data.name;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 5, vars: 0, consts: [["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TOTAL CASES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_3_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".md-dialog-container[_ngcontent-%COMP%] {\n    background-color: turquoise;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6ImFwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tZC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG59XG4iXX0= */"] });
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
    onReload() {
        window.location.reload();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [[1, "header-wrapper"], ["src", "../../assets/icon.svg", "id", "tommy-logo", 3, "click"], ["id", "corona-title", 3, "click"], ["id", "home", 3, "click"], ["id", "info", 3, "click"], ["id", "symp", 3, "click"], ["id", "protect", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_1_listener() { return ctx.onHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_2_listener() { return ctx.onHome(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_10_listener() { return ctx.onQA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Q & A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\nspan[_ngcontent-%COMP%] {cursor: context-menu;}\n@font-face {\n    font-family: Rubik;\n    src: url('Rubik-Medium.ttf');\n}\n.header-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: center;\n    display: grid;\n    position: fixed;\n    grid-template-areas: \"a b c d e f g h i j\";\n    grid-template-columns: repeat(10,1fr);\n    background-color: #0e1020;\n    height: 7vh;\n    box-shadow: 0 5px 13px 0 #070911;\n    top: 0%;\n    z-index: 1;\n}\n#home[_ngcontent-%COMP%]{\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: c;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    bottom: 7px;\n    transition: 0.3s;\n    text-align: center;\n}\n#home[_ngcontent-%COMP%]:hover{\n    color: #6afff3;\n\n}\n#info[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: d;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    bottom: 7px;\n    transition: 0.3s;\n}\n#protect[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: f;\n    font-size: 25px;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    bottom: 7px;\n    transition: 0.3s;\n\n}\n#info[_ngcontent-%COMP%]:hover{\n    color: #bf71ff;\n}\n#protect[_ngcontent-%COMP%]:hover{\n    color: #6afff3;\n\n}\n#symp[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: e;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    bottom: 7px;\n    transition: 0.3s;\n    left: 10px;\n}\n#symp[_ngcontent-%COMP%]:hover{\n    color: #9193a8;\n}\n#qa[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: g;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    bottom: 7px;\n    transition: 0.3s;\n    left: 25px;\n}\n#qa[_ngcontent-%COMP%]:hover{\n    color: #bf71ff;\n}\n#corona-title[_ngcontent-%COMP%]{\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: b;\n    font-size: 1.5rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    bottom: 7px;\n    right: 30%;\n}\n#tommy-logo[_ngcontent-%COMP%] {\n    grid-area: a;\n    position: relative;\n    bottom: 7px;\n    width: 10vw;\n    height: 6.5vh;\n    cursor: pointer;\n}\n#username[_ngcontent-%COMP%]{\n    grid-area: d;\n    font-family: rubik;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGO0FBQ3ZGLE1BQU0sb0JBQW9CLENBQUM7QUFFM0I7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQXVDO0FBQzNDO0FBR0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUlBO0lBQ0ksNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoiYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdGh3YXkrR290aGljK09uZSZkaXNwbGF5PXN3YXAnKTtcbnNwYW4ge2N1cnNvcjogY29udGV4dC1tZW51O31cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9SdWJpay1NZWRpdW0udHRmKTtcbn1cblxuXG4uaGVhZGVyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGIgYyBkIGUgZiBnIGggaSBqXCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMDIwO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEzcHggMCAjMDcwOTExO1xuICAgIHRvcDogMCU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2hvbWV7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGdyaWQtYXJlYTogYztcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xdmg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNob21lOmhvdmVye1xuICAgIGNvbG9yOiAjNmFmZmYzO1xuXG59XG5cbiNpbmZve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZ3JpZC1hcmVhOiBkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTF2aDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4jcHJvdGVjdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGdyaWQtYXJlYTogZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXZoO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbn1cblxuI2luZm86aG92ZXJ7XG4gICAgY29sb3I6ICNiZjcxZmY7XG59XG5cbiNwcm90ZWN0OmhvdmVye1xuICAgIGNvbG9yOiAjNmFmZmYzO1xuXG59XG5cbiNzeW1we1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZ3JpZC1hcmVhOiBlO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTF2aDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbiNzeW1wOmhvdmVye1xuICAgIGNvbG9yOiAjOTE5M2E4O1xufVxuXG4jcWF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgICBncmlkLWFyZWE6IGc7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXZoO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbGVmdDogMjVweDtcbn1cblxuI3FhOmhvdmVye1xuICAgIGNvbG9yOiAjYmY3MWZmO1xufVxuXG5cblxuI2Nvcm9uYS10aXRsZXtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZ3JpZC1hcmVhOiBiO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTF2aDtcbiAgICByaWdodDogMzAlO1xufVxuXG4jdG9tbXktbG9nbyB7XG4gICAgZ3JpZC1hcmVhOiBhO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xdmg7XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgaGVpZ2h0OiA2LjV2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuI3VzZXJuYW1le1xuICAgIGdyaWQtYXJlYTogZDtcbiAgICBmb250LWZhbWlseTogcnViaWs7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */"] });
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







function HomeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 ISRAEL STATISTICS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TOTAL CASES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " NEW CASES (24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TOTAL DEATHS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NEW DEATHS (24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " TOTAL RECOVERED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);
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
function HomeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_32_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r3.total_cases);
} }
class HomeComponent {
    constructor(api, dialog) {
        this.api = api;
        this.dialog = dialog;
        this.ILStatsArray = [];
        this.ResStat = [];
        this.AllCountriesArray = [];
        this.StatsToDisplay = [];
        this.searchText = "";
        this.open = true;
    }
    ngOnInit() {
        this.getWorldStat();
        this.getIsrael();
        this.searchTextChanged(this.searchText);
        this.getAllCountries();
    }
    getAllCountries() {
        this.api.getAllCountriesSecondery().subscribe((res) => {
            let resCountries = res.countries_stat;
            resCountries.forEach(element => {
                this.AllCountriesArray.push({
                    "title": element.country_name,
                    "total_cases": element.cases,
                    "total_recovered": element.total_recovered,
                    "total_deaths": element.deaths,
                    "total_new_cases_today": element.new_cases,
                    "total_new_deaths_today": element.new_deaths,
                    "total_serious_cases": element.serious_critical
                });
            });
            this.StatsToDisplay = this.AllCountriesArray;
        });
    }
    getIsrael() {
        this.api.getIsraelStat().subscribe((res) => {
            let latestStatIL = res.latest_stat_by_country["0"];
            this.ILStatsArray.push({
                "title": latestStatIL.country_name,
                "total_cases": latestStatIL.total_cases,
                "total_recovered": latestStatIL.total_recovered,
                "total_deaths": latestStatIL.total_deaths,
                "total_new_cases_today": latestStatIL.new_cases,
                "total_new_deaths_today": latestStatIL.new_deaths,
                "total_serious_cases": latestStatIL.serious_critical
            });
        });
    }
    getWorldStat() {
        this.api.getWorldStat().subscribe((res) => {
            this.WorldStatResObject = {
                "total_cases": res.total_cases,
                "total_recovered": res.total_recovered,
                "total_deaths": res.total_deaths,
                "total_new_cases_today": res.new_cases,
                "total_new_deaths_today": res.new_deaths,
            };
        });
        return this.WorldStatResObject;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], { width: '400px', height: '450px', data: { name: "total" }, panelClass: 'myapp-background'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    searchTextChanged(text) {
        this.searchText = this.stripWhiteSpaces(text);
        this.StatsToDisplay = [];
        this.addTasksToDisplay(this.AllCountriesArray);
    }
    addTasksToDisplay(countriesStats) {
        countriesStats.forEach((AllCountriesArray) => {
            if ((AllCountriesArray.title).includes(this.searchText)) {
                this.StatsToDisplay.push(AllCountriesArray);
            }
        });
    }
    stripWhiteSpaces(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 7, consts: [[1, "rontipesh"], ["id", "title"], [1, "WorldlCard"], ["id", "IsraelTitle"], [1, "grid-container-row"], ["id", "casesIL"], ["id", "deathsIL"], ["id", "otherIL"], [4, "ngFor", "ngForOf"], ["id", "worldtitle"], [3, "textChanged"], [1, "container2"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "israelCard"], [1, "grid-container"], [1, "card", 3, "click"], ["id", "countryName"], [1, "centertxt"], ["id", "totalCases"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CORONAVIRUS DISEASE REAL-TIME STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COVID-19 WORLD STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " TOTAL CASES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " NEW CASES (24H) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " TOTAL DEATHS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " NEW DEATHS (24H) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " TOTAL RECOVERED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_div_27_Template, 29, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "COVID-19 WORLD STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-search-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChanged", function HomeComponent_Template_app_search_bar_textChanged_30_listener($event) { return ctx.searchTextChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_div_32_Template, 6, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.WorldStatResObject.total_cases, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx.WorldStatResObject.total_new_cases_today, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.WorldStatResObject.total_deaths, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx.WorldStatResObject.total_new_deaths_today, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.WorldStatResObject.total_recovered, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ILStatsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.StatsToDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 12vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n#worldtitle[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 7vh;\n  padding-bottom: 3vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n#IsraelTitle[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  margin-top: 0.2vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 30px;\n  font-weight: inherit;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n  text-align: center;\n  color: white;\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: auto auto;\n  grid-gap: 5px;\n  padding: 10px;\n  text-align: center;\n  grid-auto-flow: column;\n}\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  padding: 20px 0;\n  font-size: 30px;\n}\n#casesIL[_ngcontent-%COMP%] {\n  color: #6afff3;\n  font-size: 28px;\n  transition: 0.2s;\n  text-align: center;\n  cursor: context-menu;\n}\n#casesIL[_ngcontent-%COMP%]:hover {\n  color: #6afff3;\n  transform: translate(0px, -20px);\n  font-size: 2vw ;\n}\n#deathsIL[_ngcontent-%COMP%] {\n  color: #bf71ff;\n  font-size: 28px;\n  transition: 0.2s;\n  text-align: center;\n  cursor: context-menu;\n}\n#deathsIL[_ngcontent-%COMP%]:hover {\n  color: #bf71ff;\n  font-size: 2vw;\n  transform: translate(0px, -20px);\n}\n#otherIL[_ngcontent-%COMP%] {\n  color: #9193a8;\n  font-size: 28px;\n  transition: 0.2s;\n  text-align: center;\n  cursor: context-menu;\n}\n#otherIL[_ngcontent-%COMP%]:hover {\n  color: #9193a8;\n  font-size: 2vw ;\n  transform: translate(0px, -20px);\n}\n.item1[_ngcontent-%COMP%] {\n  grid-row: 1 ;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n}\n.centertxt[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n.container2[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%]{\n  box-shadow: 0 4px 30px rgba(0,0,0,.5);\n  transition: 0.3s;\n  margin: 2vh;\n  background-color: #26273b;\n  padding: 2px 16px;\n  text-align: center;\n  height: 18vh;\n  font-weight: inherit;\n  border-radius: 6px;\n  font-family: 'Pathway Gothic One', sans-serif;\n  width: 30vh;\n}\n.card[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  width: 35vh;\n  box-shadow: 0 5px 14px 0 black;\n  background-color: #26273b;\n  height: 20vh;\n  color: #ffffff;\n}\n#totalCases[_ngcontent-%COMP%]{\n  color: #6afff3;\n  top: 3vh;\n  font-size: 40px;\n  text-align: center;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: 100;\n  position: relative;\n}\n.israelCard[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 65%;\n  height: 35vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n  border-radius: 20px;\n  background-color: #26273b;\n  margin: 60px auto;\n  transition: 0.2s;\n}\n.grid-container-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n  grid-gap: 10px;\n}\n.israelCard[_ngcontent-%COMP%]:hover{\n  box-shadow: 0 5px 14px 0 black;\n}\n.WorldlCard[_ngcontent-%COMP%]{\n  padding: 40px;\n  width: 65%;\n  height: 18vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n  border-radius: 20px;\n  background-color: #26273b;\n  margin: 60px auto;\n  transition: 0.2s;\n\n}\n.highlight[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #294;\n}\n#countryName[_ngcontent-%COMP%]{\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n  font-size: 2vw;\n  color: white;\n}\n@media (max-width: 600px) {\n  #deathsIL[_ngcontent-%COMP%] {\n    color: #ffffff;\n    font-size: 17px;\n    transition: 0.2s;\n    text-align: center;\n  }\n  #otherIL[_ngcontent-%COMP%] {\n    color: #9193a8;\n    font-size: 17px;\n    transition: 0.2s;\n    text-align: center;\n  }\n  #casesIL[_ngcontent-%COMP%] {\n    color: #6afff3;\n    font-size: 17px;\n    transition: 0.2s;\n    text-align: center;\n  }\n}\n.rontipesh[_ngcontent-%COMP%] {\n  background-color: #0e1020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUZBQXVGO0FBQ3ZGLFlBQVk7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsY0FBYztBQUNoQjtBQUlBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0Msb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdGh3YXkrR290aGljK09uZSZkaXNwbGF5PXN3YXAnKTtcbi8qICMxY2JmZmYgKi9cbiN0aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiAyMHZoO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDEydmg7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC44MztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuI3dvcmxkdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMjB2aDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiA3dmg7XG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC44MztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuI0lzcmFlbFRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDIwdmg7XG4gIG1hcmdpbi10b3A6IDAuMnZoO1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAwLjgzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbn1cblxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jY2FzZXNJTCB7XG4gIGNvbG9yOiAjNmFmZmYzO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG59XG5cbiNjYXNlc0lMOmhvdmVyIHtcbiAgY29sb3I6ICM2YWZmZjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIwcHgpO1xuICBmb250LXNpemU6IDJ2dyA7XG59XG5cbiNkZWF0aHNJTCB7XG4gIGNvbG9yOiAjYmY3MWZmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG59XG5cbiNkZWF0aHNJTDpob3ZlciB7XG4gIGNvbG9yOiAjYmY3MWZmO1xuICBmb250LXNpemU6IDJ2dztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjBweCk7XG59XG5cbiNvdGhlcklMIHtcbiAgY29sb3I6ICM5MTkzYTg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbn1cblxuI290aGVySUw6aG92ZXIge1xuICBjb2xvcjogIzkxOTNhODtcbiAgZm9udC1zaXplOiAydncgO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yMHB4KTtcbn1cblxuLml0ZW0xIHtcbiAgZ3JpZC1yb3c6IDEgO1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jZW50ZXJ0eHR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZHtcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsMCwwLC41KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgbWFyZ2luOiAydmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2I7XG4gIHBhZGRpbmc6IDJweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTh2aDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMzB2aDtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDM1dmg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE0cHggMCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcbiAgaGVpZ2h0OiAyMHZoO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3RvdGFsQ2FzZXN7XG4gIGNvbG9yOiAjNmFmZmYzO1xuICB0b3A6IDN2aDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXNyYWVsQ2FyZCB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMzV2aDtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5ncmlkLWNvbnRhaW5lci1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cblxuXG4uaXNyYWVsQ2FyZDpob3ZlcntcbiAgYm94LXNoYWRvdzogMCA1cHggMTRweCAwIGJsYWNrO1xufVxuXG4uV29ybGRsQ2FyZHtcbiAgcGFkZGluZzogNDBweDtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAxOHZoO1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xuICBtYXJnaW46IDYwcHggYXV0bztcbiAgdHJhbnNpdGlvbjogMC4ycztcblxufVxuXG4uaGlnaGxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjk0O1xufVxuXG4jY291bnRyeU5hbWV7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAjZGVhdGhzSUwge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjb3RoZXJJTCB7XG4gICAgY29sb3I6ICM5MTkzYTg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNjYXNlc0lMIHtcbiAgICBjb2xvcjogIzZhZmZmMztcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnJvbnRpcGVzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEwMjA7XG59XG4iXX0= */"] });
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
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
            },
            {
                title: "",
                description: ""
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n    text-align: center;\n    left: 20vh;\n    color: #ffffff;\n    padding-top: 12vh;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n}\n\n.container2[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    top: 40px;\n}\n\n.card[_ngcontent-%COMP%]{\n    box-shadow: 0 4px 30px rgba(0,0,0,.5);\n    transition: 0.3s;\n    margin: 2vh;\n    background-color: #26273b;\n    padding: 2px 16px;\n    text-align: center;\n    height: 18vh;\n    font-weight: inherit;\n    border-radius: 6px;\n    font-family: 'Pathway Gothic One', sans-serif;\n    width: 26vW;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    width: 28vW;\n    box-shadow: 0 5px 14px 0 black;\n    background-color: #26273b;\n    height: 50vh;\n    color: #ffffff;\n}\n\n#description[_ngcontent-%COMP%]{\n    \n    color: transparent;\n}\n\n#description[_ngcontent-%COMP%]:hover{\n    font-size: 1.5rem;\n    color: white; \n}\n\n#countryName[_ngcontent-%COMP%]{\n    position: relative;\n    top: 40px;\n    \n    font-size: 2rem;\n    background: -webkit-linear-gradient(#6afff3, #333);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoiYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xuXG4jdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDIwdmg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZy10b3A6IDEydmg7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMC44MztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG5cbi5jb250YWluZXIye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDQwcHg7XG59XG4gIFxuLmNhcmR7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsMCwwLC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIG1hcmdpbjogMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2I7XG4gICAgcGFkZGluZzogMnB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTh2aDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiAyNnZXO1xuICAgIC8qIGNvbG9yOiAjMjYyNzNiOyAqL1xufVxuICBcbi5jYXJkOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMjh2VztcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNHB4IDAgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNkZXNjcmlwdGlvbntcbiAgICAvKiBmb250LXNpemU6IDJyZW07ICovXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jZGVzY3JpcHRpb246aG92ZXJ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHdoaXRlOyBcbn1cblxuI2NvdW50cnlOYW1le1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNmFmZmYzLCAjMzMzKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4gIFxuIl19 */"] });
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
                title: `When is a person infectious?`,
                description: "The infectious period may begin one to two days before symptoms appear, but people are likely most infectious during the symptomatic period, even if symptoms are mild and very non-specific. The infectious period is now estimated to last for 7-12 days in moderate cases and up to two weeks on average in severe cases."
            },
            {
                title: `Can COVID-19 spread in warm sunny weather?`,
                description: "COVID-19 can survive temperatures higher than 25C. You can catch it no matter how sunny and warm it is. So, whatever the weather you should follow the official advice to protect yourself from the virus. Getting out into the sunshine, if you can, is still a good idea as this helps your body produce vitamin D which is important for your immune system. "
            },
            {
                title: `Will drinking lots of hot drinks stop COVID-19?`,
                description: "There is no drink hot or cold that will protect you from COVID-19 or cure the illness. So far, there’s no proven cure for COVID-19 but most people recover by themselves. Taking paracetamol, drinking lots of liquids, and getting enough rest can help you manage your symptoms. "
            },
            {
                title: `Can Chloroquine cure COVID-19?`,
                description: "At the moment there is no proven cure for COVID-19, but most people will recover on their own without needing professional medical care. If you think you have COVID-19 and are having difficulty breathing, contact your local health facility as you will need professional medical care. "
            },
            {
                title: `Can Black and African people get COVID-19?`,
                description: "Anyone can get COVID-19, regardless of race or skin colour. Older people and people with other health conditions, such as asthma, heart diseases and diabetes, are more at risk of getting seriously ill. "
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n\n#title[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 12vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n\n\n\n\n\n.panel[_ngcontent-%COMP%]{\n    transition: 0.3s;\n}\n\n\n.panel[_ngcontent-%COMP%]:hover{\nbackground-color: #1c1d2c !important;   \n}\n\n\n.panel[_ngcontent-%COMP%]:focus{\n    background-color: #26273b !important;   \n}\n\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: #26273b;\n}\n\n\n.questTitle[_ngcontent-%COMP%]{\n    font-size: 25px;\n    font-family: 'Pathway Gothic One', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9xYS9xYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7O0FBR3ZGO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7O0FBRUE7Ozs7OztHQU1HOzs7QUFFSDtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7OztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkNBQTZDO0FBQ2pEIiwiZmlsZSI6ImFwcC9xYS9xYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xuXG5cbiN0aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiAyMHZoO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDEydmg7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC44MztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLyogLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNzNiO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMyNjI3M2I7XG59ICovXG5cbi5wYW5lbHtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ucGFuZWw6aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZDJjICFpbXBvcnRhbnQ7ICAgXG59XG5cbi5wYW5lbDpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiICFpbXBvcnRhbnQ7ICAgXG59XG4gICAgXG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcbn0gXG5cbi5xdWVzdFRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG59XG5cbiJdfQ== */"] });
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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n.search-box[_ngcontent-%COMP%]{\n    display: flex;\n    background: #26273b;\n    align-items: center;\n    justify-content: flex-end;\n    font-family: 'Pathway Gothic One', sans-serif;\n    width: 65vw;\n    height: 45px;\n    border-radius: 30px;\n    position: relative;\n    left: 17vw;\n    margin-bottom: 30px;\n}\n\n.input-box[_ngcontent-%COMP%]{\n    border-color: transparent;\n    width: 91%;\n    background-color: transparent;\n    direction: ltr;\n    outline: none;\n    background: #26273b;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 20px;\n    margin-right: 10px;\n    line-height: 1.43;\n}\n\n.icon-box[_ngcontent-%COMP%]{\n    width: 15px;\n    height: 16px;\n    margin-right: 10px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xuXG4uc2VhcmNoLWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICMyNjI3M2I7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogNjV2dztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTd2dztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaW5wdXQtYm94e1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDkxJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMyNjI3M2I7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XG59XG5cbi5pY29uLWJveHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"] });
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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n    text-align: center;\n    left: 20vh;\n    color: #ffffff;\n    padding-top: 12vh;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: auto;\n    \n    padding: 10px;\n    padding-top: 30px;\n  }\n\n#symptext[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #ffffff;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n    margin-bottom: 30px;\n}\n\n.images[_ngcontent-%COMP%]{\n    margin-top: 8vh;\n    width: 350px;\n    transition: 0.3s;\n    justify-self: center;\n}\n\n.images[_ngcontent-%COMP%]:hover{\n    -webkit-filter: drop-shadow(5px 5px 5px #222 );\n    filter: drop-shadow(5px 5px 5px #222);\n}\n\n#coughimg[_ngcontent-%COMP%] {\n    width: 350px;\n    transition: 0.3s;\n    justify-self: center;\n}\n\n#coughimg[_ngcontent-%COMP%]:hover{\n    -webkit-filter: drop-shadow(10px 10px 10px #222 );\n    filter: drop-shadow(5px 5px 5px #222);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zeW1wL3N5bXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQscUNBQXFDO0FBQ3pDIiwiZmlsZSI6ImFwcC9zeW1wL3N5bXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhdGh3YXkrR290aGljK09uZSZkaXNwbGF5PXN3YXAnKTtcblxuI3RpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAyMHZoO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmctdG9wOiAxMnZoO1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDAuODM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAvKiBncmlkLWdhcDogMzBweDsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG5cbiNzeW1wdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDAuODM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaW1hZ2Vze1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmltYWdlczpob3ZlcntcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMiApO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMik7XG59XG5cbiNjb3VnaGltZyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbiNjb3VnaGltZzpob3ZlcntcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxMHB4IDEwcHggIzIyMiApO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMik7XG59XG5cbiJdfQ== */"] });
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
    GET_ALL_COUNTRIES_API_URL2: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
    GET_ISRAEL: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
    GET_WORLD_STAT: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"
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
    production: true
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

module.exports = __webpack_require__(/*! C:\Users\Ron Nabet\Desktop\Corona\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
