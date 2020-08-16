export const START_QUERY = "START_QUERY";
export const START_SUB_QUERY = "START_SUB_QUERY";
export const RESULTS_RECEIVED_OK = "QUERY_RESULTS_RECEIVED_OK";
export const RESULTS_RECEIVED_FAIL = "QUERY_RESULTS_RECEIVED_FAIL";
export const CHANGE_SELECTED_QUERY = "CHANGE_SELECTED_QUERY";

export function startQuery(text, offset, isSubquery) {
  return async (dispatch, getState) => {
    dispatch({
      type: isSubquery ? START_SUB_QUERY : START_QUERY,
      text,
      offset,
    });

    const queryIndex = getState().lastQueryIndex;

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/word/" + encodeURIComponent(text) + "/" + offset
      );

      dispatch({
        type: RESULTS_RECEIVED_OK,
        text,
        offset,
        queryIndex,
        results: await response.json(),
      });
    } catch (queryError) {
      dispatch({
        type: RESULTS_RECEIVED_FAIL,
        queryIndex,
        queryError: queryError.message,
      });
    }
  };
}

export function changeSelectedQuery(index) {
  return {
    type: CHANGE_SELECTED_QUERY,
    index,
  };
}
