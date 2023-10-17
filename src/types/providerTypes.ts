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

export type Broadcast = {
  rawtx: string;
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
  getBalance: () => Promise<Balance | undefined>;
  getOrdinals: () => Promise<Ordinal[] | undefined>;
  sendBsv: (params: SendBsv) => Promise<string | undefined>;
  transferOrdinal: (params: TransferOrdinal) => Promise<string | undefined>;
  signMessage: (params: SignMessage) => Promise<SignedMessage | undefined>;
  getSignatures: (
    params: GetSignatures
  ) => Promise<SignatureResponse[] | undefined>;
  broadcast: (params: Broadcast) => Promise<string | undefined>;
};
