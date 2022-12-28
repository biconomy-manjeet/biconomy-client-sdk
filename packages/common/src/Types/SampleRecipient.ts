/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SampleRecipientInterface extends utils.Interface {
  contractName: "SampleRecipient";
  functions: {
    "reverting()": FunctionFragment;
    "something(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "reverting", values?: undefined): string;
  encodeFunctionData(functionFragment: "something", values: [string]): string;

  decodeFunctionResult(functionFragment: "reverting", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "something", data: BytesLike): Result;

  events: {
    "Sender(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Sender"): EventFragment;
}

export type SenderEvent = TypedEvent<
  [string, string, string],
  { txOrigin: string; msgSender: string; message: string }
>;

export type SenderEventFilter = TypedEventFilter<SenderEvent>;

export interface SampleRecipient extends BaseContract {
  contractName: "SampleRecipient";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SampleRecipientInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    reverting(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    something(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  reverting(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  something(
    message: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    reverting(overrides?: CallOverrides): Promise<void>;

    something(message: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Sender(address,address,string)"(
      txOrigin?: null,
      msgSender?: null,
      message?: null
    ): SenderEventFilter;
    Sender(
      txOrigin?: null,
      msgSender?: null,
      message?: null
    ): SenderEventFilter;
  };

  estimateGas: {
    reverting(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    something(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    reverting(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    something(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
