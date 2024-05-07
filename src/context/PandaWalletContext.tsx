import { ReactNode, createContext, useEffect, useState } from "react";
import { YoursProviderType } from "../types/providerTypes";

export const YoursContext = createContext<YoursProviderType | undefined>(
  undefined
);

interface PandaProviderProps {
  children: ReactNode;
}

export const PandaProvider = (props: PandaProviderProps) => {
  const { children } = props;

  // It takes a moment for the yours wallet to get injected into the DOM. To use context we need an initial state;
  const [pandaWallet, setPandaWallet] = useState<any>({ isReady: false });

  useEffect(() => {
    const checkYoursWallet = () => {
      if ("panda" in window && window.panda?.isReady) {
        setPandaWallet(window.panda);
      }
    };

    checkYoursWallet();

    const intervalId = setInterval(checkYoursWallet, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <YoursContext.Provider value={pandaWallet}>
      {children}
    </YoursContext.Provider>
  );
};
