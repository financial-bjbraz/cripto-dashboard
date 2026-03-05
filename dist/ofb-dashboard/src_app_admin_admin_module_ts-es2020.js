"use strict";
(self["webpackChunkofb_dashboard"] = self["webpackChunkofb_dashboard"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 41618:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": function() { return /* binding */ interval; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 25160);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 32606);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 82867);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 82867:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; }
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 49861);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 99993:
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminDashboardComponent": function() { return /* binding */ AdminDashboardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class AdminDashboardComponent {
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(); };
AdminDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 19, vars: 0, consts: [[1, "admin-dashboard"], [1, "admin-cards"], ["routerLink", "/admin/balances", 1, "admin-card"], [1, "card-icon"], [1, "card-title"], ["routerLink", "/admin/approvals", 1, "admin-card"], ["routerLink", "/admin/transfer", 1, "admin-card"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Saldos dos Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u23F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Aprova\u00E7\u00F5es Pendentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2194\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transfer\u00EAncia de BRLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".admin-dashboard[_ngcontent-%COMP%] { padding: 24px; }\nh2[_ngcontent-%COMP%] { margin-bottom: 24px; color: #1e293b; }\n.admin-cards[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); grid-gap: 16px; gap: 16px; }\n.admin-card[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; align-items: center; grid-gap: 10px; gap: 10px;\n  padding: 24px 16px; background: #fff; border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0,0,0,.1); text-decoration: none; color: #334155;\n  transition: box-shadow .2s, transform .2s;\n}\n.admin-card[_ngcontent-%COMP%]:hover { box-shadow: 0 4px 12px rgba(0,0,0,.15); transform: translateY(-2px); }\n.card-icon[_ngcontent-%COMP%] { font-size: 32px; }\n.card-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixhQUFhLEVBQUU7QUFDbEMsS0FBSyxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDMUMsZUFBZSxhQUFhLEVBQUUsNERBQTRELEVBQUUsY0FBUyxFQUFULFNBQVMsRUFBRTtBQUN2RztFQUNFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxjQUFTLEVBQVQsU0FBUztFQUNyRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7RUFDekQsb0NBQW9DLEVBQUUscUJBQXFCLEVBQUUsY0FBYztFQUMzRSx5Q0FBeUM7QUFDM0M7QUFDQSxvQkFBb0Isc0NBQXNDLEVBQUUsMkJBQTJCLEVBQUU7QUFDekYsYUFBYSxlQUFlLEVBQUU7QUFDOUIsY0FBYyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUiLCJmaWxlIjoiYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tZGFzaGJvYXJkIHsgcGFkZGluZzogMjRweDsgfVxuaDIgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyBjb2xvcjogIzFlMjkzYjsgfVxuLmFkbWluLWNhcmRzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTgwcHgsIDFmcikpOyBnYXA6IDE2cHg7IH1cbi5hZG1pbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLC4xKTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogIzMzNDE1NTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMsIHRyYW5zZm9ybSAuMnM7XG59XG4uYWRtaW4tY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMTUpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbi5jYXJkLWljb24geyBmb250LXNpemU6IDMycHg7IH1cbi5jYXJkLXRpdGxlIHsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiJdfQ== */"] });


/***/ }),

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": function() { return /* binding */ AdminRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 99993);
/* harmony import */ var _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-balances/users-balances.component */ 49019);
/* harmony import */ var _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-approval/transaction-approval.component */ 23297);
/* harmony import */ var _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stablecoin-transfer/stablecoin-transfer.component */ 43286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    { path: '', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardComponent },
    { path: 'balances', component: _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_1__.UsersBalancesComponent },
    { path: 'approvals', component: _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_2__.TransactionApprovalComponent },
    { path: 'transfer', component: _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_3__.StablecoinTransferComponent },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": function() { return /* binding */ AdminModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 20275);
