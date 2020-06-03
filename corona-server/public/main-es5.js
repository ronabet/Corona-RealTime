function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_config_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../environments/config.dev */
    "./src/environments/config.dev.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('country', 'israel');
        this.headersOptios = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-rapidapi-key', 'fd565ad5a2msh8156f64d17d4454p1c66fdjsn1f30d420a80a');
        this.options = {
          params: this.params1,
          headers: this.headersOptios
        };
      }

      _createClass(ApiService, [{
        key: "getAllCountriesStat",
        value: function getAllCountriesStat() {
          return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ALL_COUNTRIE_STAT_URL);
        }
      }, {
        key: "getAllCountriesSecondery",
        value: function getAllCountriesSecondery() {
          return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ALL_COUNTRIES_API_URL2, {
            headers: this.headersOptios
          });
        }
      }, {
        key: "getIsraelStat",
        value: function getIsraelStat() {
          return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_ISRAEL, this.options);
        }
      }, {
        key: "getWorldStat",
        value: function getWorldStat() {
          return this.http.get(_environments_config_dev__WEBPACK_IMPORTED_MODULE_2__["config"].GET_WORLD_STAT, {
            headers: this.headersOptios
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _symp_symp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./symp/symp.component */
    "./src/app/symp/symp.component.ts");
    /* harmony import */


    var _qa_qa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./qa/qa.component */
    "./src/app/qa/qa.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'information',
      component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"]
    }, {
      path: 'symptoms',
      component: _symp_symp_component__WEBPACK_IMPORTED_MODULE_4__["SympComponent"]
    }, {
      path: 'protectyourself',
      component: _symp_symp_component__WEBPACK_IMPORTED_MODULE_4__["SympComponent"]
    }, {
      path: 'qa',
      component: _qa_qa_component__WEBPACK_IMPORTED_MODULE_5__["QaComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'corona';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%]{\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search-bar/search-bar.component */
    "./src/app/search-bar/search-bar.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _symp_symp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./symp/symp.component */
    "./src/app/symp/symp.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _qa_qa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./qa/qa.component */
    "./src/app/qa/qa.component.ts"); // import { BrowserAnimationsModule } from '@angular/animations'


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"], _symp_symp_component__WEBPACK_IMPORTED_MODULE_11__["SympComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"], _qa_qa_component__WEBPACK_IMPORTED_MODULE_16__["QaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"], _symp_symp_component__WEBPACK_IMPORTED_MODULE_11__["SympComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"], _qa_qa_component__WEBPACK_IMPORTED_MODULE_16__["QaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(dialogRef, data) {
        _classCallCheck(this, DialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
          this.total_cases = this.data.name;
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["app-dialog"]],
      decls: 5,
      vars: 1,
      consts: [["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_3_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TOTAL CASES ", ctx.total_cases, "");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".md-dialog-container[_ngcontent-%COMP%] {\n    background-color: turquoise;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm1kLWRpYWxvZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog',
          templateUrl: './dialog.component.html',
          styleUrls: ['./dialog.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, route) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.route = route;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onHome",
        value: function onHome() {
          this.router.navigateByUrl('', {
            relativeTo: this.route
          });
        }
      }, {
        key: "onInfo",
        value: function onInfo() {
          this.router.navigateByUrl('information', {
            relativeTo: this.route
          });
        }
      }, {
        key: "onSymp",
        value: function onSymp() {
          this.router.navigateByUrl('symptoms', {
            relativeTo: this.route
          });
        }
      }, {
        key: "onProtect",
        value: function onProtect() {
          this.router.navigateByUrl('protectyourself', {
            relativeTo: this.route
          });
        }
      }, {
        key: "onQA",
        value: function onQA() {
          this.router.navigateByUrl('qa', {
            relativeTo: this.route
          });
        }
      }, {
        key: "onReload",
        value: function onReload() {
          window.location.reload();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 14,
      vars: 0,
      consts: [[1, "header-wrapper"], ["src", "../../assets/icon.svg", "id", "tommy-logo", 3, "click"], ["id", "corona-title", 3, "click"], ["id", "home", 3, "click"], ["id", "info", 3, "click"], ["id", "symp", 3, "click"], ["id", "protect", 3, "click"], ["id", "qa", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_1_listener() {
            return ctx.onHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_2_listener() {
            return ctx.onHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_4_listener() {
            return ctx.onHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_6_listener() {
            return ctx.onInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INFORMATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_8_listener() {
            return ctx.onSymp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SYMPTOMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_10_listener() {
            return ctx.onProtect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PROTECT YOURSELF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_12_listener() {
            return ctx.onQA();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Q & A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\nspan[_ngcontent-%COMP%] {cursor: context-menu;}\n@font-face {\n    font-family: Rubik;\n    src: url('Rubik-Medium.ttf');\n}\n.header-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: center;\n    display: grid;\n    position: fixed;\n    grid-template-areas: \"a b c d e f g h i j\";\n    grid-template-columns: repeat(10,1fr);\n    background-color: #0e1020;\n    height: 7vh;\n    box-shadow: 0 5px 13px 0 #070911;\n    top: 0%;\n    z-index: 1;\n}\n#home[_ngcontent-%COMP%]{\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: c;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    top: -1vh;\n    transition: 0.3s;\n    text-align: center;\n}\n#home[_ngcontent-%COMP%]:hover{\n    color: #6afff3;\n\n}\n#info[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: d;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    top: -1vh;\n    transition: 0.3s;\n}\n#protect[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: f;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    top: -1vh;\n    transition: 0.3s;\n    left: 25px;\n}\n#info[_ngcontent-%COMP%]:hover{\n    color: #bf71ff;\n}\n#protect[_ngcontent-%COMP%]:hover{\n    color: #6afff3;\n\n}\n#symp[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: e;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    top: -1vh;\n    transition: 0.3s;\n    left: 10px;\n}\n#symp[_ngcontent-%COMP%]:hover{\n    color: #9193a8;\n}\n#qa[_ngcontent-%COMP%]{\n    text-align: center;\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: g;\n    font-size: 1.3rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    top: -1vh;\n    transition: 0.3s;\n    left: 25px;\n}\n#qa[_ngcontent-%COMP%]:hover{\n    color: #bf71ff;\n}\n#corona-title[_ngcontent-%COMP%]{\n    font-family: 'Pathway Gothic One', sans-serif;\n    grid-area: b;\n    font-size: 1.5rem;\n    color: white;\n    cursor: pointer;\n    position: relative;\n    top: -1vh;\n    right: 30%;\n}\n#tommy-logo[_ngcontent-%COMP%] {\n    grid-area: a;\n    position: relative;\n    top: -1vh;\n    width: 10vw;\n    height: 6.5vh;\n    cursor: pointer;\n}\n#username[_ngcontent-%COMP%]{\n    grid-area: d;\n    font-family: rubik;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RjtBQUN2RixNQUFNLG9CQUFvQixDQUFDO0FBRTNCO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUF1QztBQUMzQztBQUdBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsT0FBTztJQUNQLFVBQVU7QUFDZDtBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjOztBQUVsQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFJQTtJQUNJLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xuc3BhbiB7Y3Vyc29yOiBjb250ZXh0LW1lbnU7fVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogUnViaWs7XG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL1J1YmlrLU1lZGl1bS50dGYpO1xufVxuXG5cbi5oZWFkZXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiBjIGQgZSBmIGcgaCBpIGpcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEwMjA7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTNweCAwICMwNzA5MTE7XG4gICAgdG9wOiAwJTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4jaG9tZXtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZ3JpZC1hcmVhOiBjO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTF2aDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hvbWU6aG92ZXJ7XG4gICAgY29sb3I6ICM2YWZmZjM7XG5cbn1cblxuI2luZm97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgICBncmlkLWFyZWE6IGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXZoO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNwcm90ZWN0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZ3JpZC1hcmVhOiBmO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTF2aDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGxlZnQ6IDI1cHg7XG59XG5cbiNpbmZvOmhvdmVye1xuICAgIGNvbG9yOiAjYmY3MWZmO1xufVxuXG4jcHJvdGVjdDpob3ZlcntcbiAgICBjb2xvcjogIzZhZmZmMztcblxufVxuXG4jc3ltcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGdyaWQtYXJlYTogZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xdmg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4jc3ltcDpob3ZlcntcbiAgICBjb2xvcjogIzkxOTNhODtcbn1cblxuI3Fhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZ3JpZC1hcmVhOiBnO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTF2aDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGxlZnQ6IDI1cHg7XG59XG5cbiNxYTpob3ZlcntcbiAgICBjb2xvcjogI2JmNzFmZjtcbn1cblxuXG5cbiNjb3JvbmEtdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGdyaWQtYXJlYTogYjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xdmg7XG4gICAgcmlnaHQ6IDMwJTtcbn1cblxuI3RvbW15LWxvZ28ge1xuICAgIGdyaWQtYXJlYTogYTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXZoO1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGhlaWdodDogNi41dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbiN1c2VybmFtZXtcbiAgICBncmlkLWFyZWE6IGQ7XG4gICAgZm9udC1mYW1pbHk6IHJ1YmlrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/dialog/dialog.component.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../search-bar/search-bar.component */
    "./src/app/search-bar/search-bar.component.ts");

    function HomeComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 ISRAEL STATISTICS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " TOTAL CASES ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " NEW CASES (LAST 24H) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TOTAL DEATHS ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " NEW DEATHS (LAST 24H) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " TOTAL RECOVERED ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " SERIOUS CASES ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stat_r2 = ctx.$implicit;

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
      }
    }

    function HomeComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_31_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.openDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stat_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r3.total_cases);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(api, dialog) {
        _classCallCheck(this, HomeComponent);

        this.api = api;
        this.dialog = dialog;
        this.ILStatsArray = [];
        this.ResStat = [];
        this.AllCountriesArray = [];
        this.StatsToDisplay = [];
        this.searchText = "";
        this.open = true;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWorldStat();
          this.getIsrael();
          this.searchTextChanged(this.searchText);
          this.getAllCountries();
        }
      }, {
        key: "getAllCountries",
        value: function getAllCountries() {
          var _this = this;

          this.api.getAllCountriesSecondery().subscribe(function (res) {
            var resCountries = res.countries_stat;
            resCountries.forEach(function (element) {
              _this.AllCountriesArray.push({
                "title": element.country_name,
                "total_cases": element.cases,
                "total_recovered": element.total_recovered,
                "total_deaths": element.deaths,
                "total_new_cases_today": element.new_cases,
                "total_new_deaths_today": element.new_deaths,
                "total_serious_cases": element.serious_critical
              });
            });
            _this.StatsToDisplay = _this.AllCountriesArray;
          });
        }
      }, {
        key: "getIsrael",
        value: function getIsrael() {
          var _this2 = this;

          this.api.getIsraelStat().subscribe(function (res) {
            var latestStatIL = res.latest_stat_by_country["0"];
            console.log(res.latest_stat_by_country);

            _this2.ILStatsArray.push({
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
      }, {
        key: "getWorldStat",
        value: function getWorldStat() {
          var _this3 = this;

          this.api.getWorldStat().subscribe(function (res) {
            console.log(res);
            _this3.WorldStatResObject = {
              "total_cases": res.total_cases,
              "total_recovered": res.total_recovered,
              "total_deaths": res.total_deaths,
              "total_new_cases_today": res.new_cases,
              "total_new_deaths_today": res.new_deaths
            };
            console.log(_this3.WorldStatResObject);
          });
          return this.WorldStatResObject;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this4 = this;

          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            width: '400px',
            height: '450px',
            data: {
              name: "hahahahaha",
              animal: this.animal
            },
            panelClass: 'myapp-background'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this4.animal = result;
          });
        }
      }, {
        key: "searchTextChanged",
        value: function searchTextChanged(text) {
          this.searchText = this.stripWhiteSpaces(text);
          this.StatsToDisplay = [];
          this.addTasksToDisplay(this.AllCountriesArray);
        }
      }, {
        key: "addTasksToDisplay",
        value: function addTasksToDisplay(countriesStats) {
          var _this5 = this;

          countriesStats.forEach(function (AllCountriesArray) {
            if (AllCountriesArray.title.includes(_this5.searchText)) {
              _this5.StatsToDisplay.push(AllCountriesArray);
            }
          });
        }
      }, {
        key: "stripWhiteSpaces",
        value: function stripWhiteSpaces(str) {
          return str.replace(/^\s+|\s+$/g, '');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 32,
      vars: 7,
      consts: [["id", "title"], [1, "WorldlCard"], ["id", "IsraelTitle"], [1, "grid-container-row"], ["id", "casesIL"], ["id", "deathsIL"], ["id", "otherIL"], [4, "ngFor", "ngForOf"], ["id", "worldtitle"], [3, "textChanged"], [1, "container2"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "israelCard"], [1, "grid-container"], [1, "card", 3, "click"], ["id", "countryName"], [1, "centertxt"], ["id", "totalCases"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CORONAVIRUS DISEASE REAL-TIME STATISTICS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COVID-19 WORLD STATISTICS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " TOTAL CASES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " NEW CASES (LAST 24H) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " TOTAL DEATHS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " NEW DEATHS (LAST 24H) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " TOTAL RECOVERED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 29, 6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "COVID-19 WORLD STATISTICS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-search-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChanged", function HomeComponent_Template_app_search_bar_textChanged_29_listener($event) {
            return ctx.searchTextChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_div_31_Template, 6, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 12vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n#worldtitle[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 7vh;\n  padding-bottom: 3vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n#IsraelTitle[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  margin-top: 0.2vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 30px;\n  font-weight: inherit;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n  text-align: center;\n  color: white;\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: auto auto;\n  grid-gap: 5px;\n  padding: 10px;\n  text-align: center;\n  grid-auto-flow: column;\n}\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  padding: 20px 0;\n  font-size: 30px;\n}\n#casesIL[_ngcontent-%COMP%] {\n  color: #6afff3;\n  font-size: 28px;\n  transition: 0.2s;\n  text-align: center;\n}\n#casesIL[_ngcontent-%COMP%]:hover {\n  color: #6afff3;\n  font-size: 2vw ;\n}\n#deathsIL[_ngcontent-%COMP%] {\n  color: #bf71ff;\n  font-size: 28px;\n  transition: 0.2s;\n  text-align: center;\n}\n#deathsIL[_ngcontent-%COMP%]:hover {\n  color: #bf71ff;\n  font-size: 2vw ;\n}\n#otherIL[_ngcontent-%COMP%] {\n  color: #9193a8;\n  font-size: 28px;\n  transition: 0.2s;\n  text-align: center;\n}\n#otherIL[_ngcontent-%COMP%]:hover {\n  color: #9193a8;\n  font-size: 2vw ;\n}\n.item1[_ngcontent-%COMP%] {\n  grid-row: 1 ;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n}\n.centertxt[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n.container2[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%]{\n  box-shadow: 0 4px 30px rgba(0,0,0,.5);\n  transition: 0.3s;\n  margin: 2vh;\n  background-color: #26273b;\n  padding: 2px 16px;\n  text-align: center;\n  height: 18vh;\n  font-weight: inherit;\n  border-radius: 6px;\n  font-family: 'Pathway Gothic One', sans-serif;\n  width: 30vh;\n}\n.card[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n  width: 35vh;\n  box-shadow: 0 5px 14px 0 black;\n  background-color: #26273b;\n  height: 20vh;\n  color: #ffffff;\n}\n#totalCases[_ngcontent-%COMP%]{\n  color: #6afff3;\n  top: 3vh;\n  font-size: 40px;\n  text-align: center;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: 100;\n  position: relative;\n}\n.israelCard[_ngcontent-%COMP%] {\n  padding: 40px;\n  width: 65%;\n  height: 35vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n  border-radius: 20px;\n  background-color: #26273b;\n  margin: 60px auto;\n  transition: 0.2s;\n}\n.grid-container-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto auto;\n  grid-gap: 10px;\n}\n.israelCard[_ngcontent-%COMP%]:hover{\n  box-shadow: 0 5px 14px 0 black;\n}\n.WorldlCard[_ngcontent-%COMP%]{\n  padding: 40px;\n  width: 65%;\n  height: 18vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n  border-radius: 20px;\n  background-color: #26273b;\n  margin: 60px auto;\n  transition: 0.2s;\n\n}\n.highlight[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #294;\n}\n#countryName[_ngcontent-%COMP%]{\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-weight: inherit;\n  font-size: 2vw;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVGQUF1RjtBQUN2RixZQUFZO0FBQ1o7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNkNBQTZDO0VBQzdDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsY0FBYztBQUNoQjtBQUlBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0Msb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XG4vKiAjMWNiZmZmICovXG4jdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMjB2aDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAxMnZoO1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDAuODM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbiN3b3JsZHRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDIwdmg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogN3ZoO1xuICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDAuODM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbiNJc3JhZWxUaXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiAyMHZoO1xuICBtYXJnaW4tdG9wOiAwLjJ2aDtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMC44MztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICBncmlkLWdhcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI2Nhc2VzSUwge1xuICBjb2xvcjogIzZhZmZmMztcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjYXNlc0lMOmhvdmVyIHtcbiAgY29sb3I6ICM2YWZmZjM7XG4gIGZvbnQtc2l6ZTogMnZ3IDtcbn1cblxuI2RlYXRoc0lMIHtcbiAgY29sb3I6ICNiZjcxZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZGVhdGhzSUw6aG92ZXIge1xuICBjb2xvcjogI2JmNzFmZjtcbiAgZm9udC1zaXplOiAydncgO1xufVxuXG4jb3RoZXJJTCB7XG4gIGNvbG9yOiAjOTE5M2E4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI290aGVySUw6aG92ZXIge1xuICBjb2xvcjogIzkxOTNhODtcbiAgZm9udC1zaXplOiAydncgO1xufVxuXG4uaXRlbTEge1xuICBncmlkLXJvdzogMSA7XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLmNlbnRlcnR4dHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcjJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJke1xuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwwLDAsLjUpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBtYXJnaW46IDJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOHZoO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAzMHZoO1xufVxuXG4uY2FyZDpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzV2aDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTRweCAwIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xuICBoZWlnaHQ6IDIwdmg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jdG90YWxDYXNlc3tcbiAgY29sb3I6ICM2YWZmZjM7XG4gIHRvcDogM3ZoO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pc3JhZWxDYXJkIHtcbiAgcGFkZGluZzogNDBweDtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAzNXZoO1xuICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xuICBtYXJnaW46IDYwcHggYXV0bztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmdyaWQtY29udGFpbmVyLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICBncmlkLWdhcDogMTBweDtcbn1cblxuXG5cbi5pc3JhZWxDYXJkOmhvdmVye1xuICBib3gtc2hhZG93OiAwIDVweCAxNHB4IDAgYmxhY2s7XG59XG5cbi5Xb3JsZGxDYXJke1xuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogNjUlO1xuICBoZWlnaHQ6IDE4dmg7XG4gIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2I7XG4gIG1hcmdpbjogNjBweCBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuXG59XG5cbi5oaWdobGlnaHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyOTQ7XG59XG5cbiNjb3VudHJ5TmFtZXtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var fact_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fact_r7.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fact_r7.description);
      }
    }

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);

        this.FactsArray = [];
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FactsData();
        }
      }, {
        key: "FactsData",
        value: function FactsData() {
          this.FactsArray = [{
            title: "",
            description: ""
          }, {
            title: "",
            description: ""
          }, {
            title: "",
            description: ""
          }, {
            title: "",
            description: ""
          }, {
            title: "",
            description: ""
          }, {
            title: "",
            description: ""
          }];
          return this.FactsArray;
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)();
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 4,
      vars: 1,
      consts: [["id", "title"], [1, "container2"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["src", "../../assets/world.png", 2, "width", "50px", "height", "50px"], ["id", "countryName"], [1, "centertxt"], ["id", "description"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INFORMATION & FACTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoComponent_div_3_Template, 7, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.FactsArray);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n    text-align: center;\n    left: 20vh;\n    color: #ffffff;\n    padding-top: 12vh;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n}\n\n.container2[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    top: 40px;\n}\n\n.card[_ngcontent-%COMP%]{\n    box-shadow: 0 4px 30px rgba(0,0,0,.5);\n    transition: 0.3s;\n    margin: 2vh;\n    background-color: #26273b;\n    padding: 2px 16px;\n    text-align: center;\n    height: 18vh;\n    font-weight: inherit;\n    border-radius: 6px;\n    font-family: 'Pathway Gothic One', sans-serif;\n    width: 26vW;\n    \n}\n\n.card[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    width: 28vW;\n    box-shadow: 0 5px 14px 0 black;\n    background-color: #26273b;\n    height: 50vh;\n    color: #ffffff;\n}\n\n#description[_ngcontent-%COMP%]{\n    \n    color: transparent;\n}\n\n#description[_ngcontent-%COMP%]:hover{\n    font-size: 1.5rem;\n    color: white; \n}\n\n#countryName[_ngcontent-%COMP%]{\n    position: relative;\n    top: 40px;\n    \n    font-size: 2rem;\n    background: -webkit-linear-gradient(#6afff3, #333);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGOztBQUV2RjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtEQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XG5cbiN0aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMjB2aDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLXRvcDogMTJ2aDtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjgzO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cblxuLmNvbnRhaW5lcjJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogNDBweDtcbn1cbiAgXG4uY2FyZHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwwLDAsLjUpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luOiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjczYjtcbiAgICBwYWRkaW5nOiAycHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6IDI2dlc7XG4gICAgLyogY29sb3I6ICMyNjI3M2I7ICovXG59XG4gIFxuLmNhcmQ6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyOHZXO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE0cHggMCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNzNiO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI2Rlc2NyaXB0aW9ue1xuICAgIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNkZXNjcmlwdGlvbjpob3ZlcntcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuXG4jY291bnRyeU5hbWV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDBweDtcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM2YWZmZjMsICMzMzMpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiAgXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/qa/qa.component.ts":
  /*!************************************!*\
    !*** ./src/app/qa/qa.component.ts ***!
    \************************************/

  /*! exports provided: QaComponent */

  /***/
  function srcAppQaQaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QaComponent", function () {
      return QaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

    function QaComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var quest_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quest_r9.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quest_r9.description);
      }
    }

    var QaComponent = /*#__PURE__*/function () {
      function QaComponent() {
        _classCallCheck(this, QaComponent);

        this.panelOpenState = false;
        this.questions = [];
      }

      _createClass(QaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.QuestionsData();
        }
      }, {
        key: "QuestionsData",
        value: function QuestionsData() {
          this.questions = [{
            title: "WHAT IS SARS-CoV-2 / COVID-19?",
            description: "Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2) is the name given to the 2019 novel coronavirus. COVID-19 is the name given to the disease associated with the virus. SARS-CoV-2 is a new strain of coronavirus that has not been previously identified in humans."
          }, {
            title: "When is a person infectious?",
            description: "The infectious period may begin one to two days before symptoms appear, but people are likely most infectious during the symptomatic period, even if symptoms are mild and very non-specific. The infectious period is now estimated to last for 7-12 days in moderate cases and up to two weeks on average in severe cases."
          }, {
            title: "Can COVID-19 spread in warm sunny weather?",
            description: "COVID-19 can survive temperatures higher than 25C. You can catch it no matter how sunny and warm it is. So, whatever the weather you should follow the official advice to protect yourself from the virus. Getting out into the sunshine, if you can, is still a good idea as this helps your body produce vitamin D which is important for your immune system. "
          }, {
            title: "Will drinking lots of hot drinks stop COVID-19?",
            description: "There is no drink hot or cold that will protect you from COVID-19 or cure the illness. So far, there’s no proven cure for COVID-19 but most people recover by themselves. Taking paracetamol, drinking lots of liquids, and getting enough rest can help you manage your symptoms. "
          }, {
            title: "Can Chloroquine cure COVID-19?",
            description: "At the moment there is no proven cure for COVID-19, but most people will recover on their own without needing professional medical care. If you think you have COVID-19 and are having difficulty breathing, contact your local health facility as you will need professional medical care. "
          }, {
            title: "Can Black and African people get COVID-19?",
            description: "Anyone can get COVID-19, regardless of race or skin colour. Older people and people with other health conditions, such as asthma, heart diseases and diabetes, are more at risk of getting seriously ill. "
          }];
          return this.questions;
        }
      }]);

      return QaComponent;
    }();

    QaComponent.ɵfac = function QaComponent_Factory(t) {
      return new (t || QaComponent)();
    };

    QaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QaComponent,
      selectors: [["app-qa"]],
      decls: 3,
      vars: 1,
      consts: [["id", "title"], [4, "ngFor", "ngForOf"], [1, "panel"], [1, "questTitle"]],
      template: function QaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QUESTIONS AND ANSWERS ABOUT THE CORONAVIRUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QaComponent_div_2_Template, 8, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n\n#title[_ngcontent-%COMP%]{\n  text-align: center;\n  left: 20vh;\n  color: #ffffff;\n  padding-top: 12vh;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 34px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 0.83;\n  letter-spacing: normal;\n}\n\n\n\n\n\n.panel[_ngcontent-%COMP%]{\n    transition: 0.3s;\n}\n\n\n.panel[_ngcontent-%COMP%]:hover{\nbackground-color: #1c1d2c !important;   \n}\n\n\n.panel[_ngcontent-%COMP%]:focus{\n    background-color: #26273b !important;   \n}\n\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: #26273b;\n}\n\n\n.questTitle[_ngcontent-%COMP%]{\n    font-size: 25px;\n    font-family: 'Pathway Gothic One', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcWEvcWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7OztBQUd2RjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7OztBQUVBOzs7Ozs7R0FNRzs7O0FBRUg7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDOzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL3FhL3FhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XG5cblxuI3RpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDIwdmg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTJ2aDtcbiAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAwLjgzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4vKiAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5e1xuICAgIGJhY2tncm91bmQ6ICMyNjI3M2I7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcbn0gKi9cblxuLnBhbmVse1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wYW5lbDpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6ICMxYzFkMmMgIWltcG9ydGFudDsgICBcbn1cblxuLnBhbmVsOmZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI3M2IgIWltcG9ydGFudDsgICBcbn1cbiAgICBcblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjYyNzNiO1xufSBcblxuLnF1ZXN0VGl0bGV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUGF0aHdheSBHb3RoaWMgT25lJywgc2Fucy1zZXJpZjtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-qa',
          templateUrl: './qa.component.html',
          styleUrls: ['./qa.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search-bar/search-bar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/search-bar/search-bar.component.ts ***!
    \****************************************************/

  /*! exports provided: SearchBarComponent */

  /***/
  function srcAppSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
      return SearchBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchBarComponent = /*#__PURE__*/function () {
      function SearchBarComponent() {
        _classCallCheck(this, SearchBarComponent);

        this.textChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serachText = "";
      }

      _createClass(SearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange(event) {
          var text = event.target.value;
          this.serachText = text;
          this.textChanged.emit(text);
        }
      }]);

      return SearchBarComponent;
    }();

    SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
      return new (t || SearchBarComponent)();
    };

    SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchBarComponent,
      selectors: [["app-search-bar"]],
      outputs: {
        textChanged: "textChanged"
      },
      decls: 4,
      vars: 0,
      consts: [[1, "search-box"], ["placeholder", "Search country...", 1, "input-box", 3, "keyup"], [1, "icon-box"], ["src", "../../assets/search.svg", "alt", "search-icon", 2, "width", "15px", "height", "16px", "margin-right", "10px"]],
      template: function SearchBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchBarComponent_Template_input_keyup_1_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n.search-box[_ngcontent-%COMP%]{\n    display: flex;\n    background: #26273b;\n    align-items: center;\n    justify-content: flex-end;\n    font-family: 'Pathway Gothic One', sans-serif;\n    width: 65vw;\n    height: 45px;\n    border-radius: 30px;\n    position: relative;\n    left: 17vw;\n    margin-bottom: 30px;\n}\n\n.input-box[_ngcontent-%COMP%]{\n    border-color: transparent;\n    width: 91%;\n    background-color: transparent;\n    direction: ltr;\n    outline: none;\n    background: #26273b;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 20px;\n    margin-right: 10px;\n    line-height: 1.43;\n}\n\n.icon-box[_ngcontent-%COMP%]{\n    width: 15px;\n    height: 16px;\n    margin-right: 10px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGOztBQUV2RjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYXRod2F5K0dvdGhpYytPbmUmZGlzcGxheT1zd2FwJyk7XG5cbi5zZWFyY2gtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxN3Z3O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pbnB1dC1ib3h7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogOTElO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzI2MjczYjtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mztcbn1cblxuLmljb24tYm94e1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-bar',
          templateUrl: './search-bar.component.html',
          styleUrls: ['./search-bar.component.css']
        }]
      }], function () {
        return [];
      }, {
        textChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/symp/symp.component.ts":
  /*!****************************************!*\
    !*** ./src/app/symp/symp.component.ts ***!
    \****************************************/

  /*! exports provided: SympComponent */

  /***/
  function srcAppSympSympComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SympComponent", function () {
      return SympComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SympComponent = /*#__PURE__*/function () {
      function SympComponent() {
        _classCallCheck(this, SympComponent);
      }

      _createClass(SympComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SympComponent;
    }();

    SympComponent.ɵfac = function SympComponent_Factory(t) {
      return new (t || SympComponent)();
    };

    SympComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SympComponent,
      selectors: [["app-symp"]],
      decls: 15,
      vars: 0,
      consts: [["id", "title"], [1, "grid-container"], ["id", "coughimg", "src", "../../assets/cough.png"], ["id", "symptext"], ["src", "../../assets/fever.png", 1, "images"], ["src", "../../assets/shortness-of-breath.png", 1, "images"], ["src", "../../assets/difficulty-breathing.png", 1, "images"]],
      template: function SympComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');\n\n#title[_ngcontent-%COMP%]{\n    text-align: center;\n    left: 20vh;\n    color: #ffffff;\n    padding-top: 12vh;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n    display: grid;\n    grid-template-columns: auto;\n    \n    padding: 10px;\n    padding-top: 30px;\n  }\n\n#symptext[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #ffffff;\n    font-family: 'Pathway Gothic One', sans-serif;\n    font-size: 34px;\n    font-weight: 500;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.83;\n    letter-spacing: normal;\n    margin-bottom: 30px;   \n}\n\n.images[_ngcontent-%COMP%]{\n    margin-top: 8vh;\n    width: 22vw;\n    transition: 0.3s;\n}\n\n.images[_ngcontent-%COMP%]:hover{\n    -webkit-filter: drop-shadow(5px 5px 5px #222 );\n    filter: drop-shadow(5px 5px 5px #222);\n}\n\n#coughimg[_ngcontent-%COMP%] {\n    width: 22vw;\n    transition: 0.3s;\n}\n\n#coughimg[_ngcontent-%COMP%]:hover{\n    -webkit-filter: drop-shadow(10px 10px 10px #222 );\n    filter: drop-shadow(5px 5px 5px #222);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ltcC9zeW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUZBQXVGOztBQUV2RjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2Q0FBNkM7SUFDN0MsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3N5bXAvc3ltcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGF0aHdheStHb3RoaWMrT25lJmRpc3BsYXk9c3dhcCcpO1xuXG4jdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDIwdmg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZy10b3A6IDEydmg7XG4gICAgZm9udC1mYW1pbHk6ICdQYXRod2F5IEdvdGhpYyBPbmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMC44MztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgLyogZ3JpZC1nYXA6IDMwcHg7ICovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuXG4jc3ltcHRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ1BhdGh3YXkgR290aGljIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjgzO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgICBcbn1cblxuLmltYWdlc3tcbiAgICBtYXJnaW4tdG9wOiA4dmg7XG4gICAgd2lkdGg6IDIydnc7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmltYWdlczpob3ZlcntcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMiApO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCA1cHggIzIyMik7XG59XG5cbiNjb3VnaGltZyB7XG4gICAgd2lkdGg6IDIydnc7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuI2NvdWdoaW1nOmhvdmVye1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxMHB4IDEwcHggMTBweCAjMjIyICk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDVweCAjMjIyKTtcbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SympComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-symp',
          templateUrl: './symp.component.html',
          styleUrls: ['./symp.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/config.dev.ts":
  /*!****************************************!*\
    !*** ./src/environments/config.dev.ts ***!
    \****************************************/

  /*! exports provided: config */

  /***/
  function srcEnvironmentsConfigDevTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });

    var config = {
      GET_ALL_COUNTRIE_STAT_URL: "https://thevirustracker.com/free-api?countryTotals=ALL",
      GET_ALL_COUNTRIES_API_URL2: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      GET_ISRAEL: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
      GET_WORLD_STAT: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ron Nabet\Desktop\Corona\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map