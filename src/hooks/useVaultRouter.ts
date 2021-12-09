// - Contract Imports
import { BigNumberish } from '@ethersproject/bignumber';
import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts';
import { useWeb3React } from '@web3-react/core';
import { Signer } from 'ethers';

import { ERC20Service } from 'services/erc20';
import { callContract } from 'utils/contractHelpers';

import { useContracts } from './useContracts';

import { IVault } from 'types';

export function useVaultRouter() {
  const contracts = useContracts();
  const web3Context = useWeb3React();

  const depositToken = async (
    vault: IVault,
    amount: BigNumberish
  ): Promise<ContractReceipt | ContractTransaction> => {
    if (!contracts) throw new Error('Contracts not loaded');
    const signer = await web3Context.library.getSigner();
    const token = new ERC20Service(
      await web3Context.library,
      await signer.getAddress(),
      vault.tokenAddress
    );
    await callContract(token.approveUnlimited(contracts.apeRouter.address));
    const apeRouter = contracts.apeRouter.connect(signer);
    const receipt = await callContract(
      apeRouter.delegateDeposit(vault.id, vault.tokenAddress, amount)
    );
    return receipt;
  };

  const delegateWithdrawal = async (
    vault: IVault,
    shareAmount: BigNumberish,
    underlying: boolean
  ): Promise<ContractReceipt | ContractTransaction> => {
    if (!contracts) {
      throw new Error('Contracts not loaded');
    }
    const signer: Signer = await web3Context.library.getSigner();
    const receipt = await callContract(
      contracts.apeRouter.delegateWithdrawal(
        await signer.getAddress(),
        vault.id,
        vault.tokenAddress,
        shareAmount,
        underlying
      )
    );
    return receipt;
  };

  return { depositToken, delegateWithdrawal };
}
