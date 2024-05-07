# Yours Wallet Provider 🌱

A React provider to make interactions with [Yours Wallet](https://github.com/yours-org/yours-wallet) a breeze.

## Description

The Yours Wallet Provider simplifies the process of integrating Yours Wallet into your react application by creating a provider that wraps your application.

For detailed instructions on integration and all available methods, be sure to check out the [Provider API Docs](https://panda-wallet.gitbook.io/provider-api/intro/introduction).

## Installation

Install the package using npm:

```sh
npm install yours-wallet-provider
```

## Usage

### Setup the Provider

First, wrap your application with the YoursProvider.

```tsx
//... other imports
import { YoursProvider } from "yours-wallet-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <YoursProvider>
    <App />
  </YoursProvider>
);
```

### Use the Wallet Hook

You can now use the useYoursWallet hook to interact with the wallet.

```tsx
import { useYoursWallet } from 'yours-wallet-provider';

function YourComponent() {
  const wallet = useYoursWallet();
  const isReady = wallet.isReady;
  console.log(isReady);
  // true

  return (
    // Your TSX
  );
}
```

### Use the Yours.org Icon

You can also import the `YoursIcon` for use in your project.

```tsx
import { YoursIcon } from "yours-wallet-provider";

function YourComponent() {
  return (
    <div>
      <YoursIcon size="32px" />
    </div>
  );
}
```
