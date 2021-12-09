import { BigNumber } from '@ethersproject/bignumber';
import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts';

export const handleContractError = (e: any) => {
  console.error(e);
  if (e.code === 4001) {
    throw Error(`Transaction rejected by your wallet`);
  }
  throw Error(`Failed to submit create vault.`);
};

export const callContract = async (
  _method: any
): Promise<ContractTransaction | ContractReceipt> => {
  try {
    const tx = await _method;
    const receipt = await tx.wait();
    return receipt;
  } catch (e) {
    return handleContractError(e);
  }
};

export const callContractGetter = async (
  _method: any
): Promise<boolean | string | BigNumber> => {
  try {
    const tx = await _method;
    return tx;
  } catch (e) {
    return handleContractError(e);
  }
};
