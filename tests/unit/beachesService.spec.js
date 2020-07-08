import api from '../../src/helpers/api';
import {
  getBeaches,
} from '../../src/services/beachesService';

jest.mock('../../src/helpers/api', () => ({
  get: jest.fn(),
}));

describe('beachesService', () => {
  const url = 'https://us-central1-beach-e3b8a.cloudfunctions.net/getBeachesByNameAndState';
  const getBeachesResponseMock = () => ({
    data: {
    },
    status: 200,
  });

  it('should get beaches from resource', async () => {
    api.get.mockResolvedValue(getBeachesResponseMock());
    const beaches = await getBeaches({ beachName: 'praia do rosa', state: 'sc' });
    expect(api.get).toHaveBeenCalledWith(url, { 
      params: { beachName: 'praia do rosa', state: 'sc' },
    });
    expect(beaches).toEqual(getBeachesResponseMock().data);
  });
});
