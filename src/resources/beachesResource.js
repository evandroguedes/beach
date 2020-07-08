import api from '../helpers/api';

const baseURL = 'https://us-central1-beach-e3b8a.cloudfunctions.net';

export function getBeachesByNameAndState({ state, beachName }) {
  return api.get(`${baseURL}/getBeachesByNameAndState`, {
    params: {
      state,
      beachName,
    },
  });
}
