import React from 'react';

const InputForm = () => {
  return (
    <div className="input-form">
      <h4>Add a new Transaction</h4>
      <label for="textInput">Text</label>
      <input type="text" placeholder="Enter text..." />
      <label for="amount">
        Amount <br />
        (negative - expence, positive - income)
      </label>
      <input type="number" placeholder="Enter amount..." />
      <input type="button" className="add" value="Add Transaction" />
    </div>
  );
};

export default InputForm;
