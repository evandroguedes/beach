import * as beachesResource from '../resources/beachesResource';

export const getBeaches = async ({ state, beachName }) => {
  const { data } = await beachesResource.getBeachesByNameAndState({ state, beachName });
  return data;
};
