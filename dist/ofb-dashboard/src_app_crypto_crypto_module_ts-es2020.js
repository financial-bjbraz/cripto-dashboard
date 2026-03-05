"use strict";
(self["webpackChunkofb_dashboard"] = self["webpackChunkofb_dashboard"] || []).push([["src_app_crypto_crypto_module_ts"],{

/***/ 80639:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": function() { return /* binding */ debounceTime; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 71003);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 32606);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 78737:
/*!********************************************!*\
  !*** ./src/app/crypto/crypto.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoComponent": function() { return /* binding */ CryptoComponent; }
/* harmony export */ });
/* harmony import */ var _Users_abraz_projetos_cripto_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.service */ 63829);
/* harmony import */ var _coinmarketcap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coinmarketcap.service */ 28404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);









function CryptoComponent_small_344_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r0.getNetworkName(), ") ");
  }
}

function CryptoComponent_span_346_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_span_347_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.formatUSD(ctx_r2.portfolioBalanceUSD), " ");
  }
}

function CryptoComponent_span_348_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_ng_container_352_tr_1_ng_container_1_ng_container_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const token_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u2248 ", ctx_r26.formatUSD(ctx_r26.getTokenUSDValue(token_r25)), " ");
  }
}

function CryptoComponent_ng_container_352_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CryptoComponent_ng_container_352_tr_1_ng_container_1_ng_container_1_span_7_Template, 2, 1, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const token_r25 = ctx.ngIf;
    const col_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-sm-none", col_r22 === 2)("d-md-table-cell", col_r22 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, token_r25.balance, "1.0-4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", token_r25.name, " ", token_r25.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.getTokenUSDValue(token_r25) > 0);
  }
}

function CryptoComponent_ng_container_352_tr_1_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-sm-none", col_r22 === 2)("d-md-table-cell", col_r22 === 2);
  }
}

function CryptoComponent_ng_container_352_tr_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CryptoComponent_ng_container_352_tr_1_ng_container_1_ng_container_1_Template, 8, 11, "ng-container", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CryptoComponent_ng_container_352_tr_1_ng_container_1_td_2_Template, 3, 4, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const col_r22 = ctx.$implicit;
    const row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.walletTokens[row_r20 * 3 + col_r22]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r21.walletTokens[row_r20 * 3 + col_r22]);
  }
}

const _c0 = function () {
  return [0, 1, 2];
};

function CryptoComponent_ng_container_352_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CryptoComponent_ng_container_352_tr_1_ng_container_1_Template, 3, 2, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}

const _c1 = function () {
  return [0, 1];
};

function CryptoComponent_ng_container_352_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CryptoComponent_ng_container_352_tr_1_Template, 2, 2, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
  }
}

function CryptoComponent_ng_container_353_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Loading tokens... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_ng_container_353_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Connect your wallet to see token balances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_ng_container_353_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No tokens found on this address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_ng_container_353_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CryptoComponent_ng_container_353_span_3_Template, 3, 0, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CryptoComponent_ng_container_353_span_4_Template, 2, 0, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CryptoComponent_ng_container_353_span_5_Template, 2, 0, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.walletLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.walletConnected && !ctx_r5.walletLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.walletConnected && !ctx_r5.walletLoading && ctx_r5.walletTokens.length === 0);
  }
}

function CryptoComponent_button_368_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_button_368_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r34.toggleWalletDropdown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r6.isConnecting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.isConnecting ? "Connecting..." : "Connect Wallet");
  }
}

function CryptoComponent_button_369_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00B7 ", ctx_r36.getNetworkName(), "");
  }
}

function CryptoComponent_button_369_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_button_369_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r37.toggleWalletDropdown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CryptoComponent_button_369_span_3_Template, 2, 1, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.getShortAddress(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.getNetworkName());
  }
}

function CryptoComponent_div_370_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.walletError, " ");
  }
}

function CryptoComponent_small_420_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_span_421_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.listingsError);
  }
}

function CryptoComponent_ng_container_422_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const coin_r39 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r39.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.formatPrice(coin_r39.quote.USD.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r11.isPriceUp(coin_r39.quote.USD.percent_change_24h) ? "trending-up" : "trending-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 5, coin_r39.quote.USD.percent_change_24h, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r11.isPriceUp(coin_r39.quote.USD.percent_change_24h) ? "os-icon-arrow-up6" : "os-icon-arrow-down6");
  }
}

function CryptoComponent_ng_container_423_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c2 = function () {
  return [1, 2, 3, 4, 5, 6];
};

function CryptoComponent_ng_container_423_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CryptoComponent_ng_container_423_div_1_Template, 4, 0, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c2));
  }
}

function CryptoComponent_div_437_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Searching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_div_438_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Set your API key in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "src/environments/environment.ts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u2014 coinMarketCapApiKey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r14.searchError, " ");
  }
}

function CryptoComponent_div_439_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const coin_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r43.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r43.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r42.formatPrice(coin_r43.quote.USD.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r42.isPriceUp(coin_r43.quote.USD.percent_change_24h) ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r42.isPriceUp(coin_r43.quote.USD.percent_change_24h) ? "os-icon-arrow-up6" : "os-icon-arrow-down6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 8, coin_r43.quote.USD.percent_change_24h, "1.2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r42.formatMarketCap(coin_r43.quote.USD.market_cap));
  }
}

function CryptoComponent_div_439_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Price (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Market Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CryptoComponent_div_439_tr_17_Template, 19, 11, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r15.searchResults);
  }
}

function CryptoComponent_div_440_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const coin_r45 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r45.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r45.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coin_r45.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r44.formatPrice(coin_r45.quote.USD.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r44.isPriceUp(coin_r45.quote.USD.percent_change_24h) ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 9, coin_r45.quote.USD.percent_change_24h, "1.2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r44.isPriceUp(coin_r45.quote.USD.percent_change_7d) ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 12, coin_r45.quote.USD.percent_change_7d, "1.2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r44.formatMarketCap(coin_r45.quote.USD.market_cap));
  }
}

function CryptoComponent_div_440_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Top 10 by Market Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Price (USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "24h %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "7d %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Market Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CryptoComponent_div_440_tr_21_Template, 22, 15, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_440_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r46.loadTopListings();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Refresh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r16.topListings);
  }
}

function CryptoComponent_div_676_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Connecting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CryptoComponent_div_676_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_676_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r49.closeDropdown();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_676_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Connect a Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_676_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r52.closeDropdown();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_676_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r53.connectWalletConnect();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "WalletConnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_676_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r54.connectMetaMask();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "MetaMask");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Trust");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Coinbase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Rainbow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Phantom");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Ledger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "svg", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "circle", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "circle", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "circle", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_676_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r55.connectWalletConnect();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "svg", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "rect", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "rect", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "rect", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "rect", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "All Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "400+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "svg", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "path", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "a", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "svg", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "circle", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "path", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " What is a Wallet? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Powered by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Reown");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, CryptoComponent_div_676_div_75_Template, 4, 0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r17.isConnecting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r17.isConnecting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r17.isConnecting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.isConnecting);
  }
}

