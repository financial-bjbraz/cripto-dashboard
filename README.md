# OFB Dashboard — Crypto Dashboard

An Angular 12 dashboard for monitoring cryptocurrency prices in real time, with Web3 wallet connection powered by WalletConnect/Reown.

---

## Features

- Live cryptocurrency price tracking via CoinMarketCap API
- Web3 wallet connection (MetaMask, WalletConnect QR, and other wallets) via Reown modal
- Portfolio summary with balance display
- Angular Material UI components

---

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | **16.x** | Node 18+ breaks the webpack build. Use [nvm](https://github.com/nvm-sh/nvm) to manage versions. |
| npm | 8.x (bundled with Node 16) | |
| Angular CLI | 12.x | Installed locally as a dev dependency — no global install required |

To switch to Node 16 with nvm:
```bash
nvm install 16
nvm use 16
```

---

## Installation

```bash
git clone <repository-url>
cd cripto-dashboard
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is required due to a peer dependency conflict in `angular2-cookie`.

---

## Environment Configuration

All runtime secrets are stored in the environment files:

- **Development:** `src/environments/environment.ts`
- **Production:** `src/environments/environment.prod.ts`

Angular automatically swaps `environment.ts` with `environment.prod.ts` during a production build.

### CoinMarketCap API Key

The dashboard fetches live crypto prices from the CoinMarketCap API.

1. Sign up for a free API key at https://coinmarketcap.com/api/
2. Open `src/environments/environment.ts` (and `environment.prod.ts` for production):

```typescript
export const environment = {
  production: false,
  coinMarketCapApiKey: 'YOUR_CMC_API_KEY_HERE',   // <-- paste your key here
  reownProjectId: '...',
};
```

> **Note:** If `coinMarketCapApiKey` is left empty (`''`), the app falls back to the CoinMarketCap sandbox endpoint, which returns fake/demo data and does not require a key.

### Reown Project ID (WalletConnect)

The wallet connection modal is powered by WalletConnect v2 via the Reown platform.

1. Create a free account and project at https://cloud.reown.com
2. Copy the **Project ID** from your project dashboard
3. Open `src/environments/environment.ts` (and `environment.prod.ts` for production):

```typescript
export const environment = {
  production: false,
  coinMarketCapApiKey: '...',
  reownProjectId: 'YOUR_REOWN_PROJECT_ID_HERE',   // <-- paste your project ID here
};
```

> Without a valid Project ID the WalletConnect QR modal will fail to initialize. MetaMask (browser extension) injection still works without it.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start dev server | `npm start` | Starts Angular dev server at http://localhost:4200 with live reload |
| Development build | `npm run build:dev` | Builds with source maps, no optimization |
| Production build | `npm run build:prod` | Optimized production build with minification |
| Obfuscated build | `npm run obfuscate` | Production build followed by JS obfuscation |
| Watch mode | `npm run watch` | Rebuilds on file changes (development config) |
| Unit tests | `npm test` | Runs unit tests via Karma + Jasmine |

---

## Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

---

## Building for Production

```bash
npm run build:prod
```

Build artifacts are output to `dist/ofb-dashboard/`. Serve this folder with any static web server.

Example with a simple HTTP server:
```bash
npx serve dist/ofb-dashboard
```

---

## Obfuscated Production Build

The `obfuscate` script produces a production build and then applies JavaScript obfuscation to all `.js` chunks in `dist/ofb-dashboard/` using [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).

```bash
npm run obfuscate
```

What the obfuscation does:
- Encodes string literals using base64 string arrays
- Renames identifiers to hexadecimal names (`0x1a2b`, etc.)
- Rotates and shuffles the string array at runtime
- Disables `console.*` output in the obfuscated bundle
- Does **not** apply control-flow flattening or dead-code injection (too slow on large Angular bundles)

The obfuscation script is located at `scripts/obfuscate.js` and can be tuned by editing the `OBFUSCATOR_OPTIONS` constant inside it.

---

## Project Structure

```
cripto-dashboard/
├── src/
│   ├── app/
│   │   └── crypto/               # Main dashboard component
│   │       ├── crypto.component.ts
│   │       ├── crypto.component.html
│   │       └── crypto.component.css
│   ├── environments/
│   │   ├── environment.ts        # Development config (API keys go here)
│   │   └── environment.prod.ts   # Production config (API keys go here)
│   ├── assets/                   # Static assets
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── scripts/
│   └── obfuscate.js              # Post-build obfuscation script
├── dist/
│   └── ofb-dashboard/            # Build output (generated, not committed)
├── angular.json                  # Angular workspace configuration
├── tsconfig.json
└── package.json
```

---

## Build Notes

- **TypeScript version:** 4.3.5 (fixed by Angular 12). This prevents use of newer libraries that require TypeScript 5+.
- **ES target:** `es2020` — required for BigInt literal support in ethers.js / viem dependencies.
- **Bundle budgets** (configured in `angular.json`):
  - Initial bundle: warning at 1 MB, error at 2 MB
  - Component styles: warning at 8 kB, error at 16 kB
