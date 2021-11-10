/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ApeRouterInterface extends ethers.utils.Interface {
  functions: {
    "apeVaultFactory()": FunctionFragment;
    "cancel(bytes32)": FunctionFragment;
    "changeMinDelay(uint256)": FunctionFragment;
    "delegateDeposit(address,address,uint256)": FunctionFragment;
    "delegateWithdrawal(address,address,address,uint256,bool)": FunctionFragment;
    "execute(address,bytes,bytes32,bytes32,uint256)": FunctionFragment;
    "isDoneCall(bytes32)": FunctionFragment;
    "isPendingCall(bytes32)": FunctionFragment;
    "isReadyCall(bytes32)": FunctionFragment;
    "minDelay()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeTokens(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "schedule(address,bytes,bytes32,bytes32,uint256)": FunctionFragment;
    "setRegistry(address)": FunctionFragment;
    "timestamps(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "yearnRegistry()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "apeVaultFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "changeMinDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateDeposit",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateWithdrawal",
    values: [string, string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isDoneCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isPendingCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReadyCall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "minDelay", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "schedule",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setRegistry", values: [string]): string;
  encodeFunctionData(
    functionFragment: "timestamps",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "yearnRegistry",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "apeVaultFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeMinDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isDoneCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPendingCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReadyCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minDelay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yearnRegistry",
    data: BytesLike
  ): Result;

  events: {
    "CallCancelled(bytes32)": EventFragment;
    "CallExecuted(bytes32,address,bytes)": EventFragment;
    "CallScheduled(bytes32,address,bytes,bytes32,uint256)": EventFragment;
    "DepositInVault(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "WithdrawFromVault(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositInVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawFromVault"): EventFragment;
}

export type CallCancelledEvent = TypedEvent<[string] & { id: string }>;

export type CallExecutedEvent = TypedEvent<
  [string, string, string] & { id: string; target: string; data: string }
>;

export type CallScheduledEvent = TypedEvent<
  [string, string, string, string, BigNumber] & {
    id: string;
    target: string;
    data: string;
    predecessor: string;
    delay: BigNumber;
  }
>;

export type DepositInVaultEvent = TypedEvent<
  [string, string, BigNumber] & {
    vault: string;
    token: string;
    amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type WithdrawFromVaultEvent = TypedEvent<
  [string, string, BigNumber] & {
    vault: string;
    token: string;
    amount: BigNumber;
  }
>;

export class ApeRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ApeRouterInterface;

  functions: {
    apeVaultFactory(overrides?: CallOverrides): Promise<[string]>;

    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateDeposit(
      _apeVault: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateWithdrawal(
      _recipient: string,
      _apeVault: string,
      _token: string,
      _shareAmount: BigNumberish,
      _underlying: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    isPendingCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    minDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeTokens(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timestamps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    yearnRegistry(overrides?: CallOverrides): Promise<[string]>;
  };

  apeVaultFactory(overrides?: CallOverrides): Promise<string>;

  cancel(
    _id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeMinDelay(
    _min: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateDeposit(
    _apeVault: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateWithdrawal(
    _recipient: string,
    _apeVault: string,
    _token: string,
    _shareAmount: BigNumberish,
    _underlying: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    _target: string,
    _data: BytesLike,
    _predecessor: BytesLike,
    _salt: BytesLike,
    _delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isPendingCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  minDelay(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeTokens(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  schedule(
    _target: string,
    _data: BytesLike,
    _predecessor: BytesLike,
    _salt: BytesLike,
    _delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRegistry(
    _registry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timestamps(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  yearnRegistry(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    apeVaultFactory(overrides?: CallOverrides): Promise<string>;

    cancel(_id: BytesLike, overrides?: CallOverrides): Promise<void>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateDeposit(
      _apeVault: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateWithdrawal(
      _recipient: string,
      _apeVault: string,
      _token: string,
      _shareAmount: BigNumberish,
      _underlying: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isPendingCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    minDelay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeTokens(_token: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistry(_registry: string, overrides?: CallOverrides): Promise<void>;

    timestamps(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    yearnRegistry(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CallCancelled(bytes32)"(
      id?: null
    ): TypedEventFilter<[string], { id: string }>;

    CallCancelled(id?: null): TypedEventFilter<[string], { id: string }>;

    "CallExecuted(bytes32,address,bytes)"(
      id?: BytesLike | null,
      target?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; target: string; data: string }
    >;

    CallExecuted(
      id?: BytesLike | null,
      target?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { id: string; target: string; data: string }
    >;

    "CallScheduled(bytes32,address,bytes,bytes32,uint256)"(
      id?: BytesLike | null,
      target?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        id: string;
        target: string;
        data: string;
        predecessor: string;
        delay: BigNumber;
      }
    >;

    CallScheduled(
      id?: BytesLike | null,
      target?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        id: string;
        target: string;
        data: string;
        predecessor: string;
        delay: BigNumber;
      }
    >;

    "DepositInVault(address,address,uint256)"(
      vault?: string | null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { vault: string; token: string; amount: BigNumber }
    >;

    DepositInVault(
      vault?: string | null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { vault: string; token: string; amount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "WithdrawFromVault(address,address,uint256)"(
      vault?: string | null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { vault: string; token: string; amount: BigNumber }
    >;

    WithdrawFromVault(
      vault?: string | null,
      token?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { vault: string; token: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    apeVaultFactory(overrides?: CallOverrides): Promise<BigNumber>;

    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateDeposit(
      _apeVault: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateWithdrawal(
      _recipient: string,
      _apeVault: string,
      _token: string,
      _shareAmount: BigNumberish,
      _underlying: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isDoneCall(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isPendingCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isReadyCall(_id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    minDelay(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeTokens(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timestamps(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    yearnRegistry(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    apeVaultFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancel(
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeMinDelay(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateDeposit(
      _apeVault: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateWithdrawal(
      _recipient: string,
      _apeVault: string,
      _token: string,
      _shareAmount: BigNumberish,
      _underlying: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isDoneCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPendingCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isReadyCall(
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeTokens(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    schedule(
      _target: string,
      _data: BytesLike,
      _predecessor: BytesLike,
      _salt: BytesLike,
      _delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRegistry(
      _registry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timestamps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    yearnRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
