import { YoursProviderType } from "./types/providerTypes";

declare global {
  interface Window {
    panda: YoursProviderType;
  }
}
