import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as types from '../../src/store/types';

const localVue = createLocalVue();
const vuetify = new Vuetify();

Vue.use(Vuex);
Vue.use(Vuetify);

import BeachesOrganism from '../../src/components/beaches/organisms/beachesOrganism.vue';

function shallowMountComponent(props, store) {
  return shallowMount(BeachesOrganism, {
    localVue,
    vuetify,
    store,
    propsData: {
      ...props,
    },
  });
}

describe('BeachesOrganism', () => {

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      [types.FETCH_BEACHES]: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    })
  })

  it('should fetch items on created', () => {
    shallowMountComponent(null, store);
    expect(actions[types.FETCH_BEACHES]).toHaveBeenCalled();
  });

  it('should render a toolbar', () => {
    const wrapper = shallowMountComponent(null, store);
    const toolBar = wrapper.findComponent({ name: 'VToolbar' });
    expect(toolBar.exists()).toBe(true);
  });

  it('should render a search form', () => {
    const wrapper = shallowMountComponent(null, store);
    const form = wrapper.findComponent({ name: 'BeachesSearchFormMolecule' });
    expect(form.exists()).toBe(true);
  });

  it('should render a search result', () => {
    const wrapper = shallowMountComponent(null, store);
    const result = wrapper.findComponent({ name: 'BeachesSearchResultMolecule' });
    expect(result.exists()).toBe(true);
  });

});
