import React from 'react';
import InformationSticker from './InformationSticker';

const TransactionInformation = () => {
  return (
    <div className="transaction-page__transactions-information">
      <InformationSticker
        valueTheme="income"
        title="Current Wallet Balance"
        value="+ 2,000"
      />
      <InformationSticker
        valueTheme="income"
        title="Total Period Change"
        value="+ 1,000"
      />
      <InformationSticker
        valueTheme="expenses"
        title="Total Period Expenses"
        value="- 200"
      />
      <InformationSticker
        valueTheme="income"
        title="Total Period Income"
        value="+ 3,000"
      />
    </div>
  );
}

export default TransactionInformation;
