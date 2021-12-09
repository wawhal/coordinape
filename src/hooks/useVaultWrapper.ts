import { useWeb3React } from '@web3-react/core';
import {
  BigNumber,
  BigNumberish,
  BytesLike,
  ContractTransaction,
  ContractReceipt,
} from 'ethers';

import { callContract, callContractGetter } from '../utils/contractHelpers';

import { useContracts } from './useContracts';

import { IVault } from 'types';

export function useVaultWrapper(vault: IVault) {
  const web3Context = useWeb3React();
  const contracts = useContracts();

  // Admin functions
  const apeMigrate = async (): Promise<
    ContractTransaction | ContractReceipt
  > => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContract(apeVault.apeMigrate());
    return tx;
  };

  const apeWithdraw = async (
    shareAmount: BigNumberish,
    underlying: boolean
  ): Promise<ContractTransaction | ContractReceipt> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContract(
      apeVault.apeWithdraw(shareAmount, underlying)
    );
    return tx;
  };

  const apeWithdrawSimpleToken = async (
    amount: BigNumberish
  ): Promise<ContractTransaction | ContractReceipt> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContract(apeVault.apeWithdrawSimpleToken(amount));
    return tx;
  };

  const approveCircleAdmin = async (
    circle: BytesLike,
    adminAddress: string
  ): Promise<ContractTransaction | ContractReceipt> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContract(
      apeVault.approveCircleAdmin(circle, adminAddress)
    );
    return tx;
  };

  const exitVaultToken = async (
    underlying: boolean
  ): Promise<ContractTransaction | ContractReceipt> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = callContract(apeVault.exitVaultToken(underlying));
    return tx;
  };

  const syncUnderlying = async (): Promise<
    ContractTransaction | ContractReceipt
  > => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = callContract(apeVault.syncUnderlying());
    return tx;
  };

  const updateAllowance = async (
    props: any
  ): Promise<ContractTransaction | ContractReceipt> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = callContract(
      apeVault.updateAllowance(
        props.circle,
        props.tokenAddress,
        props.amount,
        props.interval,
        props.epochAmount,
        props.intervalStart
      )
    );
    return tx;
  };

  // Todo: add all the needed getters
  // Getters:

  const getBestVault = async (): Promise<string | boolean | BigNumber> => {
    // returns best yearn vault address
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.bestVault());
    return tx;
  };

  const getToken = async (): Promise<string | boolean | BigNumber> => {
    // returns token address
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.token());
    return tx;
  };

  const getSimpleToken = async (): Promise<string | boolean | BigNumber> => {
    // returns simple token address
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.simpleToken());
    return tx;
  };

  const getUnderlyingValue = async (): Promise<
    string | boolean | BigNumber
  > => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.underlyingValue());
    return tx;
  };

  const getYRegistry = async (): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.registry());
    return tx;
  };

  const getYVault = async (): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.vault());
    return tx;
  };

  const listVaults = async (): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.allVaults());
    return tx;
  };

  const getOwner = async (): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.owner());
    return tx;
  };

  const getTotalAssets = async (): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.totalAssets());
    return tx;
  };

  const getTotalVaultBalance = async (
    account: string
  ): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.totalVaultBalance(account));
    return tx;
  };

  const getProfit = async (): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.profit());
    return tx;
  };

  const hasAccess = async (
    account: string
  ): Promise<string | boolean | BigNumber> => {
    const signer = await web3Context.library.getSigner();
    const apeVault = contracts?.apeVaultFactory.connect(vault.id, signer);
    const tx = await callContractGetter(apeVault.hasAccess(account));
    return tx;
  };

  return {
    apeMigrate,
    apeWithdraw,
    apeWithdrawSimpleToken,
    approveCircleAdmin,
    exitVaultToken,
    syncUnderlying,
    updateAllowance,
    getBestVault,
    getToken,
    getSimpleToken,
    getUnderlyingValue,
    getYRegistry,
    getYVault,
    listVaults,
    getOwner,
    getTotalAssets,
    getTotalVaultBalance,
    getProfit,
    hasAccess,
  };
}