function CryptoComponent_div_677_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u00B7 ", ctx_r56.getNetworkName(), "");
  }
}

function CryptoComponent_div_677_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Portfolio: ", ctx_r57.formatUSD(ctx_r57.portfolioBalanceUSD), " ");
  }
}

function CryptoComponent_div_677_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_677_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r58.closeDropdown();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_677_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_677_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r61.closeDropdown();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Connected via ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "strong", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CryptoComponent_div_677_span_13_Template, 2, 1, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CryptoComponent_div_677_div_16_Template, 2, 1, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_div_677_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r62.disconnectWallet();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "svg", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "path", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Disconnect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.walletProviderType === "metamask" ? "MetaMask" : "WalletConnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.getNetworkName());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.walletAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.portfolioBalanceUSD > 0);
  }
}

class CryptoComponent {
  constructor(walletService, cmcService) {
    this.walletService = walletService;
    this.cmcService = cmcService; // ── Wallet state ────────────────────────────────────────────────────────────

    this.walletAddress = null;
    this.walletConnected = false;
    this.walletChainId = null;
    this.walletTokens = [];
    this.walletLoading = false;
    this.walletProviderType = null;
    this.walletError = null;
    this.isConnecting = false;
    this.showWalletDropdown = false;
    /** Total portfolio USD value computed from wallet tokens × CMC prices */

    this.portfolioBalanceUSD = 0; // ── CoinMarketCap state ─────────────────────────────────────────────────────

    this.searchQuery = '';
    this.searchResults = [];
    this.topListings = [];
    this.isLoadingSearch = false;
    this.isLoadingListings = false;
    this.searchError = null;
    this.listingsError = null;
    /** CMC price map symbol → USD price (built from topListings) */

    this.priceMap = {};
    this.searchSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }

