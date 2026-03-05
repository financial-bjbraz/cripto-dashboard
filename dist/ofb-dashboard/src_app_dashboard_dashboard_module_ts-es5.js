(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkofb_dashboard"] = self["webpackChunkofb_dashboard"] || []).push([["src_app_dashboard_dashboard_module_ts"], {
    /***/
    77528:
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _balance_balance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../balance/balance.component */
      75034);
      /* harmony import */


      var _buy_brln_buy_brln_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../buy-brln/buy-brln.component */
      36124);
      /* harmony import */


      var _sell_brln_sell_brln_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sell-brln/sell-brln.component */
      76629);
      /* harmony import */


      var _devices_devices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../devices/devices.component */
      60313);
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../orders/orders.component */
      28686);
      /* harmony import */


      var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../visitors/visitors.component */
      53218);
      /* harmony import */


      var _recentorders_recentorders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../recentorders/recentorders.component */
      9082);
      /* harmony import */


      var _quicklinks_quicklinks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../quicklinks/quicklinks.component */
      36794);
      /* harmony import */


      var _support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../support/support.component */
      72689);
      /* harmony import */


      var _recentactivity_recentactivity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../recentactivity/recentactivity.component */
      11824);
      /* harmony import */


      var _teammembers_teammembers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../teammembers/teammembers.component */
      63498);

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent() {
          _classCallCheck(this, _DashboardComponent);
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)();
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 35,
        vars: 0,
        consts: [[1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "index.html"], ["routerLink", "/dashboard"], [1, "content-panel-toggler"], [1, "os-icon", "os-icon-grid-squares-22"], [1, "content-i"], [1, "content-box"], [1, "content-panel"], [1, "content-panel-close"], [1, "os-icon", "os-icon-close"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "app-buy-brln");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "app-sell-brln");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "devices");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "visitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "recentorders");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Carregando");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "quicklinks");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "support");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "recentactivity");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "app-teammembers");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Carregando...");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _balance_balance_component__WEBPACK_IMPORTED_MODULE_0__.BalanceComponent, _buy_brln_buy_brln_component__WEBPACK_IMPORTED_MODULE_1__.BuyBrlnComponent, _sell_brln_sell_brln_component__WEBPACK_IMPORTED_MODULE_2__.SellBrlnComponent, _devices_devices_component__WEBPACK_IMPORTED_MODULE_3__.DevicesComponent, _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__.OrdersComponent, _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_5__.VisitorsComponent, _recentorders_recentorders_component__WEBPACK_IMPORTED_MODULE_6__.RecentordersComponent, _quicklinks_quicklinks_component__WEBPACK_IMPORTED_MODULE_7__.QuicklinksComponent, _support_support_component__WEBPACK_IMPORTED_MODULE_8__.SupportComponent, _recentactivity_recentactivity_component__WEBPACK_IMPORTED_MODULE_9__.RecentactivityComponent, _teammembers_teammembers_component__WEBPACK_IMPORTED_MODULE_10__.TeammembersComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    34814:
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      44466);
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.component */
      77528);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
      }];

      var _DashboardModule = /*#__PURE__*/_createClass(function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      });

      _DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es5.js.map