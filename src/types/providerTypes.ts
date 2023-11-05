export type PubKeys = {
  bsvPubKey: string;
  ordPubKey: string;
  lockingPubKey: string;
};

export type Addresses = {
  bsvAddress: string;
  ordAddress: string;
  lockingAddress: string;
};

export type Balance = {
  bsv: number;
  sat: number;
  usdInCents: number;
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
  address: string;
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

export type Bsv20 = {
  id?: string;
  p: string;
  op: string;
  tick?: string;
  amt: string;
  status?: Bsv20Status;
};

export type Origin = {
  outpoint: string;
  data?: OrdinalData;
  num?: number;
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
};

export type Inscription = {
  json?: any;
  text?: string;
  words?: string[];
  file: File;
};

export type Ordinal = {
  txid: string;
  vout: number;
  outpoint: string;
  satoshis: number;
  owner: string;
  script: string;
  spend: string;
  origin: Origin;
  height: number;
  idx: number;
  data: OrdinalData;
};

export type SignedMessage = {
  address: string;
  pubKeyHex: string;
  signatureHex: string;
  signedMessage: string;
  keyType: DerivationTags;
};

export type SendBsv = {
  address?: string;
  satAmount: number;
  data?: string[]; // hex string array
  script?: string;
};

export type TransferOrdinal = {
  address: string;
  origin: string;
  outpoint: string;
};

export type DerivationTags = "wallet" | "ord" | "locking";

export type SignMessage = {
  message: string;
  encoding?: "utf8" | "hex" | "base64";
};

export type KeyTypes = "bsv" | "ord";

export type Broadcast = {
  rawtx: string;
};

export type PurchaseOrdinal = {
  outpoint: string;
  marketplaceRate?: number;
  marketplaceAddress?: string;
};

export type Utxos = {
  satoshis: number;
  script: string;
  txid: string;
  vout: number;
};

/**
 * `SignatureRequest` contains required informations for a signer to sign a certain input of a transaction.
 */
export type SignatureRequest = {
  prevTxId: string;
  outputIndex: number;
  /** The index of input to sign. */
  inputIndex: number;
  /** The previous output satoshis value of the input to spend. */
  satoshis: number;
  /** The address(es) of corresponding private key(s) required to sign the input. */
  address: string | string[];
  /** The previous output script of input, default value is a P2PKH locking script for the `address` if omitted. */
  scriptHex?: string;
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
  publicKey: string;
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

export type GetSignatures = {
  txHex: string;
  sigRequests: SignatureRequest[];
};

export type PandaProviderType = {
  isReady: boolean;
  connect: () => Promise<PubKeys | undefined>;
  disconnect: () => Promise<boolean>;
  isConnected: () => Promise<boolean>;
  getPubKeys: () => Promise<PubKeys | undefined>;
  getAddresses: () => Promise<Addresses | undefined>;
  getSocialProfile: () => Promise<SocialProfile | undefined>;
  getBalance: () => Promise<Balance | undefined>;
  getOrdinals: () => Promise<Ordinal[] | undefined>;
  sendBsv: (params: SendBsv[]) => Promise<SendBsvResponse | undefined>;
  transferOrdinal: (params: TransferOrdinal) => Promise<string | undefined>;
  purchaseOrdinal: (params: PurchaseOrdinal) => Promise<string | undefined>;
  signMessage: (params: SignMessage) => Promise<SignedMessage | undefined>;
  getSignatures: (
    params: GetSignatures
  ) => Promise<SignatureResponse[] | undefined>;
  broadcast: (params: Broadcast) => Promise<string | undefined>;
  getExchangeRate: () => Promise<number | undefined>;
  getPaymentUtxos: () => Promise<Utxos[] | undefined>;
};
