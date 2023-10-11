import { PandaProviderType } from "./types/providerTypes";

declare global {
  interface Window {
    panda: PandaProviderType;
  }
}
