// - Contract Imports
import { ContractReceipt } from '@ethersproject/contracts';
import { useWeb3React } from '@web3-react/core';

import { callContract } from 'utils/contractHelpers';

import { useContracts } from './useContracts';

import { IVault } from 'types';

export function useVaultFactory() {
  const contracts = useContracts();
  const web3Context = useWeb3React();

  const createApeVault = async (
    tokenAddress: string,
    simpleTokenAddress: string,
    type: string
  ): Promise<IVault | undefined> => {
    const signer = await web3Context.library.getSigner();
    if (contracts) {
      const factory = contracts.apeVaultFactory.connect(signer);
      const receipt: ContractReceipt | any = await callContract(
        factory.createApeVault(tokenAddress, simpleTokenAddress)
      );
      if (receipt && receipt?.events) {
        for (const event of receipt.events) {
          if (event?.event === 'VaultCreated') {
            const vaultAddress = event.args?.vault;
            const vault: IVault = {
              id: vaultAddress,
              transactions: [],
              tokenAddress,
              simpleTokenAddress,
              type,
            };
            return vault;
          }
        }
        console.error('VaultCreated event not found');
      }
      throw new Error('Failed to create vault');
    }
    throw new Error('No contracts loaded');
  };

  return { createApeVault };
}
