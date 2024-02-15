import React from 'react';
import FiltersComponent from './../components/FiltersComponent';
import './TransactionsPage.scss';
import TransactionInformation from '../components/TransactionInformation';
import TableComponent from '../components/TableComponent';
import CustomButton from '../../Custom/Button/CustomButton';
import AddTransactionForm from '../components/AddTransactionForm';

const Trasactions = () => {
  return (
    <div className="transaction-page">
      <div className="transaction-page__header">
        <CustomButton title="Add transaction" />
      
        <div className="transaction-page__header-range-picker">
          <span>Date Range Picker</span>
        </div>
      </div>
      <AddTransactionForm />
      <FiltersComponent />
      <TransactionInformation />
      <TableComponent />
    </div>
  );
}

export default Trasactions;