/* harmony import */ var _store_admin_admin_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/admin/admin.reducer */ 93564);
/* harmony import */ var _store_admin_admin_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/admin/admin.effects */ 36252);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 99993);
/* harmony import */ var _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-balances/users-balances.component */ 49019);
/* harmony import */ var _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-approval/transaction-approval.component */ 23297);
/* harmony import */ var _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stablecoin-transfer/stablecoin-transfer.component */ 43286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);














class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature('admin', _store_admin_admin_reducer__WEBPACK_IMPORTED_MODULE_0__.adminReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_store_admin_admin_effects__WEBPACK_IMPORTED_MODULE_1__.AdminEffects]),
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.AdminDashboardComponent,
        _users_balances_users_balances_component__WEBPACK_IMPORTED_MODULE_4__.UsersBalancesComponent,
        _transaction_approval_transaction_approval_component__WEBPACK_IMPORTED_MODULE_5__.TransactionApprovalComponent,
        _stablecoin_transfer_stablecoin_transfer_component__WEBPACK_IMPORTED_MODULE_6__.StablecoinTransferComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsFeatureModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminRoutingModule] }); })();


/***/ }),

/***/ 28734:
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": function() { return /* binding */ AdminService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class AdminService {
    constructor(http) {
        this.http = http;
        this.base = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.bffUrl}/admin`;
    }
    getUsersBalances() {
        return this.http.get(`${this.base}/users/balances`, { withCredentials: true });
    }
    getPendingTransactions() {
        return this.http.get(`${this.base}/transactions/pending`, { withCredentials: true });
    }
    approveTx(txId) {
        return this.http.post(`${this.base}/transactions/${txId}/approve`, {}, { withCredentials: true });
    }
    rejectTx(txId) {
        return this.http.post(`${this.base}/transactions/${txId}/reject`, {}, { withCredentials: true });
    }
    getUsers() {
        return this.http.get(`${this.base}/users`, { withCredentials: true });
    }
    createTransfer(payload) {
        return this.http.post(`${this.base}/transfer`, payload, { withCredentials: true });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43286:
/*!****************************************************************************!*\
  !*** ./src/app/admin/stablecoin-transfer/stablecoin-transfer.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StablecoinTransferComponent": function() { return /* binding */ StablecoinTransferComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/admin/admin.actions */ 56610);
/* harmony import */ var _store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/admin/admin.selectors */ 65486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);









function StablecoinTransferComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const err_r4 = ctx.ngIf;
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
    const u_r13 = ctx.$implicit;
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
    const u_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", u_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", u_r14.email, " ", u_r14.walletAddress ? "\uD83D\uDD17 " + u_r14.walletAddress.slice(0, 8) + "\u2026" : "", " ");
  }
}

function StablecoinTransferComponent_ng_container_5_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Origem e destino n\u00E3o podem ser iguais.");
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
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
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
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function StablecoinTransferComponent_ng_container_5_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r15.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "De (From)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Selecione o usu\u00E1rio de origem");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Selecione o usu\u00E1rio de destino");
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_4_0;
    let tmp_5_0;
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
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713 Transfer\u00EAncia realizada com sucesso!");
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
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r17.reset();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Nova transfer\u00EAncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 3, ctx_r3.successResult.amountBrln, "1.2-2"), " BRLN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.successResult.txId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("On-chain: ", ctx_r3.successResult.onChain ? "Sim" : "N\u00E3o (sem endere\u00E7o de carteira)", "");
  }
}

class StablecoinTransferComponent {
  constructor(fb, store) {
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

  ngOnInit() {
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsers)());
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalances)());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get amountFiat() {
    return Number(this.form.get('amountFiat')?.value ?? 0);
  }

  differentUsersValidator(g) {
    const from = g.get('fromUserId')?.value;
    const to = g.get('toUserId')?.value;
    return from && to && from === to ? {
      sameUser: true
    } : null;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const {
      fromUserId,
      toUserId,
      amountFiat
    } = this.form.value;
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransfer)({
      fromUserId,
      toUserId,
      amountFiat: Number(amountFiat)
    })); // Subscribe once to detect success

    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../store/admin/admin.actions */ 56610)).then(({
      createAdminTransferSuccess
    }) => {
      const {
        ofType
      } = __webpack_require__(/*! @ngrx/effects */ 20275); // Simple approach: watch loading going from true→false

    });
  }

  reset() {
    this.form.reset();
    this.successResult = null;
  }

}

StablecoinTransferComponent.ɵfac = function StablecoinTransferComponent_Factory(t) {
  return new (t || StablecoinTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};

StablecoinTransferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: StablecoinTransferComponent,
  selectors: [["app-stablecoin-transfer"]],
  decls: 8,
  vars: 5,
  consts: [[1, "st-container"], ["class", "error-banner", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["successState", ""], [1, "error-banner"], [3, "formGroup", "ngSubmit"], [1, "field"], ["formControlName", "fromUserId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "toUserId"], ["class", "field-error", 4, "ngIf"], ["type", "number", "formControlName", "amountFiat", "min", "0.01", "step", "0.01", "placeholder", "0,00"], ["class", "conversion", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], [3, "value"], [1, "field-error"], [1, "conversion"], [1, "arrow"], [1, "success-panel"], [3, "click"]],
  template: function StablecoinTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Transfer\u00EAncia de Stablecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StablecoinTransferComponent_div_3_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StablecoinTransferComponent_ng_container_5_Template, 32, 20, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StablecoinTransferComponent_ng_template_6_Template, 16, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

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

/***/ }),

/***/ 23297:
/*!******************************************************************************!*\
  !*** ./src/app/admin/transaction-approval/transaction-approval.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionApprovalComponent": function() { return /* binding */ TransactionApprovalComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41618);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/admin/admin.actions */ 56610);
/* harmony import */ var _store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/admin/admin.selectors */ 65486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function TransactionApprovalComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
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
    const err_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](err_r7);
  }
}

function TransactionApprovalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " da transa\u00E7\u00E3o?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_div_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r8.cancelConfirm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_div_10_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r10.confirmingAction === "approve" ? ctx_r10.confirmApprove(ctx_r10.confirmingTxId) : ctx_r10.confirmReject(ctx_r10.confirmingTxId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.confirmingAction === "approve" ? "aprova\u00E7\u00E3o" : "rejei\u00E7\u00E3o");
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
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_table_13_tr_16_ng_container_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const tx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r16.requestConfirm(tx_r12.txId, "approve");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2713 Aprovar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionApprovalComponent_table_13_tr_16_ng_container_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const tx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
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
    const tx_r12 = ctx.$implicit;

    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);

    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Usu\u00E1rio");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "A\u00E7\u00F5es");
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
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 1, ctx_r4.transactions$));
  }
}

function TransactionApprovalComponent_ng_template_15_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nenhuma transa\u00E7\u00E3o pendente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function TransactionApprovalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TransactionApprovalComponent_ng_template_15_div_0_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r6.loading$));
  }
}

class TransactionApprovalComponent {
  constructor(store) {
    this.store = store;
    this.transactions$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPendingTransactions);
    this.loading$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminLoading);
    this.error$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminError);
    this.confirmingTxId = null;
    this.confirmingAction = null;
    this.processingTxId = null;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  ngOnInit() {
    this.load();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(15000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load() {
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactions)());
  }

  requestConfirm(txId, action) {
    this.confirmingTxId = txId;
    this.confirmingAction = action;
  }

  cancelConfirm() {
    this.confirmingTxId = null;
    this.confirmingAction = null;
  }

  confirm() {
    if (!this.confirmingTxId || !this.confirmingAction) return;
    const txId = this.confirmingTxId;
    this.processingTxId = txId;
    this.confirmingTxId = null;
    this.confirmingAction = null;

    if (this.confirmingAction === 'approve' || this.processingTxId) {// re-read action from state since we cleared it
    }

    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransaction)({
      txId
    }));
    setTimeout(() => {
      if (this.processingTxId === txId) this.processingTxId = null;
    }, 3000);
  }

  confirmApprove(txId) {
    this.processingTxId = txId;
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransaction)({
      txId
    }));
    setTimeout(() => {
      if (this.processingTxId === txId) this.processingTxId = null;
    }, 3000);
  }

  confirmReject(txId) {
    this.processingTxId = txId;
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransaction)({
      txId
    }));
    setTimeout(() => {
      if (this.processingTxId === txId) this.processingTxId = null;
    }, 3000);
  }

  typeLabel(type) {
    return type === 'buy' ? 'Compra' : type === 'sell' ? 'Venda' : 'Transferência';
  }

}

TransactionApprovalComponent.ɵfac = function TransactionApprovalComponent_Factory(t) {
  return new (t || TransactionApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};

TransactionApprovalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TransactionApprovalComponent,
  selectors: [["app-transaction-approval"]],
  decls: 17,
  vars: 14,
  consts: [[1, "ta-container"], [1, "ta-header"], ["class", "count", 4, "ngIf"], [1, "btn-refresh", 3, "click"], ["class", "error-banner", 4, "ngIf"], ["class", "confirm-overlay", 4, "ngIf"], ["class", "loading-bar", 4, "ngIf"], ["class", "ta-table", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "count"], [1, "error-banner"], [1, "confirm-overlay"], [1, "confirm-box"], [1, "confirm-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-ok", 3, "click"], [1, "loading-bar"], [1, "ta-table"], [3, "processing", 4, "ngFor", "ngForOf"], [1, "mono"], [1, "actions"], [4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "btn-approve", 3, "click"], [1, "btn-reject", 3, "click"], [1, "spinner"], ["class", "empty-state", 4, "ngIf"], [1, "empty-state"]],
  template: function TransactionApprovalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Transa\u00E7\u00F5es Pendentes ");
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
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);

      let tmp_0_0;
      let tmp_4_0;
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

/***/ }),

/***/ 49019:
/*!******************************************************************!*\
  !*** ./src/app/admin/users-balances/users-balances.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersBalancesComponent": function() { return /* binding */ UsersBalancesComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41618);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/admin/admin.actions */ 56610);
/* harmony import */ var _store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/admin/admin.selectors */ 65486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








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
    const gt_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, gt_r4.fiatTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 5, gt_r4.brlnTotal, "1.2-2"), " BRLN");
  }
}

function UsersBalancesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersBalancesComponent_div_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r6.load();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tentar novamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const err_r5 = ctx.ngIf;
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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
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
    const u_r12 = ctx.$implicit;
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nenhum usu\u00E1rio encontrado.");
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
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r3.users$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r3.users$)) == null ? null : tmp_1_0.length) === 0);
  }
}

class UsersBalancesComponent {
  constructor(store) {
    this.store = store;
    this.users$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminUsers);
    this.grandTotal$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectGrandTotal);
    this.loading$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminLoading);
    this.error$ = this.store.select(_store_admin_admin_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAdminError);
    this.skeletonRows = [1, 2, 3];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  ngOnInit() {
    this.load();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load() {
    this.store.dispatch((0,_store_admin_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalances)());
  }

}

UsersBalancesComponent.ɵfac = function UsersBalancesComponent_Factory(t) {
  return new (t || UsersBalancesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};

UsersBalancesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UsersBalancesComponent,
  selectors: [["app-users-balances"]],
  decls: 24,
  vars: 12,
  consts: [[1, "ub-container"], [1, "ub-header"], [1, "btn-refresh", 3, "click"], ["class", "grand-total", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], [1, "ub-table"], [4, "ngIf"], [1, "grand-total"], [1, "error-banner"], [3, "click"], ["class", "skeleton-row", 4, "ngFor", "ngForOf"], [1, "skeleton-row"], [1, "skeleton"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "empty"]],
  template: function UsersBalancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Saldos dos Usu\u00E1rios");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Usu\u00E1rio");
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

/***/ }),

/***/ 56610:
/*!**********************************************!*\
  !*** ./src/app/store/admin/admin.actions.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAdminBalances": function() { return /* binding */ loadAdminBalances; },
/* harmony export */   "loadAdminBalancesSuccess": function() { return /* binding */ loadAdminBalancesSuccess; },
/* harmony export */   "loadAdminBalancesFailure": function() { return /* binding */ loadAdminBalancesFailure; },
/* harmony export */   "loadPendingTransactions": function() { return /* binding */ loadPendingTransactions; },
/* harmony export */   "loadPendingTransactionsSuccess": function() { return /* binding */ loadPendingTransactionsSuccess; },
/* harmony export */   "loadPendingTransactionsFailure": function() { return /* binding */ loadPendingTransactionsFailure; },
/* harmony export */   "approveTransaction": function() { return /* binding */ approveTransaction; },
/* harmony export */   "approveTransactionSuccess": function() { return /* binding */ approveTransactionSuccess; },
/* harmony export */   "approveTransactionFailure": function() { return /* binding */ approveTransactionFailure; },
/* harmony export */   "rejectTransaction": function() { return /* binding */ rejectTransaction; },
/* harmony export */   "rejectTransactionSuccess": function() { return /* binding */ rejectTransactionSuccess; },
/* harmony export */   "rejectTransactionFailure": function() { return /* binding */ rejectTransactionFailure; },
/* harmony export */   "loadAdminUsers": function() { return /* binding */ loadAdminUsers; },
/* harmony export */   "loadAdminUsersSuccess": function() { return /* binding */ loadAdminUsersSuccess; },
/* harmony export */   "loadAdminUsersFailure": function() { return /* binding */ loadAdminUsersFailure; },
/* harmony export */   "createAdminTransfer": function() { return /* binding */ createAdminTransfer; },
/* harmony export */   "createAdminTransferSuccess": function() { return /* binding */ createAdminTransferSuccess; },
/* harmony export */   "createAdminTransferFailure": function() { return /* binding */ createAdminTransferFailure; },
/* harmony export */   "loadDfnsWallet": function() { return /* binding */ loadDfnsWallet; },
/* harmony export */   "loadDfnsWalletSuccess": function() { return /* binding */ loadDfnsWalletSuccess; },
/* harmony export */   "loadDfnsWalletFailure": function() { return /* binding */ loadDfnsWalletFailure; },
/* harmony export */   "deployContract": function() { return /* binding */ deployContract; },
/* harmony export */   "deployContractSuccess": function() { return /* binding */ deployContractSuccess; },
/* harmony export */   "deployContractFailure": function() { return /* binding */ deployContractFailure; },
/* harmony export */   "pollDeployStatus": function() { return /* binding */ pollDeployStatus; },
/* harmony export */   "pollDeployStatusSuccess": function() { return /* binding */ pollDeployStatusSuccess; },
/* harmony export */   "mintTokens": function() { return /* binding */ mintTokens; },
/* harmony export */   "mintTokensSuccess": function() { return /* binding */ mintTokensSuccess; },
/* harmony export */   "mintTokensFailure": function() { return /* binding */ mintTokensFailure; },
/* harmony export */   "burnTokens": function() { return /* binding */ burnTokens; },
/* harmony export */   "burnTokensSuccess": function() { return /* binding */ burnTokensSuccess; },
/* harmony export */   "burnTokensFailure": function() { return /* binding */ burnTokensFailure; },
/* harmony export */   "pauseContract": function() { return /* binding */ pauseContract; },
/* harmony export */   "pauseContractSuccess": function() { return /* binding */ pauseContractSuccess; },
/* harmony export */   "pauseContractFailure": function() { return /* binding */ pauseContractFailure; },
/* harmony export */   "unpauseContract": function() { return /* binding */ unpauseContract; },
/* harmony export */   "unpauseContractSuccess": function() { return /* binding */ unpauseContractSuccess; },
/* harmony export */   "unpauseContractFailure": function() { return /* binding */ unpauseContractFailure; },
/* harmony export */   "dfnsTransfer": function() { return /* binding */ dfnsTransfer; },
/* harmony export */   "dfnsTransferSuccess": function() { return /* binding */ dfnsTransferSuccess; },
/* harmony export */   "dfnsTransferFailure": function() { return /* binding */ dfnsTransferFailure; },
/* harmony export */   "clearDfnsTxState": function() { return /* binding */ clearDfnsTxState; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

// ── Admin Balances ─────────────────────────────────────────────────────────────
const loadAdminBalances = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Balances');
const loadAdminBalancesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Balances Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadAdminBalancesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Balances Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── Pending Transactions ───────────────────────────────────────────────────────
const loadPendingTransactions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Pending Transactions');
const loadPendingTransactionsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Pending Transactions Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPendingTransactionsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Pending Transactions Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const approveTransaction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Approve Transaction', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const approveTransactionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Approve Transaction Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const approveTransactionFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Approve Transaction Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const rejectTransaction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Reject Transaction', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const rejectTransactionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Reject Transaction Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const rejectTransactionFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Reject Transaction Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── Admin Users ────────────────────────────────────────────────────────────────
const loadAdminUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Users');
const loadAdminUsersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Users Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadAdminUsersFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Load Users Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── Stablecoin Transfer ────────────────────────────────────────────────────────
const createAdminTransfer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Create Transfer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createAdminTransferSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Create Transfer Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const createAdminTransferFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] Create Transfer Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── DFNS: Wallet ───────────────────────────────────────────────────────────────
const loadDfnsWallet = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Load Wallet');
const loadDfnsWalletSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Load Wallet Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadDfnsWalletFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Load Wallet Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── DFNS: Contract Deploy ──────────────────────────────────────────────────────
const deployContract = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Deploy Contract', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deployContractSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Deploy Contract Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deployContractFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Deploy Contract Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const pollDeployStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Poll Deploy Status', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const pollDeployStatusSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Poll Deploy Status Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── DFNS: Mint / Burn ──────────────────────────────────────────────────────────
const mintTokens = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Mint Tokens', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const mintTokensSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Mint Tokens Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const mintTokensFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Mint Tokens Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const burnTokens = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Burn Tokens', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const burnTokensSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Burn Tokens Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const burnTokensFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Burn Tokens Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── DFNS: Pause / Unpause ──────────────────────────────────────────────────────
const pauseContract = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Pause Contract');
const pauseContractSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Pause Contract Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const pauseContractFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Pause Contract Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unpauseContract = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Unpause Contract');
const unpauseContractSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Unpause Contract Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const unpauseContractFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Unpause Contract Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ── DFNS: Transfer ─────────────────────────────────────────────────────────────
const dfnsTransfer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Transfer', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const dfnsTransferSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Transfer Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const dfnsTransferFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Transfer Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearDfnsTxState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dfns] Clear Tx State');


/***/ }),

/***/ 36252:
/*!**********************************************!*\
  !*** ./src/app/store/admin/admin.effects.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminEffects": function() { return /* binding */ AdminEffects; }
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 20275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _admin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.actions */ 56610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/admin.service */ 28734);







class AdminEffects {
    constructor(actions$, adminService) {
        this.actions$ = actions$;
        this.adminService = adminService;
        this.loadAdminBalances$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalances), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.adminService.getUsersBalances().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => _admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalancesSuccess({ users: res.users, grandTotal: res.grandTotal })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminBalancesFailure({
            error: err?.error?.message ?? 'Erro ao carregar saldos.',
        })))))));
        this.loadPendingTransactions$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.adminService.getPendingTransactions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => _admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactionsSuccess({ transactions: res.transactions })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadPendingTransactionsFailure({
            error: err?.error?.message ?? 'Erro ao carregar transações pendentes.',
        })))))));
        this.approveTransaction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransaction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.adminService.approveTx(action.txId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => _admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransactionSuccess({ txId: action.txId })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.approveTransactionFailure({
            txId: action.txId,
            error: err?.error?.message ?? 'Erro ao aprovar transação.',
        })))))));
        this.rejectTransaction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransaction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.adminService.rejectTx(action.txId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => _admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransactionSuccess({ txId: action.txId })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.rejectTransactionFailure({
            txId: action.txId,
            error: err?.error?.message ?? 'Erro ao rejeitar transação.',
        })))))));
        this.loadAdminUsers$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.adminService.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => _admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsersSuccess({ users: res.users })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.loadAdminUsersFailure({
            error: err?.error?.message ?? 'Erro ao carregar usuários.',
        })))))));
        this.createAdminTransfer$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransfer), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.adminService.createTransfer({
            fromUserId: action.fromUserId,
            toUserId: action.toUserId,
            amountFiat: action.amountFiat,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => _admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransferSuccess({
            txId: res.txId,
            amountBrln: res.amountBrln,
            onChain: res.onChain,
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_admin_actions__WEBPACK_IMPORTED_MODULE_0__.createAdminTransferFailure({
            error: err?.error?.message ?? 'Erro ao criar transferência.',
        })))))));
    }
}
AdminEffects.ɵfac = function AdminEffects_Factory(t) { return new (t || AdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService)); };
AdminEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AdminEffects, factory: AdminEffects.ɵfac });


/***/ }),

/***/ 93564:
/*!**********************************************!*\
  !*** ./src/app/store/admin/admin.reducer.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adminReducer": function() { return /* binding */ adminReducer; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var _admin_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.state */ 17093);
/* harmony import */ var _admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.actions */ 56610);



const adminReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_admin_state__WEBPACK_IMPORTED_MODULE_0__.initialAdminState, 
// ── Balances ────────────────────────────────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminBalances, state => ({ ...state, loading: true, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminBalancesSuccess, (state, { users, grandTotal }) => ({
    ...state, users, grandTotal, loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminBalancesFailure, (state, { error }) => ({
    ...state, loading: false, error,
})), 
// ── Pending Transactions ────────────────────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadPendingTransactions, state => ({ ...state, loading: true, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadPendingTransactionsSuccess, (state, { transactions }) => ({
    ...state, pendingTransactions: transactions, loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadPendingTransactionsFailure, (state, { error }) => ({
    ...state, loading: false, error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.approveTransactionSuccess, (state, { txId }) => ({
    ...state,
    pendingTransactions: state.pendingTransactions.filter(tx => tx.txId !== txId),
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.rejectTransactionSuccess, (state, { txId }) => ({
    ...state,
    pendingTransactions: state.pendingTransactions.filter(tx => tx.txId !== txId),
})), 
// ── Admin Users ─────────────────────────────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminUsers, state => ({ ...state, loading: true, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminUsersSuccess, (state, { users }) => ({
    ...state, adminUsers: users, loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadAdminUsersFailure, (state, { error }) => ({
    ...state, loading: false, error,
})), 
// ── Transfer ────────────────────────────────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.createAdminTransfer, state => ({ ...state, loading: true, error: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.createAdminTransferSuccess, state => ({ ...state, loading: false })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.createAdminTransferFailure, (state, { error }) => ({
    ...state, loading: false, error,
})), 
// ── DFNS Wallet ─────────────────────────────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadDfnsWallet, state => ({ ...state, dfnsWalletLoading: true, dfnsWalletError: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadDfnsWalletSuccess, (state, { wallet }) => ({
    ...state, dfnsWallet: wallet, dfnsWalletLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.loadDfnsWalletFailure, (state, { error }) => ({
    ...state, dfnsWalletLoading: false, dfnsWalletError: error,
})), 
// ── DFNS Deploy ─────────────────────────────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deployContract, state => ({
    ...state, dfnsTxLoading: true, dfnsTxError: null, dfnsTxId: null, dfnsTxStatus: null,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deployContractSuccess, (state, { txId }) => ({
    ...state, dfnsTxId: txId, dfnsTxStatus: 'Broadcasted',
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.deployContractFailure, (state, { error }) => ({
    ...state, dfnsTxLoading: false, dfnsTxError: error,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.pollDeployStatusSuccess, (state, { txId, status, contractAddress }) => ({
    ...state,
    dfnsTxId: txId,
    dfnsTxStatus: status,
    dfnsContractAddress: contractAddress ?? state.dfnsContractAddress,
    dfnsTxLoading: status !== 'Confirmed' && status !== 'Failed',
})), 
// ── DFNS Mint / Burn / Pause / Transfer ─────────────────────────────────────
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.mintTokens, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.burnTokens, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.pauseContract, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.unpauseContract, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.dfnsTransfer, state => ({ ...state, dfnsTxLoading: true, dfnsTxError: null, dfnsTxId: null, dfnsTxStatus: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.mintTokensSuccess, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.burnTokensSuccess, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.pauseContractSuccess, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.unpauseContractSuccess, (state, action) => ({
    ...state, dfnsTxId: action.txId, dfnsTxStatus: 'status' in action ? action.status : 'Broadcasted', dfnsTxLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.dfnsTransferSuccess, (state, { txId, status }) => ({
    ...state, dfnsTxId: txId, dfnsTxStatus: status, dfnsTxLoading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.mintTokensFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.burnTokensFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.pauseContractFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.unpauseContractFailure, _admin_actions__WEBPACK_IMPORTED_MODULE_1__.dfnsTransferFailure, (state, { error }) => ({ ...state, dfnsTxLoading: false, dfnsTxError: error })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_admin_actions__WEBPACK_IMPORTED_MODULE_1__.clearDfnsTxState, state => ({
    ...state, dfnsTxId: null, dfnsTxStatus: null, dfnsTxError: null, dfnsTxLoading: false,
})));


/***/ }),

/***/ 65486:
/*!************************************************!*\
  !*** ./src/app/store/admin/admin.selectors.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAdminState": function() { return /* binding */ selectAdminState; },
/* harmony export */   "selectAdminUsers": function() { return /* binding */ selectAdminUsers; },
/* harmony export */   "selectGrandTotal": function() { return /* binding */ selectGrandTotal; },
/* harmony export */   "selectPendingTransactions": function() { return /* binding */ selectPendingTransactions; },
/* harmony export */   "selectAdminUsersList": function() { return /* binding */ selectAdminUsersList; },
/* harmony export */   "selectAdminLoading": function() { return /* binding */ selectAdminLoading; },
/* harmony export */   "selectAdminError": function() { return /* binding */ selectAdminError; },
/* harmony export */   "selectDfnsWallet": function() { return /* binding */ selectDfnsWallet; },
/* harmony export */   "selectDfnsWalletLoading": function() { return /* binding */ selectDfnsWalletLoading; },
/* harmony export */   "selectDfnsWalletError": function() { return /* binding */ selectDfnsWalletError; },
/* harmony export */   "selectDfnsTxId": function() { return /* binding */ selectDfnsTxId; },
/* harmony export */   "selectDfnsTxStatus": function() { return /* binding */ selectDfnsTxStatus; },
/* harmony export */   "selectDfnsContractAddress": function() { return /* binding */ selectDfnsContractAddress; },
/* harmony export */   "selectDfnsTxLoading": function() { return /* binding */ selectDfnsTxLoading; },
/* harmony export */   "selectDfnsTxError": function() { return /* binding */ selectDfnsTxError; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 17562);

const selectAdminState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('admin');
const selectAdminUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.users);
const selectGrandTotal = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.grandTotal);
const selectPendingTransactions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.pendingTransactions);
const selectAdminUsersList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.adminUsers);
const selectAdminLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.loading);
const selectAdminError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.error);
// DFNS selectors
const selectDfnsWallet = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsWallet);
const selectDfnsWalletLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsWalletLoading);
const selectDfnsWalletError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsWalletError);
const selectDfnsTxId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsTxId);
const selectDfnsTxStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsTxStatus);
const selectDfnsContractAddress = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsContractAddress);
const selectDfnsTxLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsTxLoading);
const selectDfnsTxError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAdminState, s => s.dfnsTxError);


/***/ }),

/***/ 17093:
/*!********************************************!*\
  !*** ./src/app/store/admin/admin.state.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialAdminState": function() { return /* binding */ initialAdminState; }
/* harmony export */ });
const initialAdminState = {
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
    error: null,
};


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts-es2020.js.map