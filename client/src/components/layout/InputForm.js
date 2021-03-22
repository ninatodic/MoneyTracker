import React, { useState, useContext, useEffect } from 'react';
import EntryContext from '../../context/Entry/EntryContext';

const InputForm = () => {
  const entryContext = useContext(EntryContext);

  const { addEntry, current, updateCurrent, clearCurrent } = entryContext;

  useEffect(() => {
    if (current !== null) {
      setEntry(current);
    } else {
      setEntry({
        text: '',
        amount: '',
      });
    }
  }, [entryContext, current]);

  const [entry, setEntry] = useState({
    text: '',
    amount: '',
  });

  const { text, amount } = entry;

  const onChange = (e) =>
    setEntry({ ...entry, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!current) {
      addEntry(entry);
      setEntry({
        text: '',
        amount: '',
      });
    } else {
      updateCurrent(entry);
      clearCurrent();
    }
  };
  return (
    <form className='input-form' onSubmit={onSubmit}>
      <h2>{current ? 'Edit Transaction' : 'Add a new Transaction'}</h2>
      <label htmlFor='textInput'>Text</label>
      <input
        type='text'
        placeholder='Enter text...'
        name='text'
        value={text}
        onChange={onChange}
      />
      <label htmlFor='amount'>
        Amount <br />
        (negative - expence, positive - income)
      </label>
      <input
        type='number'
        placeholder='Enter amount...'
        name='amount'
        value={amount}
        onChange={onChange}
      />
      <input
        type='submit'
        className='btn'
        value={current ? 'Edit Transaction' : 'Add Transaction'}
      />
    </form>
  );
};

export default InputForm;
