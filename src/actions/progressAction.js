import axios from 'axios';

export const FETCHING_PROGRESS = 'FETCHING_PROGRESS';

export const FETCHED_PROGRESS = 'FETCHED_PROGRESS';

export const INCREASING_PROGRESS = 'INCREASING_PROGRESS';

export const INCREASED_PROGRESS = 'INCREASED_PROGRESS';

export const DECREASING_PROGRESS = 'DECREASING_PROGRESS';

export const DECREASED_PROGRESS = 'DECREASED_PROGRESS';

function fetchingProgress() {
  return {
    type: FETCHING_PROGRESS,
    submittedOn: +new Date(),
  };
}

function fetchedProgress(response) {
  return {
    type: FETCHED_PROGRESS,
    buttons: response.buttons,
    bars: response.bars,
    limit: response.limit,
  };
}

function increasingProgress() {
  return {
    type: INCREASING_PROGRESS,
    submittedOn: +new Date(),
  };
}

function increasedProgress(bars) {
  return {
    type: INCREASED_PROGRESS,
    bars,
  };
}

function decreasingProgress() {
  return {
    type: DECREASING_PROGRESS,
    submittedOn: +new Date(),
  };
}

function decreasedProgress(bars) {
  return {
    type: DECREASED_PROGRESS,
    bars,
  };
}

export function fetchProgress() {
  return async (dispatch) => {
    dispatch(fetchingProgress());

    try {
      axios.get('http://pb-api.herokuapp.com/bars').then((response) => {
        console.log(response);
        dispatch(fetchedProgress(response.data.bars));
      });
    } catch (err) {
      console.log(err);
    }
  };
}
