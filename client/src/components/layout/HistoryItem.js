import React, { useContext } from 'react';
import EntryContext from '../../context/Entry/EntryContext';

const HistoryItem = ({ entry }) => {
  const entryContext = useContext(EntryContext);
  const { deleteEntry, setCurrent, clearCurrent } = entryContext;
  const { _id, text, amount } = entry;

  const onDelete = () => {
    deleteEntry(_id);
    clearCurrent();
  };
  return (
    <div>
      <li>
        <p>{text}</p>
        <div className='right'>
          <span>
            <i className='fas fa-dollar-sign'></i>
            {amount}
          </span>
          <button className='histBtn editBtn' onClick={() => setCurrent(entry)}>
            <i className='fas fa-pencil-alt'></i>
          </button>
          <button className='histBtn delBtn' onClick={onDelete}>
            <i className='fas fa-trash-alt'></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default HistoryItem;
