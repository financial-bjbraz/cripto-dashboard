/**
 * Wallet Service — WalletConnect v2 (Reown protocol) + MetaMask
 * Fetches native + ERC-20 token balances and emits them for portfolio calculation.
 * Get your Reown Project ID at https://cloud.reown.com
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ethers } from 'ethers';
import { environment } from '../../environments/environment';

export interface WalletToken {
  symbol: string;
  name: string;
  balance: number;
  isNative: boolean;
  chainId: number;
}

/** Common ERC-20 tokens on Ethereum Mainnet (chain 1) */
const MAINNET_TOKENS: Array<{ symbol: string; name: string; address: string; decimals: number }> = [
  { symbol: 'USDT', name: 'Tether USD',     address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 },
  { symbol: 'USDC', name: 'USD Coin',        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6 },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', decimals: 8 },
  { symbol: 'DAI',  name: 'Dai',             address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', decimals: 18 },
  { symbol: 'LINK', name: 'Chainlink',       address: '0x514910771AF9Ca656af840dff83E8264EcF986CA', decimals: 18 },
  { symbol: 'UNI',  name: 'Uniswap',        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', decimals: 18 },
  { symbol: 'SHIB', name: 'Shiba Inu',       address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE', decimals: 18 },
  { symbol: 'AAVE', name: 'Aave',            address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', decimals: 18 },
];

const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
];

/** Native token symbol per chain */
const NATIVE_TOKEN: Record<number, { symbol: string; name: string }> = {
  1:     { symbol: 'ETH',   name: 'Ethereum' },
  137:   { symbol: 'MATIC', name: 'Polygon' },
  56:    { symbol: 'BNB',   name: 'BNB Chain' },
  42161: { symbol: 'ETH',   name: 'Arbitrum ETH' },
  8453:  { symbol: 'ETH',   name: 'Base ETH' },
  10:    { symbol: 'ETH',   name: 'Optimism ETH' },
  43114: { symbol: 'AVAX',  name: 'Avalanche' },
};

type EthereumProviderType = import('@walletconnect/ethereum-provider').default;

@Injectable()
export class WalletService {
  private _address$     = new BehaviorSubject<string | null>(null);
  private _connected$   = new BehaviorSubject<boolean>(false);
  private _chainId$     = new BehaviorSubject<number | null>(null);
  private _tokens$      = new BehaviorSubject<WalletToken[]>([]);
  private _loading$     = new BehaviorSubject<boolean>(false);
  private _providerType$ = new BehaviorSubject<'metamask' | 'walletconnect' | null>(null);

  address$      = this._address$.asObservable();
  connected$    = this._connected$.asObservable();
  chainId$      = this._chainId$.asObservable();
  tokens$       = this._tokens$.asObservable();
  loading$      = this._loading$.asObservable();
  providerType$ = this._providerType$.asObservable();

  private provider: ethers.providers.Web3Provider | null = null;
  private wcProvider: EthereumProviderType | null = null;

  get isConnected(): boolean { return this._connected$.getValue(); }
  get address(): string | null { return this._address$.getValue(); }
  get hasMetaMask(): boolean { return typeof (window as any).ethereum !== 'undefined'; }

  // ─── MetaMask ────────────────────────────────────────────────────────────────

  async connectMetaMask(): Promise<void> {
    if (!this.hasMetaMask) {
      window.open('https://metamask.io/download/', '_blank');
      throw new Error('MetaMask not installed. Please install it and try again.');
    }
    const eth = (window as any).ethereum;
    await eth.request({ method: 'eth_requestAccounts' });
    this.provider = new ethers.providers.Web3Provider(eth);
    const network = await this.provider.getNetwork();
    const signer  = this.provider.getSigner();
    const address = await signer.getAddress();

    this._address$.next(address);
    this._connected$.next(true);
    this._chainId$.next(network.chainId);
    this._providerType$.next('metamask');
    await this.loadTokenBalances(address, network.chainId);

    eth.on('accountsChanged', async (accounts: string[]) => {
      if (!accounts.length) { this.clearState(); return; }
      this._address$.next(accounts[0]);
      if (this.provider) {
        const net = await this.provider.getNetwork();
        await this.loadTokenBalances(accounts[0], net.chainId);
      }
    });
    eth.on('chainChanged', async () => {
      if (this.provider) {
        this.provider = new ethers.providers.Web3Provider(eth);
        const net  = await this.provider.getNetwork();
        const addr = await this.provider.getSigner().getAddress();
        this._chainId$.next(net.chainId);
        await this.loadTokenBalances(addr, net.chainId);
      }
    });
    eth.on('disconnect', () => this.clearState());
  }

  // ─── WalletConnect v2 (Reown) ─────────────────────────────────────────────

  async connectWalletConnect(): Promise<void> {
    const projectId = (environment as any).reownProjectId;
    if (!projectId || projectId === 'YOUR_REOWN_PROJECT_ID') {
      throw new Error('Set reownProjectId in src/environments/environment.ts — get one free at https://cloud.reown.com');
    }

    const EthereumProvider = (await import('@walletconnect/ethereum-provider')).default;

    this.wcProvider = await EthereumProvider.init({
      projectId,
      showQrModal: true,
      chains: [1],
      optionalChains: [137, 56, 42161, 8453, 10, 43114],
      methods: ['eth_sendTransaction', 'personal_sign'],
      events: ['chainChanged', 'accountsChanged'],
    }) as EthereumProviderType;

    await this.wcProvider.connect();
    this.provider = new ethers.providers.Web3Provider(this.wcProvider as any);
    const network = await this.provider.getNetwork();
    const signer  = this.provider.getSigner();
    const address = await signer.getAddress();

    this._address$.next(address);
    this._connected$.next(true);
    this._chainId$.next(network.chainId);
    this._providerType$.next('walletconnect');
    await this.loadTokenBalances(address, network.chainId);

    this.wcProvider.on('accountsChanged', async (accounts: string[]) => {
      if (!accounts.length) { this.clearState(); return; }
      this._address$.next(accounts[0]);
      if (this.provider) {
        const net = await this.provider.getNetwork();
        await this.loadTokenBalances(accounts[0], net.chainId);
      }
    });
    this.wcProvider.on('chainChanged', async (chainIdHex: string) => {
      const chainId = parseInt(chainIdHex, 16) || parseInt(chainIdHex, 10);
      this._chainId$.next(chainId);
      const addr = this._address$.getValue();
      if (addr) await this.loadTokenBalances(addr, chainId);
    });
    this.wcProvider.on('disconnect', () => this.clearState());
  }

  // ─── Token balances ───────────────────────────────────────────────────────

  async loadTokenBalances(address: string, chainId: number): Promise<void> {
    if (!this.provider) return;
    this._loading$.next(true);
    const tokens: WalletToken[] = [];

    try {
      // 1. Native token
      const nativeInfo = NATIVE_TOKEN[chainId] || { symbol: 'ETH', name: 'Ether' };
      const nativeBal  = await this.provider.getBalance(address);
      const nativeAmt  = parseFloat(ethers.utils.formatEther(nativeBal));
      if (nativeAmt > 0) {
        tokens.push({ symbol: nativeInfo.symbol, name: nativeInfo.name, balance: nativeAmt, isNative: true, chainId });
      }

      // 2. ERC-20 tokens (Ethereum mainnet only)
      if (chainId === 1) {
        const calls = MAINNET_TOKENS.map(async t => {
          try {
            const contract = new ethers.Contract(t.address, ERC20_ABI, this.provider!);
            const raw: ethers.BigNumber = await contract.balanceOf(address);
            const amt = parseFloat(ethers.utils.formatUnits(raw, t.decimals));
            if (amt > 0) tokens.push({ symbol: t.symbol, name: t.name, balance: amt, isNative: false, chainId });
          } catch { /* token not available / zero */ }
        });
        await Promise.all(calls);
      }
    } catch (err) {
      console.error('Error loading token balances:', err);
    }

    this._tokens$.next(tokens);
    this._loading$.next(false);
  }

  // ─── Disconnect ────────────────────────────────────────────────────────────

  async disconnect(): Promise<void> {
    if (this.wcProvider) {
      await this.wcProvider.disconnect();
      this.wcProvider = null;
    }
    this.provider = null;
    this.clearState();
  }

  private clearState(): void {
    this._address$.next(null);
    this._connected$.next(false);
    this._chainId$.next(null);
    this._tokens$.next([]);
    this._providerType$.next(null);
  }

  getShortAddress(address: string | null): string {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  getNetworkName(chainId: number | null): string {
    if (!chainId) return '';
    const names: Record<number, string> = {
      1: 'Ethereum', 137: 'Polygon', 56: 'BSC', 42161: 'Arbitrum',
      8453: 'Base', 10: 'Optimism', 43114: 'Avalanche',
    };
    return names[chainId] || `Chain ${chainId}`;
  }
}
