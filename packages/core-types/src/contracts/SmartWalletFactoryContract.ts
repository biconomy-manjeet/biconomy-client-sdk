import { TransactionResult } from '../types'
export interface SmartWalletFactoryContract {
  getAddress(): string
  deployCounterFactualWallet(
    owner: string,
    entryPoint: string,
    handler: string,
    index: number
  ): Promise<TransactionResult>
  deployWallet(owner: string, entryPoint: string, handler: string): Promise<TransactionResult>
  getAddressForCounterfactualWallet(owner: string, index: number): Promise<string>
}