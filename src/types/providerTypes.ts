export type PubKeys = {
  bsvPubKey: string;
  ordPubKey: string;
};

export type Addresses = {
  bsvAddress: string;
  ordAddress: string;
};

export type Balance = {
  bsv: number;
  sat: number;
  usdInCents: number;
};

export type Ordinal = {
  id: number;
  num: number;
  txid: string;
  vout: number;
  outpoint: string;
  file: {
    hash: string;
    size: number;
    type: string;
  };
  origin: string;
  height: number;
  idx: number;
  lock: string;
  spend: string;
  MAP: {
    [key: string]: string;
  };
  B: {
    hash: string;
    size: number;
    type: string;
  };
  SIGMA: any[];
  listing: boolean;
  price: number;
  payout: string;
  script: string;
  bsv20: boolean;
};

export type SignedMessage = {
  address: string;
  pubKeyHex: string;
  signatureHex: string;
  signedMessage: string;
};

export type SendBsv = {
  address: string;
  satAmount: number;
};

export type TransferOrdinal = {
  address: string;
  origin: string;
  outpoint: string;
};

export type SignMessage = {
  message: string;
};

export type KeyTypes = "bsv" | "ord";

export type SignTransaction = {
  rawtx: string;
  vin: number;
  sigHashTypeNumber: number;
  keyType: KeyTypes;
  outputScript: string;
  outputSats: number;
};

export type Broadcast = {
  rawtx: string;
};

export type PandaProviderType = {
  isReady: boolean;
  connect: () => Promise<PubKeys | undefined>;
  disconnect: () => Promise<boolean>;
  isConnected: () => Promise<boolean>;
  getPubKeys: () => Promise<PubKeys | undefined>;
  getAddresses: () => Promise<Addresses | undefined>;
  getBalance: () => Promise<Balance | undefined>;
  getOrdinals: () => Promise<Ordinal[] | undefined>;
  sendBsv: (params: SendBsv) => Promise<string | undefined>;
  transferOrdinal: (params: TransferOrdinal) => Promise<string | undefined>;
  signMessage: (params: SignMessage) => Promise<SignedMessage | undefined>;
  signTransaction: (params: SignTransaction) => Promise<string | undefined>;
  broadcast: (params: Broadcast) => Promise<string | undefined>;
};
