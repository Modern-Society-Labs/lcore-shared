// Contract Configuration Types
export interface ContractAddress {
  address: string;
  chainId: number;
  deployedAt: number;
}

export interface ContractABI {
  abi: unknown[];
  bytecode: string;
}

export interface ContractDeployment extends ContractAddress {
  abi: ContractABI;
  deployer: string;
  constructorArgs: unknown[];
}

// Contract Event Types
export interface ContractEvent {
  eventName: string;
  blockNumber: number;
  transactionHash: string;
  timestamp: number;
  returnValues: Record<string, unknown>;
}

// Contract Function Types
export interface ContractFunction {
  name: string;
  inputs: {
    name: string;
    type: string;
    indexed?: boolean;
  }[];
  outputs: {
    name: string;
    type: string;
  }[];
  stateMutability: 'pure' | 'view' | 'nonpayable' | 'payable';
}

// Contract State Types
export interface ContractState {
  address: string;
  chainId: number;
  lastBlock: number;
  lastUpdate: number;
  values: Record<string, unknown>;
}

// Contract Transaction Types
export interface ContractTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  data: string;
  chainId: number;
  nonce: number;
  gasPrice: string;
  gasLimit: string;
} 