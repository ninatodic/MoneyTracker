import React, { useContext, useEffect } from 'react';
import EntryContext from '../../context/Entry/EntryContext';
import HistoryItem from './HistoryItem';
import Spinner from './Spinner';

const History = () => {
  const entryContext = useContext(EntryContext);
  const { entries, getEntries, loading } = entryContext;

  console.log(entries);
  useEffect(() => {
    getEntries();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='history-container'>
      <h4>History</h4>
      {entries !== null && !loading ? (
        <ul className='history-list'>
          {entries.map((entry) => {
            return <HistoryItem entry={entry} key={entry._id} />;
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default History;
