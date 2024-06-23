import { YoursProviderType } from "./types/providerTypes";

declare global {
  interface Window {
    yours: YoursProviderType;
    panda: YoursProviderType;
  }
}