  ngOnInit() {
    // Subscribe to wallet state
    this.walletService.address$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(a => this.walletAddress = a);
    this.walletService.connected$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(c => this.walletConnected = c);
    this.walletService.chainId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(id => this.walletChainId = id);
    this.walletService.loading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(l => this.walletLoading = l);
    this.walletService.providerType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(t => this.walletProviderType = t); // Recompute portfolio whenever tokens or prices change

    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.walletService.tokens$, this.walletService.loading$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(([tokens]) => {
      this.walletTokens = tokens;
      this.computePortfolio();
    }); // Debounced CMC symbol search

    this.searchSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(query => {
      if (!query.trim()) {
        this.searchResults = [];
        this.isLoadingSearch = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
      }

      this.isLoadingSearch = true;
      this.searchError = null;
      return this.cmcService.searchBySymbol(query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
        this.searchError = 'Failed to fetch. Check your API key.';
        this.isLoadingSearch = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(results => {
      this.isLoadingSearch = false;
      if (results) this.searchResults = results;
    });
    this.loadTopListings();
  }

  loadTopListings() {
    this.isLoadingListings = true;
    this.listingsError = null;
    this.cmcService.getListings(20).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
      this.listingsError = 'Failed to load listings.';
      this.isLoadingListings = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]);
    })).subscribe(data => {
      this.isLoadingListings = false;
      this.topListings = data; // Build price map for portfolio calculation

      this.priceMap = {};

      for (const coin of data) {
        this.priceMap[coin.symbol.toUpperCase()] = coin.quote.USD.price;
      }

      this.computePortfolio();
    });
  }

  computePortfolio() {
    if (!this.walletTokens.length) {
      this.portfolioBalanceUSD = 0;
      return;
    }

    let total = 0;

    for (const t of this.walletTokens) {
      const price = this.priceMap[t.symbol.toUpperCase()] ?? 0;
      total += t.balance * price;
    }

    this.portfolioBalanceUSD = total;
  } // ── Wallet UI ───────────────────────────────────────────────────────────────


  toggleWalletDropdown(event) {
    event.stopPropagation();
    this.showWalletDropdown = !this.showWalletDropdown;
    this.walletError = null;
  }

  closeDropdown() {
    this.showWalletDropdown = false;
  }

  connectMetaMask() {
    var _this = this;

    return (0,_Users_abraz_projetos_cripto_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.showWalletDropdown = false;
      _this.isConnecting = true;
      _this.walletError = null;

      try {
        yield _this.walletService.connectMetaMask();
      } catch (err) {
        _this.walletError = err?.message || 'MetaMask connection failed';
      } finally {
        _this.isConnecting = false;
      }
    })();
  }

  connectWalletConnect() {
    var _this2 = this;

    return (0,_Users_abraz_projetos_cripto_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.showWalletDropdown = false;
      _this2.isConnecting = true;
      _this2.walletError = null;

      try {
        yield _this2.walletService.connectWalletConnect();
      } catch (err) {
        _this2.walletError = err?.message || 'WalletConnect connection failed';
      } finally {
        _this2.isConnecting = false;
      }
    })();
  }

  disconnectWallet() {
    this.walletService.disconnect();
    this.walletError = null;
    this.showWalletDropdown = false;
  }

  getShortAddress() {
    return this.walletService.getShortAddress(this.walletAddress);
  }

  getNetworkName() {
    return this.walletService.getNetworkName(this.walletChainId);
  }

  getTokenUSDValue(token) {
    const price = this.priceMap[token.symbol.toUpperCase()] ?? 0;
    return token.balance * price;
  } // ── Crypto search helpers ────────────────────────────────────────────────────


  onSearch(query) {
    this.searchQuery = query;
    this.searchSubject$.next(query);
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
    this.searchError = null;
  }

  formatPrice(price) {
    if (price >= 1) return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 4,
      maximumFractionDigits: 6
    });
  }

  formatUSD(value) {
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  formatMarketCap(value) {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  }

  isPriceUp(change) {
    return change >= 0;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

CryptoComponent.ɵfac = function CryptoComponent_Factory(t) {
  return new (t || CryptoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_1__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_coinmarketcap_service__WEBPACK_IMPORTED_MODULE_2__.CoinMarketCapService));
};

CryptoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CryptoComponent,
  selectors: [["app-crypto"]],
  hostBindings: function CryptoComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_click_HostBindingHandler() {
        return ctx.closeDropdown();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    }
  },
  decls: 679,
  vars: 24,
  consts: [[1, "all-wrapper", "with-side-panel", "solid-bg-all"], [1, "search-with-suggestions-w"], [1, "search-with-suggestions-modal"], [1, "element-search"], ["placeholder", "Start typing to search...", "type", "text", 1, "search-suggest-input"], [1, "close-search-suggestions"], [1, "os-icon", "os-icon-x"], [1, "search-suggestions-group"], [1, "ssg-header"], [1, "ssg-icon"], [1, "os-icon", "os-icon-box"], [1, "ssg-name"], [1, "ssg-info"], [1, "ssg-content"], [1, "ssg-items", "ssg-items-boxed"], ["href", "users_profile_big.html", 1, "ssg-item"], [1, "item-media", 2, "background-image", "url(img/company6.png)"], [1, "item-name"], [1, "item-media", 2, "background-image", "url(img/company7.png)"], [1, "os-icon", "os-icon-users"], [1, "ssg-items", "ssg-items-list"], [1, "item-media", 2, "background-image", "url(img/avatar1.jpg)"], [1, "item-media", 2, "background-image", "url(img/avatar2.jpg)"], [1, "item-media", 2, "background-image", "url(img/avatar3.jpg)"], [1, "os-icon", "os-icon-folder"], [1, "ssg-items", "ssg-items-blocks"], ["href", "#", 1, "ssg-item"], [1, "item-icon"], [1, "os-icon", "os-icon-file-text"], [1, "os-icon", "os-icon-film"], [1, "os-icon", "os-icon-database"], [1, "os-icon", "os-icon-image"], [1, "ssg-nothing-found"], [1, "icon-w"], [1, "os-icon", "os-icon-eye-off"], [1, "layout-w"], [1, "content-w"], [1, "top-bar", "color-scheme-transparent"], [1, "fancy-selector-w"], [1, "fancy-selector-current"], [1, "fs-img"], ["alt", "", "src", "assets/img/card4.png"], [1, "fs-main-info"], [1, "fs-name"], [1, "fs-sub"], [1, "fs-selector-trigger"], [1, "os-icon", "os-icon-arrow-down4"], [1, "fancy-selector-options"], [1, "fancy-selector-option"], ["alt", "", "src", "assets/img/card2.png"], [1, "fancy-selector-option", "active"], ["alt", "", "src", "assets/img/card3.png"], [1, "fancy-selector-actions", "text-right"], ["href", "#", 1, "btn", "btn-primary"], [1, "os-icon", "os-icon-ui-22"], [1, "top-menu-controls"], [1, "element-search", "autosuggest-search-activator"], ["placeholder", "Start typing to search...", "type", "text"], [1, "messages-notifications", "os-dropdown-trigger", "os-dropdown-position-left"], [1, "os-icon", "os-icon-mail-14"], [1, "new-messages-count"], [1, "os-dropdown", "light", "message-list"], ["href", "#"], [1, "user-avatar-w"], ["alt", "", "src", "assets/img/avatar1.jpg"], [1, "message-content"], [1, "message-from"], [1, "message-title"], ["alt", "", "src", "assets/img/avatar2.jpg"], ["alt", "", "src", "assets/img/avatar3.jpg"], ["alt", "", "src", "assets/img/avatar4.jpg"], [1, "top-icon", "top-settings", "os-dropdown-trigger", "os-dropdown-position-left"], [1, "os-icon", "os-icon-ui-46"], [1, "os-dropdown"], ["href", "users_profile_small.html"], [1, "os-icon", "os-icon-ui-49"], [1, "os-icon", "os-icon-grid-10"], [1, "os-icon", "os-icon-ui-44"], [1, "os-icon", "os-icon-ui-15"], [1, "logged-user-w"], [1, "logged-user-i"], [1, "avatar-w"], [1, "logged-user-menu", "color-style-bright"], [1, "logged-user-avatar-info"], [1, "logged-user-info-w"], [1, "logged-user-name"], [1, "logged-user-role"], [1, "bg-icon"], [1, "os-icon", "os-icon-wallet-loaded"], ["href", "apps_email.html"], [1, "os-icon", "os-icon-mail-01"], ["href", "users_profile_big.html"], [1, "os-icon", "os-icon-user-male-circle2"], [1, "os-icon", "os-icon-coins-4"], [1, "os-icon", "os-icon-others-43"], [1, "os-icon", "os-icon-signs-11"], [1, "content-panel-toggler"], [1, "os-icon", "os-icon-grid-squares-22"], [1, "content-i"], [1, "content-box"], [1, "os-tabs-w"], [1, "os-tabs-controls", "os-tabs-complex"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["aria-expanded", "false", "data-toggle", "tab", "href", "#tab_overview", 1, "nav-link", "active"], [1, "tab-label"], [1, "tab-value"], [1, "badge", "badge-success"], [1, "os-icon", "os-icon-arrow-up6"], ["aria-expanded", "false", "data-toggle", "tab", "href", "#tab_sales", 1, "nav-link"], [1, "nav-item", "d-xl-block"], [1, "badge", "badge-danger"], [1, "os-icon", "os-icon-arrow-down6"], [1, "nav-item", "d-l-block"], ["aria-expanded", "true", "data-toggle", "tab", "href", "#tab_sales", 1, "nav-link"], [1, "row"], [1, "col-sm-12", "col-lg-8", "col-xxl-6"], [1, "element-balances", "justify-content-between", "mobile-full-width"], [1, "balance", "balance-v2"], [1, "balance-title"], ["class", "text-muted ml-1", "style", "font-size:0.65em;", 4, "ngIf"], [1, "balance-value"], [4, "ngIf"], ["class", "text-muted", "style", "font-size:0.6em;", 4, "ngIf"], [1, "balance-table", "pl-sm-2"], [1, "table", "table-lightborder", "table-bordered", "table-v-compact", "mb-0"], [1, "element-wrapper", "pb-4", "mb-4", "border-bottom"], [1, "element-box-tp"], [1, "os-icon", "os-icon-refresh-ccw"], ["href", "#", 1, "btn", "btn-grey", "ml-1"], [1, "os-icon", "os-icon-log-out"], ["href", "#", 1, "btn", "btn-grey", "ml-1", "d-none", "d-sm-inline-block"], [1, "os-icon", "os-icon-plus-circle"], ["class", "btn btn-primary ml-1", 3, "disabled", "click", 4, "ngIf"], ["class", "wm-connected-pill ml-1", 3, "click", 4, "ngIf"], ["class", "wm-error mt-2", 4, "ngIf"], [1, "col-sm-2", "d-none", "d-lg-block"], [1, "element-box", "less-padding"], [1, "element-box-header", "text-center"], [2, "width", "100px", "height", "100px"], [1, "el-chart-w"], ["height", "50", "id", "donutChart", "width", "50", 1, "chartjs-render-monitor", 2, "display", "block", "width", "0px", "height", "0px"], [1, "inside-donut-chart-label"], [1, "el-legend", "condensed"], [1, "col-auto", "col-xxxxl-6", "ml-sm-auto", "mr-sm-auto"], [1, "legend-value-w"], [1, "legend-pin", "legend-pin-squared", 2, "background-color", "#6896f9"], [1, "legend-value"], [1, "legend-sub-value"], [1, "legend-pin", "legend-pin-squared", 2, "background-color", "#85c751"], [1, "col-sm-6", "d-none", "d-xxxxl-block"], [1, "legend-pin", "legend-pin-squared", 2, "background-color", "#806ef9"], [1, "legend-pin", "legend-pin-squared", 2, "background-color", "#d97b70"], [1, "row", "pt-2"], [1, "col-12"], [1, "element-wrapper", "pb-0"], [1, "element-header"], ["class", "text-muted ml-2", 4, "ngIf"], ["class", "badge badge-danger ml-2", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "element-wrapper"], [1, "element-box"], [1, "form-group"], [1, "input-group"], ["type", "text", "placeholder", "Enter symbol: BTC, ETH, SOL...", 1, "form-control", 3, "value", "input"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "text-center py-3", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-8"], [1, "element-wrapper", "compact", "pt-4"], [1, "element-actions", "d-none", "d-sm-block"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"], ["href", "#", 1, "btn", "btn-success", "btn-sm"], [1, "inline-profile-tiles"], [1, "col-4", "col-sm-3", "col-xxl-2"], [1, "profile-tile", "profile-tile-inlined"], ["href", "users_profile_small.html", 1, "profile-tile-box", "faded"], [1, "pt-new-icon"], [1, "os-icon", "os-icon-plus"], [1, "pt-user-name"], ["href", "users_profile_small.html", 1, "profile-tile-box"], [1, "pt-avatar-w"], [1, "col-4", "d-sm-none", "d-xxl-block", "col-xxl-2"], ["alt", "", "src", "assets/img/avatar7.jpg"], [1, "col-12", "col-xxl-8"], [1, "form-inline", "justify-content-sm-end"], ["for", "", 1, "smaller"], [1, "form-control", "form-control-sm", "form-control-faded"], ["value", "Pending"], ["value", "Active"], ["value", "Cancelled"], [1, "post-box"], [1, "post-media", 2, "background-image", "url(assets/img/portfolio1.jpg)"], [1, "post-content"], [1, "post-title"], [1, "post-text"], [1, "post-foot"], [1, "post-tags"], [1, "badge", "badge-primary"], ["href", "#", 1, "post-link"], [1, "os-icon", "os-icon-arrow-right7"], [1, "post-media", 2, "background-image", "url(assets/img/portfolio2.jpg)"], ["href", "#", 1, "centered-load-more-link"], [1, "col-12", "d-sm-none", "d-xxl-block", "col-xxl-4"], [1, "cta-w", "orange", "text-center"], [1, "cta-content", "extra-padded"], [1, "highlight-header"], [1, "cta-header"], ["action", ""], [1, "newsletter-field-w"], ["placeholder", "Email address...", "type", "text"], [1, "btn", "btn-sm", "btn-primary"], [1, "col-sm-4"], [1, "element-wrapper", "compact", "pt-4", 2, "overflow", "scroll", "height", "700px", "width", "auto"], [1, "element-actions"], [1, "table", "table-clean"], ["colspan", "2", 1, "text-muted", "text-center"], [1, "content-panel", "compact", "color-scheme-dark"], [1, "content-panel-close"], [1, "os-icon", "os-icon-close"], [1, "element-wrapper", "compact"], [1, "element-actions", "actions-only"], ["href", "#", 1, "element-action", "element-action-fold"], [1, "os-icon", "os-icon-minus-circle"], [1, "table", "table-compact", "smaller", "text-faded", "mb-0"], [1, "text-center"], ["alt", "Total de participantes implementando esta API", 1, "text-right"], ["colspan", "3", 1, "text-muted", "text-center"], [1, "fancy-progress-with-label"], [1, "fpl-label"], [1, "fpl-progress-w"], [1, "fpl-progress-i", 2, "width", "65%"], [1, "todo-list"], ["href", "#", 1, "todo-item", "complete"], [1, "ti-info"], [1, "ti-header"], [1, "ti-sub-header"], [1, "ti-icon"], [1, "os-icon", "os-icon-check"], ["href", "#", 1, "todo-item"], [1, "d-xxl-none"], ["class", "wm-overlay", 3, "click", 4, "ngIf"], [1, "display-type"], [1, "text-muted", "ml-1", 2, "font-size", "0.65em"], [1, "text-muted", 2, "font-size", "0.6em"], [3, "d-sm-none", "d-md-table-cell", 4, "ngIf"], [1, "balance-label", "smaller", "lighter", "text-nowrap"], ["class", "text-success", "style", "display:block;font-size:0.85em", 4, "ngIf"], [1, "text-success", 2, "display", "block", "font-size", "0.85em"], [1, "text-muted"], ["colspan", "3", 1, "text-center", "py-2"], ["class", "text-muted", 4, "ngIf"], ["class", "text-muted", "style", "font-size:0.85em;", 4, "ngIf"], [1, "text-muted", 2, "font-size", "0.85em"], [1, "btn", "btn-primary", "ml-1", 3, "disabled", "click"], [1, "os-icon", "os-icon-link-2"], [1, "wm-connected-pill", "ml-1", 3, "click"], [1, "wm-connected-dot"], ["class", "wm-network-label", 4, "ngIf"], [1, "wm-network-label"], [1, "wm-error", "mt-2"], [1, "os-icon", "os-icon-warning-circle"], [1, "text-muted", "ml-2"], [1, "badge", "badge-danger", "ml-2"], [1, "col-6", "col-sm-3", "col-xxl-2"], ["href", "#", 1, "element-box", "el-tablo", "centered", "trend-in-corner", "smaller"], [1, "label"], [1, "value", 2, "font-size", "0.95em"], [1, "trending", 3, "ngClass"], [1, "os-icon", 3, "ngClass"], ["class", "col-6 col-sm-3 col-xxl-2", 4, "ngFor", "ngForOf"], [1, "element-box", "el-tablo", "centered", "smaller"], [1, "label", 2, "background", "#eee", "height", "12px", "width", "40px", "margin", "0 auto", "border-radius", "3px"], [1, "value", 2, "background", "#eee", "height", "20px", "width", "70px", "margin", "8px auto", "border-radius", "3px"], [1, "text-center", "py-3"], [1, "alert", "alert-danger"], [1, "d-block", "mt-1"], [1, "table", "table-lightborder", "table-bordered"], [3, "ngClass"], [1, "mt-3", "mb-2", "text-muted", 2, "font-size", "0.85em", "text-transform", "uppercase", "letter-spacing", "1px"], [1, "text-right"], [1, "btn", "btn-sm", "btn-grey", 3, "click"], [1, "wm-overlay", 3, "click"], [1, "wm-modal", 3, "click"], [1, "wm-header"], [1, "wm-header-title"], [1, "wm-close-btn", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 1L11 11M11 1L1 11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "wm-body"], [1, "wm-wallet-card", 3, "disabled", "click"], [1, "wm-wallet-icon"], ["src", "https://avatars.githubusercontent.com/u/37784886", "alt", "WalletConnect", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#3b99fc'"], [1, "wm-wallet-name"], ["src", "https://avatars.githubusercontent.com/u/11744586", "alt", "MetaMask", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#f6851b'"], ["disabled", "", 1, "wm-wallet-card", "wm-wallet-card--dim"], ["src", "https://avatars.githubusercontent.com/u/32179936", "alt", "Trust", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#3375BB'"], ["src", "https://avatars.githubusercontent.com/u/18060234", "alt", "Coinbase", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#1652f0'"], ["src", "https://avatars.githubusercontent.com/u/48327834", "alt", "Rainbow", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#001e59'"], ["src", "https://avatars.githubusercontent.com/u/78782331", "alt", "Phantom", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#ab9ff2'"], ["src", "https://avatars.githubusercontent.com/u/9784193", "alt", "Ledger", "width", "56", "height", "56", "onerror", "this.parentElement.style.background='#000'"], [1, "wm-wallet-icon", "wm-wallet-icon--more"], ["width", "22", "height", "6", "viewBox", "0 0 22 6", "fill", "none"], ["cx", "3", "cy", "3", "r", "3", "fill", "rgba(255,255,255,0.5)"], ["cx", "11", "cy", "3", "r", "3", "fill", "rgba(255,255,255,0.5)"], ["cx", "19", "cy", "3", "r", "3", "fill", "rgba(255,255,255,0.5)"], [1, "wm-all-wallets", 3, "disabled", "click"], [1, "wm-all-wallets-icon"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none"], ["x", "3", "y", "3", "width", "8", "height", "8", "rx", "1.5", "fill", "rgba(255,255,255,0.65)"], ["x", "13", "y", "3", "width", "8", "height", "8", "rx", "1.5", "fill", "rgba(255,255,255,0.65)"], ["x", "3", "y", "13", "width", "8", "height", "8", "rx", "1.5", "fill", "rgba(255,255,255,0.65)"], ["x", "13", "y", "13", "width", "8", "height", "8", "rx", "1.5", "fill", "rgba(255,255,255,0.65)"], [1, "wm-wallet-count"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", 1, "wm-chevron"], ["d", "M9 18l6-6-6-6", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wm-footer"], ["href", "https://ethereum.org/en/wallets/", "target", "_blank", 1, "wm-what-is"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 16v-4M12 8h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "wm-powered"], ["class", "wm-connecting-overlay", 4, "ngIf"], [1, "wm-connecting-overlay"], [1, "wm-spinner"], [1, "wm-connecting-text"], ["width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none"], [1, "wm-account-body"], [1, "wm-account-meta"], [1, "wm-account-provider"], ["class", "wm-account-network", 4, "ngIf"], [1, "wm-account-address"], ["class", "wm-account-balance", 4, "ngIf"], [1, "wm-disconnect-btn", 3, "click"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "wm-account-network"], [1, "wm-account-balance"]],
  template: function CryptoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "24 Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Integ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "ration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " with API ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Deve");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "lopm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "ent Project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "12 Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " John Ma");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "yer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "s ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "omas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Mullier ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Kim C");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "olli");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "ns ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "17 Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Work");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Not");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "e.txt ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " V");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "ideo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, ".avi ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " User");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Tabl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "e.sql ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " wed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "din");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "g.jpg ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "No files were found. Try changing your query...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Bitcoin Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Balance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "$5,304");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Lite Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "ETH");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Balance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "$5,304");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Bitcoin Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Balance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "$8,274");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "img", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Ripple Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "RPX");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Balance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "$1,202");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Add Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "12");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](189, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "h6", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "John Mayers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "h6", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Account Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "h6", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Phil Jones");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "h6", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Secutiry Updates");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "img", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "h6", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Bekky Simpson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "h6", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Vacation Rentals");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "img", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "h6", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Alice Priskon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "h6", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Payment Confirmation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "a", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "i", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Profile Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "a", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](235, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "Billing Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "a", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "i", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "My Invoices");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "a", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](245, "i", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, "Cancel Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](255, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, " Cripto Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "div", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "Administrator");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "i", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "a", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](266, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Incoming Mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "a", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "i", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "Profile Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "a", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](276, "i", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Billing Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](281, "i", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](286, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](290, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "ul", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "li", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "a", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "span", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "Total Institui\u00E7\u00F5es");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "span", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "span", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](305, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, "22%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "li", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "span", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, "Ativas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "span", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "span", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](315, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "25%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "li", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "span", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321, "Auth Servers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "span", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "span", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](325, "i", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, "5%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "li", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "span", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Inativas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "span", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "span", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](335, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, "12%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "div", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "div", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "My Portfolio Balance ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](344, CryptoComponent_small_344_Template, 2, 1, "small", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "div", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](346, CryptoComponent_span_346_Template, 2, 0, "span", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](347, CryptoComponent_span_347_Template, 2, 1, "span", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](348, CryptoComponent_span_348_Template, 2, 0, "span", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "div", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "table", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](352, CryptoComponent_ng_container_352_Template, 2, 2, "ng-container", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](353, CryptoComponent_ng_container_353_Template, 6, 3, "ng-container", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "div", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "i", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Deposit Money");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "a", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](361, "i", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Withdraw");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "a", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "i", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Add Wallet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](368, CryptoComponent_button_368_Template, 4, 2, "button", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](369, CryptoComponent_button_369_Template, 4, 2, "button", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](370, CryptoComponent_div_370_Template, 3, 1, "div", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "div", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "h6", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "div", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](377, "canvas", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "Urls Testadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "div", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](387, "div", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "div", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "div", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "5%, 100 Chamadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "div", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](394, "div", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "div", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "12");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "div", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399, "30%, 100 Chamadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "div", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "div", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](402, "div", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "div", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](405, "13");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "div", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](407, "65%, 100 Chamadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "div", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](409, "div", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "div", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "14");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](414, "0%, 100 Chamadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "div", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "div", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "div", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](418, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](419, "Live Crypto Prices ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](420, CryptoComponent_small_420_Template, 2, 0, "small", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](421, CryptoComponent_span_421_Template, 2, 1, "span", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](422, CryptoComponent_ng_container_422_Template, 12, 8, "ng-container", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](423, CryptoComponent_ng_container_423_Template, 2, 2, "ng-container", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "div", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "div", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, "Search Crypto Prices");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "div", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "div", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "div", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](432, "input", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CryptoComponent_Template_input_input_432_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "div", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "button", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CryptoComponent_Template_button_click_434_listener() {
        return ctx.clearSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](435, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](436, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](437, CryptoComponent_div_437_Template, 3, 0, "div", 167);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](438, CryptoComponent_div_438_Template, 7, 1, "div", 168);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](439, CryptoComponent_div_439_Template, 18, 1, "div", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](440, CryptoComponent_div_440_Template, 26, 1, "div", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](442, "div", 169);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "div", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](444, "div", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](445, "a", 172);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](446, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](448, "Add Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "a", 173);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](450, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](451, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](452, "Make Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](454, "Send Money To");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "div", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](458, "div", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "div", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "a", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "div", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](462, "i", 179);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "div", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](464, " New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](465, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](466, " Account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](467, "div", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](468, "div", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "div", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](471, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](472, "div", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](473, " Kelly");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](474, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475, " Neymayers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](476, "div", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "div", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](478, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "div", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](480, "img", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "div", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](482, " Ben");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](483, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](484, " Gossman ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "div", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "div", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](487, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "div", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](489, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](490, "div", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](491, " Kimson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](492, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](493, " Broker ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](494, "div", 183);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "div", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](496, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](497, "div", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](498, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](499, "div", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](500, " Jake");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](501, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](502, " Gilbertson ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](503, "div", 183);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](504, "div", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](506, "div", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](507, "img", 184);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](508, "div", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](509, " Mary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](510, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511, " Clintons ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](512, "div", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](513, "div", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](514, "div", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](515, "div", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](516, "form", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](517, "label", 187);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](518, "News For");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](519, "select", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](520, "option", 189);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](521, "Bitcoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](522, "option", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](523, "Ethereum");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](524, "option", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](525, "Litecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](527, "Crypto News");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](528, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "div", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](530, "div", 193);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](531, "div", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](532, "h6", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](533, "Is Crypto the Future of Film Funding?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](534, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](535, "Curiously, view both tone emerged. There should which yards two and concepts amidst liabilities sitting of and, parents it wait");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](536, "div", 197);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](537, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "div", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](539, "BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](540, "div", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](541, "Crypto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](542, "a", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](543, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](544, "Read Full Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](545, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](546, "div", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](547, "div", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](548, "div", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "h6", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](550, "Is Crypto the Future of Film Funding?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](551, "div", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](552, "Curiously, view both tone emerged. There should which yards two and concepts amidst liabilities sitting of and, parents it wait");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](553, "div", 197);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](554, "div", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](555, "div", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](556, "BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](557, "div", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](558, "Crypto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](559, "a", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](560, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](561, "Read Full Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](562, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](563, "a", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](564, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](565, "Read Our Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](566, "div", 204);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](567, "div", 205);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](568, "div", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](569, "div", 207);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](570, "Bonus");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](571, "h5", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](572, "Invite your friends and make money with referrals");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](573, "form", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](574, "div", 210);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](575, "input", 211);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](576, "button", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](577, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](578, "div", 213);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](579, "div", 214);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](580, "div", 215);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](581, "form", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](582, "label", 187);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](583, "Ordenar Por");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](584, "select", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](585, "option", 189);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](586, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](587, "option", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](588, "Last Week");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](589, "option", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](590, "Last 30 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](591, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](592, "Institui\u00E7\u00F5es");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](593, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](594, "table", 216);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](595, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](596, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](597, "td", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](598, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](599, "Connect your wallet to see your portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](600, "a", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](602, "Load More Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](603, "div", 218);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](604, "div", 219);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](605, "i", 220);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](606, "div", 221);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](607, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](608, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](609, "i", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](610, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](611, "Apis Implementadas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](612, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "table", 225);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](614, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](615, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](616, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](617, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](618, "th", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](619, "Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](620, "th", 227);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](621, "Implementada por");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](622, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](623, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](624, "td", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](625, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](626, "No data available");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](627, "div", 221);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](628, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](629, "a", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](630, "i", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](631, "h6", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](632, "Profile Completion");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](633, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](634, "div", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](635, "div", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](636, "65%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](637, "div", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](638, "div", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](639, "div", 233);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](640, "a", 234);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](641, "div", 235);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](642, "div", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](643, "Connect Bank Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](644, "div", 237);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](645, "You have connected 2 accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](646, "div", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](647, "i", 239);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](648, "a", 234);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "div", 235);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](650, "div", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](651, "Upload Tax Documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](652, "div", 237);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](653, "You uploaded W-2 and 1099");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](654, "div", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](655, "i", 239);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](656, "a", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](657, "div", 235);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](658, "div", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](659, "Deposit Money");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](660, "div", 237);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](661, "You can deposit from your bank");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](662, "div", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](663, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](664, "div", 241);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](665, "div", 205);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](666, "div", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](667, "div", 207);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](668, "Bonus");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](669, "h5", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "Invite your friends and make money with referrals");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](671, "form", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](672, "div", 210);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](673, "input", 211);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](674, "button", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](675, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](676, CryptoComponent_div_676_Template, 76, 4, "div", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](677, CryptoComponent_div_677_Template, 21, 4, "div", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](678, "div", 243);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](303);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topListings.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topListings.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topListings.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topListings.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.walletConnected && ctx.getNetworkName());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.walletConnected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.walletConnected && !ctx.walletLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.walletLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.walletConnected && ctx.walletTokens.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.walletConnected || ctx.walletTokens.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.walletConnected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.walletConnected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.walletError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoadingListings);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.listingsError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.topListings.slice(0, 6));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoadingListings);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoadingSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchResults.length > 0 && !ctx.isLoadingSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchQuery.trim() === "" && !ctx.isLoadingListings && ctx.topListings.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](236);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showWalletDropdown && !ctx.walletConnected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showWalletDropdown && ctx.walletConnected);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe],
  styles: ["@keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}.chartjs-render-monitor[_ngcontent-%COMP%]{animation:chartjs-render-animation 0.001s;}.cke[_ngcontent-%COMP%]{visibility:hidden;}.wm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Noto Sans', system-ui, -apple-system, sans-serif;\n}.wm-modal[_ngcontent-%COMP%] {\n  background: #141414;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 20px;\n  width: 360px;\n  max-width: calc(100vw - 32px);\n  overflow: hidden;\n  box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 24px 64px rgba(0,0,0,0.7);\n  position: relative;\n}.wm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  padding: 0 16px;\n  position: relative;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n}.wm-header-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n}.wm-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255,255,255,0.08);\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255,255,255,0.6);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  padding: 0;\n}.wm-close-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.14); color: #fff; }.wm-body[_ngcontent-%COMP%] {\n  padding: 16px 16px 8px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 6px;\n  gap: 6px;\n}.wm-wallet-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  padding: 10px 4px;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n  color: #ffffff;\n  text-align: center;\n}.wm-wallet-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255,255,255,0.06);\n  border-color: rgba(255,255,255,0.08);\n}.wm-wallet-card[_ngcontent-%COMP%]:disabled { cursor: default; }.wm-wallet-card--dim[_ngcontent-%COMP%] { opacity: 0.35; }.wm-wallet-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #1f1f1f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}.wm-wallet-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; display: block; }.wm-wallet-icon--more[_ngcontent-%COMP%] { background: #2a2a2a; }.wm-wallet-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: rgba(255,255,255,0.8);\n  line-height: 1.2;\n  max-width: 68px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}.wm-all-wallets[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n  padding: 8px 12px;\n  margin: 0 8px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  color: rgba(255,255,255,0.65);\n  font-size: 13px;\n  font-weight: 500;\n  width: calc(100% - 16px);\n  transition: background 0.15s, color 0.15s;\n}.wm-all-wallets[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255,255,255,0.05);\n  color: #ffffff;\n}.wm-all-wallets[_ngcontent-%COMP%]:disabled { cursor: default; }.wm-all-wallets-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: rgba(255,255,255,0.07);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}.wm-wallet-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 12px;\n  color: rgba(255,255,255,0.35);\n  background: rgba(255,255,255,0.06);\n  padding: 2px 8px;\n  border-radius: 10px;\n}.wm-chevron[_ngcontent-%COMP%] { color: rgba(255,255,255,0.3); flex-shrink: 0; }.wm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-top: 1px solid rgba(255,255,255,0.06);\n}.wm-what-is[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  grid-gap: 5px;\n  gap: 5px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.45);\n  text-decoration: none;\n  transition: color 0.15s;\n}.wm-what-is[_ngcontent-%COMP%]:hover { color: rgba(255,255,255,0.85); }.wm-powered[_ngcontent-%COMP%] { font-size: 11px; color: rgba(255,255,255,0.25); }.wm-powered[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #10B981; font-weight: 600; }.wm-connecting-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(20, 20, 20, 0.88);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 14px;\n  gap: 14px;\n  border-radius: 20px;\n}.wm-spinner[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 2.5px solid rgba(255,255,255,0.1);\n  border-top-color: #10B981;\n  border-radius: 50%;\n  animation: wm-spin 0.75s linear infinite;\n}@keyframes wm-spin { to { transform: rotate(360deg); } }.wm-connecting-text[_ngcontent-%COMP%] { font-size: 13px; color: rgba(255,255,255,0.65); }.wm-connected-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  grid-gap: 7px;\n  gap: 7px;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 20px;\n  color: #10B981;\n  padding: 5px 13px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}.wm-connected-pill[_ngcontent-%COMP%]:hover { background: rgba(16, 185, 129, 0.16); }.wm-connected-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #10B981;\n  border-radius: 50%;\n  flex-shrink: 0;\n}.wm-network-label[_ngcontent-%COMP%] { color: rgba(255,255,255,0.35); font-size: 12px; }.wm-error[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: #ef4444;\n  padding: 6px 10px;\n  background: rgba(239,68,68,0.08);\n  border: 1px solid rgba(239,68,68,0.2);\n  border-radius: 8px;\n  margin-top: 8px;\n}.wm-account-body[_ngcontent-%COMP%] { padding: 16px; }.wm-account-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255,255,255,0.4);\n  text-align: center;\n  margin-bottom: 12px;\n}.wm-account-provider[_ngcontent-%COMP%] { color: rgba(255,255,255,0.85); font-weight: 600; }.wm-account-network[_ngcontent-%COMP%] { color: rgba(255,255,255,0.4); }.wm-account-address[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255,255,255,0.7);\n  background: rgba(255,255,255,0.05);\n  padding: 10px 12px;\n  border-radius: 8px;\n  word-break: break-all;\n  margin-bottom: 12px;\n  border: 1px solid rgba(255,255,255,0.06);\n  font-family: monospace;\n}.wm-account-balance[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #10B981;\n  margin-bottom: 14px;\n  text-align: center;\n}.wm-disconnect-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 8px;\n  gap: 8px;\n  width: 100%;\n  padding: 12px;\n  background: rgba(239,68,68,0.08);\n  border: 1px solid rgba(239,68,68,0.2);\n  border-radius: 8px;\n  color: #ef4444;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}.wm-disconnect-btn[_ngcontent-%COMP%]:hover { background: rgba(239,68,68,0.14); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyeXB0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUE0RSxvQ0FBb0MsS0FBSyxZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyx3QkFBMEUseUNBQXlDLENBQUMsQ0FDcFEsS0FBSyxpQkFBaUIsQ0FBQyxDQUV2Qiw2RUFBNkUsQ0FFN0UscUJBQXFCLENBQ3JCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsOERBQThEO0FBQ2hFLENBRUEsZ0JBQWdCLENBQ2hCO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIseUVBQXlFO0VBQ3pFLGtCQUFrQjtBQUNwQixDQUVBLFdBQVcsQ0FDWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLCtDQUErQztBQUNqRCxDQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCLENBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxVQUFVO0FBQ1osQ0FDQSxzQkFBc0Isa0NBQWtDLEVBQUUsV0FBVyxFQUFFLENBRXZFLGdDQUFnQyxDQUNoQztFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGFBQVE7RUFBUixRQUFRO0FBQ1YsQ0FFQSwyQkFBMkIsQ0FDM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFRO0VBQVIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0RBQWdEO0VBQ2hELGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIsQ0FDQTtFQUNFLGtDQUFrQztFQUNsQyxvQ0FBb0M7QUFDdEMsQ0FDQSwyQkFBMkIsZUFBZSxFQUFFLENBQzVDLHVCQUF1QixhQUFhLEVBQUUsQ0FFdEMsb0JBQW9CLENBQ3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCLENBQ0Esc0JBQXNCLFdBQVcsRUFBRSxZQUFZLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxDQUNwRix3QkFBd0IsbUJBQW1CLEVBQUUsQ0FFN0Msc0JBQXNCLENBQ3RCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQixDQUVBLG9CQUFvQixDQUNwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBUztFQUFULFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIseUNBQXlDO0FBQzNDLENBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQixDQUNBLDJCQUEyQixlQUFlLEVBQUUsQ0FDNUM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQixDQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIsQ0FDQSxjQUFjLDRCQUE0QixFQUFFLGNBQWMsRUFBRSxDQUU1RCxXQUFXLENBQ1g7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsNENBQTRDO0FBQzlDLENBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQVE7RUFBUixRQUFRO0VBQ1IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCLENBQ0Esb0JBQW9CLDZCQUE2QixFQUFFLENBQ25ELGNBQWMsZUFBZSxFQUFFLDZCQUE2QixFQUFFLENBQzlELHFCQUFxQixjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsQ0FFdkQsMENBQTBDLENBQzFDO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQVM7RUFBVCxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCLENBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQyxDQUNBLHFCQUFxQixLQUFLLHlCQUF5QixFQUFFLEVBQUUsQ0FDdkQsc0JBQXNCLGVBQWUsRUFBRSw2QkFBNkIsRUFBRSxDQUV0RSwwQkFBMEIsQ0FDMUI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQVE7RUFBUixRQUFRO0VBQ1IsbUNBQW1DO0VBQ25DLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUIsQ0FDQSwyQkFBMkIsb0NBQW9DLEVBQUUsQ0FDakU7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQixDQUNBLG9CQUFvQiw2QkFBNkIsRUFBRSxlQUFlLEVBQUUsQ0FFcEUsa0JBQWtCLENBQ2xCO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIsQ0FFQSx1QkFBdUIsQ0FDdkIsbUJBQW1CLGFBQWEsRUFBRSxDQUNsQztFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQixDQUNBLHVCQUF1Qiw2QkFBNkIsRUFBRSxnQkFBZ0IsRUFBRSxDQUN4RSxzQkFBc0IsNEJBQTRCLEVBQUUsQ0FDcEQ7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtBQUN4QixDQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBUTtFQUFSLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUIsQ0FDQSwyQkFBMkIsZ0NBQWdDLEVBQUUiLCJmaWxlIjoiY3J5cHRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJALXdlYmtpdC1rZXlmcmFtZXMgY2hhcnRqcy1yZW5kZXItYW5pbWF0aW9ue2Zyb217b3BhY2l0eTowLjk5fXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBjaGFydGpzLXJlbmRlci1hbmltYXRpb257ZnJvbXtvcGFjaXR5OjAuOTl9dG97b3BhY2l0eToxfX0uY2hhcnRqcy1yZW5kZXItbW9uaXRvcnstd2Via2l0LWFuaW1hdGlvbjpjaGFydGpzLXJlbmRlci1hbmltYXRpb24gMC4wMDFzO2FuaW1hdGlvbjpjaGFydGpzLXJlbmRlci1hbmltYXRpb24gMC4wMDFzO31cbi5ja2V7dmlzaWJpbGl0eTpoaWRkZW47fVxuXG4vKiDilIDilIAgUmVvd24tc3R5bGUgV2FsbGV0IE1vZGFsIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xuXG4vKiBPdmVybGF5IGJhY2tkcm9wICovXG4ud20tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG59XG5cbi8qIE1vZGFsIHBhbmVsICovXG4ud20tbW9kYWwge1xuICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMzYwcHg7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjAzKSwgMCAyNHB4IDY0cHggcmdiYSgwLDAsMCwwLjcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhlYWRlciAqL1xuLndtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbn1cbi53bS1oZWFkZXItdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbn1cbi53bS1jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cywgY29sb3IgMC4xNXM7XG4gIHBhZGRpbmc6IDA7XG59XG4ud20tY2xvc2UtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjE0KTsgY29sb3I6ICNmZmY7IH1cblxuLyogV2FsbGV0IGdyaWQgYm9keSAoNC1jb2x1bW4pICovXG4ud20tYm9keSB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNnB4O1xufVxuXG4vKiBJbmRpdmlkdWFsIHdhbGxldCBjYXJkICovXG4ud20td2FsbGV0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogMTBweCA0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBib3JkZXItY29sb3IgMC4xNXM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud20td2FsbGV0LWNhcmQ6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG59XG4ud20td2FsbGV0LWNhcmQ6ZGlzYWJsZWQgeyBjdXJzb3I6IGRlZmF1bHQ7IH1cbi53bS13YWxsZXQtY2FyZC0tZGltIHsgb3BhY2l0eTogMC4zNTsgfVxuXG4vKiBXYWxsZXQgaWNvbiBib3ggKi9cbi53bS13YWxsZXQtaWNvbiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cbi53bS13YWxsZXQtaWNvbiBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb3ZlcjsgZGlzcGxheTogYmxvY2s7IH1cbi53bS13YWxsZXQtaWNvbi0tbW9yZSB7IGJhY2tncm91bmQ6ICMyYTJhMmE7IH1cblxuLyogV2FsbGV0IG5hbWUgbGFiZWwgKi9cbi53bS13YWxsZXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWF4LXdpZHRoOiA2OHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogQWxsIFdhbGxldHMgcm93ICovXG4ud20tYWxsLXdhbGxldHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBtYXJnaW46IDAgOHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNjUpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cywgY29sb3IgMC4xNXM7XG59XG4ud20tYWxsLXdhbGxldHM6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi53bS1hbGwtd2FsbGV0czpkaXNhYmxlZCB7IGN1cnNvcjogZGVmYXVsdDsgfVxuLndtLWFsbC13YWxsZXRzLWljb24ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cbi53bS13YWxsZXQtY291bnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53bS1jaGV2cm9uIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTsgZmxleC1zaHJpbms6IDA7IH1cblxuLyogRm9vdGVyICovXG4ud20tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xufVxuLndtLXdoYXQtaXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbn1cbi53bS13aGF0LWlzOmhvdmVyIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7IH1cbi53bS1wb3dlcmVkIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjI1KTsgfVxuLndtLXBvd2VyZWQgc3Ryb25nIHsgY29sb3I6ICMxMEI5ODE7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuLyogQ29ubmVjdGluZyBvdmVybGF5IChpbnNpZGUgdGhlIG1vZGFsKSAqL1xuLndtLWNvbm5lY3Rpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAsIDIwLCAyMCwgMC44OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ud20tc3Bpbm5lciB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlcjogMi41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMTBCOTgxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogd20tc3BpbiAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHdtLXNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuLndtLWNvbm5lY3RpbmctdGV4dCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7IH1cblxuLyogQ29ubmVjdGVkIHBpbGwgYnV0dG9uICovXG4ud20tY29ubmVjdGVkLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICMxMEI5ODE7XG4gIHBhZGRpbmc6IDVweCAxM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cbi53bS1jb25uZWN0ZWQtcGlsbDpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE2KTsgfVxuLndtLWNvbm5lY3RlZC1kb3Qge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogIzEwQjk4MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbn1cbi53bS1uZXR3b3JrLWxhYmVsIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7IGZvbnQtc2l6ZTogMTJweDsgfVxuXG4vKiBFcnJvciBtZXNzYWdlICovXG4ud20tZXJyb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlZjQ0NDQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwwLjA4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi8qIEFjY291bnQgbW9kYWwgYm9keSAqL1xuLndtLWFjY291bnQtYm9keSB7IHBhZGRpbmc6IDE2cHg7IH1cbi53bS1hY2NvdW50LW1ldGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi53bS1hY2NvdW50LXByb3ZpZGVyIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi53bS1hY2NvdW50LW5ldHdvcmsgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQpOyB9XG4ud20tYWNjb3VudC1hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuLndtLWFjY291bnQtYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxMEI5ODE7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53bS1kaXNjb25uZWN0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjZWY0NDQ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cbi53bS1kaXNjb25uZWN0LWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjM5LDY4LDY4LDAuMTQpOyB9XG4iXX0= */"]
});

/***/ }),

/***/ 44020:
/*!*****************************************!*\
  !*** ./src/app/crypto/crypto.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoModule": function() { return /* binding */ CryptoModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _crypto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto.component */ 78737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [{ path: '', component: _crypto_component__WEBPACK_IMPORTED_MODULE_0__.CryptoComponent }];
class CryptoModule {
}
CryptoModule.ɵfac = function CryptoModule_Factory(t) { return new (t || CryptoModule)(); };
CryptoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CryptoModule });
CryptoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CryptoModule, { declarations: [_crypto_component__WEBPACK_IMPORTED_MODULE_0__.CryptoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_crypto_crypto_module_ts-es2020.js.map