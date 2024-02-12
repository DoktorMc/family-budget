import React from 'react';
import FiltersComponent from './../components/FiltersComponent';
import './TransactionsPage.scss';
import TransactionInformation from '../components/TransactionInformation';

const Trasactions = () => {
  return (
    <div className="transaction-page">
      <div className="transaction-page__header">
        <button className="transaction-page__header__add_button">
          Add transaction
        </button>
        <div className="transaction-page__header-range-picker">
          <span>Date Range Picker</span>
        </div>
      </div>
      <FiltersComponent />
      <TransactionInformation />
    </div>
  );
}

export default Trasactions;
