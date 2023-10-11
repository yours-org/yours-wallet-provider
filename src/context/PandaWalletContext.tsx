import { ReactNode, createContext, useEffect, useState } from "react";
import { PandaProviderType } from "../types/providerTypes";

export const PandaContext = createContext<PandaProviderType | undefined>(
  undefined
);

interface PandaProviderProps {
  children: ReactNode;
}

export const PandaProvider = (props: PandaProviderProps) => {
  const { children } = props;

  // It takes a moment for the panda wallet to get injected into the DOM. To use context we need an initial state;
  const [pandaWallet, setPandaWallet] = useState<any>({ isReady: false });

  useEffect(() => {
    const checkPandaWallet = () => {
      if ("panda" in window && window.panda?.isReady) {
        setPandaWallet(window.panda);
      }
    };

    checkPandaWallet();

    const intervalId = setInterval(checkPandaWallet, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <PandaContext.Provider value={pandaWallet}>
      {children}
    </PandaContext.Provider>
  );
};
