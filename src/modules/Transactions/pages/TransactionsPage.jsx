import React,  { useState } from 'react';
import FiltersComponent from './../components/FiltersComponent';
import './TransactionsPage.scss';
import TransactionInformation from '../components/TransactionInformation';
import TableComponent from '../components/TableComponent';
import CustomButton from '../../Custom/Button/CustomButton';
import AddTransactionForm from '../components/AddTransactionForm';
import Modal from './../../Custom/Modal/Modal/Modal';

const Trasactions = () => {
   const [isModalActive, setModalActive] = useState(false);

   const handleModalOpen = () => {
     setModalActive(true);
   };
   const handleModalClose = () => {
     setModalActive(false);
   };
  return (
    <div className="transaction-page">
      <div className="transaction-page__header">
        <CustomButton title="Add transaction" handleProp={handleModalOpen} />
        <div>
          {isModalActive && (
            <Modal title="some modal title" onClose={handleModalClose}>
              Hello world
            </Modal>
          )}
        </div>
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
