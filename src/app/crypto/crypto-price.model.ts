export interface CryptoQuote {
  price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  last_updated: string;
}

export interface CryptoCurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  date_added: string;
  quote: {
    USD: CryptoQuote;
  };
}

export interface CoinMarketCapResponse {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
    elapsed: number;
    credit_count: number;
  };
  data: CryptoCurrency[];
}
