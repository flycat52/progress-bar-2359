import axios from 'axios';

export const RESET_API = 'RESET_API';
export const FETCHING_API = 'FETCHING_API';
export const FETCHED_API = 'FETCHED_API';

const resetApi = () => ({ type: RESET_API });

const fetchingApi = () => ({
  type: FETCHING_API,
  submittedOn: +new Date(),
});

const fetchedApi = (response) => ({
  type: FETCHED_API,
  payload: {
    buttons: response.buttons,
    bars: response.bars,
    limit: response.limit,
  },
});

export const fetchApi = () => async (dispatch) => {
  dispatch(fetchingApi());

  try {
    const response = await axios.get('http://pb-api.herokuapp.com/bars');
    dispatch(fetchedApi(await response.data));
  } catch (err) {
    dispatch(resetApi());
    console.log(err);
  }
};
