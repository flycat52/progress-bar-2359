import {
  INCREASING_PROGRESS,
  INCREASED_PROGRESS,
  DECREASING_PROGRESS,
  DECREASED_PROGRESS,
  FETCHING_PROGRESS,
  FETCHED_PROGRESS,
} from '../actions/progressAction';

const initialState = {
  progress: [],
  busy: false,
};

const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASING_PROGRESS:
    case DECREASING_PROGRESS:
    case FETCHING_PROGRESS:
      return {
        ...state,
        busy: true,
      };
    case INCREASED_PROGRESS:
    case DECREASED_PROGRESS:
    case FETCHED_PROGRESS:
      return {
        ...state,
        progress: action.progress,
        busy: false,
      };
    default:
      return initialState;
  }
};

export default progressReducer;
