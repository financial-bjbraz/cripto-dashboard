export interface UserWithBalance {
  id: string;
  email: string;
  fiatBalance: number;
  brlnBalance: number;
}

export interface GrandTotal {
  fiatTotal: number;
  brlnTotal: number;
}

export interface PendingTx {
  txId: string;
  type: 'buy' | 'sell' | 'transfer';
  userId: string;
  userEmail: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  walletAddress: string | null;
}

export interface DfnsAsset {
  symbol: string;
  balance: string;
  decimals: number;
}

export interface DfnsWallet {
  id: string;
  network: string;
  address: string;
  status: string;
  assets?: DfnsAsset[];
}

export interface AdminState {
  users: UserWithBalance[];
  grandTotal: GrandTotal | null;
  pendingTransactions: PendingTx[];
  adminUsers: AdminUser[];
  dfnsWallet: DfnsWallet | null;
  dfnsWalletLoading: boolean;
  dfnsWalletError: string | null;
  dfnsTxId: string | null;
  dfnsTxStatus: string | null;
  dfnsContractAddress: string | null;
  dfnsTxLoading: boolean;
  dfnsTxError: string | null;
  loading: boolean;
  error: string | null;
}

export const initialAdminState: AdminState = {
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
