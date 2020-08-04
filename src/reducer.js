import {
  START_QUERY,
  RESULTS_RECEIVED_OK,
  RESULTS_RECEIVED_FAIL,
  START_SUB_QUERY,
  CHANGE_SELECTED_QUERY,
} from "./actions";
import { cloneDeep } from "lodash";

const initialState = {
  isQueryRunning: false,
  lastQueryIndex: 0,
  queries: [],
  selectedQueryIndex: 0,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case START_QUERY:
      return Object.assign({}, state, {
        isQueryRunning: true,
        lastQueryIndex: state.lastQueryIndex + 1,
        queries: [
          {
            queriedText: action.text,
            queriedOffset: action.offset,
            queryResults: [],
            queryError: null,
          },
        ],
      });
    case START_SUB_QUERY:
      return Object.assign({}, state, {
        isQueryRunning: true,
        lastQueryIndex: state.lastQueryIndex + 1,
        queries: state.queries.concat([
          {
            queriedText: action.text,
            queriedOffset: action.offset,
            queryResults: [],
            queryError: null,
          },
        ]),
      });
    case RESULTS_RECEIVED_OK:
      // dentro l'action si mantenga il queryIndex, cosi' qua controllo se il risultato che
      // mi e' appena arrivato e' relativo ad una query ancora rilevante

      // if (action.text !== state.queriedText) return state;
      // if (action.offset !== state.queriedOffset) return state;

      // Some other query started in the meanwhile, this result is useless now
      if (action.queryIndex !== state.lastQueryIndex) return state;

      const newOkState = cloneDeep(state);
      newOkState.isQueryRunning = false;
      newOkState.queries[newOkState.queries.length - 1].queryResults =
        action.results;
      newOkState.selectedQueryIndex = newOkState.queries.length - 1;
      return newOkState;
    case RESULTS_RECEIVED_FAIL:
      const newFailState = cloneDeep(state);
      newFailState.isQueryRunning = false;
      newFailState.queries[newFailState.queries.length - 1].queryError =
        action.queryError;
      return newFailState;
    case CHANGE_SELECTED_QUERY:
      return Object.assign({}, state, { selectedQueryIndex: action.index });
    default:
      return state;
  }
}
