# Panda Wallet Provider 🐼💼

A React provider to make interactions with [Panda Wallet](https://github.com/Panda-Wallet/panda-wallet) a breeze.

## Description

The Panda Wallet Provider simplifies the process of integrating Panda Wallet into your react application by creating a provider that wraps your application.

For detailed instructions on integration and all available methods, be sure to check out the [Provider API Docs](https://panda-wallet.gitbook.io/provider-api/intro/introduction).

## Installation

Install the package using npm:

```sh
npm install panda-wallet-provider
```

## Usage

### Setup the Provider

First, wrap your application with the PandaProvider.

```tsx
//... other imports
import { PandaProvider } from "panda-wallet-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PandaProvider>
    <App />
  </PandaProvider>
);
```

### Use the Wallet Hook

You can now use the usePandaWallet hook to interact with the wallet.

```tsx
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

### Use the Panda Icon

You can also import the `PandaIcon` for use in your project.

```tsx
import { PandaIcon } from "panda-wallet-provider";

function YourComponent() {
  return (
    <div>
      <PandaIcon size="32px" />
    </div>
  );
}
```
