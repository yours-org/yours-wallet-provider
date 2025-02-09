export type PubKeys = {
  bsvPubKey: string;
  ordPubKey: string;
  identityPubKey: string;
};

export type Addresses = {
  bsvAddress: string;
  ordAddress: string;
  identityAddress: string;
};

export type Balance = {
  bsv: number;
  satoshis: number;
  usdInCents: number;
};

export type MNEEBalance = {
  amount: number;
  decimalAmount: number;
};

export type SocialProfile = {
  displayName: string;
  avatar: string;
};

export type OrdinalData = {
  types?: string[];
  insc?: Inscription;
  map?: { [key: string]: any };
  b?: File;
  sigma?: Sigma[];
  list?: Listing;
  bsv20?: Bsv20;
  lock?: Lock;
};

export type Lock = {
  until: number;
};

export type Sigma = {
  algorithm: string;
  address: string;
  signature: string;
  vin: number;
};

export type Listing = {
  price: number;
  payout: string;
};

export interface Bsv20Balance {
  confirmed: bigint;
  pending: bigint;
}

export interface Bsv20 {
  p: string;
  op: string;
  dec: number;
  amt: string;
  all: Bsv20Balance;
  listed: Bsv20Balance;
  status?: Bsv20Status;
  tick?: string;
  icon?: string;
  id?: string;
  sym?: string;
}

export type BSV20Txo = {
  txid: string;
  vout: number;
  outpoint: string;
  owner?: string;
  script?: string;
  spend?: string;
  height: number;
  idx: number;
  op?: string;
  tick?: string;
  id?: string;
  amt: string;
  status: number;
  reason?: string;
  listing: boolean;
  price?: number;
  pricePer?: number;
  payout?: string;
  pricePerUnit?: number;
};

export type MapSubType = "collection" | "collectionItem";

export interface OrdSchema {
  app: string;
  type: string;
  name: string;
  subType?: MapSubType;
  subTypeData?: any;
  royalties?: string;
  previewUrl?: string;
}

// export class Origin {
//   constructor(
//     public outpoint: string,
//     public nonce: number,
//     public data: { [key: string]: any } = {}
//   ) {}
// }

export type Origin = {
  outpoint: string;
  nonce?: number;
  data?: OrdinalData;
  num?: string;
  map?: { [key: string]: any };
};

export enum Bsv20Status {
  Invalid = -1,
  Pending = 0,
  Valid = 1,
}

export type File = {
  type: string;
  size: number;
  hash: string;
  text?: string;
  json?: { [key: string]: any };
};

export type Inscription = {
  file: File;
  fields?: { [key: string]: any };
  parent?: string;
};

export type InscriptionData = {
  type?: string;
  data?: Buffer;
};

export type Ordinal = {
  txid: string;
  vout: number;
  outpoint: string;
  satoshis: number;
  owner?: string;
  script?: string;
  spend?: string;
  origin?: Origin;
  height: number;
  idx: number;
  data: OrdinalData;
};

export type GetPaginatedOrdinals = {
  from?: string;
  limit?: number;
};

export type PaginatedOrdinalsResponse = {
  ordinals: Ordinal[];
  from?: string;
};

export type SignedMessage = {
  address: string;
  pubKey: string;
  sig: string;
  message: string;
  derivationTag: DerivationTag;
};

export type SendBsv20 = {
  idOrTick: string;
  address: string;
  amount: number;
};

export type SendMNEE = {
  address: string;
  amount: number;
};

export type SendBsv = {
  address?: string;
  paymail?: string;
  satoshis: number;
  data?: string[]; // hex string array
  script?: string; // hex string
  inscription?: RawInscription;
};

export type TransferOrdinal = {
  address: string;
  origin: string;
  outpoint: string;
};

export enum NetWork {
  Mainnet = "mainnet",
  Testnet = "testnet",
}

export type InternalYoursTags =
  | { label: "panda"; id: "bsv"; domain: ""; meta: {} }
  | { label: "panda"; id: "ord"; domain: ""; meta: {} }
  | { label: "panda"; id: "identity"; domain: ""; meta: {} }
  | { label: "yours"; id: "bsv"; domain: ""; meta: {} }
  | { label: "yours"; id: "ord"; domain: ""; meta: {} }
  | { label: "yours"; id: "identity"; domain: ""; meta: {} };

export type DerivationTag =
  | InternalYoursTags
  | {
      label: string;
      id: string;
      domain: string;
      meta?: { [key: string]: any };
    };

export type SignMessage = {
  message: string;
  encoding?: "utf8" | "hex" | "base64";
  tag?: DerivationTag;
};

export type KeyTypes = "bsv" | "ord";

export type TransactionFormat = "tx" | "beef" | "ef";
export type Broadcast = {
  rawtx: string;
  format?: TransactionFormat;
  fund?: boolean;
};

export type PurchaseOrdinal = {
  outpoint: string;
  marketplaceRate?: number;
  marketplaceAddress?: string;
};

export type Utxo = {
  satoshis: number;
  script: string; // hex string
  txid: string;
  vout: number;
};

/**
 * `SignatureRequest` contains required informations for a signer to sign a certain input of a transaction.
 */
export type SignatureRequest = {
  prevTxid: string;
  outputIndex: number;
  /** The index of input to sign. */
  inputIndex: number;
  /** The previous output satoshis value of the input to spend. */
  satoshis: number;
  /** The address(es) of corresponding private key(s) required to sign the input. */
  address: string | string[];
  /** The previous output script of input, default value is a P2PKH locking script for the `address` if omitted. */
  script?: string;
  /** The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted. */
  sigHashType?: number;
  /**
   * Index of the OP_CODESEPARATOR to split the previous output script at during verification.
   * If undefined, the whole script is used.
   * */
  csIdx?: number;
  /** The extra information for signing. */
  data?: unknown;
};

