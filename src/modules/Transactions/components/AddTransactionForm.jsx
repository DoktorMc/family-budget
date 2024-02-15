import React from 'react';

const AddTransactionForm = () => {
  return (
    <div className="add-transaction">
      <div className="add-transaction__form">
        <div className="add-transaction__form__category">
          <div>
            <span>Category</span>
            <div>
              <span>
                <img src="" alt="icon" />
                <span>category nema</span>
              </span>
              <span>{">"}</span>
            </div>
          </div>
        </div>
        <div className="add-transaction__form__date">
          <span>Date</span>
          <div>
            <input type="date" name="" id="" />
          </div>
        </div>
        <div className="add-transaction__form__note">
          <span>Note (optional)</span>
          <div>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="add-transaction__form__amount">
          <span>Amount</span>
          <div>
            <input type="number" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTransactionForm;
