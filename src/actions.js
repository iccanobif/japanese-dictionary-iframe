export const START_QUERY = "START_QUERY";
export const QUERY_RESULTS_RECEIVED_OK = "QUERY_RESULTS_RECEIVED_OK"
export const QUERY_RESULTS_RECEIVED_FAIL = "QUERY_RESULTS_RECEIVED_FAIL"

export function startQuery(text, offset) {
  return async (dispatch, getState) => {
    dispatch({
      type: START_QUERY,
      text,
      offset,
    });
    const response = await fetch(
      "https://japdictapi.herokuapp.com/word/" +
        encodeURIComponent(text) +
        "/" +
        offset
    );
    dispatch({
        type: QUERY_RESULTS_RECEIVED_OK,
        text,
        offset,
        results: await response.json()
    })

    // TODO handle errors

  };
}
