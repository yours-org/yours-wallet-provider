import { ReactNode, createContext, useEffect, useState } from "react";
import { YoursProviderType } from "../types/providerTypes";

export const YoursContext = createContext<YoursProviderType | undefined>(
  undefined
);

interface YoursProviderProps {
  children: ReactNode;
}

export const YoursProvider = (props: YoursProviderProps) => {
  const { children } = props;

  // It takes a moment for the yours wallet to get injected into the DOM. To use context we need an initial state;
  const [yoursWallet, setYoursWallet] = useState<any>({ isReady: false });

  useEffect(() => {
    const checkYoursWallet = () => {
      if ("yours" in window && window.yours?.isReady) {
        setYoursWallet(window.yours);
      }
    };

    checkYoursWallet();

    const intervalId = setInterval(checkYoursWallet, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <YoursContext.Provider value={yoursWallet}>
      {children}
    </YoursContext.Provider>
  );
};
