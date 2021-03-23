import React, { useReducer } from 'react';
import axios from 'axios';

import EntryContext from './EntryContext';
import EntryReducer from './EntryReducer';
import {
  GET_ENTRIES,
  ADD_ENTRY,
  DELETE_ENTRY,
  CLEAR_ENTRIES,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ENTRY,
  ENTRY_ERROR,
} from '../type';

const EntryState = (props) => {
  const initialState = {
    entries: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(EntryReducer, initialState);
  //get entries

  const getEntries = async () => {
    try {
      const res = await axios.get(
        'https://desolate-sierra-34522.herokuapp.com/api/entries'
      );
      dispatch({ type: GET_ENTRIES, payload: res.data });
    } catch (err) {
      dispatch({ type: ENTRY_ERROR, payload: err.response.msg });
    }
  };
  //add entry

  const addEntry = async (entry) => {
    const config = {
      headers: {
        'Content-Type': 'application/json ',
      },
    };

    try {
      const res = await axios.post(
        'https://desolate-sierra-34522.herokuapp.com/api/entries',
        entry,
        config
      );
      dispatch({ type: ADD_ENTRY, payload: res.data });
    } catch (err) {
      dispatch({ type: ENTRY_ERROR, payload: err.response.msg });
    }
  };

  //delete entry;

  const deleteEntry = async (id) => {
    try {
      await axios.delete(
        `https://desolate-sierra-34522.herokuapp.com/api/entries/${id}`
      );
      dispatch({ type: DELETE_ENTRY, payload: id });
    } catch (err) {
      dispatch({ type: ENTRY_ERROR, payload: err.response.msg });
    }
  };

  //clear entries;
  const clearEntries = () => {
    dispatch({ type: CLEAR_ENTRIES });
  };

  //set current entry
  const setCurrent = (entry) => {
    dispatch({ type: SET_CURRENT, payload: entry });
  };

  //clear current entry

  const clearCurrent = (entry) => {
    dispatch({ type: CLEAR_CURRENT, payload: entry });
  };

  //update entry
  const updateCurrent = async (entry) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `https://desolate-sierra-34522.herokuapp.com/api/entries${entry._id}`,
        entry,
        config
      );
      dispatch({
        type: UPDATE_ENTRY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ENTRY_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <EntryContext.Provider
      value={{
        entries: state.entries,
        current: state.current,
        error: state.error,
        addEntry,
        deleteEntry,
        setCurrent,
        clearCurrent,
        updateCurrent,
        getEntries,
        clearEntries,
      }}
    >
      {props.children}
    </EntryContext.Provider>
  );
};
export default EntryState;
