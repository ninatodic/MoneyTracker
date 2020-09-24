import { Fragment } from 'react';
import React from 'react';

const Balance = () => {
  return (
    <>
      <div className="balance-container">
        <h2>Your balance</h2>
        <p>
          <i className="fas fa-dollar-sign"></i>00.00
        </p>
      </div>

      <div className="income-container">
        <p>Income</p>
        <i className="fas fa-dollar-sign"></i>
        <span>0</span>
      </div>
      <div className="expense-container">
        <p>Expense</p>
        <i className="fas fa-dollar-sign"></i>
        <span>0</span>
      </div>
    </>
  );
};

export default Balance;
