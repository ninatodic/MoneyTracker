import React, { useReducer } from 'react';
import uuid from 'uuid';
import EntryContext from './EntryContext';
import EntryReducer from './EntryReducer';
import {
  ADD_ENTRY,
  DELETE_ENTRY,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ENTRY,
  FILTER_ENTRIES,
  CLEAR_FILTER,
} from '../type';

const EntryState = (props) => {
  const initialState = {
    entries: [
      { id: 1, text: 'paycheck', amount: 300 },
      { id: 2, text: 'rent', amount: -100 },
      { id: 3, text: 'fuel', amount: -50 },
    ],
  };

  const [state, dispatch] = useReducer(EntryReducer, initialState);

  //add entry

  //delete entry

  //set current entry

  //clear current entry

  //update entry

  //filter entries

  //clear filter

  return (
    <EntryContext.Provider value={{ entries: state.entries }}>
      {props.children}
    </EntryContext.Provider>
  );
};
export default EntryState;
