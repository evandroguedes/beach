import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as types from '../../src/store/types';

const localVue = createLocalVue();
const vuetify = new Vuetify();

Vue.use(Vuex);
Vue.use(Vuetify);

import BeachesSearchFormBeachNameInputAtom from '../../src/components/beaches/atoms/beachesSearchFormBeachNameInputAtom.vue';

function shallowMountComponent(props, store) {
  return shallowMount(BeachesSearchFormBeachNameInputAtom, {
    localVue,
    vuetify,
    store,
    propsData: {
      ...props,
    },
  });
}

describe('BeachesSearchFormBeachNameInputAtom', () => {

  let getters;
  let store;

  beforeEach(() => {
    getters = {
      [types.IS_LOADING]: () => false,
    };
    store = new Vuex.Store({
      getters,
    })
  })

  it('should render vuetify text field with correct label', () => {
    const wrapper = shallowMountComponent(null, store);
    const textField = wrapper.findComponent({ name: 'VTextField' });
    expect(textField.attributes().label).toEqual('Filtrar por nome');
  });

  it('should render vuetify text field with correct placeholder', () => {
    const wrapper = shallowMountComponent(null, store);
    const textField = wrapper.findComponent({ name: 'VTextField' });
    expect(textField.attributes().placeholder).toEqual('praia do rosa');
  });

  it('should render vuetify text field with correct style', () => {
    const wrapper = shallowMountComponent(null, store);
    const textField = wrapper.findComponent({ name: 'VTextField' });
    expect(textField.attributes().outlined).toEqual('true');
  });

});
