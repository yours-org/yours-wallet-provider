import { useContext } from "react";
import { YoursContext } from "../context/YoursWalletContext";

export const useYoursWallet = () => {
  const context = useContext(YoursContext);
  if (!context) {
    throw new Error("useYoursWallet must be used within a YoursProvider");
  }
  return context;
};
