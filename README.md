# Panda Wallet Provider 🐼💼

A React provider to make interactions with Panda Wallet a breeze.

## Description

The Panda Wallet Provider simplifies the process of integrating Panda Wallet into your react application by creating a provider that wraps your application.

## Installation

Install the package using npm:

```sh
npm install panda-wallet-provider
```

## Usage

### Setup the Provider

First, wrap your application with the PandaProvider.

```typescript
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { PandaProvider } from "./contexts/PandaWalletContext";
import { App } from "./App";
import { PandaProvider } from "panda-wallet-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PandaProvider>
    <App />
  </PandaProvider>
);

reportWebVitals();
```

### Use the Wallet Hook

You can now use the usePandaWallet hook to interact with the wallet.

```typescript
import { usePandaWallet } from 'panda-wallet-provider';

function YourComponent() {
  const wallet = usePandaWallet();
  const isReady = wallet.isReady;
  console.log(isReady);
  // true

  return (
    // Your TSX
  );
}
```
