import * as types from './types';

export default {
  [types.MUTATE_BEACHES]: (state, payload) => {
    state.beaches = payload;
  },
  [types.MUTATE_BEACH_NAME]: (state, payload) => {
    state.beachName = payload;
  },
  [types.MUTATE_BEACH_STATE]: (state, payload) => {
    state.beachState = payload;
  },
};
