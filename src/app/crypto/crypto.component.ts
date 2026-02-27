import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, of, combineLatest } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { WalletService, WalletToken } from './wallet.service';
import { CoinMarketCapService } from './coinmarketcap.service';
import { CryptoCurrency } from './crypto-price.model';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit, OnDestroy {

  // ── Wallet state ────────────────────────────────────────────────────────────
  walletAddress: string | null = null;
  walletConnected = false;
  walletChainId: number | null = null;
  walletTokens: WalletToken[] = [];
  walletLoading = false;
  walletProviderType: 'metamask' | 'walletconnect' | null = null;
  walletError: string | null = null;
  isConnecting = false;
  showWalletDropdown = false;

  /** Total portfolio USD value computed from wallet tokens × CMC prices */
  portfolioBalanceUSD = 0;

  // ── CoinMarketCap state ─────────────────────────────────────────────────────
  searchQuery = '';
  searchResults: CryptoCurrency[] = [];
  topListings: CryptoCurrency[] = [];
  isLoadingSearch = false;
  isLoadingListings = false;
  searchError: string | null = null;
  listingsError: string | null = null;

  /** CMC price map symbol → USD price (built from topListings) */
  private priceMap: Record<string, number> = {};

  private searchSubject$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    public walletService: WalletService,
    private cmcService: CoinMarketCapService
  ) {}

  ngOnInit(): void {
    // Subscribe to wallet state
    this.walletService.address$.pipe(takeUntil(this.destroy$)).subscribe(a => this.walletAddress = a);
    this.walletService.connected$.pipe(takeUntil(this.destroy$)).subscribe(c => this.walletConnected = c);
    this.walletService.chainId$.pipe(takeUntil(this.destroy$)).subscribe(id => this.walletChainId = id);
    this.walletService.loading$.pipe(takeUntil(this.destroy$)).subscribe(l => this.walletLoading = l);
    this.walletService.providerType$.pipe(takeUntil(this.destroy$)).subscribe(t => this.walletProviderType = t);

    // Recompute portfolio whenever tokens or prices change
    combineLatest([
      this.walletService.tokens$,
      this.walletService.loading$,
    ]).pipe(takeUntil(this.destroy$)).subscribe(([tokens]) => {
      this.walletTokens = tokens;
      this.computePortfolio();
    });

    // Debounced CMC symbol search
    this.searchSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => {
        if (!query.trim()) { this.searchResults = []; this.isLoadingSearch = false; return of(null); }
        this.isLoadingSearch = true;
        this.searchError = null;
        return this.cmcService.searchBySymbol(query).pipe(
          catchError(() => { this.searchError = 'Failed to fetch. Check your API key.'; this.isLoadingSearch = false; return of(null); })
        );
      }),
      takeUntil(this.destroy$)
    ).subscribe(results => { this.isLoadingSearch = false; if (results) this.searchResults = results; });

    this.loadTopListings();
  }

  loadTopListings(): void {
    this.isLoadingListings = true;
    this.listingsError = null;
    this.cmcService.getListings(20).pipe(
      takeUntil(this.destroy$),
      catchError(() => { this.listingsError = 'Failed to load listings.'; this.isLoadingListings = false; return of([]); })
    ).subscribe(data => {
      this.isLoadingListings = false;
      this.topListings = data;
      // Build price map for portfolio calculation
      this.priceMap = {};
      for (const coin of data) {
        this.priceMap[coin.symbol.toUpperCase()] = coin.quote.USD.price;
      }
      this.computePortfolio();
    });
  }

  private computePortfolio(): void {
    if (!this.walletTokens.length) { this.portfolioBalanceUSD = 0; return; }
    let total = 0;
    for (const t of this.walletTokens) {
      const price = this.priceMap[t.symbol.toUpperCase()] ?? 0;
      total += t.balance * price;
    }
    this.portfolioBalanceUSD = total;
  }

  // ── Wallet UI ───────────────────────────────────────────────────────────────

  toggleWalletDropdown(event: Event): void {
    event.stopPropagation();
    this.showWalletDropdown = !this.showWalletDropdown;
    this.walletError = null;
  }

  @HostListener('document:click')
  closeDropdown(): void {
    this.showWalletDropdown = false;
  }

  async connectMetaMask(): Promise<void> {
    this.showWalletDropdown = false;
    this.isConnecting = true;
    this.walletError = null;
    try {
      await this.walletService.connectMetaMask();
    } catch (err: any) {
      this.walletError = err?.message || 'MetaMask connection failed';
    } finally {
      this.isConnecting = false;
    }
  }

  async connectWalletConnect(): Promise<void> {
    this.showWalletDropdown = false;
    this.isConnecting = true;
    this.walletError = null;
    try {
      await this.walletService.connectWalletConnect();
    } catch (err: any) {
      this.walletError = err?.message || 'WalletConnect connection failed';
    } finally {
      this.isConnecting = false;
    }
  }

  disconnectWallet(): void {
    this.walletService.disconnect();
    this.walletError = null;
    this.showWalletDropdown = false;
  }

  getShortAddress(): string {
    return this.walletService.getShortAddress(this.walletAddress);
  }

  getNetworkName(): string {
    return this.walletService.getNetworkName(this.walletChainId);
  }

  getTokenUSDValue(token: WalletToken): number {
    const price = this.priceMap[token.symbol.toUpperCase()] ?? 0;
    return token.balance * price;
  }

  // ── Crypto search helpers ────────────────────────────────────────────────────

  onSearch(query: string): void {
    this.searchQuery = query;
    this.searchSubject$.next(query);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.searchError = null;
  }

  formatPrice(price: number): string {
    if (price >= 1) return price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 6 });
  }

  formatUSD(value: number): string {
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  formatMarketCap(value: number): string {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9)  return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6)  return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  }

  isPriceUp(change: number): boolean { return change >= 0; }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
