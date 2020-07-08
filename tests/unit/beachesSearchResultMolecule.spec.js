import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as types from '../../src/store/types';

const localVue = createLocalVue();
const vuetify = new Vuetify();

Vue.use(Vuex);
Vue.use(Vuetify);

import BeachesSearchResultMolecule from '../../src/components/beaches/molecules/beachesSearchResultMolecule.vue';

function shallowMountComponent(props, store) {
  return shallowMount(BeachesSearchResultMolecule, {
    localVue,
    vuetify,
    store,
    propsData: {
      ...props,
    },
  });
}

describe('BeachesSearchResultMolecule', () => {

  let getters;
  let store;

  beforeEach(() => {
    getters = {
      [types.BEACHES]: () => [{},{}],
      [types.IS_LOADING]: () => false,
      [types.HAS_ERROR]: () => false,
    };
    store = new Vuex.Store({
      getters,
    })
  })

  it('should render result list when has items', () => {
    const wrapper = shallowMountComponent(null, store);
    const list = wrapper.findComponent({ name: 'VList' });
    expect(list.exists()).toBe(true);
  });

  it('should render search result title when has items', () => {
    const wrapper = shallowMountComponent(null, store);
    const title = wrapper.findComponent({ name: 'VSubheader' });
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Resultado da busca');
  });

  it('should not render search result title when has no items', () => {
    const storeWithNoItems = new Vuex.Store({
      getters: {
        [types.BEACHES]: () => [],
        [types.IS_LOADING]: () => false,
        [types.HAS_ERROR]: () => false,
      },
    });
    const wrapper = shallowMountComponent(null, storeWithNoItems);
    const title = wrapper.findComponent({ name: 'VSubheader' });
    expect(title.exists()).toBe(false);
  });

  it('should not render result list when has no items', () => {
    const storeWithNoItems = new Vuex.Store({
      getters: {
        [types.BEACHES]: () => [],
        [types.IS_LOADING]: () => false,
        [types.HAS_ERROR]: () => false,
      },
    });
    const wrapper = shallowMountComponent(null, storeWithNoItems);
    const list = wrapper.findComponent({ name: 'VList' });
    expect(list.exists()).toBe(false);
  });

  it('should render alert info when has no items', () => {
    const storeWithNoItems = new Vuex.Store({
      getters: {
        [types.BEACHES]: () => [],
        [types.IS_LOADING]: () => false,
        [types.HAS_ERROR]: () => false,
      },
    });
    const wrapper = shallowMountComponent(null, storeWithNoItems);
    const alertInfo = wrapper.findComponent({ name: 'VAlert' });
    expect(alertInfo.exists()).toBe(true);
    expect(alertInfo.attributes().type).toEqual('info');
    expect(alertInfo.text()).toEqual('Sua busca não retornou resultados.');
  });

  it('should render alert error when request fail', () => {
    const storeWithNoItems = new Vuex.Store({
      getters: {
        [types.BEACHES]: () => [],
        [types.IS_LOADING]: () => false,
        [types.HAS_ERROR]: () => true,
      },
    });
    const wrapper = shallowMountComponent(null, storeWithNoItems);
    const alertInfo = wrapper.findComponent({ name: 'VAlert' });
    expect(alertInfo.exists()).toBe(true);
    expect(alertInfo.attributes().type).toEqual('error');
    expect(alertInfo.text()).toEqual('Ocorreu um erro ao tentar retornar sua busca. Verifique sua conexão e tente novamente.');
  });

});
