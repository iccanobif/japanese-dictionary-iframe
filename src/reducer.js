import {
  START_QUERY,
  QUERY_RESULTS_RECEIVED_OK,
  QUERY_RESULTS_RECEIVED_FAIL,
} from "./actions";

const initialState = {
  isQueryRunning: false,
  queriedText: null,
  queriedOffset: null,
  queryResults: [],
  queryError: null,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case START_QUERY:
      return Object.assign({}, state, {
        isQueryRunning: true,
        queriedText: action.text,
        queriedOffset: action.offset,
      });
    case QUERY_RESULTS_RECEIVED_OK:
      if (action.text !== state.queriedText) return state;
      if (action.offset !== state.queriedOffset) return state;
      return Object.assign({}, state, {
        isQueryRunning: false,
        queryResults: action.results,
        queryError: null,
      });
    case QUERY_RESULTS_RECEIVED_FAIL:
      return Object.assign({}, state, {
        isQueryRunning: false,
        queryResults: [],
        queryError: action.queryError
      });
    default:
      return state;
  }
}
