import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as types from '../../src/store/types';

const localVue = createLocalVue();
const vuetify = new Vuetify();

Vue.use(Vuex);
Vue.use(Vuetify);

import BeachesSearchFormSubmitAtom from '../../src/components/beaches/atoms/BeachesSearchFormSubmitAtom.vue';

function shallowMountComponent(props, store) {
  return shallowMount(BeachesSearchFormSubmitAtom, {
    localVue,
    vuetify,
    store,
    propsData: {
      ...props,
    },
  });
}

describe('BeachesSearchFormSubmitAtom', () => {

  let getters;
  let actions;
  let store;

  beforeEach(() => {
    getters = {
      [types.IS_LOADING]: () => false,
    };

    actions = {
      [types.FETCH_BEACHES]: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
    })
  })

  it('should render vuetify button with correct label', () => {
    const wrapper = shallowMountComponent(null, store);
    const button = wrapper.findComponent({ name: 'VBtn' });
    expect(button.text()).toEqual('Buscar');
  });

  it('should render vuetify button with correct style', () => {
    const wrapper = shallowMountComponent(null, store);
    const button = wrapper.findComponent({ name: 'VBtn' });
    expect(button.attributes().large).toEqual('true');
    expect(button.attributes().color).toEqual('primary');
  });

  it('should trigger submit search when select change', () => {
    const wrapper = shallowMountComponent(null, store);
    const button = wrapper.findComponent({ name: 'VBtn' });
    button.vm.$emit('click');
    expect(actions[types.FETCH_BEACHES]).toHaveBeenCalled();
  });

});
