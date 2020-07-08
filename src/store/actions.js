import * as beachesService from '../services/beachesService';
import * as types from './types';

const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const loadingStatus = {
  data: {},
  error: null,
  status: REQUEST_STATUS.LOADING,
};

export default {
  [types.FETCH_BEACHES]: async ({ state, commit }) => {

    commit(types.MUTATE_BEACHES, loadingStatus);

    const response = await beachesService.getBeaches({
      state: state.beachState,
      beachName: state.beachName,
    }).catch(error => {
      const code = error.response ? error.response.status : 501;
      commit(types.MUTATE_BEACHES, {
        data: {},
        error,
        code,
        status: REQUEST_STATUS.ERROR,
      });
    });
    if (response) {
      commit(types.MUTATE_BEACHES, {
        data: response,
        error: null,
        status: REQUEST_STATUS.SUCCESS,
      });
    }
  },
};
