import { render } from '@testing-library/react';

import { AllocateFundsCard, AllocateFundsCardProps } from './AllocateFundsCard';

const props: AllocateFundsCardProps = {
  epochInfo: [
    {
      title: 'Core Contributors',
      subTitle: 'Coordinape',
      giveInfo: 'You Received 125 GIVE',
    },
  ],
  claimAmount: '1680',
  onClaim: () => null,
  onViewHistory: () => null,
};
describe('AllocateFundsCard', () => {
  it('should render properly', () => {
    const { getByText, getByTestId } = render(<AllocateFundsCard {...props} />);
    const actionButton = getByTestId('action-button-1');
    expect(getByTestId('action-button-1')).toBeInTheDocument();
    expect(getByTestId('action-button-2')).toBeInTheDocument();
    expect(getByTestId('arrow-diagonal-icon')).toBeInTheDocument();
    expect(actionButton.textContent).toEqual(`Claim ${props.claimAmount} USDC`);
    expect(getByText(props.epochInfo[0].title)).toBeInTheDocument();
    expect(getByText(props.epochInfo[0].subTitle)).toBeInTheDocument();
    expect(getByText(props.epochInfo[0].giveInfo)).toBeInTheDocument();
  });
});
