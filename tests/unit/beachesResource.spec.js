import { api } from '../../src/helpers/api';
import { getBeachesByNameAndState } from '../../src/resources/beachesResource';

jest.mock('../../src/helpers/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

const url = 'https://us-central1-beach-e3b8a.cloudfunctions.net/getBeachesByNameAndState';
const getBeachesResponseMock = () => ({
  data: {
  },
  status: 200,
});

it('should fetch beaches', async () => {
  api.get.mockResolvedValue(getBeachesResponseMock());
  const beaches = await getBeachesByNameAndState({ state: 'sc', beachName: 'praia do rosa' });
  expect(api.get).toHaveBeenCalledWith(url, { 
    params: { beachName: 'praia do rosa', state: 'sc' },
  });
  expect(beaches).toEqual(getBeachesResponseMock());
});
