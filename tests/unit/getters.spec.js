import * as types from '../../src/store/types';
import getters from '../../src/store/getters';

describe('store getters', () => {

  const beachesObjectMock = () => ({
    praiadogunga: {
      name: 'praia do gunga',
      short_description: 'A Praia do Gunga é uma das praias paradisíacas do nordeste mais conhecida. Como muitas pessoas ficam em Maceió acabam fazendo o passeio até lá, o lugar em bem acessível. É famosa pelas falésias espalhadas pelo ambiente, onde é possível fazer passeios de buggy além de aproveitar um banho na água salgada do mar.',
      image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-1-2.png?alt=media&token=a260dccc-e52f-45a3-8a6a-db3d1db86354',
      location: {
        city: 'roteiro',
        state: 'alagoas'
      }
    },
    praiadeantunes: {
      name: 'praia de antunes',
      short_description: 'A Praia do Gunga é uma das praias paradisíacas do nordeste mais conhecida. Como muitas pessoas ficam em Maceió acabam fazendo o passeio até lá, o lugar em bem acessível. É famosa pelas falésias espalhadas pelo ambiente, onde é possível fazer passeios de buggy além de aproveitar um banho na água salgada do mar.',
      image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-1.jpg?alt=media&token=43b81435-18ed-47b6-9458-82acc4aadc9b',
      location: {
        city: 'maragogi',
        state: 'alagoas'
      }
    },
  });

  const statesMock = {
    beaches: {
      data: beachesObjectMock(),
      status: 'loading',
    },
  };

  it('should transform beaches object into array', () => {
    expect(getters[types.BEACHES](statesMock).length).toEqual(2);
  });

  it('should return is loading true when loading status', () => {
    expect(getters[types.IS_LOADING](statesMock)).toBe(true);
  });

  it('should return is loading false when not loading status', () => {
    expect(getters[types.IS_LOADING]({ beaches: {}})).toBe(false);
  });

  it('should return has error true when error status', () => {
    expect(getters[types.HAS_ERROR]({
      beaches: {
        status: 'error',
      }})).toBe(true);
  });

  it('should not return has error true when error code is 404', () => {
    expect(getters[types.HAS_ERROR]({
      beaches: {
        status: 'error',
        code: 404,
      }})).toBe(false);
  });

});
