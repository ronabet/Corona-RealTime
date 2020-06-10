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
        this.Countryparams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('country', "");
        this.headersOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('x-rapidapi-key', 'fd565ad5a2msh8156f64d17d4454p1c66fdjsn1f30d420a80a');
        this.options = { params: this.params1, headers: this.headersOptions };
        this.Countryoptions = { params: this.Countryparams, headers: this.headersOptions };
    }
    getAllCountriesStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ALL_COUNTRIE_STAT_URL);
    }
    getAllCountriesSecondery() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ALL_COUNTRIES_API_URL2, { headers: this.headersOptions });
    }
    getIsraelStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ISRAEL, this.options);
    }
    getWorldStat() {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_WORLD_STAT, { headers: this.headersOptions });
    }
    getCountryStat(headers) {
        return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ISRAEL, headers);
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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"] });
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function DialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_div_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Active Cases: ", ctx_r0.CountryStatsObject.active_cases, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("New Cases: ", ctx_r0.CountryStatsObject.new_cases, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("New Deaths: ", ctx_r0.CountryStatsObject.new_deaths, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Serious Cases: ", ctx_r0.CountryStatsObject.serious_critical, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Deaths: ", ctx_r0.CountryStatsObject.total_deaths, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Recovered: ", ctx_r0.CountryStatsObject.total_recovered, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Tests: ", ctx_r0.CountryStatsObject.total_tests, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Tests Today: ", ctx_r0.CountryStatsObject.total_tests_per1m, "");
} }
function DialogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "animateTransform", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogComponent {
    constructor(dialogRef, http, api, data) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.api = api;
        this.data = data;
        this.resReturn = false;
        this.Countryparams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        this.headersOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    }
    ngOnInit() {
        this.getCountryLastStat();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    getCountryLastStat() {
        this.Countryparams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country', this.data.name);
        this.headersOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-rapidapi-key', 'fd565ad5a2msh8156f64d17d4454p1c66fdjsn1f30d420a80a');
        this.Countryoptions = { params: this.Countryparams, headers: this.headersOptions };
        this.api.getCountryStat(this.Countryoptions).subscribe((res) => {
            let resFiltered = res.latest_stat_by_country[0];
            this.resReturn = true;
            this.CountryStatsObject = {
                "active_cases": resFiltered ? resFiltered.active_cases : "N/A",
                "new_cases": resFiltered.new_cases ? resFiltered.new_cases : "N/A",
                "new_deaths": resFiltered.new_deaths ? resFiltered.new_deaths : "N/A",
                "total_deaths": resFiltered.total_deaths ? resFiltered.total_deaths : "N/A",
                "total_recovered": resFiltered.total_recovered ? resFiltered.total_recovered : "N/A",
                "total_tests": resFiltered.total_tests ? resFiltered.total_tests : "N/A",
                "total_test_by_day": resFiltered.total_tests_per1m ? resFiltered.total_tests_per1m : "N/A",
                "serious_critical": resFiltered.serious_critical ? resFiltered.serious_critical : "N/A",
                "total_tests_per1m": resFiltered.total_tests_per1m ? resFiltered.total_tests_per1m : "N/A"
            };
        });
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 4, vars: 2, consts: [[2, "overflow", "hidden"], [4, "ngIf", "ngIfElse"], ["loader", ""], [1, "stats-grid-container"], ["id", "cancel", "mat-button", "", 3, "click"], [1, "loader-grid-container"], ["title", "0", 1, "loader", "loader--style1"], ["version", "1.1", "id", "loader-1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100px", "height", "100px", "viewBox", "0 0 40 40", "enable-background", "new 0 0 40 40", 0, "xml", "space", "preserve", 2, "width", "100%"], ["opacity", "0.2", "fill", "#000", "d", "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"], ["fill", "#000", "d", "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n      C22.32,8.481,24.301,9.057,26.013,10.047z"], ["attributeType", "xml", "attributeName", "transform", "type", "rotate", "from", "0 20 20", "to", "360 20 20", "dur", "0.5s", "repeatCount", "indefinite"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogComponent_div_1_Template, 21, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogComponent_ng_template_2_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resReturn)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".md-dialog-container[_ngcontent-%COMP%] {\n    background-color: turquoise;\n}\n\n  .mat-dialog-container {\n  overflow-y: hidden !important;\n}\n\nsvg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{\n  fill: rgb(255, 255, 255);\n}\n\n.loader-grid-container[_ngcontent-%COMP%]{\n  display: grid;\n  justify-items: center;\n  margin-top: 26%;\n}\n\n#cancel[_ngcontent-%COMP%]{\n  bottom: 25px;\n}\n\n.stats-grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  color: #6afff3;\n  font-family: 'Pathway Gothic One', sans-serif;\n  text-transform: uppercase;\n  font-size: 20px;\n  grid-gap: 4px;\n}\n\n@media (max-width: 450px) {\n  .loader-grid-container[_ngcontent-%COMP%]{\n    margin-top: 36%;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBR0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tZC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG59XG5cbi9kZWVwLyAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuc3ZnIHBhdGgsXG5zdmcgcmVjdHtcbiAgZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ubG9hZGVyLWdyaWQtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI2JTtcbn1cblxuXG4jY2FuY2Vse1xuICBib3R0b206IDI1cHg7XG59XG5cblxuLnN0YXRzLWdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGNvbG9yOiAjNmFmZmYzO1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZ3JpZC1nYXA6IDRweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmxvYWRlci1ncmlkLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzNiU7XG4gIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: undefined, decorators: [{
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
        this.innerWidth = window.innerWidth;
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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [[1, "header-wrapper"], ["src", "../../assets/icon.svg", "id", "logo", 3, "click"], ["id", "corona-title", 3, "click"], ["id", "home", 3, "click"], ["id", "symp", 3, "click"], ["id", "info", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_6_listener() { return ctx.onQA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Q & A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_8_listener() { return ctx.onSymp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SYMPTOMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\nspan[_ngcontent-%COMP%] {cursor: context-menu;}\r\n@font-face {\r\n    font-family: Rubik;\r\n    src: url('Rubik-Medium.ttf');\r\n}\r\n.header-wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    align-items: center;\r\n    display: grid;\r\n    position: fixed;\r\n    grid-template-areas: \"a b c d e f g h i j\";\r\n    grid-template-columns: repeat(10,1fr);\r\n    background-color: #0e1020;\r\n    height: 7vh;\r\n    box-shadow: 0 5px 13px 0 #070911;\r\n    top: 0%;\r\n    z-index: 1;\r\n}\r\n#home[_ngcontent-%COMP%]{\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: c;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    bottom: 7px;\r\n    transition: 0.3s;\r\n    text-align: center;\r\n}\r\n#home[_ngcontent-%COMP%]:hover{\r\n    color: #6afff3;\r\n\r\n}\r\n#info[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: d;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    bottom: 7px;\r\n    transition: 0.3s;\r\n}\r\n#protect[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: f;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    bottom: 7px;\r\n    transition: 0.3s;\r\n    min-width: 40px;\r\n\r\n}\r\n#info[_ngcontent-%COMP%]:hover{\r\n    color: #bf71ff;\r\n}\r\n#protect[_ngcontent-%COMP%]:hover{\r\n    color: #6afff3;\r\n\r\n}\r\n#symp[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: e;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    bottom: 7px;\r\n    transition: 0.3s;\r\n    left: 10px;\r\n}\r\n#symp[_ngcontent-%COMP%]:hover{\r\n    color: #9193a8;\r\n}\r\n#qa[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: g;\r\n    font-size: 1.3rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    bottom: 7px;\r\n    transition: 0.3s;\r\n    left: 25px;\r\n}\r\n#qa[_ngcontent-%COMP%]:hover{\r\n    color: #bf71ff;\r\n}\r\n#corona-title[_ngcontent-%COMP%]{\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    grid-area: b;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    position: relative;\r\n    bottom: 7px;\r\n    right: 30%;\r\n}\r\n#logo[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n    position: relative;\r\n    bottom: 7px;\r\n    width: 10vw;\r\n    height: 40px;\r\n    cursor: pointer;\r\n}\r\n#username[_ngcontent-%COMP%]{\r\n    grid-area: d;\r\n    font-family: rubik;\r\n    font-size: 16px;\r\n}\r\n@media screen and (max-width: 675px) {\r\n\r\n  #logo[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n    position: relative;\r\n    bottom: 7px;\r\n    width: 10vw;\r\n  }\r\n\r\n  #corona-title[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    bottom: 7px;\r\n    right: 0;\r\n    min-width: 70px;\r\n  }\r\n  \r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RjtBQUN2RixNQUFNLG9CQUFvQixDQUFDO0FBRTNCO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUF1QztBQUMzQztBQUdBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsT0FBTztJQUNQLFVBQVU7QUFDZDtBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUlBO0lBQ0ksNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTs7RUFFRTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGVBQWU7RUFDakI7Ozs7O0FBS0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XHJcbnNwYW4ge2N1cnNvcjogY29udGV4dC1tZW51O31cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL1J1YmlrLU1lZGl1bS50dGYpO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiBjIGQgZSBmIGcgaCBpIGpcIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMDIwO1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxM3B4IDAgIzA3MDkxMTtcclxuICAgIHRvcDogMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jaG9tZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGdyaWQtYXJlYTogYztcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaG9tZTpob3ZlcntcclxuICAgIGNvbG9yOiAjNmFmZmYzO1xyXG5cclxufVxyXG5cclxuI2luZm97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBncmlkLWFyZWE6IGQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuI3Byb3RlY3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBncmlkLWFyZWE6IGY7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuXHJcbn1cclxuXHJcbiNpbmZvOmhvdmVye1xyXG4gICAgY29sb3I6ICNiZjcxZmY7XHJcbn1cclxuXHJcbiNwcm90ZWN0OmhvdmVye1xyXG4gICAgY29sb3I6ICM2YWZmZjM7XHJcblxyXG59XHJcblxyXG4jc3ltcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGdyaWQtYXJlYTogZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuI3N5bXA6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzkxOTNhODtcclxufVxyXG5cclxuI3Fhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1hcmVhOiBnO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDdweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4jcWE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2JmNzFmZjtcclxufVxyXG5cclxuXHJcblxyXG4jY29yb25hLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZ3JpZC1hcmVhOiBiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDdweDtcclxuICAgIHJpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIGdyaWQtYXJlYTogYTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4jdXNlcm5hbWV7XHJcbiAgICBncmlkLWFyZWE6IGQ7XHJcbiAgICBmb250LWZhbWlseTogcnViaWs7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NXB4KSB7XHJcblxyXG4gICNsb2dvIHtcclxuICAgIGdyaWQtYXJlYTogYTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAjY29yb25hLXRpdGxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA3cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
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







function HomeComponent_div_3_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 ISRAEL STATISTICS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TOTAL CASES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " NEW CASES (24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TOTAL DEATHS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NEW DEATHS (24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " TOTAL RECOVERED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " SERIOUS CASES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r10.total_cases, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r10.total_new_cases_today, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r10.total_deaths, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r10.total_new_deaths_today, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r10.total_recovered, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stat_r10.total_serious_cases, " ");
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 WORLD STATISTICS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TOTAL CASES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " NEW CASES (24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TOTAL DEATHS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NEW DEATHS (24H) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " TOTAL RECOVERED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_3_div_25_Template, 29, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.WorldStatResObject.total_cases, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx_r5.WorldStatResObject.total_new_cases_today, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.WorldStatResObject.total_deaths, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx_r5.WorldStatResObject.total_new_deaths_today, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.WorldStatResObject.total_recovered, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.ILStatsArray);
} }
function HomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animateTransform", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const stat_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDialog(stat_r11.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r11.total_cases);
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
                    "title": element.country_name.toUpperCase(),
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
                "total_new_cases_today": latestStatIL.new_cases ? latestStatIL.new_cases : "0",
                "total_new_deaths_today": latestStatIL.new_deaths ? latestStatIL.new_deaths : "0",
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
    openDialog(country) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], { width: '450px', height: '345px', data: { name: country }, panelClass: 'myapp-background'
        });
        dialogRef.afterClosed().subscribe(result => {
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 3, consts: [[1, "component-color"], ["id", "title"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["id", "worldtitle"], [3, "textChanged"], [1, "cards-container"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "WorldlCard"], ["id", "IsraelTitle"], [1, "grid-container-row"], ["id", "cases"], ["id", "deaths"], ["id", "otherStats"], [4, "ngFor", "ngForOf"], [1, "israelCard"], [1, "grid-container"], ["id", "loaderContainer"], ["title", "1", 1, "loader", "loader--style2"], ["version", "1.1", "id", "loader-1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "150px", "height", "150px", "viewBox", "0 0 50 50", 0, "xml", "space", "preserve", 2, "width", "100%"], ["fill", "#000", "d", "M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"], ["attributeType", "xml", "attributeName", "transform", "type", "rotate", "from", "0 25 25", "to", "360 25 25", "dur", "0.6s", "repeatCount", "indefinite"], [1, "card", 3, "click"], ["id", "countryName"], [1, "centertxt"], ["id", "totalCases"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CORONAVIRUS DISEASE REAL-TIME STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 26, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_template_4_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "COVID-19 WORLD STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-search-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChanged", function HomeComponent_Template_app_search_bar_textChanged_8_listener($event) { return ctx.searchTextChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 6, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.AllCountriesArray.length > 1)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.StatsToDisplay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  color: #ffffff;\r\n  padding-top: 12vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 34px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n}\r\n\r\n#worldtitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  color: #ffffff;\r\n  padding-top: 7vh;\r\n  padding-bottom: 3vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 34px;\r\n  font-weight: 500;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n}\r\n\r\n#IsraelTitle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  left: 20vh;\r\n  margin-top: 0.2vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-size: 30px;\r\n  font-weight: inherit;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 0.83;\r\n  letter-spacing: normal;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  grid-template-rows: auto auto;\r\n  grid-gap: 5px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  grid-auto-flow: column;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n#cases[_ngcontent-%COMP%] {\r\n  color: #6afff3;\r\n  font-size: 28px;\r\n  transition: 0.2s;\r\n  text-align: center;\r\n  cursor: context-menu;\r\n}\r\n\r\n#cases[_ngcontent-%COMP%]:hover {\r\n  color: #6afff3;\r\n  transform: translate(0px, -20px);\r\n  font-size: 2vw ;\r\n}\r\n\r\n#deaths[_ngcontent-%COMP%] {\r\n  color: #bf71ff;\r\n  font-size: 28px;\r\n  transition: 0.2s;\r\n  text-align: center;\r\n  cursor: context-menu;\r\n  \r\n}\r\n\r\n#deaths[_ngcontent-%COMP%]:hover {\r\n  color: #bf71ff;\r\n  font-size: 2vw;\r\n  transform: translate(0px, -20px);\r\n}\r\n\r\n#otherStats[_ngcontent-%COMP%] {\r\n  color: #9193a8;\r\n  font-size: 28px;\r\n  transition: 0.2s;\r\n  text-align: center;\r\n  cursor: context-menu;\r\n}\r\n\r\n#otherStats[_ngcontent-%COMP%]:hover {\r\n  color: #9193a8;\r\n  font-size: 2vw ;\r\n  transform: translate(0px, -20px);\r\n}\r\n\r\n.item1[_ngcontent-%COMP%] {\r\n  grid-row: 1 ;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n}\r\n\r\n.centertxt[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.cards-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  box-shadow: 0 4px 30px rgba(0,0,0,.5);\r\n  transition: 0.3s;\r\n  margin: 6px;\r\n  background-color: #26273b;\r\n  padding: 2px 16px;\r\n  text-align: center;\r\n  height: 110px;\r\n  font-weight: inherit;\r\n  border-radius: 6px;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  width: 180px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  width: 200px;\r\n  box-shadow: 0 5px 14px 0 black;\r\n  background-color: #26273b;\r\n  height: 120px;\r\n  color: #ffffff;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover   #totalCases[_ngcontent-%COMP%] {\r\n  top: 10px;\r\n  \r\n}\r\n\r\n#totalCases[_ngcontent-%COMP%]{\r\n  color: #6afff3;\r\n  top: 7px;\r\n  font-size: 40px;\r\n  text-align: center;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: 100;\r\n  position: relative;\r\n  transition: 0.3s;\r\n}\r\n\r\n.israelCard[_ngcontent-%COMP%] {\r\n  padding: 40px;\r\n  width: 65%;\r\n  height: 35vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n  border-radius: 20px;\r\n  background-color: #26273b;\r\n  margin: 60px auto;\r\n  transition: 0.2s;\r\n}\r\n\r\n.grid-container-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto auto;\r\n  grid-gap: 10px;\r\n}\r\n\r\n.israelCard[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 5px 14px 0 black;\r\n}\r\n\r\n.WorldlCard[_ngcontent-%COMP%]{\r\n  padding: 40px;\r\n  width: 65%;\r\n  height: 18vh;\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n  border-radius: 20px;\r\n  background-color: #26273b;\r\n  margin: 60px auto;\r\n  transition: 0.2s;\r\n\r\n}\r\n\r\n.highlight[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #294;\r\n}\r\n\r\n#countryName[_ngcontent-%COMP%]{\r\n  font-family: 'Pathway Gothic One', sans-serif;\r\n  font-weight: inherit;\r\n  font-size: 24px;\r\n  color: white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  margin: 1em 0;\r\n  border-bottom: 1px dashed;\r\n  padding-bottom: 1em;\r\n  font-weight: lighter;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]{\r\n  margin: 0 0 2em;\r\n  height: 100px;\r\n  width: 20%;\r\n  text-align: center;\r\n  padding: 1em;\r\n  margin: 0 auto 1em;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n#loaderContainer[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{\r\n  fill: rgb(255, 255, 255);\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  #loaderContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 943px) {\r\n  #deaths[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font-size: 17px;\r\n    text-align: center;\r\n    pointer-events:none;\r\n  }\r\n  #otherStats[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    text-align: center;\r\n    pointer-events:none;\r\n  }\r\n\r\n  #cases[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    text-align: center;\r\n    pointer-events:none;\r\n  }\r\n\r\n  .israelCard[_ngcontent-%COMP%] {\r\n    height: 25vh;\r\n  }\r\n}\r\n\r\n.component-color[_ngcontent-%COMP%] {\r\n  background-color: #0e1020;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZGQUE2Rjs7QUFFN0YsWUFBWTs7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0Msb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7RUFDckI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7ICovXHJcblxyXG4vKiAjMWNiZmZmICovXHJcbiN0aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGVmdDogMjB2aDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLXRvcDogMTJ2aDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjgzO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbiN3b3JsZHRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZWZ0OiAyMHZoO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctdG9wOiA3dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjgzO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbiNJc3JhZWxUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGVmdDogMjB2aDtcclxuICBtYXJnaW4tdG9wOiAwLjJ2aDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMC44MztcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xyXG4gIGdyaWQtZ2FwOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbiNjYXNlcyB7XHJcbiAgY29sb3I6ICM2YWZmZjM7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG59XHJcblxyXG4jY2FzZXM6aG92ZXIge1xyXG4gIGNvbG9yOiAjNmFmZmYzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTIwcHgpO1xyXG4gIGZvbnQtc2l6ZTogMnZ3IDtcclxufVxyXG5cclxuI2RlYXRocyB7XHJcbiAgY29sb3I6ICNiZjcxZmY7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG4gIC8qIG1pbi13aWR0aDogNzBweDsgKi9cclxufVxyXG5cclxuI2RlYXRoczpob3ZlciB7XHJcbiAgY29sb3I6ICNiZjcxZmY7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjBweCk7XHJcbn1cclxuXHJcbiNvdGhlclN0YXRzIHtcclxuICBjb2xvcjogIzkxOTNhODtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XHJcbn1cclxuXHJcbiNvdGhlclN0YXRzOmhvdmVyIHtcclxuICBjb2xvcjogIzkxOTNhODtcclxuICBmb250LXNpemU6IDJ2dyA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjBweCk7XHJcbn1cclxuXHJcbi5pdGVtMSB7XHJcbiAgZ3JpZC1yb3c6IDEgO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jZW50ZXJ0eHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRzLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLDAsMCwuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtYXJnaW46IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE0cHggMCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyICN0b3RhbENhc2VzIHtcclxuICB0b3A6IDEwcHg7XHJcbiAgLyogdHJhbnNpdGlvbjogMC4yczsgKi9cclxufVxyXG5cclxuI3RvdGFsQ2FzZXN7XHJcbiAgY29sb3I6ICM2YWZmZjM7XHJcbiAgdG9wOiA3cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmlzcmFlbENhcmQge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcclxuICBtYXJnaW46IDYwcHggYXV0bztcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5pc3JhZWxDYXJkOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE0cHggMCBibGFjaztcclxufVxyXG5cclxuLldvcmxkbENhcmR7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICB3aWR0aDogNjUlO1xyXG4gIGhlaWdodDogMTh2aDtcclxuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzI5NDtcclxufVxyXG5cclxuI2NvdW50cnlOYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMXtcclxuICBtYXJnaW46IDFlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG4ubG9hZGVye1xyXG4gIG1hcmdpbjogMCAwIDJlbTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBtYXJnaW46IDAgYXV0byAxZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbiNsb2FkZXJDb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2ZyBwYXRoLFxyXG5zdmcgcmVjdHtcclxuICBmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAjbG9hZGVyQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDNweCkge1xyXG4gICNkZWF0aHMge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIH1cclxuICAjb3RoZXJTdGF0cyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIH1cclxuXHJcbiAgI2Nhc2VzIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgfVxyXG5cclxuICAuaXNyYWVsQ2FyZCB7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcG9uZW50LWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMDIwO1xyXG59XHJcblxyXG4iXX0= */"] });
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
    const fact_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fact_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fact_r15.description);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n    text-align: center;\n    left: 20vh;\n    color: #ffffff;\n    padding-top: 12vh;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n}\n\n.container2[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    top: 40px;\n}\n\n.card[_ngcontent-%COMP%]{\n    box-shadow: 0 4px 30px rgba(0,0,0,.5);\n    transition: 0.3s;\n    margin: 2vh;\n    background-color: #26273b;\n    padding: 2px 16px;\n    text-align: center;\n    height: 18vh;\n    font-weight: inherit;\n    border-radius: 6px;\n    font-family: 'Pathway Gothic One', sans-serif;\n    width: 26vW;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    width: 28vW;\n    box-shadow: 0 5px 14px 0 black;\n    background-color: #26273b;\n    height: 50vh;\n    color: #ffffff;\n}\n\n#description[_ngcontent-%COMP%]{\n    \n    color: transparent;\n}\n\n#description[_ngcontent-%COMP%]:hover{\n    font-size: 1.5rem;\n    color: white; \n}\n\n#countryName[_ngcontent-%COMP%]{\n    position: relative;\n    top: 40px;\n    \n    font-size: 2rem;\n    background: -webkit-linear-gradient(#6afff3, #333);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGOztBQUV2RjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtEQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XG5cbiN0aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMjB2aDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLXRvcDogMTJ2aDtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjgzO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cblxuLmNvbnRhaW5lcjJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogNDBweDtcbn1cbiAgXG4uY2FyZHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwwLDAsLjUpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luOiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcbiAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDI2dlc7XG4gICAgLyogY29sb3I6ICMyNjI3M2I7ICovXG59XG4gIFxuLmNhcmQ6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyOHZXO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE0cHggMCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2Rlc2NyaXB0aW9ue1xuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNkZXNjcmlwdGlvbjpob3ZlcntcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuXG4jY291bnRyeU5hbWV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDBweDtcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM2YWZmZjMsICMzMzMpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiAgXG4iXX0= */"] });
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
    const quest_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quest_r17.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quest_r17.description);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n\n#title[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 12vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n\n\n\n\n\n.panel[_ngcontent-%COMP%]{\n    transition: 0.3s;\n}\n\n\n.panel[_ngcontent-%COMP%]:hover{\nbackground-color: #1c1d2c !important;   \n}\n\n\n.panel[_ngcontent-%COMP%]:focus{\n    background-color: #26273b !important;   \n}\n\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: #26273b;\n}\n\n\n.questTitle[_ngcontent-%COMP%]{\n    font-size: 25px;\n    font-family: 'Pathway Gothic One', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcWEvcWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7OztBQUd2RjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7OztBQUVBOzs7Ozs7R0FNRzs7O0FBRUg7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDOzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL3FhL3FhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XG5cblxuI3RpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDIwdmg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTJ2aDtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAwLjgzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4vKiAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5e1xuICAgIGJhY2tncm91bmQ6ICMyNjI3M2I7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcbn0gKi9cblxuLnBhbmVse1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wYW5lbDpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6ICMxYzFkMmMgIWltcG9ydGFudDsgICBcbn1cblxuLnBhbmVsOmZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2IgIWltcG9ydGFudDsgICBcbn1cbiAgICBcblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNzNiO1xufSBcblxuLnF1ZXN0VGl0bGV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbn1cblxuIl19 */"] });
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
        const text = event.target.value.toUpperCase();
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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\r\n\r\n.search-box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background: #26273b;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    width: 65vw;\r\n    height: 45px;\r\n    border-radius: 30px;\r\n    position: relative;\r\n    left: 17vw;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.input-box[_ngcontent-%COMP%]{\r\n    border-color: transparent;\r\n    width: 91%;\r\n    background-color: transparent;\r\n    direction: ltr;\r\n    outline: none;\r\n    background: #26273b;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n    line-height: 1.43;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%]{\r\n    width: 15px;\r\n    height: 16px;\r\n    margin-right: 10px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .input-box[_ngcontent-%COMP%]{\r\n    width: 81%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGOztBQUV2RjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDY1dnc7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTd2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3h7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDkxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQzO1xyXG59XHJcblxyXG4uaWNvbi1ib3h7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5pbnB1dC1ib3h7XHJcbiAgICB3aWR0aDogODElO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n    text-align: center;\n    left: 20vh;\n    color: #ffffff;\n    padding-top: 12vh;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: auto;\n    \n    padding: 10px;\n    padding-top: 30px;\n  }\n\n#symptext[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #ffffff;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n    margin-bottom: 30px;\n}\n\n.images[_ngcontent-%COMP%]{\n    margin-top: 8vh;\n    width: 350px;\n    transition: 0.3s;\n    justify-self: center;\n}\n\n.images[_ngcontent-%COMP%]:hover{\n    -webkit-filter: drop-shadow(5px 5px 5px #222 );\n    filter: drop-shadow(5px 5px 5px #222);\n}\n\n#coughimg[_ngcontent-%COMP%] {\n    width: 350px;\n    transition: 0.3s;\n    justify-self: center;\n}\n\n#coughimg[_ngcontent-%COMP%]:hover{\n    -webkit-filter: drop-shadow(10px 10px 10px #222 );\n    filter: drop-shadow(5px 5px 5px #222);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ltcC9zeW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGOztBQUV2RjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3N5bXAvc3ltcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xuXG4jdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDIwdmg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZy10b3A6IDEydmg7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMC44MztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIC8qIGdyaWQtZ2FwOiAzMHB4OyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cblxuI3N5bXB0ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMC44MztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pbWFnZXN7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uaW1hZ2VzOmhvdmVye1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjMjIyICk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjMjIyKTtcbn1cblxuI2NvdWdoaW1nIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuI2NvdWdoaW1nOmhvdmVye1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDEwcHggMTBweCAjMjIyICk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjMjIyKTtcbn1cblxuIl19 */"] });
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
    // GET_COUNTRY_LAST_STAT: (country: string) => `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php`
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

module.exports = __webpack_require__(/*! C:\Users\Ron Nabet\Desktop\Corona\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map