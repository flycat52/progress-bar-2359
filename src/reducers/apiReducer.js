import { getReducer } from '../utils/reducerUtil';

const initialState = {
  buttons: [],
  bars: [],
  limit: 0,
};

const apiReducer = {
  RESET_API: () => ({ ...initialState }),
  FETCHING_API: () => ({
    ...initialState,
    busy: true,
  }),
  FETCHED_API: (state, { payload }) => ({
    ...payload,
    busy: false,
  }),
};

export default getReducer(initialState, apiReducer);

export const getButtons = (state) => state.buttons;