/**
 * `SignatureResponse` contains the signing result corresponding to a `SignatureRequest`.
 */
export type SignatureResponse = {
  /** The index of input. */
  inputIndex: number;
  /** The signature.*/
  sig: string;
  /** The public key bound with the `sig`. */
  pubKey: string;
  /** The sighash type, default value is `SIGHASH_ALL | SIGHASH_FORKID` if omitted. */
  sigHashType: number;
  /** The index of the OP_CODESEPARATOR to split the previous output script at.*/
  csIdx?: number;
};

/**
 * `SendBsvResponse` contains the result of sendBsv.
 */
export type SendBsvResponse = {
  txid: string;
  rawtx: string;
};

export type SendBsv20Response = {
  txid: string;
  rawtx: string;
};

export type SendMNEEResponse = {
  txid: string;
  rawtx: string;
};

export type GetSignatures = {
  rawtx: string;
  sigRequests: SignatureRequest[];
  format?: TransactionFormat;
};

export type TaggedDerivationRequest = {
  label: string;
  id: string;
  meta?: { [key: string]: any };
};

export type TaggedDerivationResponse = {
  address: string;
  pubKey: string;
  tag: DerivationTag;
};

export type LockRequest = {
  address: string;
  blockHeight: number;
  sats: number;
};

export type MimeTypes =
  | "text/plain"
  | "text/html"
  | "text/css"
  | "application/javascript"
  | "application/json"
  | "application/xml"
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/svg+xml"
  | "audio/mpeg"
  | "audio/wav"
  | "audio/wave"
  | "video/mp4"
  | "application/pdf"
  | "application/msword"
  | "application/vnd.ms-excel"
  | "application/vnd.ms-powerpoint"
  | "application/zip"
  | "application/x-7z-compressed"
  | "application/x-gzip"
  | "application/x-tar"
  | "application/x-bzip2";

export type MAP = { app: string; type: string; [prop: string]: string };

export type RawInscription = {
  base64Data: string;
  mimeType: MimeTypes;
  map?: MAP;
};

export type InscribeRequest = {
  address: string;
  base64Data: string;
  mimeType: MimeTypes;
  map?: MAP;
  satoshis?: number; // defaults to 1
};

export type GetTaggedKeysRequest = {
  label: string;
  ids?: string[];
};

export type EncryptRequest = {
  message: string;
  pubKeys: string[];
  encoding?: "utf8" | "hex" | "base64";
  tag?: DerivationTag;
};

export type DecryptRequest = {
  messages: string[];
  tag?: DerivationTag;
};

export type YoursEvents = "signedOut" | "switchAccount";

export type YoursEventListeners = (args?: { [key: string]: any }) => void;

export type YoursProviderType = {
  isReady: boolean;
  on: (event: YoursEvents, listener: YoursEventListeners) => void;
  removeListener: (event: YoursEvents, listener: YoursEventListeners) => void;
  connect: () => Promise<string | undefined>;
  disconnect: () => Promise<boolean>;
  isConnected: () => Promise<boolean>;
  getPubKeys: () => Promise<PubKeys | undefined>;
  getAddresses: () => Promise<Addresses | undefined>;
  getNetwork: () => Promise<NetWork | undefined>;
  getSocialProfile: () => Promise<SocialProfile | undefined>;
  getBalance: () => Promise<Balance | undefined>;
  getMNEEBalance: () => Promise<MNEEBalance | undefined>;
  getOrdinals: (
    params?: GetPaginatedOrdinals
  ) => Promise<Ordinal[] | PaginatedOrdinalsResponse | undefined>;
  getBsv20s: () => Promise<Bsv20[] | undefined>;
  sendBsv: (params: SendBsv[]) => Promise<SendBsvResponse | undefined>;
  sendBsv20: (params: SendBsv20) => Promise<SendBsv20Response | undefined>;
  sendMNEE: (params: SendMNEE) => Promise<SendMNEEResponse | undefined>;
  transferOrdinal: (params: TransferOrdinal) => Promise<string | undefined>;
  purchaseOrdinal: (params: PurchaseOrdinal) => Promise<string | undefined>;
  purchaseBsv20: (params: PurchaseOrdinal) => Promise<string | undefined>;
  signMessage: (params: SignMessage) => Promise<SignedMessage | undefined>;
  getSignatures: (
    params: GetSignatures
  ) => Promise<SignatureResponse[] | undefined>;
  broadcast: (params: Broadcast) => Promise<string | undefined>;
  getExchangeRate: () => Promise<number | undefined>;
  getPaymentUtxos: () => Promise<Utxo[] | undefined>;
  generateTaggedKeys: (
    params: TaggedDerivationRequest
  ) => Promise<TaggedDerivationResponse>;
  getTaggedKeys: (
    params: GetTaggedKeysRequest
  ) => Promise<TaggedDerivationResponse[] | undefined>;
  inscribe: (params: InscribeRequest[]) => Promise<SendBsvResponse | undefined>;
  lockBsv: (params: LockRequest[]) => Promise<SendBsvResponse | undefined>;
  encrypt: (params: EncryptRequest) => Promise<string[] | undefined>;
  decrypt: (params: DecryptRequest) => Promise<string[] | undefined>;
};
