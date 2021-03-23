import React, { useContext } from 'react';
import EntryContext from '../../context/Entry/EntryContext';

const Balance = () => {
  const { entries } = useContext(EntryContext);

  console.log(entries);
  const amounts =
    entries !== null ? entries.map((entry) => parseInt(entry.amount)) : [];
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expences = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className='balance'>
      <div className='balance-container'>
        <h2>Your balance</h2>
        <p>
          <i className='fas fa-dollar-sign'></i>
          {total}
        </p>
      </div>

      <div className='income-container'>
        <p>Income</p>
        <i className='fas fa-dollar-sign'></i>
        <span>{income}</span>
      </div>
      <div className='expense-container'>
        <p>Expense</p>
        <i className='fas fa-dollar-sign'></i>
        <span>{expences}</span>
      </div>
    </div>
  );
};

export default Balance;
