(function () {
  "use strict";

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkofb_dashboard"] = self["webpackChunkofb_dashboard"] || []).push([["src_app_admin_admin_module_ts"], {
    /***/
    41618:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "interval": function interval() {
          return (
            /* binding */
            _interval
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      25160);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      32606);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isNumeric */
      82867);

      function _interval() {
        var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;

        if (!(0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
          period = 0;
        }

        if (!scheduler || typeof scheduler.schedule !== 'function') {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
          subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
          }));
          return subscriber;
        });
      }

      function dispatch(state) {
        var subscriber = state.subscriber,
            counter = state.counter,
            period = state.period;
        subscriber.next(counter);
        this.schedule({
          subscriber: subscriber,
          counter: counter + 1,
          period: period
        }, period);
      }
      /***/

    },

    /***/
    82867:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      49861);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      }
      /***/

    },

    /***/
    99993:
    /*!********************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminDashboardComponent": function AdminDashboardComponent() {
          return (
            /* binding */
            _AdminDashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AdminDashboardComponent = /*#__PURE__*/_createClass(function _AdminDashboardComponent() {
        _classCallCheck(this, _AdminDashboardComponent);
      });

      _AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || _AdminDashboardComponent)();
      };

      _AdminDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AdminDashboardComponent,
        selectors: [["app-admin-dashboard"]],
        decls: 19,
        vars: 0,
        consts: [[1, "admin-dashboard"], [1, "admin-cards"], ["routerLink", "/admin/balances", 1, "admin-card"], [1, "card-icon"], [1, "card-title"], ["routerLink", "/admin/approvals", 1, "admin-card"], ["routerLink", "/admin/transfer", 1, "admin-card"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Painel Administrativo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uD83D\uDCB0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Saldos dos Usu\xE1rios");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u23F3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Aprova\xE7\xF5es Pendentes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2194\uFE0F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transfer\xEAncia de BRLN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: [".admin-dashboard[_ngcontent-%COMP%] { padding: 24px; }\nh2[_ngcontent-%COMP%] { margin-bottom: 24px; color: #1e293b; }\n.admin-cards[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); grid-gap: 16px; gap: 16px; }\n.admin-card[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; align-items: center; grid-gap: 10px; gap: 10px;\n  padding: 24px 16px; background: #fff; border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0,0,0,.1); text-decoration: none; color: #334155;\n  transition: box-shadow .2s, transform .2s;\n}\n.admin-card[_ngcontent-%COMP%]:hover { box-shadow: 0 4px 12px rgba(0,0,0,.15); transform: translateY(-2px); }\n.card-icon[_ngcontent-%COMP%] { font-size: 32px; }\n.card-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixhQUFhLEVBQUU7QUFDbEMsS0FBSyxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDMUMsZUFBZSxhQUFhLEVBQUUsNERBQTRELEVBQUUsY0FBUyxFQUFULFNBQVMsRUFBRTtBQUN2RztFQUNFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxjQUFTLEVBQVQsU0FBUztFQUNyRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7RUFDekQsb0NBQW9DLEVBQUUscUJBQXFCLEVBQUUsY0FBYztFQUMzRSx5Q0FBeUM7QUFDM0M7QUFDQSxvQkFBb0Isc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUU7QUFDekYsYUFBYSxlQUFlLEVBQUU7QUFDOUIsY0FBYyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUiLCJmaWxlIjoiYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tZGFzaGJvYXJkIHsgcGFkZGluZzogMjRweDsgfVxuaDIgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyBjb2xvcjogIzFlMjkzYjsgfVxuLmFkbWluLWNhcmRzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTgwcHgsIDFmcikpOyBnYXA6IDE2cHg7IH1cbi5hZG1pbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4xKTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzMzNDE1NTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMsIHRyYW5zZm9ybSAuMnM7XG59XG4uYWRtaW4tY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMTUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbi5jYXJkLWljb24geyBmb250LXNpemU6IDMycHg7IH1cbi5jYXJkLXRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    13176:
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminRoutingModule": function AdminRoutingModule() {
          return (
            /* binding */
            _AdminRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-dashboard/admin-dashboard.component */
      99993);
      /* harmony import */


      var _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./users-balances/users-balances.component */
      49019);
      /* harmony import */


      var _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./transaction-approval/transaction-approval.component */
      23297);
      /* harmony import */


      var _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stablecoin-transfer/stablecoin-transfer.component */
      43286);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardComponent
      }, {
        path: 'balances',
        component: _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_1__.UsersBalancesComponent
      }, {
        path: 'approvals',
        component: _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_2__.TransactionApprovalComponent
      }, {
        path: 'transfer',
        component: _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_3__.StablecoinTransferComponent
      }];

      var _AdminRoutingModule = /*#__PURE__*/_createClass(function _AdminRoutingModule() {
        _classCallCheck(this, _AdminRoutingModule);
      });

      _AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || _AdminRoutingModule)();
      };

      _AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AdminRoutingModule
      });
      _AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    77095:
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminModule": function AdminModule() {
          return (
            /* binding */
            _AdminModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/effects */
      20275);
      /* harmony import */


      var _store_admin_admin_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../store/admin/admin.reducer */
      93564);
      /* harmony import */


      var _store_admin_admin_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../store/admin/admin.effects */
      36252);
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-routing.module */
      13176);
      /* harmony import */


      var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-dashboard/admin-dashboard.component */
      99993);
      /* harmony import */


      var _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./users-balances/users-balances.component */
      49019);
      /* harmony import */


      var _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transaction-approval/transaction-approval.component */
      23297);
      /* harmony import */


      var _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stablecoin-transfer/stablecoin-transfer.component */
      43286);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AdminModule = /*#__PURE__*/_createClass(function _AdminModule() {
        _classCallCheck(this, _AdminModule);
      });

      _AdminModule.ɵfac = function AdminModule_Factory(t) {
        return new (t || _AdminModule)();
      };

      _AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AdminModule
      });
      _AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature('admin', _store_admin_admin_reducer__WEBPACK_IMPORTED_MODULE_0__.adminReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_store_admin_admin_effects__WEBPACK_IMPORTED_MODULE_1__.AdminEffects]), _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AdminModule, {
          declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.AdminDashboardComponent, _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_4__.UsersBalancesComponent, _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_5__.TransactionApprovalComponent, _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_6__.StablecoinTransferComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsFeatureModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminRoutingModule]
        });
      })();
      /***/

    },

    /***/
    28734:
    /*!****************************************!*\
      !*** ./src/app/admin/admin.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminService": function AdminService() {
          return (
            /* binding */
            _AdminService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AdminService = /*#__PURE__*/function () {
        function _AdminService(http) {
          _classCallCheck(this, _AdminService);

          this.http = http;
          this.base = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bffUrl, "/admin");
        }

        _createClass(_AdminService, [{
          key: "getUsersBalances",
          value: function getUsersBalances() {
            return this.http.get("".concat(this.base, "/users/balances"), {
              withCredentials: true
            });
          }
        }, {
          key: "getPendingTransactions",
          value: function getPendingTransactions() {
            return this.http.get("".concat(this.base, "/transactions/pending"), {
              withCredentials: true
            });
          }
        }, {
          key: "approveTx",
          value: function approveTx(txId) {
            return this.http.post("".concat(this.base, "/transactions/").concat(txId, "/approve"), {}, {
              withCredentials: true
            });
          }
        }, {
          key: "rejectTx",
          value: function rejectTx(txId) {
            return this.http.post("".concat(this.base, "/transactions/").concat(txId, "/reject"), {}, {
              withCredentials: true
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.http.get("".concat(this.base, "/users"), {
              withCredentials: true
            });
          }
        }, {
          key: "createTransfer",
          value: function createTransfer(payload) {
            return this.http.post("".concat(this.base, "/transfer"), payload, {
              withCredentials: true
            });
          }
        }]);

        return _AdminService;
      }();

      _AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || _AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AdminService,
        factory: _AdminService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    43286:
    /*!****************************************************************************!*\
      !*** ./src/app/admin/stablecoin-transfer/stablecoin-transfer.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StablecoinTransferComponent": function StablecoinTransferComponent() {
          return (
            /* binding */
            _StablecoinTransferComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../store/admin/admin.actions */
      56610);
      /* harmony import */


      var _store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/admin/admin.selectors */
      65486);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function StablecoinTransferComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var err_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](err_r4);
        }
      }

      function StablecoinTransferComponent_ng_container_5_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var u_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", u_r13.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", u_r13.email, " ", u_r13.walletAddress ? "\uD83D\uDD17" : "", " ");
        }
      }

      function StablecoinTransferComponent_ng_container_5_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var u_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", u_r14.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", u_r14.email, " ", u_r14.walletAddress ? "\uD83D\uDD17 " + u_r14.walletAddress.slice(0, 8) + "\u2026" : "", " ");
        }
      }

      function StablecoinTransferComponent_ng_container_5_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Origem e destino n\xE3o podem ser iguais.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function StablecoinTransferComponent_ng_container_5_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Informe o valor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function StablecoinTransferComponent_ng_container_5_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "O valor deve ser maior que zero.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function StablecoinTransferComponent_ng_container_5_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u2193 1:1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, ctx_r10.amountFiat, "1.2-2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 5, ctx_r10.amountFiat, "1.2-2"), " BRLN");
        }
      }

      function StablecoinTransferComponent_ng_container_5_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Transferir BRLN");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function StablecoinTransferComponent_ng_container_5_span_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Processando\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function StablecoinTransferComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StablecoinTransferComponent_ng_container_5_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "De (From)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Selecione o usu\xE1rio de origem");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StablecoinTransferComponent_ng_container_5_option_8_Template, 2, 3, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Para (To)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Selecione o usu\xE1rio de destino");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StablecoinTransferComponent_ng_container_5_option_16_Template, 2, 3, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, StablecoinTransferComponent_ng_container_5_span_18_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Valor em BRL (R$)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, StablecoinTransferComponent_ng_container_5_span_23_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, StablecoinTransferComponent_ng_container_5_span_24_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, StablecoinTransferComponent_ng_container_5_div_25_Template, 10, 8, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, StablecoinTransferComponent_ng_container_5_span_28_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, StablecoinTransferComponent_ng_container_5_span_30_Template, 2, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var tmp_4_0;
          var tmp_5_0;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, ctx_r1.adminUsers$));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 12, ctx_r1.adminUsers$));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.form.errors == null ? null : ctx_r1.form.errors["sameUser"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.form.get("amountFiat")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) && ((tmp_4_0 = ctx_r1.form.get("amountFiat")) == null ? null : tmp_4_0.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r1.form.get("amountFiat")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["min"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.amountFiat > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 14, ctx_r1.loading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 16, ctx_r1.loading$));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 18, ctx_r1.loading$));
        }
      }

      function StablecoinTransferComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713 Transfer\xEAncia realizada com sucesso!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Valor: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StablecoinTransferComponent_ng_template_6_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Nova transfer\xEAncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 3, ctx_r3.successResult.amountBrln, "1.2-2"), " BRLN");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.successResult.txId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("On-chain: ", ctx_r3.successResult.onChain ? "Sim" : "N\xE3o (sem endere\xE7o de carteira)", "");
        }
      }

      var _StablecoinTransferComponent = /*#__PURE__*/function () {
        function _StablecoinTransferComponent(fb, store) {
          _classCallCheck(this, _StablecoinTransferComponent);

          this.fb = fb;
          this.store = store;
          this.adminUsers$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminUsersList);
          this.balances$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminUsers);
          this.loading$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminLoading);
          this.error$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminError);
          this.successResult = null;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.form = this.fb.group({
            fromUserId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            toUserId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            amountFiat: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0.01)]]
          }, {
            validators: this.differentUsersValidator
          });
        }

        _createClass(_StablecoinTransferComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsers)());
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalances)());
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "amountFiat",
          get: function get() {
            var _this$form$get$value, _this$form$get;

            return Number((_this$form$get$value = (_this$form$get = this.form.get('amountFiat')) === null || _this$form$get === void 0 ? void 0 : _this$form$get.value) !== null && _this$form$get$value !== void 0 ? _this$form$get$value : 0);
          }
        }, {
          key: "differentUsersValidator",
          value: function differentUsersValidator(g) {
            var _g$get, _g$get2;

            var from = (_g$get = g.get('fromUserId')) === null || _g$get === void 0 ? void 0 : _g$get.value;
            var to = (_g$get2 = g.get('toUserId')) === null || _g$get2 === void 0 ? void 0 : _g$get2.value;
            return from && to && from === to ? {
              sameUser: true
            } : null;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.form.invalid) {
              this.form.markAllAsTouched();
              return;
            }

            var _this$form$value = this.form.value,
                fromUserId = _this$form$value.fromUserId,
                toUserId = _this$form$value.toUserId,
                amountFiat = _this$form$value.amountFiat;
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransfer)({
              fromUserId: fromUserId,
              toUserId: toUserId,
              amountFiat: Number(amountFiat)
            })); // Subscribe once to detect success

            Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
            /*! ../../store/admin/admin.actions */
            56610)).then(function (_ref) {
              var createAdminTransferSuccess = _ref.createAdminTransferSuccess;

              var _webpack_require__ = __webpack_require__(
              /*! @ngrx/effects */
              20275),
                  ofType = _webpack_require__.ofType; // Simple approach: watch loading going from true→false

            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.form.reset();
            this.successResult = null;
          }
        }]);

        return _StablecoinTransferComponent;
      }();

      _StablecoinTransferComponent.ɵfac = function StablecoinTransferComponent_Factory(t) {
        return new (t || _StablecoinTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
      };

      _StablecoinTransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _StablecoinTransferComponent,
        selectors: [["app-stablecoin-transfer"]],
        decls: 8,
        vars: 5,
        consts: [[1, "st-container"], ["class", "error-banner", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["successState", ""], [1, "error-banner"], [3, "formGroup", "ngSubmit"], [1, "field"], ["formControlName", "fromUserId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "toUserId"], ["class", "field-error", 4, "ngIf"], ["type", "number", "formControlName", "amountFiat", "min", "0.01", "step", "0.01", "placeholder", "0,00"], ["class", "conversion", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], [3, "value"], [1, "field-error"], [1, "conversion"], [1, "arrow"], [1, "success-panel"], [3, "click"]],
        template: function StablecoinTransferComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Transfer\xEAncia de Stablecoin");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StablecoinTransferComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StablecoinTransferComponent_ng_container_5_Template, 32, 20, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StablecoinTransferComponent_ng_template_6_Template, 16, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, ctx.error$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.successResult)("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
        styles: [".st-container[_ngcontent-%COMP%] { padding: 24px; max-width: 480px; }\nh3[_ngcontent-%COMP%] { margin: 0 0 20px; color: #1e293b; }\n.error-banner[_ngcontent-%COMP%] { background: #fee2e2; color: #b91c1c; padding: 10px 14px; border-radius: 8px; margin-bottom: 16px; }\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; grid-gap: 4px; gap: 4px; margin-bottom: 16px; }\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #475569; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 15px; }\n.field-error[_ngcontent-%COMP%] { color: #EF4444; font-size: 12px; }\n.conversion[_ngcontent-%COMP%] { background: #f0fdf4; border-radius: 8px; padding: 12px 16px; display: flex; flex-direction: column; align-items: center; grid-gap: 4px; gap: 4px; margin-bottom: 20px; font-size: 15px; }\n.arrow[_ngcontent-%COMP%] { color: #10B981; font-weight: 700; }\n.btn-submit[_ngcontent-%COMP%] { width: 100%; padding: 12px; background: #10B981; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }\n.btn-submit[_ngcontent-%COMP%]:disabled { opacity: .6; cursor: not-allowed; }\n.success-panel[_ngcontent-%COMP%] { background: #f0fdf4; border-radius: 12px; padding: 20px 24px; }\n.success-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0 0 8px; }\n.success-panel[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] { font-family: monospace; background: #dcfce7; padding: 2px 6px; border-radius: 4px; }\n.success-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { margin-top: 12px; padding: 8px 16px; background: #10B981; color: #fff; border: none; border-radius: 6px; cursor: pointer; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWJsZWNvaW4tdHJhbnNmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsYUFBYSxFQUFFLGdCQUFnQixFQUFFO0FBQ2pELEtBQUssZ0JBQWdCLEVBQUUsY0FBYyxFQUFFO0FBQ3ZDLGdCQUFnQixtQkFBbUIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7QUFDbEgsU0FBUyxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsYUFBUSxFQUFSLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtBQUMvRSxlQUFlLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7QUFDbEUsOEJBQThCLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRTtBQUNsSCxlQUFlLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDaEQsY0FBYyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsYUFBUSxFQUFSLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUU7QUFDdkwsU0FBUyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUU7QUFDM0MsY0FBYyxXQUFXLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRTtBQUNsSyx1QkFBdUIsV0FBVyxFQUFFLG1CQUFtQixFQUFFO0FBQ3pELGlCQUFpQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRTtBQUMvRSxtQkFBbUIsZUFBZSxFQUFFO0FBQ3BDLHNCQUFzQixzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRTtBQUN6Ryx3QkFBd0IsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUiLCJmaWxlIjoic3RhYmxlY29pbi10cmFuc2Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0LWNvbnRhaW5lciB7IHBhZGRpbmc6IDI0cHg7IG1heC13aWR0aDogNDgwcHg7IH1cbmgzIHsgbWFyZ2luOiAwIDAgMjBweDsgY29sb3I6ICMxZTI5M2I7IH1cbi5lcnJvci1iYW5uZXIgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2I5MWMxYzsgcGFkZGluZzogMTBweCAxNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbi5maWVsZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNHB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4uZmllbGQgbGFiZWwgeyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNDc1NTY5OyB9XG4uZmllbGQgaW5wdXQsIC5maWVsZCBzZWxlY3QgeyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1zaXplOiAxNXB4OyB9XG4uZmllbGQtZXJyb3IgeyBjb2xvcjogI0VGNDQ0NDsgZm9udC1zaXplOiAxMnB4OyB9XG4uY29udmVyc2lvbiB7IGJhY2tncm91bmQ6ICNmMGZkZjQ7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogMTJweCAxNnB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgbWFyZ2luLWJvdHRvbTogMjBweDsgZm9udC1zaXplOiAxNXB4OyB9XG4uYXJyb3cgeyBjb2xvcjogIzEwQjk4MTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuLmJ0bi1zdWJtaXQgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogMTJweDsgYmFja2dyb3VuZDogIzEwQjk4MTsgY29sb3I6ICNmZmY7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGN1cnNvcjogcG9pbnRlcjsgfVxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNjsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLnN1Y2Nlc3MtcGFuZWwgeyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAyMHB4IDI0cHg7IH1cbi5zdWNjZXNzLXBhbmVsIHAgeyBtYXJnaW46IDAgMCA4cHg7IH1cbi5zdWNjZXNzLXBhbmVsIGNvZGUgeyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBiYWNrZ3JvdW5kOiAjZGNmY2U3OyBwYWRkaW5nOiAycHggNnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbi5zdWNjZXNzLXBhbmVsIGJ1dHRvbiB7IG1hcmdpbi10b3A6IDEycHg7IHBhZGRpbmc6IDhweCAxNnB4OyBiYWNrZ3JvdW5kOiAjMTBCOTgxOyBjb2xvcjogI2ZmZjsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiA2cHg7IGN1cnNvcjogcG9pbnRlcjsgfVxuIl19 */"]
      });
      /***/
    },

    /***/
    23297:
    /*!******************************************************************************!*\
      !*** ./src/app/admin/transaction-approval/transaction-approval.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionApprovalComponent": function TransactionApprovalComponent() {
          return (
            /* binding */
            _TransactionApprovalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      41618);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../store/admin/admin.actions */
      56610);
      /* harmony import */


      var _store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/admin/admin.selectors */
      65486);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function TransactionApprovalComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var tmp_0_0;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.transactions$)) == null ? null : tmp_0_0.length, ")");
        }
      }

      function TransactionApprovalComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var err_r7 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](err_r7);
        }
      }

      function TransactionApprovalComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Confirmar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " da transa\xE7\xE3o?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_div_10_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.cancelConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_div_10_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.confirmingAction === "approve" ? ctx_r10.confirmApprove(ctx_r10.confirmingTxId) : ctx_r10.confirmReject(ctx_r10.confirmingTxId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.confirmingAction === "approve" ? "aprova\xE7\xE3o" : "rejei\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("btn-approve", ctx_r2.confirmingAction === "approve")("btn-reject", ctx_r2.confirmingAction === "reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.confirmingAction === "approve" ? "Aprovar" : "Rejeitar", " ");
        }
      }

      function TransactionApprovalComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
        }
      }

      function TransactionApprovalComponent_table_13_tr_16_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_table_13_tr_16_ng_container_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var tx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r16.requestConfirm(tx_r12.txId, "approve");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713 Aprovar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_table_13_tr_16_ng_container_14_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var tx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.requestConfirm(tx_r12.txId, "reject");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2717 Rejeitar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function TransactionApprovalComponent_table_13_tr_16_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 25);
        }
      }

      function TransactionApprovalComponent_table_13_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TransactionApprovalComponent_table_13_tr_16_ng_container_14_Template, 5, 0, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TransactionApprovalComponent_table_13_tr_16_ng_template_15_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tx_r12 = ctx.$implicit;

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("processing", ctx_r11.processingTxId === tx_r12.txId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tx_r12.txId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tx_r12.userEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.typeLabel(tx_r12.type));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 9, tx_r12.amount, "1.2-2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 12, tx_r12.createdAt, "dd/MM/yyyy HH:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.processingTxId !== tx_r12.txId)("ngIfElse", _r14);
        }
      }

      function TransactionApprovalComponent_table_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Valor");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "A\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TransactionApprovalComponent_table_13_tr_16_Template, 17, 15, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 1, ctx_r4.transactions$));
        }
      }

      function TransactionApprovalComponent_ng_template_15_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nenhuma transa\xE7\xE3o pendente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function TransactionApprovalComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TransactionApprovalComponent_ng_template_15_div_0_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r6.loading$));
        }
      }

      var _TransactionApprovalComponent = /*#__PURE__*/function () {
        function _TransactionApprovalComponent(store) {
          _classCallCheck(this, _TransactionApprovalComponent);

          this.store = store;
          this.transactions$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPendingTransactions);
          this.loading$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminLoading);
          this.error$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminError);
          this.confirmingTxId = null;
          this.confirmingAction = null;
          this.processingTxId = null;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(_TransactionApprovalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.load();
            (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(15000).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(function () {
              return _this.load();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "load",
          value: function load() {
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactions)());
          }
        }, {
          key: "requestConfirm",
          value: function requestConfirm(txId, action) {
            this.confirmingTxId = txId;
            this.confirmingAction = action;
          }
        }, {
          key: "cancelConfirm",
          value: function cancelConfirm() {
            this.confirmingTxId = null;
            this.confirmingAction = null;
          }
        }, {
          key: "confirm",
          value: function confirm() {
            var _this2 = this;

            if (!this.confirmingTxId || !this.confirmingAction) return;
            var txId = this.confirmingTxId;
            this.processingTxId = txId;
            this.confirmingTxId = null;
            this.confirmingAction = null;

            if (this.confirmingAction === 'approve' || this.processingTxId) {// re-read action from state since we cleared it
            }

            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransaction)({
              txId: txId
            }));
            setTimeout(function () {
              if (_this2.processingTxId === txId) _this2.processingTxId = null;
            }, 3000);
          }
        }, {
          key: "confirmApprove",
          value: function confirmApprove(txId) {
            var _this3 = this;

            this.processingTxId = txId;
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransaction)({
              txId: txId
            }));
            setTimeout(function () {
              if (_this3.processingTxId === txId) _this3.processingTxId = null;
            }, 3000);
          }
        }, {
          key: "confirmReject",
          value: function confirmReject(txId) {
            var _this4 = this;

            this.processingTxId = txId;
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransaction)({
              txId: txId
            }));
            setTimeout(function () {
              if (_this4.processingTxId === txId) _this4.processingTxId = null;
            }, 3000);
          }
        }, {
          key: "typeLabel",
          value: function typeLabel(type) {
            return type === 'buy' ? 'Compra' : type === 'sell' ? 'Venda' : 'Transferência';
          }
        }]);

        return _TransactionApprovalComponent;
      }();

      _TransactionApprovalComponent.ɵfac = function TransactionApprovalComponent_Factory(t) {
        return new (t || _TransactionApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
      };

      _TransactionApprovalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _TransactionApprovalComponent,
        selectors: [["app-transaction-approval"]],
        decls: 17,
        vars: 14,
        consts: [[1, "ta-container"], [1, "ta-header"], ["class", "count", 4, "ngIf"], [1, "btn-refresh", 3, "click"], ["class", "error-banner", 4, "ngIf"], ["class", "confirm-overlay", 4, "ngIf"], ["class", "loading-bar", 4, "ngIf"], ["class", "ta-table", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "count"], [1, "error-banner"], [1, "confirm-overlay"], [1, "confirm-box"], [1, "confirm-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-ok", 3, "click"], [1, "loading-bar"], [1, "ta-table"], [3, "processing", 4, "ngFor", "ngForOf"], [1, "mono"], [1, "actions"], [4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "btn-approve", 3, "click"], [1, "btn-reject", 3, "click"], [1, "spinner"], ["class", "empty-state", 4, "ngIf"], [1, "empty-state"]],
        template: function TransactionApprovalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Transa\xE7\xF5es Pendentes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TransactionApprovalComponent_span_4_Template, 3, 3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_Template_button_click_6_listener() {
              return ctx.load();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Atualizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TransactionApprovalComponent_div_8_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TransactionApprovalComponent_div_10_Template, 12, 6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TransactionApprovalComponent_div_11_Template, 1, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TransactionApprovalComponent_table_13_Template, 18, 3, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TransactionApprovalComponent_ng_template_15_Template, 2, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);

            var tmp_0_0;
            var tmp_4_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx.transactions$)) == null ? null : tmp_0_0.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx.error$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.confirmingTxId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 10, ctx.loading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 12, ctx.transactions$)) == null ? null : tmp_4_0.length)("ngIfElse", _r5);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".ta-container[_ngcontent-%COMP%] { padding: 24px; position: relative; }\n.ta-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }\nh3[_ngcontent-%COMP%] { margin: 0; color: #1e293b; }\n.count[_ngcontent-%COMP%] { background: #f59e0b; color: #fff; padding: 2px 8px; border-radius: 12px; font-size: 13px; margin-left: 8px; }\n.btn-refresh[_ngcontent-%COMP%] { padding: 6px 14px; background: #10B981; color: #fff; border: none; border-radius: 6px; cursor: pointer; }\n.error-banner[_ngcontent-%COMP%] { background: #fee2e2; color: #b91c1c; padding: 10px 14px; border-radius: 8px; margin-bottom: 16px; }\n.loading-bar[_ngcontent-%COMP%] { height: 3px; background: linear-gradient(90deg, #10B981, #34d399); animation: slide 1.2s infinite; border-radius: 2px; margin-bottom: 12px; }\n@keyframes slide { 0% { margin-left: 0; margin-right: 100%; } 50% { margin-left: 20%; margin-right: 0; } 100% { margin-left: 100%; margin-right: 0; } }\n.ta-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.ta-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .ta-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }\n.ta-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: #f8fafc; font-weight: 600; color: #475569; }\n.ta-table[_ngcontent-%COMP%]   tr.processing[_ngcontent-%COMP%] { opacity: .6; pointer-events: none; }\n.mono[_ngcontent-%COMP%] { font-family: monospace; font-size: 12px; }\n.actions[_ngcontent-%COMP%] { display: flex; grid-gap: 8px; gap: 8px; }\n.btn-approve[_ngcontent-%COMP%] { background: #10B981; color: #fff; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; }\n.btn-reject[_ngcontent-%COMP%]  { background: #EF4444; color: #fff; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer; }\n.btn-approve[_ngcontent-%COMP%]:hover { background: #059669; }\n.btn-reject[_ngcontent-%COMP%]:hover  { background: #dc2626; }\n.spinner[_ngcontent-%COMP%] { display: inline-block; width: 18px; height: 18px; border: 2px solid #e2e8f0; border-top-color: #10B981; border-radius: 50%; animation: spin .7s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\n.empty-state[_ngcontent-%COMP%] { color: #94a3b8; padding: 32px; text-align: center; }\n.confirm-overlay[_ngcontent-%COMP%] { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: flex; align-items: center; justify-content: center; z-index: 1000; }\n.confirm-box[_ngcontent-%COMP%] { background: #fff; padding: 24px 32px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,.2); min-width: 280px; }\n.confirm-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0 0 20px; font-size: 16px; }\n.confirm-actions[_ngcontent-%COMP%] { display: flex; grid-gap: 12px; gap: 12px; justify-content: flex-end; }\n.btn-cancel[_ngcontent-%COMP%] { background: #f1f5f9; color: #475569; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }\n.btn-ok[_ngcontent-%COMP%] { color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGFBQWEsRUFBRSxrQkFBa0IsRUFBRTtBQUNuRCxhQUFhLGFBQWEsRUFBRSw4QkFBOEIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtBQUN0RyxLQUFLLFNBQVMsRUFBRSxjQUFjLEVBQUU7QUFDaEMsU0FBUyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ3JILGVBQWUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUU7QUFDdkgsZ0JBQWdCLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRTtBQUNsSCxlQUFlLFdBQVcsRUFBRSxvREFBb0QsRUFBRSw4QkFBOEIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRTtBQUMzSixtQkFBbUIsS0FBSyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxFQUFFLE9BQU8saUJBQWlCLEVBQUUsZUFBZSxFQUFFLEVBQUU7QUFDdEosWUFBWSxXQUFXLEVBQUUseUJBQXlCLEVBQUU7QUFDcEQsNkJBQTZCLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGdDQUFnQyxFQUFFO0FBQ3JHLGVBQWUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFO0FBQ3RFLDBCQUEwQixXQUFXLEVBQUUsb0JBQW9CLEVBQUU7QUFDN0QsUUFBUSxzQkFBc0IsRUFBRSxlQUFlLEVBQUU7QUFDakQsV0FBVyxhQUFhLEVBQUUsYUFBUSxFQUFSLFFBQVEsRUFBRTtBQUNwQyxlQUFlLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFO0FBQ3ZILGVBQWUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUU7QUFDdkgscUJBQXFCLG1CQUFtQixFQUFFO0FBQzFDLHFCQUFxQixtQkFBbUIsRUFBRTtBQUMxQyxXQUFXLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQUUsbUNBQW1DLEVBQUU7QUFDNUssa0JBQWtCLEtBQUsseUJBQXlCLEVBQUUsRUFBRTtBQUNwRCxlQUFlLGNBQWMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUU7QUFDbEUsbUJBQW1CLGVBQWUsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRTtBQUN0SixlQUFlLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHFDQUFxQyxFQUFFLGdCQUFnQixFQUFFO0FBQ25JLGlCQUFpQixnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7QUFDcEQsbUJBQW1CLGFBQWEsRUFBRSxjQUFTLEVBQVQsU0FBUyxFQUFFLHlCQUF5QixFQUFFO0FBQ3hFLGNBQWMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUU7QUFDekgsVUFBVSxXQUFXLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSIsImZpbGUiOiJ0cmFuc2FjdGlvbi1hcHByb3ZhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhLWNvbnRhaW5lciB7IHBhZGRpbmc6IDI0cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLnRhLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuaDMgeyBtYXJnaW46IDA7IGNvbG9yOiAjMWUyOTNiOyB9XG4uY291bnQgeyBiYWNrZ3JvdW5kOiAjZjU5ZTBiOyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMnB4IDhweDsgYm9yZGVyLXJhZGl1czogMTJweDsgZm9udC1zaXplOiAxM3B4OyBtYXJnaW4tbGVmdDogOHB4OyB9XG4uYnRuLXJlZnJlc2ggeyBwYWRkaW5nOiA2cHggMTRweDsgYmFja2dyb3VuZDogIzEwQjk4MTsgY29sb3I6ICNmZmY7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5lcnJvci1iYW5uZXIgeyBiYWNrZ3JvdW5kOiAjZmVlMmUyOyBjb2xvcjogI2I5MWMxYzsgcGFkZGluZzogMTBweCAxNHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbi5sb2FkaW5nLWJhciB7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxMEI5ODEsICMzNGQzOTkpOyBhbmltYXRpb246IHNsaWRlIDEuMnMgaW5maW5pdGU7IGJvcmRlci1yYWRpdXM6IDJweDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxuQGtleWZyYW1lcyBzbGlkZSB7IDAlIHsgbWFyZ2luLWxlZnQ6IDA7IG1hcmdpbi1yaWdodDogMTAwJTsgfSA1MCUgeyBtYXJnaW4tbGVmdDogMjAlOyBtYXJnaW4tcmlnaHQ6IDA7IH0gMTAwJSB7IG1hcmdpbi1sZWZ0OiAxMDAlOyBtYXJnaW4tcmlnaHQ6IDA7IH0gfVxuLnRhLXRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cbi50YS10YWJsZSB0aCwgLnRhLXRhYmxlIHRkIHsgcGFkZGluZzogMTBweCAxMnB4OyB0ZXh0LWFsaWduOiBsZWZ0OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDsgfVxuLnRhLXRhYmxlIHRoIHsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM0NzU1Njk7IH1cbi50YS10YWJsZSB0ci5wcm9jZXNzaW5nIHsgb3BhY2l0eTogLjY7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4ubW9ubyB7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDsgfVxuLmFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgfVxuLmJ0bi1hcHByb3ZlIHsgYmFja2dyb3VuZDogIzEwQjk4MTsgY29sb3I6ICNmZmY7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogNXB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDZweDsgY3Vyc29yOiBwb2ludGVyOyB9XG4uYnRuLXJlamVjdCAgeyBiYWNrZ3JvdW5kOiAjRUY0NDQ0OyBjb2xvcjogI2ZmZjsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiA1cHggMTJweDsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5idG4tYXBwcm92ZTpob3ZlciB7IGJhY2tncm91bmQ6ICMwNTk2Njk7IH1cbi5idG4tcmVqZWN0OmhvdmVyICB7IGJhY2tncm91bmQ6ICNkYzI2MjY7IH1cbi5zcGlubmVyIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItdG9wLWNvbG9yOiAjMTBCOTgxOyBib3JkZXItcmFkaXVzOiA1MCU7IGFuaW1hdGlvbjogc3BpbiAuN3MgbGluZWFyIGluZmluaXRlOyB9XG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuLmVtcHR5LXN0YXRlIHsgY29sb3I6ICM5NGEzYjg7IHBhZGRpbmc6IDMycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmNvbmZpcm0tb3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjQpOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgei1pbmRleDogMTAwMDsgfVxuLmNvbmZpcm0tYm94IHsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzogMjRweCAzMnB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwwLDAsLjIpOyBtaW4td2lkdGg6IDI4MHB4OyB9XG4uY29uZmlybS1ib3ggcCB7IG1hcmdpbjogMCAwIDIwcHg7IGZvbnQtc2l6ZTogMTZweDsgfVxuLmNvbmZpcm0tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuLmJ0bi1jYW5jZWwgeyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBjb2xvcjogIzQ3NTU2OTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiA4cHggMTZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5idG4tb2sgeyBjb2xvcjogI2ZmZjsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiA4cHggMTZweDsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    49019:
    /*!******************************************************************!*\
      !*** ./src/app/admin/users-balances/users-balances.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersBalancesComponent": function UsersBalancesComponent() {
          return (
            /* binding */
            _UsersBalancesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      41618);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../store/admin/admin.actions */
      56610);
      /* harmony import */


      var _store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/admin/admin.selectors */
      65486);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function UsersBalancesComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Total Fiat: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Total BRLN: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gt_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, gt_r4.fiatTotal, "1.2-2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 5, gt_r4.brlnTotal, "1.2-2"), " BRLN");
        }
      }

      function UsersBalancesComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersBalancesComponent_div_8_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.load();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tentar novamente");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var err_r5 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", err_r5, " ");
        }
      }

      function UsersBalancesComponent_ng_container_20_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UsersBalancesComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UsersBalancesComponent_ng_container_20_tr_1_Template, 7, 0, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.skeletonRows);
        }
      }

      function UsersBalancesComponent_ng_container_22_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var u_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r12.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 3, u_r12.fiatBalance, "1.2-2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 6, u_r12.brlnBalance, "1.2-2"), " BRLN");
        }
      }

      function UsersBalancesComponent_ng_container_22_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nenhum usu\xE1rio encontrado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UsersBalancesComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UsersBalancesComponent_ng_container_22_tr_1_Template, 9, 9, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UsersBalancesComponent_ng_container_22_tr_3_Template, 3, 0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var tmp_1_0;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r3.users$));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r3.users$)) == null ? null : tmp_1_0.length) === 0);
        }
      }

      var _UsersBalancesComponent = /*#__PURE__*/function () {
        function _UsersBalancesComponent(store) {
          _classCallCheck(this, _UsersBalancesComponent);

          this.store = store;
          this.users$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminUsers);
          this.grandTotal$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectGrandTotal);
          this.loading$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminLoading);
          this.error$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminError);
          this.skeletonRows = [1, 2, 3];
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(_UsersBalancesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.load();
            (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(30000).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(function () {
              return _this5.load();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "load",
          value: function load() {
            this.store.dispatch((0, _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalances)());
          }
        }]);

        return _UsersBalancesComponent;
      }();

      _UsersBalancesComponent.ɵfac = function UsersBalancesComponent_Factory(t) {
        return new (t || _UsersBalancesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
      };

      _UsersBalancesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UsersBalancesComponent,
        selectors: [["app-users-balances"]],
        decls: 24,
        vars: 12,
        consts: [[1, "ub-container"], [1, "ub-header"], [1, "btn-refresh", 3, "click"], ["class", "grand-total", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], [1, "ub-table"], [4, "ngIf"], [1, "grand-total"], [1, "error-banner"], [3, "click"], ["class", "skeleton-row", 4, "ngFor", "ngForOf"], [1, "skeleton-row"], [1, "skeleton"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "empty"]],
        template: function UsersBalancesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Saldos dos Usu\xE1rios");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersBalancesComponent_Template_button_click_4_listener() {
              return ctx.load();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Atualizar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UsersBalancesComponent_div_6_Template, 11, 8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UsersBalancesComponent_div_8_Template, 4, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Usu\xE1rio");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Saldo Fiat");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Saldo BRLN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, UsersBalancesComponent_ng_container_20_Template, 2, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UsersBalancesComponent_ng_container_22_Template, 5, 6, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, ctx.grandTotal$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.error$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 8, ctx.loading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 10, ctx.loading$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
        styles: [".ub-container[_ngcontent-%COMP%] { padding: 24px; }\n.ub-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }\nh3[_ngcontent-%COMP%] { margin: 0; color: #1e293b; }\n.btn-refresh[_ngcontent-%COMP%] { padding: 6px 14px; background: #10B981; color: #fff; border: none; border-radius: 6px; cursor: pointer; }\n.btn-refresh[_ngcontent-%COMP%]:hover { background: #059669; }\n.grand-total[_ngcontent-%COMP%] { display: flex; grid-gap: 32px; gap: 32px; padding: 12px 16px; background: #f0fdf4; border-radius: 8px; margin-bottom: 16px; font-size: 15px; }\n.error-banner[_ngcontent-%COMP%] { background: #fee2e2; color: #b91c1c; padding: 10px 14px; border-radius: 8px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }\n.error-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { background: none; border: 1px solid #b91c1c; color: #b91c1c; padding: 4px 10px; border-radius: 4px; cursor: pointer; }\n.ub-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\n.ub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .ub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 10px 14px; text-align: left; border-bottom: 1px solid #e2e8f0; }\n.ub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: #f8fafc; font-weight: 600; color: #475569; }\n.skeleton-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 12px 14px; }\n.skeleton[_ngcontent-%COMP%] { display: block; height: 14px; background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 4px; }\n@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }\n.empty[_ngcontent-%COMP%] { color: #94a3b8; text-align: center; padding: 24px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWJhbGFuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGFBQWEsRUFBRTtBQUMvQixhQUFhLGFBQWEsRUFBRSw4QkFBOEIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRTtBQUN0RyxLQUFLLFNBQVMsRUFBRSxjQUFjLEVBQUU7QUFDaEMsZUFBZSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRTtBQUN2SCxxQkFBcUIsbUJBQW1CLEVBQUU7QUFDMUMsZUFBZSxhQUFhLEVBQUUsY0FBUyxFQUFULFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUU7QUFDNUksZ0JBQWdCLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUU7QUFDdEwsdUJBQXVCLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUU7QUFDNUksWUFBWSxXQUFXLEVBQUUseUJBQXlCLEVBQUU7QUFDcEQsNkJBQTZCLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGdDQUFnQyxFQUFFO0FBQ3JHLGVBQWUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFO0FBQ3RFLG1CQUFtQixrQkFBa0IsRUFBRTtBQUN2QyxZQUFZLGNBQWMsRUFBRSxZQUFZLEVBQUUseUVBQXlFLEVBQUUsMEJBQTBCLEVBQUUsZ0NBQWdDLEVBQUUsa0JBQWtCLEVBQUU7QUFDdk0scUJBQXFCLEtBQUssMkJBQTJCLEVBQUUsRUFBRSxPQUFPLDRCQUE0QixFQUFFLEVBQUU7QUFDaEcsU0FBUyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFIiwiZmlsZSI6InVzZXJzLWJhbGFuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWItY29udGFpbmVyIHsgcGFkZGluZzogMjRweDsgfVxuLnViLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuaDMgeyBtYXJnaW46IDA7IGNvbG9yOiAjMWUyOTNiOyB9XG4uYnRuLXJlZnJlc2ggeyBwYWRkaW5nOiA2cHggMTRweDsgYmFja2dyb3VuZDogIzEwQjk4MTsgY29sb3I6ICNmZmY7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogNnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5idG4tcmVmcmVzaDpob3ZlciB7IGJhY2tncm91bmQ6ICMwNTk2Njk7IH1cbi5ncmFuZC10b3RhbCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMzJweDsgcGFkZGluZzogMTJweCAxNnB4OyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBib3JkZXItcmFkaXVzOiA4cHg7IG1hcmdpbi1ib3R0b206IDE2cHg7IGZvbnQtc2l6ZTogMTVweDsgfVxuLmVycm9yLWJhbm5lciB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjYjkxYzFjOyBwYWRkaW5nOiAxMHB4IDE0cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgbWFyZ2luLWJvdHRvbTogMTZweDsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4uZXJyb3ItYmFubmVyIGJ1dHRvbiB7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogMXB4IHNvbGlkICNiOTFjMWM7IGNvbG9yOiAjYjkxYzFjOyBwYWRkaW5nOiA0cHggMTBweDsgYm9yZGVyLXJhZGl1czogNHB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi51Yi10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG4udWItdGFibGUgdGgsIC51Yi10YWJsZSB0ZCB7IHBhZGRpbmc6IDEwcHggMTRweDsgdGV4dC1hbGlnbjogbGVmdDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7IH1cbi51Yi10YWJsZSB0aCB7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNDc1NTY5OyB9XG4uc2tlbGV0b24tcm93IHRkIHsgcGFkZGluZzogMTJweCAxNHB4OyB9XG4uc2tlbGV0b24geyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAxNHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlMmU4ZjAgMjUlLCAjZjFmNWY5IDUwJSwgI2UyZThmMCA3NSUpOyBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTsgYW5pbWF0aW9uOiBzaGltbWVyIDEuNHMgaW5maW5pdGU7IGJvcmRlci1yYWRpdXM6IDRweDsgfVxuQGtleWZyYW1lcyBzaGltbWVyIHsgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH0gMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH0gfVxuLmVtcHR5IHsgY29sb3I6ICM5NGEzYjg7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjRweDsgfVxuIl19 */"]
      });
      /***/
    },

    /***/
    56610:
    /*!**********************************************!*\
      !*** ./src/app/store/admin/admin.actions.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "loadAdminBalances": function loadAdminBalances() {
          return (
            /* binding */
            _loadAdminBalances
          );
        },

        /* harmony export */
        "loadAdminBalancesSuccess": function loadAdminBalancesSuccess() {
          return (
            /* binding */
            _loadAdminBalancesSuccess
          );
        },

        /* harmony export */
        "loadAdminBalancesFailure": function loadAdminBalancesFailure() {
          return (
            /* binding */
            _loadAdminBalancesFailure
          );
        },

        /* harmony export */
        "loadPendingTransactions": function loadPendingTransactions() {
          return (
            /* binding */
            _loadPendingTransactions
          );
        },

        /* harmony export */
        "loadPendingTransactionsSuccess": function loadPendingTransactionsSuccess() {
          return (
            /* binding */
            _loadPendingTransactionsSuccess
          );
        },

        /* harmony export */
        "loadPendingTransactionsFailure": function loadPendingTransactionsFailure() {
          return (
            /* binding */
            _loadPendingTransactionsFailure
          );
        },

        /* harmony export */
        "approveTransaction": function approveTransaction() {
          return (
            /* binding */
            _approveTransaction
          );
        },

        /* harmony export */
        "approveTransactionSuccess": function approveTransactionSuccess() {
          return (
            /* binding */
            _approveTransactionSuccess
          );
        },

        /* harmony export */
        "approveTransactionFailure": function approveTransactionFailure() {
          return (
            /* binding */
            _approveTransactionFailure
          );
        },

        /* harmony export */
        "rejectTransaction": function rejectTransaction() {
          return (
            /* binding */
            _rejectTransaction
          );
        },

        /* harmony export */
        "rejectTransactionSuccess": function rejectTransactionSuccess() {
          return (
            /* binding */
            _rejectTransactionSuccess
          );
        },

        /* harmony export */
        "rejectTransactionFailure": function rejectTransactionFailure() {
          return (
            /* binding */
            _rejectTransactionFailure
          );
        },

        /* harmony export */
        "loadAdminUsers": function loadAdminUsers() {
          return (
            /* binding */
            _loadAdminUsers
          );
        },

        /* harmony export */
        "loadAdminUsersSuccess": function loadAdminUsersSuccess() {
          return (
            /* binding */
            _loadAdminUsersSuccess
          );
        },

        /* harmony export */
        "loadAdminUsersFailure": function loadAdminUsersFailure() {
          return (
            /* binding */
            _loadAdminUsersFailure
          );
        },

        /* harmony export */
        "createAdminTransfer": function createAdminTransfer() {
          return (
            /* binding */
            _createAdminTransfer
          );
        },

        /* harmony export */
        "createAdminTransferSuccess": function createAdminTransferSuccess() {
          return (
            /* binding */
            _createAdminTransferSuccess
          );
        },

        /* harmony export */
        "createAdminTransferFailure": function createAdminTransferFailure() {
          return (
            /* binding */
            _createAdminTransferFailure
          );
        },

        /* harmony export */
        "loadDfnsWallet": function loadDfnsWallet() {
          return (
            /* binding */
            _loadDfnsWallet
          );
        },

        /* harmony export */
        "loadDfnsWalletSuccess": function loadDfnsWalletSuccess() {
          return (
            /* binding */
            _loadDfnsWalletSuccess
          );
        },

        /* harmony export */
        "loadDfnsWalletFailure": function loadDfnsWalletFailure() {
          return (
            /* binding */
            _loadDfnsWalletFailure
          );
        },

        /* harmony export */
        "deployContract": function deployContract() {
          return (
            /* binding */
            _deployContract
          );
        },

        /* harmony export */
        "deployContractSuccess": function deployContractSuccess() {
          return (
            /* binding */
            _deployContractSuccess
          );
        },

        /* harmony export */
        "deployContractFailure": function deployContractFailure() {
          return (
            /* binding */
            _deployContractFailure
          );
        },

        /* harmony export */
        "pollDeployStatus": function pollDeployStatus() {
          return (
            /* binding */
            _pollDeployStatus
          );
        },

        /* harmony export */
        "pollDeployStatusSuccess": function pollDeployStatusSuccess() {
          return (
            /* binding */
            _pollDeployStatusSuccess
          );
        },

        /* harmony export */
        "mintTokens": function mintTokens() {
          return (
            /* binding */
            _mintTokens
          );
        },

        /* harmony export */
        "mintTokensSuccess": function mintTokensSuccess() {
          return (
            /* binding */
            _mintTokensSuccess
          );
        },

        /* harmony export */
        "mintTokensFailure": function mintTokensFailure() {
          return (
            /* binding */
            _mintTokensFailure
          );
        },

        /* harmony export */
        "burnTokens": function burnTokens() {
          return (
            /* binding */
            _burnTokens
          );
        },

        /* harmony export */
        "burnTokensSuccess": function burnTokensSuccess() {
          return (
            /* binding */
            _burnTokensSuccess
          );
        },

        /* harmony export */
        "burnTokensFailure": function burnTokensFailure() {
          return (
            /* binding */
            _burnTokensFailure
          );
        },

        /* harmony export */
        "pauseContract": function pauseContract() {
          return (
            /* binding */
            _pauseContract
          );
        },

        /* harmony export */
        "pauseContractSuccess": function pauseContractSuccess() {
          return (
            /* binding */
            _pauseContractSuccess
          );
        },

        /* harmony export */
        "pauseContractFailure": function pauseContractFailure() {
          return (
            /* binding */
            _pauseContractFailure
          );
        },

        /* harmony export */
        "unpauseContract": function unpauseContract() {
          return (
            /* binding */
            _unpauseContract
          );
        },

        /* harmony export */
        "unpauseContractSuccess": function unpauseContractSuccess() {
          return (
            /* binding */
            _unpauseContractSuccess
          );
        },

        /* harmony export */
        "unpauseContractFailure": function unpauseContractFailure() {
          return (
            /* binding */
            _unpauseContractFailure
          );
        },

        /* harmony export */
        "dfnsTransfer": function dfnsTransfer() {
          return (
            /* binding */
            _dfnsTransfer
          );
        },

        /* harmony export */
        "dfnsTransferSuccess": function dfnsTransferSuccess() {
          return (
            /* binding */
            _dfnsTransferSuccess
          );
        },

        /* harmony export */
        "dfnsTransferFailure": function dfnsTransferFailure() {
          return (
            /* binding */
            _dfnsTransferFailure
          );
        },

        /* harmony export */
        "clearDfnsTxState": function clearDfnsTxState() {
          return (
            /* binding */
            _clearDfnsTxState
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      17562); // ── Admin Balances ─────────────────────────────────────────────────────────────


      var _loadAdminBalances = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Balances');

      var _loadAdminBalancesSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Balances Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _loadAdminBalancesFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Balances Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── Pending Transactions ───────────────────────────────────────────────────────


      var _loadPendingTransactions = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Pending Transactions');

      var _loadPendingTransactionsSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Pending Transactions Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _loadPendingTransactionsFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Pending Transactions Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _approveTransaction = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Approve Transaction', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _approveTransactionSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Approve Transaction Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _approveTransactionFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Approve Transaction Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _rejectTransaction = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Reject Transaction', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _rejectTransactionSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Reject Transaction Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _rejectTransactionFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Reject Transaction Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── Admin Users ────────────────────────────────────────────────────────────────


      var _loadAdminUsers = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Users');

      var _loadAdminUsersSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Users Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _loadAdminUsersFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Users Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── Stablecoin Transfer ────────────────────────────────────────────────────────


      var _createAdminTransfer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Create Transfer', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _createAdminTransferSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Create Transfer Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _createAdminTransferFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Create Transfer Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── DFNS: Wallet ───────────────────────────────────────────────────────────────


      var _loadDfnsWallet = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Load Wallet');

      var _loadDfnsWalletSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Load Wallet Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _loadDfnsWalletFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Load Wallet Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── DFNS: Contract Deploy ──────────────────────────────────────────────────────


      var _deployContract = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Deploy Contract', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _deployContractSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Deploy Contract Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _deployContractFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Deploy Contract Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _pollDeployStatus = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Poll Deploy Status', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _pollDeployStatusSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Poll Deploy Status Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── DFNS: Mint / Burn ──────────────────────────────────────────────────────────


      var _mintTokens = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Mint Tokens', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _mintTokensSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Mint Tokens Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _mintTokensFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Mint Tokens Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _burnTokens = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Burn Tokens', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _burnTokensSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Burn Tokens Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _burnTokensFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Burn Tokens Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── DFNS: Pause / Unpause ──────────────────────────────────────────────────────


      var _pauseContract = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Pause Contract');

      var _pauseContractSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Pause Contract Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _pauseContractFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Pause Contract Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _unpauseContract = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Unpause Contract');

      var _unpauseContractSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Unpause Contract Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _unpauseContractFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Unpause Contract Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)()); // ── DFNS: Transfer ─────────────────────────────────────────────────────────────


      var _dfnsTransfer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Transfer', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _dfnsTransferSuccess = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Transfer Success', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _dfnsTransferFailure = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Transfer Failure', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _clearDfnsTxState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Clear Tx State');
      /***/

    },

    /***/
    36252:
    /*!**********************************************!*\
      !*** ./src/app/store/admin/admin.effects.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminEffects": function AdminEffects() {
          return (
            /* binding */
            _AdminEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      20275);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin.actions */
      56610);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../admin/admin.service */
      28734);

      var _AdminEffects = /*#__PURE__*/_createClass(function _AdminEffects(actions$, adminService) {
        var _this6 = this;

        _classCallCheck(this, _AdminEffects);

        this.actions$ = actions$;
        this.adminService = adminService;
        this.loadAdminBalances$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this6.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalances), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function () {
            return _this6.adminService.getUsersBalances().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              return _admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalancesSuccess({
                users: res.users,
                grandTotal: res.grandTotal
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              var _err$error$message, _err$error;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalancesFailure({
                error: (_err$error$message = err === null || err === void 0 ? void 0 : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) !== null && _err$error$message !== void 0 ? _err$error$message : 'Erro ao carregar saldos.'
              }));
            }));
          }));
        });
        this.loadPendingTransactions$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this6.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactions), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function () {
            return _this6.adminService.getPendingTransactions().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              return _admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactionsSuccess({
                transactions: res.transactions
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              var _err$error$message2, _err$error2;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactionsFailure({
                error: (_err$error$message2 = err === null || err === void 0 ? void 0 : (_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.message) !== null && _err$error$message2 !== void 0 ? _err$error$message2 : 'Erro ao carregar transações pendentes.'
              }));
            }));
          }));
        });
        this.approveTransaction$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this6.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransaction), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function (action) {
            return _this6.adminService.approveTx(action.txId).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function () {
              return _admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransactionSuccess({
                txId: action.txId
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              var _err$error$message3, _err$error3;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransactionFailure({
                txId: action.txId,
                error: (_err$error$message3 = err === null || err === void 0 ? void 0 : (_err$error3 = err.error) === null || _err$error3 === void 0 ? void 0 : _err$error3.message) !== null && _err$error$message3 !== void 0 ? _err$error$message3 : 'Erro ao aprovar transação.'
              }));
            }));
          }));
        });
        this.rejectTransaction$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this6.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransaction), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function (action) {
            return _this6.adminService.rejectTx(action.txId).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function () {
              return _admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransactionSuccess({
                txId: action.txId
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              var _err$error$message4, _err$error4;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransactionFailure({
                txId: action.txId,
                error: (_err$error$message4 = err === null || err === void 0 ? void 0 : (_err$error4 = err.error) === null || _err$error4 === void 0 ? void 0 : _err$error4.message) !== null && _err$error$message4 !== void 0 ? _err$error$message4 : 'Erro ao rejeitar transação.'
              }));
            }));
          }));
        });
        this.loadAdminUsers$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this6.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsers), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function () {
            return _this6.adminService.getUsers().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              return _admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsersSuccess({
                users: res.users
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              var _err$error$message5, _err$error5;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsersFailure({
                error: (_err$error$message5 = err === null || err === void 0 ? void 0 : (_err$error5 = err.error) === null || _err$error5 === void 0 ? void 0 : _err$error5.message) !== null && _err$error$message5 !== void 0 ? _err$error$message5 : 'Erro ao carregar usuários.'
              }));
            }));
          }));
        });
        this.createAdminTransfer$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this6.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransfer), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function (action) {
            return _this6.adminService.createTransfer({
              fromUserId: action.fromUserId,
              toUserId: action.toUserId,
              amountFiat: action.amountFiat
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
              return _admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransferSuccess({
                txId: res.txId,
                amountBrln: res.amountBrln,
                onChain: res.onChain
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
              var _err$error$message6, _err$error6;

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransferFailure({
                error: (_err$error$message6 = err === null || err === void 0 ? void 0 : (_err$error6 = err.error) === null || _err$error6 === void 0 ? void 0 : _err$error6.message) !== null && _err$error$message6 !== void 0 ? _err$error$message6 : 'Erro ao criar transferência.'
              }));
            }));
          }));
        });
      });

      _AdminEffects.ɵfac = function AdminEffects_Factory(t) {
        return new (t || _AdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService));
      };

      _AdminEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
        token: _AdminEffects,
        factory: _AdminEffects.ɵfac
      });
      /***/
    },

    /***/
    93564:
    /*!**********************************************!*\
      !*** ./src/app/store/admin/admin.reducer.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "adminReducer": function adminReducer() {
          return (
            /* binding */
            _adminReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      17562);
      /* harmony import */


      var _admin_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin.state */
      17093);
      /* harmony import */


      var _admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin.actions */
      56610);

      var _adminReducer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_admin_state__WEBPACK_IMPORTED_MODULE_0__.initialAdminState, // ── Balances ────────────────────────────────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminBalances, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminBalancesSuccess, function (state, _ref2) {
        var users = _ref2.users,
            grandTotal = _ref2.grandTotal;
        return _objectSpread(_objectSpread({}, state), {}, {
          users: users,
          grandTotal: grandTotal,
          loading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminBalancesFailure, function (state, _ref3) {
        var error = _ref3.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: error
        });
      }), // ── Pending Transactions ────────────────────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadPendingTransactions, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadPendingTransactionsSuccess, function (state, _ref4) {
        var transactions = _ref4.transactions;
        return _objectSpread(_objectSpread({}, state), {}, {
          pendingTransactions: transactions,
          loading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadPendingTransactionsFailure, function (state, _ref5) {
        var error = _ref5.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: error
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.approveTransactionSuccess, function (state, _ref6) {
        var txId = _ref6.txId;
        return _objectSpread(_objectSpread({}, state), {}, {
          pendingTransactions: state.pendingTransactions.filter(function (tx) {
            return tx.txId !== txId;
          })
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.rejectTransactionSuccess, function (state, _ref7) {
        var txId = _ref7.txId;
        return _objectSpread(_objectSpread({}, state), {}, {
          pendingTransactions: state.pendingTransactions.filter(function (tx) {
            return tx.txId !== txId;
          })
        });
      }), // ── Admin Users ─────────────────────────────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminUsers, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminUsersSuccess, function (state, _ref8) {
        var users = _ref8.users;
        return _objectSpread(_objectSpread({}, state), {}, {
          adminUsers: users,
          loading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminUsersFailure, function (state, _ref9) {
        var error = _ref9.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: error
        });
      }), // ── Transfer ────────────────────────────────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.createAdminTransfer, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          error: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.createAdminTransferSuccess, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.createAdminTransferFailure, function (state, _ref10) {
        var error = _ref10.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: error
        });
      }), // ── DFNS Wallet ─────────────────────────────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadDfnsWallet, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsWalletLoading: true,
          dfnsWalletError: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadDfnsWalletSuccess, function (state, _ref11) {
        var wallet = _ref11.wallet;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsWallet: wallet,
          dfnsWalletLoading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadDfnsWalletFailure, function (state, _ref12) {
        var error = _ref12.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsWalletLoading: false,
          dfnsWalletError: error
        });
      }), // ── DFNS Deploy ─────────────────────────────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deployContract, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxLoading: true,
          dfnsTxError: null,
          dfnsTxId: null,
          dfnsTxStatus: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deployContractSuccess, function (state, _ref13) {
        var txId = _ref13.txId;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxId: txId,
          dfnsTxStatus: 'Broadcasted'
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deployContractFailure, function (state, _ref14) {
        var error = _ref14.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxLoading: false,
          dfnsTxError: error
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.pollDeployStatusSuccess, function (state, _ref15) {
        var txId = _ref15.txId,
            status = _ref15.status,
            contractAddress = _ref15.contractAddress;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxId: txId,
          dfnsTxStatus: status,
          dfnsContractAddress: contractAddress !== null && contractAddress !== void 0 ? contractAddress : state.dfnsContractAddress,
          dfnsTxLoading: status !== 'Confirmed' && status !== 'Failed'
        });
      }), // ── DFNS Mint / Burn / Pause / Transfer ─────────────────────────────────────
      (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.mintTokens, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.burnTokens, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.pauseContract, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.unpauseContract, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.dfnsTransfer, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxLoading: true,
          dfnsTxError: null,
          dfnsTxId: null,
          dfnsTxStatus: null
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.mintTokensSuccess, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.burnTokensSuccess, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.pauseContractSuccess, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.unpauseContractSuccess, function (state, action) {
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxId: action.txId,
          dfnsTxStatus: 'status' in action ? action.status : 'Broadcasted',
          dfnsTxLoading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.dfnsTransferSuccess, function (state, _ref16) {
        var txId = _ref16.txId,
            status = _ref16.status;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxId: txId,
          dfnsTxStatus: status,
          dfnsTxLoading: false
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.mintTokensFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.burnTokensFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.pauseContractFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.unpauseContractFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.dfnsTransferFailure, function (state, _ref17) {
        var error = _ref17.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxLoading: false,
          dfnsTxError: error
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.clearDfnsTxState, function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          dfnsTxId: null,
          dfnsTxStatus: null,
          dfnsTxError: null,
          dfnsTxLoading: false
        });
      }));
      /***/

    },

    /***/
    65486:
    /*!************************************************!*\
      !*** ./src/app/store/admin/admin.selectors.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectAdminState": function selectAdminState() {
          return (
            /* binding */
            _selectAdminState
          );
        },

        /* harmony export */
        "selectAdminUsers": function selectAdminUsers() {
          return (
            /* binding */
            _selectAdminUsers
          );
        },

        /* harmony export */
        "selectGrandTotal": function selectGrandTotal() {
          return (
            /* binding */
            _selectGrandTotal
          );
        },

        /* harmony export */
        "selectPendingTransactions": function selectPendingTransactions() {
          return (
            /* binding */
            _selectPendingTransactions
          );
        },

        /* harmony export */
        "selectAdminUsersList": function selectAdminUsersList() {
          return (
            /* binding */
            _selectAdminUsersList
          );
        },

        /* harmony export */
        "selectAdminLoading": function selectAdminLoading() {
          return (
            /* binding */
            _selectAdminLoading
          );
        },

        /* harmony export */
        "selectAdminError": function selectAdminError() {
          return (
            /* binding */
            _selectAdminError
          );
        },

        /* harmony export */
        "selectDfnsWallet": function selectDfnsWallet() {
          return (
            /* binding */
            _selectDfnsWallet
          );
        },

        /* harmony export */
        "selectDfnsWalletLoading": function selectDfnsWalletLoading() {
          return (
            /* binding */
            _selectDfnsWalletLoading
          );
        },

        /* harmony export */
        "selectDfnsWalletError": function selectDfnsWalletError() {
          return (
            /* binding */
            _selectDfnsWalletError
          );
        },

        /* harmony export */
        "selectDfnsTxId": function selectDfnsTxId() {
          return (
            /* binding */
            _selectDfnsTxId
          );
        },

        /* harmony export */
        "selectDfnsTxStatus": function selectDfnsTxStatus() {
          return (
            /* binding */
            _selectDfnsTxStatus
          );
        },

        /* harmony export */
        "selectDfnsContractAddress": function selectDfnsContractAddress() {
          return (
            /* binding */
            _selectDfnsContractAddress
          );
        },

        /* harmony export */
        "selectDfnsTxLoading": function selectDfnsTxLoading() {
          return (
            /* binding */
            _selectDfnsTxLoading
          );
        },

        /* harmony export */
        "selectDfnsTxError": function selectDfnsTxError() {
          return (
            /* binding */
            _selectDfnsTxError
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      17562);

      var _selectAdminState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('admin');

      var _selectAdminUsers = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.users;
      });

      var _selectGrandTotal = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.grandTotal;
      });

      var _selectPendingTransactions = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.pendingTransactions;
      });

      var _selectAdminUsersList = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.adminUsers;
      });

      var _selectAdminLoading = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.loading;
      });

      var _selectAdminError = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.error;
      }); // DFNS selectors


      var _selectDfnsWallet = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsWallet;
      });

      var _selectDfnsWalletLoading = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsWalletLoading;
      });

      var _selectDfnsWalletError = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsWalletError;
      });

      var _selectDfnsTxId = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsTxId;
      });

      var _selectDfnsTxStatus = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsTxStatus;
      });

      var _selectDfnsContractAddress = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsContractAddress;
      });

      var _selectDfnsTxLoading = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsTxLoading;
      });

      var _selectDfnsTxError = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(_selectAdminState, function (s) {
        return s.dfnsTxError;
      });
      /***/

    },

    /***/
    17093:
    /*!********************************************!*\
      !*** ./src/app/store/admin/admin.state.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialAdminState": function initialAdminState() {
          return (
            /* binding */
            _initialAdminState
          );
        }
        /* harmony export */

      });

      var _initialAdminState = {
        users: [],
        grandTotal: null,
        pendingTransactions: [],
        adminUsers: [],
        dfnsWallet: null,
        dfnsWalletLoading: false,
        dfnsWalletError: null,
        dfnsTxId: null,
        dfnsTxStatus: null,
        dfnsContractAddress: null,
        dfnsTxLoading: false,
        dfnsTxError: null,
        loading: false,
        error: null
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_admin_module_ts-es5.js.map