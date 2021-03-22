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

export default (state, action) => {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        entries: action.payload,
        loading: false,
      };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [action.payload, ...state.entries],
        loading: false,
      };
    case UPDATE_ENTRY:
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry._id === action.payload._id ? action.payload : entry
        ),
        loading: false,
      };
    case DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry._id !== action.payload),
        loading: false,
      };
    case CLEAR_ENTRIES:
      return {
        ...state,
        entries: null,
        current: null,
        error: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case ENTRY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
