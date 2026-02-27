"use strict";(self.webpackChunkofb_dashboard=self.webpackChunkofb_dashboard||[]).push([[6597],{26597:function(e,t,i){i.r(t),i.d(t,{AppKitModal:function(){return $i},W3mListWallet:function(){return _i},W3mModal:function(){return Ii},W3mModalBase:function(){return Pi},W3mRouterContainer:function(){return Wi},W3mUsageExceededView:function(){return Ni}});var o=i(8239),n=i(14350),r=i(72418),a=i(73797),s=i(32628),c=i(22167),l=i(63908),d=i(27297),u=i(91951),p=i(40378),h=i(7551),m=i(69419);const g={isUnsupportedChainView:()=>"UnsupportedChain"===p.P.state.view||"SwitchNetwork"===p.P.state.view&&p.P.state.history.includes("UnsupportedChain"),safeClose(){var e=this;return(0,o.Z)(function*(){e.isUnsupportedChainView()||(yield m.w.isSIWXCloseDisabled())?c.I.shake():(("DataCapture"===p.P.state.view||"DataCaptureOtpConfirm"===p.P.state.view)&&h.l.disconnect(),c.I.close())})()}};var w=i(50039),y=i(56152),f=i(23250),b=i(31254),v=i(86482),k=i(72290),x=i(3628),S=i(56276),C=i(71166),T=i(28153),A=i(53574),P=i(44926);const I={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){const o=I.getGasPriceInEther(t,i);return v.C.bigNumber(e).times(o).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:o}){const n=v.C.bigNumber(e).times(t),r=v.C.bigNumber(o).times(i);return n.minus(r).div(n).times(100).toNumber()},getMaxSlippage(e,t){const i=v.C.bigNumber(e).div(100);return v.C.multiply(t,i).toNumber()},getProviderFee:(e,t=.0085)=>v.C.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const i=t||"0";return!!v.C.bigNumber(e).eq(0)||v.C.bigNumber(v.C.bigNumber(i)).gt(e)},isInsufficientSourceTokenForSwap(e,t,i){const o=i?.find(e=>e.address===t)?.quantity?.numeric;return v.C.bigNumber(o||"0").lt(e)}};var $=i(79781),E=i(9483),N=i(71848),R=i(68886);Error;const O={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:T.bq.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},B=(0,f.sj)({...O}),_={state:B,subscribe:e=>(0,f.Ld)(B,()=>e(B)),subscribeKey:(e,t)=>(0,b.VW)(B,e,t),getParams(){const e=l.R.getAccountData(l.R.state.activeChain)?.caipAddress??l.R.state.activeCaipAddress,t=A.j.getPlainAddress(e),i=(0,C.EO)(),o=d.A.getConnectorId(l.R.state.activeChain);if(!t)throw new Error("No address found to swap the tokens from.");const n=!B.toToken?.address||!B.toToken?.decimals,r=!B.sourceToken?.address||!B.sourceToken?.decimals||!v.C.bigNumber(B.sourceTokenAmount).gt(0),a=!B.sourceTokenAmount;return{networkAddress:i,fromAddress:t,fromCaipAddress:e,sourceTokenAddress:B.sourceToken?.address,toTokenAddress:B.toToken?.address,toTokenAmount:B.toTokenAmount,toTokenDecimals:B.toToken?.decimals,sourceTokenAmount:B.sourceTokenAmount,sourceTokenDecimals:B.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:r,invalidSourceTokenAmount:a,availableToSwap:e&&!n&&!r&&!a,isAuthConnector:o===k.b.CONNECTOR_ID.AUTH}},setSourceToken:e=>(0,o.Z)(function*(){if(!e)return B.sourceToken=e,B.sourceTokenAmount="",void(B.sourceTokenPriceInUSD=0);B.sourceToken=e,yield D.setTokenPrice(e.address,"sourceToken")})(),setSourceTokenAmount(e){B.sourceTokenAmount=e},setToToken:e=>(0,o.Z)(function*(){if(!e)return B.toToken=e,B.toTokenAmount="",void(B.toTokenPriceInUSD=0);B.toToken=e,yield D.setTokenPrice(e.address,"toToken")})(),setToTokenAmount(e){B.toTokenAmount=e?v.C.toFixed(e,6):""},setTokenPrice:(e,t)=>(0,o.Z)(function*(){let i=B.tokensPriceMap[e]||0;i||(B.loadingPrices=!0,i=yield D.getAddressPrice(e)),"sourceToken"===t?B.sourceTokenPriceInUSD=i:"toToken"===t&&(B.toTokenPriceInUSD=i),B.loadingPrices&&(B.loadingPrices=!1),D.getParams().availableToSwap&&!B.switchingTokens&&D.swapTokens()})(),switchTokens:()=>(0,o.Z)(function*(){if(!B.initializing&&B.initialized&&!B.switchingTokens){B.switchingTokens=!0;try{const e=B.toToken?{...B.toToken}:void 0,t=B.sourceToken?{...B.sourceToken}:void 0;D.setSourceTokenAmount(e&&""===B.toTokenAmount?"1":B.toTokenAmount),D.setToTokenAmount(""),yield D.setSourceToken(e),yield D.setToToken(t),B.switchingTokens=!1,D.swapTokens()}catch(e){throw B.switchingTokens=!1,e}}})(),resetState(){B.myTokensWithBalance=O.myTokensWithBalance,B.tokensPriceMap=O.tokensPriceMap,B.initialized=O.initialized,B.initializing=O.initializing,B.switchingTokens=O.switchingTokens,B.sourceToken=O.sourceToken,B.sourceTokenAmount=O.sourceTokenAmount,B.sourceTokenPriceInUSD=O.sourceTokenPriceInUSD,B.toToken=O.toToken,B.toTokenAmount=O.toTokenAmount,B.toTokenPriceInUSD=O.toTokenPriceInUSD,B.networkPrice=O.networkPrice,B.networkTokenSymbol=O.networkTokenSymbol,B.networkBalanceInUSD=O.networkBalanceInUSD,B.inputError=O.inputError},resetValues(){const{networkAddress:e}=D.getParams(),t=B.tokens?.find(t=>t.address===e);D.setSourceToken(t),D.setToToken(void 0)},getApprovalLoadingState:()=>B.loadingApprovalTransaction,clearError(){B.transactionError=void 0},initializeState:()=>(0,o.Z)(function*(){if(!B.initializing){if(B.initializing=!0,!B.initialized)try{yield D.fetchTokens(),B.initialized=!0}catch{B.initialized=!1,y.K.showError("Failed to initialize swap"),p.P.goBack()}B.initializing=!1}})(),fetchTokens:()=>(0,o.Z)(function*(){const{networkAddress:e}=D.getParams();yield D.getNetworkTokenPrice(),yield D.getMyTokensWithBalance();const t=B.myTokensWithBalance?.find(t=>t.address===e);t&&(B.networkTokenSymbol=t.symbol,D.setSourceToken(t),D.setSourceTokenAmount("0"))})(),getTokenList:()=>(0,o.Z)(function*(){const e=l.R.state.activeCaipNetwork.caipNetworkId;if(B.caipNetworkId!==e||!B.tokens)try{B.tokensLoading=!0;const t=yield P.n.getTokenList(e);B.tokens=t,B.caipNetworkId=e,B.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0);const i=(e&&T.bq.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>Boolean(e)),o=(T.bq.SWAP_SUGGESTED_TOKENS||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>Boolean(e)).filter(e=>!i.some(t=>t.address===e.address));B.suggestedTokens=[...i,...o]}catch{B.tokens=[],B.popularTokens=[],B.suggestedTokens=[]}finally{B.tokensLoading=!1}})(),getAddressPrice:e=>(0,o.Z)(function*(){const t=B.tokensPriceMap[e];if(t)return t;const i=(yield N.L.fetchTokenPrice({addresses:[e]}))?.fungibles||[],o=[...B.tokens||[],...B.myTokensWithBalance||[]]?.find(t=>t.address===e)?.symbol,n=i.find(e=>e.symbol.toLowerCase()===o?.toLowerCase())?.price||0,r=parseFloat(n.toString());return B.tokensPriceMap[e]=r,r})(),getNetworkTokenPrice:()=>(0,o.Z)(function*(){const{networkAddress:e}=D.getParams(),t=(yield N.L.fetchTokenPrice({addresses:[e]}).catch(()=>(y.K.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles?.[0],i=t?.price.toString()||"0";B.tokensPriceMap[e]=parseFloat(i),B.networkTokenSymbol=t?.symbol||"",B.networkPrice=i})(),getMyTokensWithBalance:e=>(0,o.Z)(function*(){const t=yield S.Q.getMyTokensWithBalance({forceUpdate:e,caipNetwork:l.R.state.activeCaipNetwork,address:l.R.getAccountData()?.address}),i=P.n.mapBalancesToSwapTokens(t);!i||(yield D.getInitialGasPrice(),D.setBalances(i))})(),setBalances(e){const{networkAddress:t}=D.getParams(),i=l.R.state.activeCaipNetwork;if(!i)return;const o=e.find(e=>e.address===t);e.forEach(e=>{B.tokensPriceMap[e.address]=e.price||0}),B.myTokensWithBalance=e.filter(e=>e.address.startsWith(i.caipNetworkId)),B.networkBalanceInUSD=o?v.C.multiply(o.quantity.numeric,o.price).toString():"0"},getInitialGasPrice:()=>(0,o.Z)(function*(){const e=yield P.n.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};if(l.R.state.activeCaipNetwork.chainNamespace===k.b.CHAIN.SOLANA)return B.gasFee=e.standard??"0",B.gasPriceInUSD=v.C.multiply(e.standard,B.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(B.gasFee),gasPriceInUSD:Number(B.gasPriceInUSD)};{const t=e.standard??"0",i=BigInt(t),o=BigInt(15e4),n=I.getGasPriceInUSD(B.networkPrice,o,i);return B.gasFee=t,B.gasPriceInUSD=n,{gasPrice:i,gasPriceInUSD:n}}})(),swapTokens:()=>(0,o.Z)(function*(){const e=l.R.getAccountData()?.address,t=B.sourceToken,i=B.toToken,o=v.C.bigNumber(B.sourceTokenAmount).gt(0);if(o||D.setToTokenAmount(""),!i||!t||B.loadingPrices||!o||!e)return;B.loadingQuote=!0;const n=v.C.bigNumber(B.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{const o=yield N.L.fetchSwapQuote({userAddress:e,from:t.address,to:i.address,gasPrice:B.gasFee,amount:n.toString()});B.loadingQuote=!1;const r=o?.quotes?.[0]?.toAmount;if(!r)return void E.B.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const a=v.C.bigNumber(r).div(10**i.decimals).toString();D.setToTokenAmount(a),D.hasInsufficientToken(B.sourceTokenAmount,t.address)?B.inputError="Insufficient balance":(B.inputError=void 0,D.setTransactionDetails())}catch(r){const e=yield P.n.handleSwapError(r);B.loadingQuote=!1,B.inputError=e||"Insufficient balance"}})(),getTransaction:()=>(0,o.Z)(function*(){const{fromCaipAddress:e,availableToSwap:t}=D.getParams(),i=B.sourceToken;if(e&&t&&i&&B.toToken&&!B.loadingQuote)try{let t;return B.loadingBuildTransaction=!0,t=(yield P.n.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:B.sourceTokenAmount,sourceTokenDecimals:i.decimals}))?yield D.createSwapTransaction():yield D.createAllowanceTransaction(),B.loadingBuildTransaction=!1,B.fetchError=!1,t}catch{return p.P.goBack(),y.K.showError("Failed to check allowance"),B.loadingBuildTransaction=!1,B.approvalTransaction=void 0,B.swapTransaction=void 0,void(B.fetchError=!0)}})(),createAllowanceTransaction:()=>(0,o.Z)(function*(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=D.getParams();if(e&&i){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=yield N.L.generateApproveCalldata({from:t,to:i,userAddress:e}),n=A.j.getPlainAddress(o.tx.from);if(!n)throw new Error("SwapController:createAllowanceTransaction - address is required");const r={data:o.tx.data,to:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:B.toTokenAmount};return B.swapTransaction=void 0,B.approvalTransaction={data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount},{data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount}}catch{return p.P.goBack(),y.K.showError("Failed to create approval transaction"),B.approvalTransaction=void 0,B.swapTransaction=void 0,void(B.fetchError=!0)}}})(),createSwapTransaction:()=>(0,o.Z)(function*(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=D.getParams(),o=B.sourceToken,n=B.toToken;if(!(t&&i&&o&&n))return;const r=h.l.parseUnits(i,o.decimals)?.toString();try{const i=yield N.L.generateSwapCalldata({userAddress:t,from:o.address,to:n.address,amount:r,disableEstimate:!0}),a=o.address===e,s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice),l=A.j.getPlainAddress(i.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:i.tx.data,to:l,gas:s,gasPrice:c,value:BigInt(a?r??"0":"0"),toAmount:B.toTokenAmount};return B.gasPriceInUSD=I.getGasPriceInUSD(B.networkPrice,s,c),B.approvalTransaction=void 0,B.swapTransaction=d,d}catch{return p.P.goBack(),y.K.showError("Failed to create transaction"),B.approvalTransaction=void 0,B.swapTransaction=void 0,void(B.fetchError=!0)}})(),onEmbeddedWalletApprovalSuccess(){y.K.showLoading("Approve limit increase in your wallet"),p.P.replace("SwapPreview")},sendTransactionForApproval:e=>(0,o.Z)(function*(){const{fromAddress:t,isAuthConnector:i}=D.getParams();B.loadingApprovalTransaction=!0,i?p.P.pushTransactionStack({onSuccess:D.onEmbeddedWalletApprovalSuccess}):y.K.showLoading("Approve limit increase in your wallet");try{yield h.l.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:k.b.CHAIN.EVM}),yield D.swapTokens(),yield D.getTransaction(),B.approvalTransaction=void 0,B.loadingApprovalTransaction=!1}catch(o){const e=o;B.transactionError=e?.displayMessage,B.loadingApprovalTransaction=!1,y.K.showError(e?.displayMessage||"Transaction error"),R.X.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:l.R.state.activeCaipNetwork.caipNetworkId||"",swapFromToken:D.state.sourceToken?.symbol||"",swapToToken:D.state.toToken?.symbol||"",swapFromAmount:D.state.sourceTokenAmount||"",swapToAmount:D.state.toTokenAmount||"",isSmartAccount:(0,C.r9)(k.b.CHAIN.EVM)===x.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}})(),sendTransactionForSwap:e=>(0,o.Z)(function*(){if(!e)return;const{fromAddress:t,toTokenAmount:i,isAuthConnector:o}=D.getParams();B.loadingTransaction=!0;const n=`Swapping ${B.sourceToken?.symbol} to ${v.C.formatNumberToLocalString(i,3)} ${B.toToken?.symbol}`,r=`Swapped ${B.sourceToken?.symbol} to ${v.C.formatNumberToLocalString(i,3)} ${B.toToken?.symbol}`;o?p.P.pushTransactionStack({onSuccess(){p.P.replace("Account"),y.K.showLoading(n),_.resetState()}}):y.K.showLoading("Confirm transaction in your wallet");try{const i=[B.sourceToken?.address,B.toToken?.address].join(","),n=yield h.l.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:k.b.CHAIN.EVM});return B.loadingTransaction=!1,y.K.showSuccess(r),R.X.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:l.R.state.activeCaipNetwork.caipNetworkId||"",swapFromToken:D.state.sourceToken?.symbol||"",swapToToken:D.state.toToken?.symbol||"",swapFromAmount:D.state.sourceTokenAmount||"",swapToAmount:D.state.toTokenAmount||"",isSmartAccount:(0,C.r9)(k.b.CHAIN.EVM)===x.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.resetState(),o||p.P.replace("Account"),_.getMyTokensWithBalance(i),n}catch(a){const e=a;return B.transactionError=e?.displayMessage,B.loadingTransaction=!1,y.K.showError(e?.displayMessage||"Transaction error"),void R.X.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:l.R.state.activeCaipNetwork.caipNetworkId||"",swapFromToken:D.state.sourceToken?.symbol||"",swapToToken:D.state.toToken?.symbol||"",swapFromAmount:D.state.sourceTokenAmount||"",swapToAmount:D.state.toTokenAmount||"",isSmartAccount:(0,C.r9)(k.b.CHAIN.EVM)===x.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}})(),hasInsufficientToken:(e,t)=>I.isInsufficientSourceTokenForSwap(e,t,B.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=D.getParams();!e||!t||(B.gasPriceInUSD=I.getGasPriceInUSD(B.networkPrice,BigInt(B.gasFee),BigInt(15e4)),B.priceImpact=I.getPriceImpact({sourceTokenAmount:B.sourceTokenAmount,sourceTokenPriceInUSD:B.sourceTokenPriceInUSD,toTokenPriceInUSD:B.toTokenPriceInUSD,toTokenAmount:B.toTokenAmount}),B.maxSlippage=I.getMaxSlippage(B.slippage,B.toTokenAmount),B.providerFee=I.getProviderFee(B.sourceTokenAmount))}},D=(0,$.P)(_);var U=i(86499),W=i(61831),z=i(35896),j=i(17139),L=j.iv`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;let F=class extends n.oi{render(){return n.dy`<slot></slot>`}};F.styles=[W.ET,L],F=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,z.M)("wui-card")],F),i(48360),i(13614),i(13105),i(13071);var M=j.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`,q=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const V={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let K=class extends n.oi{constructor(){super(...arguments),this.message="",this.type="info"}render(){return n.dy`
      <wui-flex
        data-type=${(0,a.o)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${V[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){E.B.close()}};K.styles=[W.ET,M],q([(0,r.Cb)()],K.prototype,"message",void 0),q([(0,r.Cb)()],K.prototype,"type",void 0),K=q([(0,z.M)("wui-alertbar")],K);var H=U.iv`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`,G=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Q={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let Z=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.open=E.B.state.open,this.onOpen(!0),this.unsubscribe.push(E.B.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=E.B.state,i=Q[t];return n.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Z.styles=H,G([(0,r.SB)()],Z.prototype,"open",void 0),Z=G([(0,U.Mo)("w3m-alertbar")],Z);var Y=i(14568),X=i(92809),J=j.iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ee=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let te=class extends n.oi{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return n.dy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,a.o)(this.iconSize)}></wui-icon>
    </button>`}};te.styles=[W.ET,W.ZM,J],ee([(0,r.Cb)()],te.prototype,"icon",void 0),ee([(0,r.Cb)()],te.prototype,"variant",void 0),ee([(0,r.Cb)()],te.prototype,"type",void 0),ee([(0,r.Cb)()],te.prototype,"size",void 0),ee([(0,r.Cb)()],te.prototype,"iconSize",void 0),ee([(0,r.Cb)({type:Boolean})],te.prototype,"fullWidth",void 0),ee([(0,r.Cb)({type:Boolean})],te.prototype,"disabled",void 0),te=ee([(0,z.M)("wui-icon-button")],te),i(36680);var ie=j.iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`,oe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const ne={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},re={lg:"lg",md:"md",sm:"sm"};let ae=class extends n.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return n.dy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){return this.text?n.dy`<wui-text color="primary" variant=${ne[this.size]}>${this.text}</wui-text>`:null}imageTemplate(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:n.dy` <wui-flex class="left-icon-container">
      <wui-icon size=${re[this.size]} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};ae.styles=[W.ET,W.ZM,ie],oe([(0,r.Cb)()],ae.prototype,"imageSrc",void 0),oe([(0,r.Cb)()],ae.prototype,"text",void 0),oe([(0,r.Cb)()],ae.prototype,"size",void 0),oe([(0,r.Cb)()],ae.prototype,"type",void 0),oe([(0,r.Cb)({type:Boolean})],ae.prototype,"disabled",void 0),ae=oe([(0,z.M)("wui-select")],ae),i(24348),i(16105);const se={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!=typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};i(60898),i(59174);var ce=j.iv`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`,le=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let de=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return n.dy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};de.styles=[W.ET,W.ZM,ce],le([(0,r.Cb)()],de.prototype,"size",void 0),le([(0,r.Cb)({type:Boolean})],de.prototype,"disabled",void 0),le([(0,r.Cb)()],de.prototype,"icon",void 0),le([(0,r.Cb)()],de.prototype,"iconColor",void 0),le([(0,r.Cb)()],de.prototype,"variant",void 0),de=le([(0,z.M)("wui-icon-link")],de),i(13171),i(64508);const ue=n.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var pe=i(56192);const he=n.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;var me=j.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,ge=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let we=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:he,md:pe.W,lg:ue},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${{sm:"4",md:"6",lg:"10"}[this.size]});\n    `,n.dy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:n.dy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};we.styles=[W.ET,me],ge([(0,r.Cb)()],we.prototype,"size",void 0),ge([(0,r.Cb)()],we.prototype,"name",void 0),ge([(0,r.Cb)({type:Object})],we.prototype,"networkImagesBySize",void 0),ge([(0,r.Cb)()],we.prototype,"imageSrc",void 0),ge([(0,r.Cb)({type:Boolean})],we.prototype,"selected",void 0),ge([(0,r.Cb)({type:Boolean})],we.prototype,"round",void 0),we=ge([(0,z.M)("wui-network-image")],we);var ye=j.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`,fe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let be=class extends n.oi{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,n.dy`${this.template()}`}template(){return this.text?n.dy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};be.styles=[W.ET,ye],fe([(0,r.Cb)()],be.prototype,"text",void 0),fe([(0,r.Cb)()],be.prototype,"bgColor",void 0),be=fe([(0,z.M)("wui-separator")],be),i(67013);var ve=i(32750),ke=i(33726);const xe={INVALID_PAYMENT_CONFIG:"Invalid payment configuration",INVALID_RECIPIENT:"Invalid recipient address",INVALID_ASSET:"Invalid asset specified",INVALID_AMOUNT:"Invalid payment amount",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"Invalid recipient address for the asset selected",UNKNOWN_ERROR:"Unknown payment error occurred",UNABLE_TO_INITIATE_PAYMENT:"Unable to initiate payment",INVALID_CHAIN_NAMESPACE:"Invalid chain namespace",GENERIC_PAYMENT_ERROR:"Unable to process payment",UNABLE_TO_GET_EXCHANGES:"Unable to get exchanges",ASSET_NOT_SUPPORTED:"Asset not supported by the selected exchange",UNABLE_TO_GET_PAY_URL:"Unable to get payment URL",UNABLE_TO_GET_BUY_STATUS:"Unable to get buy status",UNABLE_TO_GET_TOKEN_BALANCES:"Unable to get token balances",UNABLE_TO_GET_QUOTE:"Unable to get quote. Please choose a different token",UNABLE_TO_GET_QUOTE_STATUS:"Unable to get quote status"};class Se extends Error{get message(){return xe[this.code]}constructor(e,t){super(xe[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,Se)}}var Ce=i(44329);const Te="reown_test";var Ae=i(64817),Pe=i(65023);function Ie(){return(Ie=(0,o.Z)(function*(e,t,i){if(t!==k.b.CHAIN.EVM)throw new Se("INVALID_CHAIN_NAMESPACE");if(!i.fromAddress)throw new Se("INVALID_PAYMENT_CONFIG","fromAddress is required for native EVM payments.");const o="string"==typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(o))throw new Se("INVALID_PAYMENT_CONFIG");const n=e.metadata?.decimals??18,r=h.l.parseUnits(o.toString(),n);if("bigint"!=typeof r)throw new Se("GENERIC_PAYMENT_ERROR");return(yield h.l.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:r,data:"0x"}))??void 0})).apply(this,arguments)}function $e(){return($e=(0,o.Z)(function*(e,t){if(!t.fromAddress)throw new Se("INVALID_PAYMENT_CONFIG","fromAddress is required for ERC20 EVM payments.");const i=e.asset,o=t.recipient,n=Number(e.metadata.decimals),r=h.l.parseUnits(t.amount.toString(),n);if(void 0===r)throw new Se("GENERIC_PAYMENT_ERROR");return(yield h.l.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[o,r],method:"transfer",abi:Ae.g.getERC20Abi(i),chainNamespace:k.b.CHAIN.EVM}))??void 0})).apply(this,arguments)}function Ee(){return(Ee=(0,o.Z)(function*(e,t){if(e!==k.b.CHAIN.SOLANA)throw new Se("INVALID_CHAIN_NAMESPACE");if(!t.fromAddress)throw new Se("INVALID_PAYMENT_CONFIG","fromAddress is required for Solana payments.");const i="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new Se("INVALID_PAYMENT_CONFIG","Invalid payment amount.");try{if(!Pe.O.getProvider(e))throw new Se("GENERIC_PAYMENT_ERROR","No Solana provider available.");const o=yield h.l.sendTransaction({chainNamespace:k.b.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!o)throw new Se("GENERIC_PAYMENT_ERROR","Transaction failed.");return o}catch(o){throw o instanceof Se?o:new Se("GENERIC_PAYMENT_ERROR",`Solana payment failed: ${o}`)}})).apply(this,arguments)}function Ne(e){return Re.apply(this,arguments)}function Re(){return(Re=(0,o.Z)(function*({sourceToken:e,toToken:t,amount:i,recipient:o}){const n=h.l.parseUnits(i,e.metadata.decimals),r=h.l.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:it,origin:{amount:n?.toString()??"0",currency:e},destination:{amount:r?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:it,type:"deposit",deposit:{amount:n?.toString()??"0",currency:e.asset,receiver:o}}],timeInSeconds:6})})).apply(this,arguments)}function Oe(e){if(!e)return null;const t=e.steps[0];return t&&t.type===ot?t:null}function Be(e,t=0){if(!e)return[];const i=e.steps.filter(e=>e.type===nt),o=i.filter((e,i)=>i+1>t);return i.length>0&&i.length<3?o:[]}const _e=new Ce.V({baseUrl:A.j.getApiUrl(),clientId:null});class De extends Error{}function Ue(){return`https://rpc.walletconnect.org/v1/json-rpc?projectId=${s.h.getSnapshot().projectId}`}function We(){const{projectId:e,sdkType:t,sdkVersion:i}=s.h.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}function ze(e,t){return je.apply(this,arguments)}function je(){return(je=(0,o.Z)(function*(e,t){const i=Ue(),{sdkType:o,sdkVersion:n,projectId:r}=s.h.getSnapshot(),a={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:o,sv:n,projectId:r}},c=yield(yield fetch(i,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}})).json();if(c.error)throw new De(c.error.message);return c})).apply(this,arguments)}function Le(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=(0,o.Z)(function*(e){return(yield ze("reown_getExchanges",e)).result})).apply(this,arguments)}function Me(e){return qe.apply(this,arguments)}function qe(){return(qe=(0,o.Z)(function*(e){return(yield ze("reown_getExchangePayUrl",e)).result})).apply(this,arguments)}function Ve(){return(Ve=(0,o.Z)(function*(e){return(yield ze("reown_getExchangeBuyStatus",e)).result})).apply(this,arguments)}function Ke(e){return He.apply(this,arguments)}function He(){return(He=(0,o.Z)(function*(e){const t=v.C.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:o}=ve.u.parseCaipNetworkId(e.sourceToken.network),{chainId:n,chainNamespace:r}=ve.u.parseCaipNetworkId(e.toToken.network),a="native"===e.sourceToken.asset?(0,C.rG)(o):e.sourceToken.asset,s="native"===e.toToken.asset?(0,C.rG)(r):e.toToken.asset;return yield _e.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:a,destinationChainId:n.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:We()})})).apply(this,arguments)}function Ge(){return(Ge=(0,o.Z)(function*(e){const t=ke.g.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=ke.g.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?Ne(e):Ke(e)})).apply(this,arguments)}function Qe(){return(Qe=(0,o.Z)(function*(e){return yield _e.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...We()}})})).apply(this,arguments)}function Ze(){return(Ze=(0,o.Z)(function*(e){return yield _e.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:We()})})).apply(this,arguments)}const Ye=["eip155","solana"],Xe={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function Je(e,t){const{chainNamespace:i,chainId:o}=ve.u.parseCaipNetworkId(e),n=Xe[i];if(!n)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let r=n.native.assetNamespace,a=n.native.assetReference;return"native"!==t&&(r=n.defaultTokenNamespace,a=t),`${i}:${o}/${r}:${a}`}function et(e){const t=v.C.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const tt="unknown",it="direct-transfer",ot="deposit",nt="transaction",rt=(0,f.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[k.b.CHAIN.EVM]:[],[k.b.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),at={state:rt,subscribe:e=>(0,f.Ld)(rt,()=>e(rt)),subscribeKey:(e,t)=>(0,b.VW)(rt,e,t),handleOpenPay(e){var t=this;return(0,o.Z)(function*(){t.resetState(),t.setPaymentConfig(e),t.initializeAnalytics(),function(){const{chainNamespace:e}=ve.u.parseCaipNetworkId(at.state.paymentAsset.network);if(!A.j.isAddress(at.state.recipient,e))throw new Se("INVALID_RECIPIENT_ADDRESS_FOR_ASSET",`Provide valid recipient address for namespace "${e}"`)}(),yield t.prepareTokenLogo(),rt.isConfigured=!0,R.X.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:rt.exchanges,configuration:{network:rt.paymentAsset.network,asset:rt.paymentAsset.asset,recipient:rt.recipient,amount:rt.amount}}}),yield c.I.open({view:"Pay"})})()},resetState(){rt.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},rt.recipient="0x0",rt.amount=0,rt.isConfigured=!1,rt.error=null,rt.isPaymentInProgress=!1,rt.isLoading=!1,rt.currentPayment=void 0,rt.selectedExchange=void 0,rt.exchangeUrlForQuote=void 0,rt.requestId=void 0},resetQuoteState(){rt.quote=void 0,rt.quoteStatus="waiting",rt.quoteError=null,rt.isFetchingQuote=!1,rt.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new Se("INVALID_PAYMENT_CONFIG");try{rt.choice=e.choice??"pay",rt.paymentAsset=e.paymentAsset,rt.recipient=e.recipient,rt.amount=e.amount,rt.openInNewTab=e.openInNewTab??!0,rt.redirectUrl=e.redirectUrl,rt.payWithExchange=e.payWithExchange,rt.error=null}catch(t){throw new Se("INVALID_PAYMENT_CONFIG",t.message)}},setSelectedPaymentAsset(e){rt.selectedPaymentAsset=e},setSelectedExchange(e){rt.selectedExchange=e},setRequestId(e){rt.requestId=e},setPaymentInProgress(e){rt.isPaymentInProgress=e},getPaymentAsset:()=>rt.paymentAsset,getExchanges:()=>rt.exchanges,fetchExchanges:()=>(0,o.Z)(function*(){try{rt.isLoading=!0;const e=yield Le({page:0});rt.exchanges=e.exchanges.slice(0,2)}catch{throw y.K.showError(xe.UNABLE_TO_GET_EXCHANGES),new Se("UNABLE_TO_GET_EXCHANGES")}finally{rt.isLoading=!1}})(),getAvailableExchanges:e=>(0,o.Z)(function*(){try{const t=e?.asset&&e?.network?Je(e.network,e.asset):void 0;return yield Le({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch{throw new Se("UNABLE_TO_GET_EXCHANGES")}})(),getPayUrl(e,t,i=!1){var n=this;return(0,o.Z)(function*(){try{const o=Number(t.amount),r=yield Me({exchangeId:e,asset:Je(t.network,t.asset),amount:o.toString(),recipient:`${t.network}:${t.recipient}`});return R.X.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(n.initiatePayment(),R.X.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:rt.paymentId||tt,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(o){throw o instanceof Error&&o.message.includes("is not supported")?new Se("ASSET_NOT_SUPPORTED"):new Error(o.message)}})()},generateExchangeUrlForQuote:({exchangeId:e,paymentAsset:t,amount:i,recipient:n})=>(0,o.Z)(function*(){const o=yield Me({exchangeId:e,asset:Je(t.network,t.asset),amount:i.toString(),recipient:n});rt.exchangeSessionId=o.sessionId,rt.exchangeUrlForQuote=o.url})(),openPayUrl(e,t,i=!1){var n=this;return(0,o.Z)(function*(){try{const o=yield n.getPayUrl(e.exchangeId,t,i);if(!o)throw new Se("UNABLE_TO_GET_PAY_URL");return A.j.openHref(o.url,e.openInNewTab??1?"_blank":"_self"),o}catch(o){throw rt.error=o instanceof Se?o.message:xe.GENERIC_PAYMENT_ERROR,new Se("UNABLE_TO_GET_PAY_URL")}})()},onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:n,paymentAsset:r}){var a=this;return(0,o.Z)(function*(){if(rt.currentPayment={type:"wallet",status:"IN_PROGRESS"},!rt.isPaymentInProgress)try{a.initiatePayment();const o=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===r.network);if(!o)throw new Error("Target network not found");switch(ke.g.isLowerCaseMatch(l.R.state.activeCaipNetwork?.caipNetworkId,o.caipNetworkId)||(yield l.R.switchActiveNetwork(o)),e){case k.b.CHAIN.EVM:"native"===r.asset&&(rt.currentPayment.result=yield function(e,t,i){return Ie.apply(this,arguments)}(r,e,{recipient:i,amount:n,fromAddress:t})),r.asset.startsWith("0x")&&(rt.currentPayment.result=yield function(e,t){return $e.apply(this,arguments)}(r,{recipient:i,amount:n,fromAddress:t})),rt.currentPayment.status="SUCCESS";break;case k.b.CHAIN.SOLANA:rt.currentPayment.result=yield function(e,t){return Ee.apply(this,arguments)}(e,{recipient:i,amount:n,fromAddress:t,tokenMint:"native"===r.asset?void 0:r.asset}),rt.currentPayment.status="SUCCESS";break;default:throw new Se("INVALID_CHAIN_NAMESPACE")}}catch(o){throw rt.error=o instanceof Se?o.message:xe.GENERIC_PAYMENT_ERROR,rt.currentPayment.status="FAILED",y.K.showError(rt.error),o}finally{rt.isPaymentInProgress=!1}})()},onSendTransaction:e=>(0,o.Z)(function*(){try{const{namespace:t,transactionStep:i}=e;at.initiatePayment();const o=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===rt.paymentAsset?.network);if(!o)throw new Error("Target network not found");if(ke.g.isLowerCaseMatch(l.R.state.activeCaipNetwork?.caipNetworkId,o.caipNetworkId)||(yield l.R.switchActiveNetwork(o)),t===k.b.CHAIN.EVM){const{from:e,to:o,data:n,value:r}=i.transaction;yield h.l.sendTransaction({address:e,to:o,data:n,value:BigInt(r),chainNamespace:t})}else if(t===k.b.CHAIN.SOLANA){const{instructions:e}=i.transaction;yield h.l.writeSolanaTransaction({instructions:e})}}catch(t){throw rt.error=t instanceof Se?t.message:xe.GENERIC_PAYMENT_ERROR,y.K.showError(rt.error),t}finally{rt.isPaymentInProgress=!1}})(),getExchangeById:e=>rt.exchanges.find(t=>t.id===e),validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:o}=e;if(!t)throw new Se("INVALID_PAYMENT_CONFIG");if(!i)throw new Se("INVALID_RECIPIENT");if(!t.asset)throw new Se("INVALID_ASSET");if(null==o||o<=0)throw new Se("INVALID_AMOUNT")},handlePayWithExchange(e){var t=this;return(0,o.Z)(function*(){try{rt.currentPayment={type:"exchange",exchangeId:e};const{network:i,asset:o}=rt.paymentAsset,n={network:i,asset:o,amount:rt.amount,recipient:rt.recipient},r=yield t.getPayUrl(e,n);if(!r)throw new Se("UNABLE_TO_INITIATE_PAYMENT");return rt.currentPayment.sessionId=r.sessionId,rt.currentPayment.status="IN_PROGRESS",rt.currentPayment.exchangeId=e,t.initiatePayment(),{url:r.url,openInNewTab:rt.openInNewTab}}catch(i){return rt.error=i instanceof Se?i.message:xe.GENERIC_PAYMENT_ERROR,rt.isPaymentInProgress=!1,y.K.showError(rt.error),null}})()},getBuyStatus:(e,t)=>(0,o.Z)(function*(){try{const i=yield function(e){return Ve.apply(this,arguments)}({sessionId:t,exchangeId:e});return("SUCCESS"===i.status||"FAILED"===i.status)&&R.X.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?A.j.parseError(rt.error):void 0,source:"pay",paymentId:rt.paymentId||tt,configuration:{network:rt.paymentAsset.network,asset:rt.paymentAsset.asset,recipient:rt.recipient,amount:rt.amount},currentPayment:{type:"exchange",exchangeId:rt.currentPayment?.exchangeId,sessionId:rt.currentPayment?.sessionId,result:i.txHash}}}),i}catch{throw new Se("UNABLE_TO_GET_BUY_STATUS")}})(),fetchTokensFromEOA:({caipAddress:e,caipNetwork:t,namespace:i})=>(0,o.Z)(function*(){if(!e)return[];const{address:o}=ve.u.parseCaipAddress(e);let n=t;return i===k.b.CHAIN.EVM&&(n=void 0),yield S.Q.getMyTokensWithBalance({address:o,caipNetwork:n})})(),fetchTokensFromExchange:()=>(0,o.Z)(function*(){if(!rt.selectedExchange)return[];const e=yield function(e){return Ze.apply(this,arguments)}(rt.selectedExchange.id),t=Object.values(e.assets).flat();return yield Promise.all(t.map(function(){var e=(0,o.Z)(function*(e){const t=function(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}}}(e),{chainNamespace:i}=ve.u.parseCaipNetworkId(t.chainId);let o=t.address;if(A.j.isCaipAddress(o)){const{address:e}=ve.u.parseCaipAddress(o);o=e}const n=yield Y.f.getImageByToken(o??"",i).catch(()=>{});return t.iconUrl=n??"",t});return function(t){return e.apply(this,arguments)}}()))})(),fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){var n=this;return(0,o.Z)(function*(){try{rt.isFetchingTokenBalances=!0;const o=yield Boolean(rt.selectedExchange)?n.fetchTokensFromExchange():n.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i});rt.tokenBalances={...rt.tokenBalances,[i]:o}}catch(o){const e=o instanceof Error?o.message:"Unable to get token balances";y.K.showError(e)}finally{rt.isFetchingTokenBalances=!1}})()},fetchQuote:({amount:e,address:t,sourceToken:i,toToken:n,recipient:r})=>(0,o.Z)(function*(){try{at.resetQuoteState(),rt.isFetchingQuote=!0;const o=yield function(e){return Ge.apply(this,arguments)}({amount:e,address:rt.selectedExchange?void 0:t,sourceToken:i,toToken:n,recipient:r});if(rt.selectedExchange){const e=Oe(o);if(e){const t=`${i.network}:${e.deposit.receiver}`,o=v.C.formatNumber(e.deposit.amount,{decimals:i.metadata.decimals??0,round:8});yield at.generateExchangeUrlForQuote({exchangeId:rt.selectedExchange.id,paymentAsset:i,amount:o.toString(),recipient:t})}}rt.quote=o}catch(o){let e=xe.UNABLE_TO_GET_QUOTE;if(o instanceof Error&&o.cause&&o.cause instanceof Response)try{const t=yield o.cause.json();t.error&&"string"==typeof t.error&&(e=t.error)}catch{}throw rt.quoteError=e,y.K.showError(e),new Se("UNABLE_TO_GET_QUOTE")}finally{rt.isFetchingQuote=!1}})(),fetchQuoteStatus({requestId:e}){var t=this;return(0,o.Z)(function*(){try{if(e===it){const e=rt.selectedExchange,i=rt.exchangeSessionId;if(e&&i){switch((yield t.getBuyStatus(e.id,i)).status){case"IN_PROGRESS":case"UNKNOWN":default:rt.quoteStatus="waiting";break;case"SUCCESS":rt.quoteStatus="success",rt.isPaymentInProgress=!1;break;case"FAILED":rt.quoteStatus="failure",rt.isPaymentInProgress=!1}return}return void(rt.quoteStatus="success")}const{status:i}=yield function(e){return Qe.apply(this,arguments)}({requestId:e});rt.quoteStatus=i}catch{throw rt.quoteStatus="failure",new Se("UNABLE_TO_GET_QUOTE_STATUS")}})()},initiatePayment(){rt.isPaymentInProgress=!0,rt.paymentId=crypto.randomUUID()},initializeAnalytics(){rt.analyticsSet||(rt.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{rt.currentPayment?.status&&"UNKNOWN"!==rt.currentPayment.status&&R.X.sendEvent({type:"track",event:{IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[rt.currentPayment.status],properties:{message:"FAILED"===rt.currentPayment.status?A.j.parseError(rt.error):void 0,source:"pay",paymentId:rt.paymentId||tt,configuration:{network:rt.paymentAsset.network,asset:rt.paymentAsset.asset,recipient:rt.recipient,amount:rt.amount},currentPayment:{type:rt.currentPayment.type,exchangeId:rt.currentPayment.exchangeId,sessionId:rt.currentPayment.sessionId,result:rt.currentPayment.result}}})}))},prepareTokenLogo:()=>(0,o.Z)(function*(){if(!rt.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=ve.u.parseCaipNetworkId(rt.paymentAsset.network),t=yield Y.f.getImageByToken(rt.paymentAsset.asset,e);rt.paymentAsset.metadata.logoURI=t}catch{}})()};var st=U.iv`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`,ct=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let lt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.amount=at.state.amount,this.namespace=void 0,this.paymentAsset=at.state.paymentAsset,this.activeConnectorIds=d.A.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=at.state.exchanges,this.isLoading=at.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(at.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(d.A.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(at.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(at.subscribeKey("isLoading",e=>this.isLoading=e)),at.fetchExchanges(),at.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return n.dy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){const e=l.R.state.activeChain;this.namespace=e,this.caipAddress=l.R.getAccountData(e)?.caipAddress,this.unsubscribe.push(l.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){const e=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${et(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,a.o)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,a.o)(Y.f.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=ve.u.parseCaipNetworkId(e);return Ye.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():n.dy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return n.dy`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,a.o)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return n.dy`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return n.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter(e=>function(e){const t=l.R.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.network);return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===Te:e.id!==Te);return 0===e.length?n.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>n.dy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,a.o)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return n.dy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}onWalletPayment(){var e=this;return(0,o.Z)(function*(){if(!e.namespace)throw new Error("Namespace not found");e.caipAddress?p.P.push("PayQuote"):(yield d.A.connect(),yield c.I.open({view:"PayQuote"}))})()}onExchangePayment(e){at.setSelectedExchange(e),p.P.push("PayQuote")}onDisconnect(){return(0,o.Z)(function*(){try{yield h.l.disconnect(),yield c.I.open({view:"Pay"})}catch{console.error("Failed to disconnect"),y.K.showError("Failed to disconnect")}})()}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=d.A.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=Y.f.getConnectorImage(i);return{name:i.name,image:o}}};lt.styles=st,ct([(0,r.SB)()],lt.prototype,"amount",void 0),ct([(0,r.SB)()],lt.prototype,"namespace",void 0),ct([(0,r.SB)()],lt.prototype,"paymentAsset",void 0),ct([(0,r.SB)()],lt.prototype,"activeConnectorIds",void 0),ct([(0,r.SB)()],lt.prototype,"caipAddress",void 0),ct([(0,r.SB)()],lt.prototype,"exchanges",void 0),ct([(0,r.SB)()],lt.prototype,"isLoading",void 0),lt=ct([(0,U.Mo)("w3m-pay-view")],lt);var dt=i(7294),ut=j.iv`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`,pt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const ht={"accent-primary":j.gR.tokens.core.backgroundAccentPrimary};let mt=class extends n.oi{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${ht[this.variant]};\n      --pulse-opacity: ${this.opacity};\n    `;const e=Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings));return n.dy`
      <div class="pulse-container">
        <div class="pulse-rings">${e}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){return n.dy`<div class="pulse-ring" style=${`animation-delay: ${e/t*this.duration}s;`}></div>`}};mt.styles=[W.ET,ut],pt([(0,r.Cb)({type:Number})],mt.prototype,"rings",void 0),pt([(0,r.Cb)({type:Number})],mt.prototype,"duration",void 0),pt([(0,r.Cb)({type:Number})],mt.prototype,"opacity",void 0),pt([(0,r.Cb)()],mt.prototype,"size",void 0),pt([(0,r.Cb)()],mt.prototype,"variant",void 0),mt=pt([(0,z.M)("wui-pulse")],mt);const gt=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],wt=["success","submitted","failure","timeout","refund"];var yt=U.iv`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`,ft=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const bt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let vt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=at.state.paymentAsset,this.quoteStatus=at.state.quoteStatus,this.quote=at.state.quote,this.amount=at.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=d.A.state.activeConnectorIds,this.selectedExchange=at.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(at.subscribeKey("quoteStatus",e=>this.quoteStatus=e),at.subscribeKey("quote",e=>this.quote=e),d.A.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),at.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return n.dy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=et(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",i=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return"success"===this.quoteStatus||"submitted"===this.quoteStatus?n.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?n.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:n.dy`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,a.o)(Y.f.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return n.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return n.dy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?n.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `:"success"===this.quoteStatus||"submitted"===this.quoteStatus?n.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `:n.dy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${this.quote?.timeInSeconds??0} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){const e=l.R.getAllRequestedCaipNetworks().find(e=>{const t=this.quote?.origin.currency.network;if(!t)return!1;const{chainId:i}=ve.u.parseCaipNetworkId(t);return ke.g.isLowerCaseMatch(e.id.toString(),i.toString())}),t=et(v.C.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString());return n.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${this.quote?.origin.currency.metadata.symbol??"Unknown"}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,a.o)(Y.f.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return n.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){const{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?ve.u.parseCaipAddress(this.caipAddress):{},i=this.selectedExchange?.name;return this.selectedExchange?n.dy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${i}</wui-text>
          <wui-image src=${(0,a.o)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:n.dy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${U.Hg.getTruncateString({string:this.profileName||t||i||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,a.o)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return gt.map("failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?e=>({...e,status:"failed"}):e=>{const t=(bt[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}})}renderStep({title:e,icon:t,status:i}){return n.dy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,dt.$)({"step-icon-box":!0,success:"completed"===i})}>
            ${this.renderStatusIndicator(i)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?n.dy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?n.dy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?n.dy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}fetchQuoteStatus(){var e=this;return(0,o.Z)(function*(){const t=at.state.requestId;if(!t||wt.includes(e.quoteStatus))e.stopPolling();else try{yield at.fetchQuoteStatus({requestId:t}),wt.includes(e.quoteStatus)&&e.stopPolling()}catch{e.stopPolling()}})()}initializeNamespace(){const e=l.R.state.activeChain;this.namespace=e,this.caipAddress=l.R.getAccountData(e)?.caipAddress,this.profileName=l.R.getAccountData(e)?.profileName??null,this.unsubscribe.push(l.R.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=d.A.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=Y.f.getConnectorImage(i);return{name:i.name,image:o}}};vt.styles=yt,ft([(0,r.SB)()],vt.prototype,"paymentAsset",void 0),ft([(0,r.SB)()],vt.prototype,"quoteStatus",void 0),ft([(0,r.SB)()],vt.prototype,"quote",void 0),ft([(0,r.SB)()],vt.prototype,"amount",void 0),ft([(0,r.SB)()],vt.prototype,"namespace",void 0),ft([(0,r.SB)()],vt.prototype,"caipAddress",void 0),ft([(0,r.SB)()],vt.prototype,"profileName",void 0),ft([(0,r.SB)()],vt.prototype,"activeConnectorIds",void 0),ft([(0,r.SB)()],vt.prototype,"selectedExchange",void 0),vt=ft([(0,U.Mo)("w3m-pay-loading-view")],vt);var kt=i(18504),xt=j.iv`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,St=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ct=class extends n.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return n.dy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?n.dy`<wui-icon
          size=${(0,a.o)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:n.dy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        ${this.enableGreenCircle?n.dy`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return n.dy`
      <wui-text variant="lg-regular" color="primary">
        ${kt.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return n.dy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Ct.styles=[W.ET,W.ZM,xt],St([(0,r.Cb)()],Ct.prototype,"address",void 0),St([(0,r.Cb)()],Ct.prototype,"profileName",void 0),St([(0,r.Cb)()],Ct.prototype,"alt",void 0),St([(0,r.Cb)()],Ct.prototype,"imageSrc",void 0),St([(0,r.Cb)()],Ct.prototype,"icon",void 0),St([(0,r.Cb)()],Ct.prototype,"iconSize",void 0),St([(0,r.Cb)({type:Boolean})],Ct.prototype,"enableGreenCircle",void 0),St([(0,r.Cb)({type:Boolean})],Ct.prototype,"loading",void 0),St([(0,r.Cb)({type:Number})],Ct.prototype,"charsStart",void 0),St([(0,r.Cb)({type:Number})],Ct.prototype,"charsEnd",void 0),Ct=St([(0,z.M)("wui-wallet-switch")],Ct),i(75705);var Tt=n.iv`
  :host {
    display: block;
  }
`;let At=class extends n.oi{render(){return n.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};At.styles=[Tt],At=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,U.Mo)("w3m-pay-fees-skeleton")],At);var Pt=U.iv`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,It=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $t=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.quote=at.state.quote,this.unsubscribe.push(at.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=v.C.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return n.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){const t="network"===e.id,i=v.C.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){const t=l.R.getAllRequestedCaipNetworks().find(t=>ke.g.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return n.dy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${i} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,a.o)(Y.f.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return n.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${i} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};$t.styles=[Pt],It([(0,r.SB)()],$t.prototype,"quote",void 0),$t=It([(0,U.Mo)("w3m-pay-fees")],$t);var Et=U.iv`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`,Nt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Rt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.selectedExchange=at.state.selectedExchange,this.unsubscribe.push(at.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Boolean(this.selectedExchange);return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:n.dy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};Rt.styles=[Et],Nt([(0,r.Cb)({type:Array})],Rt.prototype,"selectedExchange",void 0),Rt=Nt([(0,U.Mo)("w3m-pay-options-empty")],Rt);var Ot=U.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;let Bt=class extends n.oi{render(){return n.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Bt.styles=[Ot],Bt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,U.Mo)("w3m-pay-options-skeleton")],Bt);var _t=U.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,Dt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ut=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".pay-options-container")?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return n.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){const{network:t,metadata:i,asset:o,amount:r="0"}=e,s=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),c=`${t}:${o}`==`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,d=v.C.bigNumber(r,{safe:!0}),u=d.gt(0);return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,a.o)(i.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,a.o)(Y.f.getNetworkImage(s))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${i.symbol}</wui-text>
            ${u?n.dy`<wui-text variant="sm-regular" color="secondary">
                  ${d.round(6).toString()} ${i.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${c?n.dy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){const e=this.shadowRoot?.querySelector(".pay-options-container");e&&(e.scrollHeight>300?(e.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--options-scroll--top-opacity",U.kj.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",U.kj.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0")))}};Ut.styles=[_t],Dt([(0,r.Cb)({type:Array})],Ut.prototype,"options",void 0),Dt([(0,r.Cb)()],Ut.prototype,"selectedPaymentAsset",void 0),Dt([(0,r.Cb)()],Ut.prototype,"onSelect",void 0),Ut=Dt([(0,U.Mo)("w3m-pay-options")],Ut);var Wt=U.iv`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`,zt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const jt={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let Lt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=at.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=at.state.amount,this.recipient=at.state.recipient,this.activeConnectorIds=d.A.state.activeConnectorIds,this.selectedPaymentAsset=at.state.selectedPaymentAsset,this.selectedExchange=at.state.selectedExchange,this.isFetchingQuote=at.state.isFetchingQuote,this.quoteError=at.state.quoteError,this.quote=at.state.quote,this.isFetchingTokenBalances=at.state.isFetchingTokenBalances,this.tokenBalances=at.state.tokenBalances,this.isPaymentInProgress=at.state.isPaymentInProgress,this.exchangeUrlForQuote=at.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(at.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(at.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(at.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(d.A.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(at.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(at.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(at.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(at.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(at.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(at.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(at.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(at.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(at.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){const e=v.C.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return n.dy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?n.dy`<wui-text variant="lg-regular" color="primary">
                ${v.C.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:n.dy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const e=A.j.getPlainAddress(this.caipAddress)??"",{name:t,image:i}=this.getWalletProperties({namespace:this.namespace}),{icon:o,label:r}=jt[this.namespace]??{};return n.dy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,a.o)(this.profileName)}
          address=${(0,a.o)(e)}
          imageSrc=${(0,a.o)(i)}
          alt=${(0,a.o)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,a.o)(r)}
          address=${(0,a.o)(e)}
          icon=${(0,a.o)(o)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,a.o)(r)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){const e=l.R.state.activeChain;this.namespace=e,this.caipAddress=l.R.getAccountData(e)?.caipAddress,this.profileName=l.R.getAccountData(e)?.profileName??null,this.unsubscribe.push(l.R.subscribeChainProp("accountState",e=>this.onAccountStateChanged(e),e))}fetchTokens(){var e=this;return(0,o.Z)(function*(){if(e.namespace){let t;if(e.caipAddress){const{chainId:i,chainNamespace:o}=ve.u.parseCaipAddress(e.caipAddress),n=`${o}:${i}`;t=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===n)}yield at.fetchTokens({caipAddress:e.caipAddress,caipNetwork:t,namespace:e.namespace})}})()}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?ve.u.parseCaipAddress(this.caipAddress):{};at.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=d.A.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=Y.f.getConnectorImage(i);return{name:i.name,image:o}}paymentOptionsViewTemplate(){return n.dy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();return this.isFetchingTokenBalances?n.dy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`:0===e.length?n.dy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`:n.dy`<w3m-pay-options
      class=${(0,dt.$)({disabled:this.isFetchingQuote})}
      .options=${e}
      .selectedPaymentAsset=${(0,a.o)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?n.dy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:n.dy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){const e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),i=v.C.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?n.dy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:n.dy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:n.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?n.dy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:n.dy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${et(i)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=Be(this.quote),{isLoading:i,isDisabled:o}=e;let r="Pay";return t.length>1&&0===this.completedTransactionsCount&&(r="Approve"),n.dy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${o||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${r}
        ${i?null:n.dy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return function(e){const t=l.R.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId);let i=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(ke.g.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(A.j.isCaipAddress(i)){const{address:e}=ve.u.parseCaipAddress(i);i=e}else if(!i)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch{return null}}).filter(e=>Boolean(e)).filter(e=>{const{chainId:t}=ve.u.parseCaipNetworkId(e.network),{chainId:i}=ve.u.parseCaipNetworkId(this.paymentAsset.network);return!!ke.g.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||!this.selectedExchange||!ke.g.isLowerCaseMatch(t.toString(),i.toString())}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&at.setSelectedPaymentAsset(t)}onConnectOtherWallet(){return(0,o.Z)(function*(){yield d.A.connect(),yield c.I.open({view:"PayQuote"})})()}onAccountStateChanged(e){const{address:t}=this.caipAddress?ve.u.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){const{address:e}=this.caipAddress?ve.u.parseCaipAddress(this.caipAddress):{};e?ke.g.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):c.I.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||at.setSelectedPaymentAsset(e)}onTransfer(){var e=this;return(0,o.Z)(function*(){const t=Oe(e.quote);if(t){if(!ke.g.isLowerCaseMatch(e.selectedPaymentAsset?.asset,t.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const i=e.selectedPaymentAsset?.amount??"0",o=v.C.formatNumber(t.deposit.amount,{decimals:e.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!v.C.bigNumber(i).gte(o))return void y.K.showError("Insufficient funds");if(e.quote&&e.selectedPaymentAsset&&e.caipAddress&&e.namespace){const{address:i}=ve.u.parseCaipAddress(e.caipAddress);yield at.onTransfer({chainNamespace:e.namespace,fromAddress:i,toAddress:t.deposit.receiver,amount:o,paymentAsset:e.selectedPaymentAsset}),at.setRequestId(t.requestId),p.P.push("PayLoading")}}})()}onSendTransactions(){var e=this;return(0,o.Z)(function*(){const t=e.selectedPaymentAsset?.amount??"0",i=v.C.formatNumber(e.quote?.origin.amount??0,{decimals:e.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!v.C.bigNumber(t).gte(i))return void y.K.showError("Insufficient funds");const o=Be(e.quote),[n]=Be(e.quote,e.completedTransactionsCount);n&&e.namespace&&(yield at.onSendTransaction({namespace:e.namespace,transactionStep:n}),e.completedTransactionsCount+=1,e.completedTransactionsCount===o.length&&(at.setRequestId(n.requestId),p.P.push("PayLoading")))})()}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=A.j.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=Oe(this.quote);t&&at.setRequestId(t.requestId),at.initiatePayment(),p.P.push("PayLoading")}}resetAssetsState(){at.setSelectedPaymentAsset(null)}resetQuoteState(){at.resetQuoteState()}};Lt.styles=Wt,zt([(0,r.SB)()],Lt.prototype,"profileName",void 0),zt([(0,r.SB)()],Lt.prototype,"paymentAsset",void 0),zt([(0,r.SB)()],Lt.prototype,"namespace",void 0),zt([(0,r.SB)()],Lt.prototype,"caipAddress",void 0),zt([(0,r.SB)()],Lt.prototype,"amount",void 0),zt([(0,r.SB)()],Lt.prototype,"recipient",void 0),zt([(0,r.SB)()],Lt.prototype,"activeConnectorIds",void 0),zt([(0,r.SB)()],Lt.prototype,"selectedPaymentAsset",void 0),zt([(0,r.SB)()],Lt.prototype,"selectedExchange",void 0),zt([(0,r.SB)()],Lt.prototype,"isFetchingQuote",void 0),zt([(0,r.SB)()],Lt.prototype,"quoteError",void 0),zt([(0,r.SB)()],Lt.prototype,"quote",void 0),zt([(0,r.SB)()],Lt.prototype,"isFetchingTokenBalances",void 0),zt([(0,r.SB)()],Lt.prototype,"tokenBalances",void 0),zt([(0,r.SB)()],Lt.prototype,"isPaymentInProgress",void 0),zt([(0,r.SB)()],Lt.prototype,"exchangeUrlForQuote",void 0),zt([(0,r.SB)()],Lt.prototype,"completedTransactionsCount",void 0),Lt=zt([(0,U.Mo)("w3m-pay-quote-view")],Lt);var Ft=U.iv`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`,Mt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let qt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.paymentAsset=at.state.paymentAsset,this.amount=at.state.amount,this.unsubscribe.push(at.subscribeKey("paymentAsset",e=>{this.paymentAsset=e}),at.subscribeKey("amount",e=>{this.amount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=l.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return n.dy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,a.o)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};qt.styles=[Ft],Mt([(0,r.Cb)()],qt.prototype,"paymentAsset",void 0),Mt([(0,r.Cb)()],qt.prototype,"amount",void 0),qt=Mt([(0,U.Mo)("w3m-pay-header")],qt);var Vt=U.iv`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Kt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Ht=["SmartSessionList"],Gt={PayWithExchange:U.gR.tokens.theme.foregroundPrimary};function Qt(){const e=p.P.state.data.network.name,t=p.P.state.data.wallet.name??p.P.state.data.connector.name,i=d.A.getConnectors(),o=1===i.length&&"w3m-email"===i[0]?.id,n=l.R.getAccountData()?.socialProvider;return{Connect:`Connect ${o?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:t??"Connect Wallet",ConnectingWalletConnect:t??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:t?`Get ${t}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:e??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let Zt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.heading=Qt()[p.P.state.view],this.network=l.R.state.activeCaipNetwork,this.networkImage=Y.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=p.P.state.view,this.viewDirection="",this.unsubscribe.push(X.W.subscribeNetworkImages(()=>{this.networkImage=Y.f.getNetworkImage(this.network)}),p.P.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=Qt()[e]},se.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),l.R.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=Y.f.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.style.setProperty("--local-header-background-color",Gt[p.P.state.view]??U.gR.tokens.theme.backgroundPrimary),n.dy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){R.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),p.P.push("WhatIsAWallet")}onClose(){return(0,o.Z)(function*(){yield g.safeClose()})()}rightHeaderTemplate(){return"Account"===p.P.state.view&&s.h.state.features.smartSessions?n.dy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>p.P.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return n.dy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return n.dy`<w3m-pay-header></w3m-pay-header>`;const e=Ht.includes(this.view);return n.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?n.dy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=p.P.state,t="Connect"===e,i="ApproveTransaction"===e||"ConnectingSiwe"===e||t&&s.h.state.enableEmbedded;return"Account"===e&&s.h.state.enableNetworkSwitch?n.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.o)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!i?n.dy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:n.dy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(R.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.P.push("Networks"))}isAllowedNetworkSwitch(){const e=l.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onViewChange(){const{history:e}=p.P.state;let t=se.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=se.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}onHistoryChange(){var e=this;return(0,o.Z)(function*(){const{history:t}=p.P.state,i=e.shadowRoot?.querySelector("#dynamic");t.length>1&&!e.showBack&&i?(yield i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,e.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&e.showBack&&i&&(yield i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,e.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})()}onGoBack(){p.P.goBack()}};Zt.styles=Vt,Kt([(0,r.SB)()],Zt.prototype,"heading",void 0),Kt([(0,r.SB)()],Zt.prototype,"network",void 0),Kt([(0,r.SB)()],Zt.prototype,"networkImage",void 0),Kt([(0,r.SB)()],Zt.prototype,"showBack",void 0),Kt([(0,r.SB)()],Zt.prototype,"prevHistoryLength",void 0),Kt([(0,r.SB)()],Zt.prototype,"view",void 0),Kt([(0,r.SB)()],Zt.prototype,"viewDirection",void 0),Zt=Kt([(0,U.Mo)("w3m-header")],Zt),i(51631),i(21874);var Yt=j.iv`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`,Xt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Jt=class extends n.oi{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return n.dy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?n.dy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:n.dy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};Jt.styles=[W.ET,Yt],Xt([(0,r.Cb)()],Jt.prototype,"message",void 0),Xt([(0,r.Cb)()],Jt.prototype,"variant",void 0),Jt=Xt([(0,z.M)("wui-snackbar")],Jt);var ei=n.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,ti=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ii=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=y.K.state.open,this.unsubscribe.push(y.K.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=y.K.state;return n.dy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),y.K.state.autoClose&&(this.timeout=setTimeout(()=>y.K.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ii.styles=ei,ti([(0,r.SB)()],ii.prototype,"open",void 0),ii=ti([(0,U.Mo)("w3m-snackbar")],ii);const oi=(0,f.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ni=(0,$.P)({state:oi,subscribe:e=>(0,f.Ld)(oi,()=>e(oi)),subscribeKey:(e,t)=>(0,b.VW)(oi,e,t),showTooltip({message:e,triggerRect:t,variant:i}){oi.open=!0,oi.message=e,oi.triggerRect=t,oi.variant=i},hide(){oi.open=!1,oi.message="",oi.triggerRect={width:0,height:0,top:0,left:0}}});var ri=n.iv`
  :host {
    width: 100%;
    display: block;
  }
`,ai=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let si=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=ni.state.open,this.unsubscribe.push(p.P.subscribeKey("view",()=>{ni.hide()}),c.I.subscribeKey("open",e=>{e||ni.hide()}),ni.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),ni.hide()}render(){return n.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return n.dy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const o=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-o.width)/2,i.top=e.top-(window.innerHeight-o.height)/2}ni.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||ni.hide()}};si.styles=[ri],ai([(0,r.Cb)()],si.prototype,"text",void 0),ai([(0,r.SB)()],si.prototype,"open",void 0),si=ai([(0,U.Mo)("w3m-tooltip-trigger")],si);var ci=U.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,li=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let di=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.open=ni.state.open,this.message=ni.state.message,this.triggerRect=ni.state.triggerRect,this.variant=ni.state.variant,this.unsubscribe.push(ni.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.dataset.variant=this.variant,this.style.cssText=`\n    --w3m-tooltip-top: ${this.triggerRect.top}px;\n    --w3m-tooltip-left: ${this.triggerRect.left}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,n.dy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};di.styles=[ci],li([(0,r.SB)()],di.prototype,"open",void 0),li([(0,r.SB)()],di.prototype,"message",void 0),li([(0,r.SB)()],di.prototype,"triggerRect",void 0),li([(0,r.SB)()],di.prototype,"variant",void 0),di=li([(0,U.Mo)("w3m-tooltip")],di);const ui={getTabsByNamespace:e=>Boolean(e)&&e===k.b.CHAIN.EVM?!1===s.h.state.remoteFeatures.activity?se.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):se.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=p.P.state.view;if(se.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.h.state,i=s.h.state.features.legalCheckbox;return!(!e&&!t||i)}return se.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};i(70227);var pi=U.iv`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`,hi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let mi=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=s.h.state.remoteFeatures,this.unsubscribe.push(s.h.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.h.state;return!e&&!t||s.h.state.features.legalCheckbox?n.dy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:n.dy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.h.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.h.state;return e?n.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.h.state;return e?n.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?n.dy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:n.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};mi.styles=[pi],hi([(0,r.SB)()],mi.prototype,"remoteFeatures",void 0),mi=hi([(0,U.Mo)("w3m-legal-footer")],mi),i(86417);var gi=n.iv``;let wi=class extends n.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.h.state;return e||t?n.dy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return n.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){R.X.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,C.r9)(l.R.state.activeChain)===x.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.P.push("WhatIsABuy")}};wi.styles=[gi],wi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,U.Mo)("w3m-onramp-providers-footer")],wi);var yi=U.iv`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`,fi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bi=class extends n.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=p.P.state.view}firstUpdated(){this.status=ui.hasFooter()?"show":"hide",this.unsubscribe.push(p.P.subscribeKey("view",e=>{this.view=e,this.status=ui.hasFooter()?"show":"hide","hide"===this.status&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(e=>{for(const t of e)t.target===this.getWrapper()&&document.documentElement.style.setProperty("--apkt-footer-height",`${t.contentRect.height}px`)}),this.resizeObserver.observe(this.getWrapper())}render(){return n.dy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return ui.hasFooter()?n.dy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return n.dy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return n.dy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return n.dy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){R.X.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),p.P.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};bi.styles=[yi],fi([(0,r.SB)()],bi.prototype,"status",void 0),fi([(0,r.SB)()],bi.prototype,"view",void 0),bi=fi([(0,U.Mo)("w3m-footer")],bi);var vi=U.iv`
  :host {
    display: block;
    width: inherit;
  }
`,ki=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xi=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.viewState=p.P.state.view,this.history=p.P.state.history.join(","),this.unsubscribe.push(p.P.subscribeKey("view",()=>{this.history=p.P.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return n.dy`${this.templatePageContainer()}`}templatePageContainer(){return n.dy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=p.P.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return n.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return n.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return n.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return n.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return n.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return n.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return n.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return n.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return n.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return n.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return n.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return n.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return n.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return n.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return n.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return n.dy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return n.dy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return n.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return n.dy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return n.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return n.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return n.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return n.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return n.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return n.dy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return n.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return n.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return n.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return n.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return n.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return n.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return n.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return n.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return n.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return n.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return n.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return n.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return n.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return n.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return n.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return n.dy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return n.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return n.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return n.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return n.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return n.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return n.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return n.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return n.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return n.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return n.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return n.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return n.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return n.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return n.dy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return n.dy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return n.dy`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return n.dy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return n.dy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return n.dy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return n.dy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return n.dy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};xi.styles=[vi],ki([(0,r.SB)()],xi.prototype,"viewState",void 0),ki([(0,r.SB)()],xi.prototype,"history",void 0),xi=ki([(0,U.Mo)("w3m-router")],xi);var Si=U.iv`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`,Ci=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Ti="scroll-lock",Ai={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class Pi extends n.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=s.h.state.enableEmbedded,this.open=c.I.state.open,this.caipAddress=l.R.state.activeCaipAddress,this.caipNetwork=l.R.state.activeCaipNetwork,this.shake=c.I.state.shake,this.filterByNamespace=d.A.state.filterByNamespace,this.padding=U.gR.spacing[1],this.mobileFullScreen=s.h.state.enableMobileFullScreen,this.initializeTheming(),u.Q.prefetchAnalyticsConfig(),this.unsubscribe.push(c.I.subscribeKey("open",e=>e?this.onOpen():this.onClose()),c.I.subscribeKey("shake",e=>this.shake=e),l.R.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),l.R.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),s.h.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),d.A.subscribeKey("filterByNamespace",e=>{this.filterByNamespace!==e&&!l.R.getAccountData(e)?.caipAddress&&(u.Q.fetchRecommendedWallets(),this.filterByNamespace=e)}),p.P.subscribeKey("view",()=>{this.dataset.border=ui.hasFooter()?"true":"false",this.padding=Ai[p.P.state.view]??U.gR.spacing[1]}))}firstUpdated(){if(this.dataset.border=ui.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return c.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?n.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?n.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return n.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,a.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}onOverlayClick(e){var t=this;return(0,o.Z)(function*(){if(e.target===e.currentTarget){if(t.mobileFullScreen)return;yield t.handleClose()}})()}handleClose(){return(0,o.Z)(function*(){yield g.safeClose()})()}initializeTheming(){const{themeVariables:e,themeMode:t}=w.u.state,i=U.Hg.getColorTheme(t);(0,U.n)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),y.K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Ti,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Ti}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAddress(e){var t=this;return(0,o.Z)(function*(){!e&&!l.R.state.isSwitchingNamespace&&!("ProfileWallets"===p.P.state.view)&&c.I.close(),yield m.w.initializeIfEnabled(e),t.caipAddress=e,l.R.setIsSwitchingNamespace(!1)})()}onNewNetwork(e){const t=this.caipNetwork?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString(),o="UnsupportedChain"===p.P.state.view,n=c.I.state.open;let r=!1;this.enableEmbedded&&"SwitchNetwork"===p.P.state.view&&(r=!0),t!==i&&D.resetState(),n&&o&&(r=!0),r&&"SIWXSignMessage"!==p.P.state.view&&p.P.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(u.Q.prefetch(),u.Q.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Pi.styles=Si,Ci([(0,r.Cb)({type:Boolean})],Pi.prototype,"enableEmbedded",void 0),Ci([(0,r.SB)()],Pi.prototype,"open",void 0),Ci([(0,r.SB)()],Pi.prototype,"caipAddress",void 0),Ci([(0,r.SB)()],Pi.prototype,"caipNetwork",void 0),Ci([(0,r.SB)()],Pi.prototype,"shake",void 0),Ci([(0,r.SB)()],Pi.prototype,"filterByNamespace",void 0),Ci([(0,r.SB)()],Pi.prototype,"padding",void 0),Ci([(0,r.SB)()],Pi.prototype,"mobileFullScreen",void 0);let Ii=class extends Pi{};Ii=Ci([(0,U.Mo)("w3m-modal")],Ii);let $i=class extends Pi{};$i=Ci([(0,U.Mo)("appkit-modal")],$i);var Ei=U.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`;let Ni=class extends n.oi{constructor(){super()}render(){return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){p.P.goBack()}};Ni.styles=Ei,Ni=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}([(0,U.Mo)("w3m-usage-exceeded-view")],Ni);var Ri=i(13618),Oi=(i(4374),U.iv`
  :host {
    width: 100%;
  }
`),Bi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _i=class extends n.oi{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1),e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&R.X.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:p.P.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(Ri.j.state.adapters).length>1?this.namespaces:[]}render(){return n.dy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,a.o)(this.imageSrc)}
        name=${this.name}
        size=${(0,a.o)(this.size)}
        tagLabel=${(0,a.o)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};_i.styles=Oi,Bi([(0,r.Cb)({type:Array})],_i.prototype,"walletImages",void 0),Bi([(0,r.Cb)()],_i.prototype,"imageSrc",void 0),Bi([(0,r.Cb)()],_i.prototype,"name",void 0),Bi([(0,r.Cb)()],_i.prototype,"size",void 0),Bi([(0,r.Cb)()],_i.prototype,"tagLabel",void 0),Bi([(0,r.Cb)()],_i.prototype,"tagVariant",void 0),Bi([(0,r.Cb)()],_i.prototype,"walletIcon",void 0),Bi([(0,r.Cb)()],_i.prototype,"tabIdx",void 0),Bi([(0,r.Cb)({type:Boolean})],_i.prototype,"disabled",void 0),Bi([(0,r.Cb)({type:Boolean})],_i.prototype,"showAllWallets",void 0),Bi([(0,r.Cb)({type:Boolean})],_i.prototype,"loading",void 0),Bi([(0,r.Cb)({type:String})],_i.prototype,"loadingSpinnerColor",void 0),Bi([(0,r.Cb)()],_i.prototype,"rdnsId",void 0),Bi([(0,r.Cb)()],_i.prototype,"displayIndex",void 0),Bi([(0,r.Cb)()],_i.prototype,"walletRank",void 0),Bi([(0,r.Cb)({type:Array})],_i.prototype,"namespaces",void 0),_i=Bi([(0,U.Mo)("w3m-list-wallet")],_i);var Di=U.iv`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`,Ui=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Wi=class extends n.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=s.h.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height;const i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");this.mobileFullScreen?(e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-i,this.style.setProperty("--local-border-bottom-radius","0px")):(e+=i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){const e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return n.dy`
      <div class="container" data-mobile-fullscreen="${(0,a.o)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,a.o)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),o=i.length,n=t.length,r=t[t.length-1]||"",a=U.Hg.cssDurationToNumber(this.transitionDuration);let s="";n>o?s="next":n<o?s="prev":n===o&&t[n-1]!==i[o-1]&&(s="next"),this.viewDirection=`${s}-${r}`,setTimeout(()=>{this.historyState=e,this.setView?.(r)},a),setTimeout(()=>{this.viewDirection=""},2*a)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let i=0;this.mobileFullScreen?(i=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")):(i=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${i}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return 60}};Wi.styles=[Di],Ui([(0,r.Cb)({type:String})],Wi.prototype,"transitionDuration",void 0),Ui([(0,r.Cb)({type:String})],Wi.prototype,"transitionFunction",void 0),Ui([(0,r.Cb)({type:String})],Wi.prototype,"history",void 0),Ui([(0,r.Cb)({type:String})],Wi.prototype,"view",void 0),Ui([(0,r.Cb)({attribute:!1})],Wi.prototype,"setView",void 0),Ui([(0,r.SB)()],Wi.prototype,"viewDirection",void 0),Ui([(0,r.SB)()],Wi.prototype,"historyState",void 0),Ui([(0,r.SB)()],Wi.prototype,"previousHeight",void 0),Ui([(0,r.SB)()],Wi.prototype,"mobileFullScreen",void 0),Wi=Ui([(0,U.Mo)("w3m-router-container")],Wi)}}]);