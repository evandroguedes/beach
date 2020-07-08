import * as types from './types';

export default {
  [types.BEACHES]: state => Object.values(state.beaches.data),
  [types.IS_LOADING]: state => state.beaches.status === 'loading',
  [types.HAS_ERROR]: state => state.beaches.status === 'error' && state.beaches.code !== 404,
};
