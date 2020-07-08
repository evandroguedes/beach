import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as types from '../../src/store/types';

const localVue = createLocalVue();
const vuetify = new Vuetify();

Vue.use(Vuex);
Vue.use(Vuetify);

import BeachesSearchFormStateSelectAtom from '../../src/components/beaches/atoms/beachesSearchFormStateSelectAtom.vue';

function shallowMountComponent(props, store) {
  return shallowMount(BeachesSearchFormStateSelectAtom, {
    localVue,
    vuetify,
    store,
    propsData: {
      ...props,
    },
  });
}

const brStatesMock = () => [
  { text: 'Acre', value: 'ac' },
  { text: 'Alagoas', value: 'al' },
  { text: 'Amapá', value: 'ap' },
  { text: 'Amazonas', value: 'am' },
  { text: 'Bahia', value: 'ba' },
  { text: 'Ceará', value: 'ce' },
  { text: 'Distrito Federal', value: 'df' },
  { text: 'Espírito Santo', value: 'es' },
  { text: 'Goiás', value: 'go' },
  { text: 'Maranhão', value: 'ma' },
  { text: 'Mato Grosso', value: 'mt' },
  { text: 'Mato Grosso do Sul', value: 'ms' },
  { text: 'Minas Gerais', value: 'mg' },
  { text: 'Pará', value: 'pa' },
  { text: 'Paraíba', value: 'pb' },
  { text: 'Paraná', value: 'pr' },
  { text: 'Pernambuco', value: 'pe' },
  { text: 'Piauí', value: 'pi' },
  { text: 'Rio de Janeiro', value: 'rj' },
  { text: 'Rio Grande do Norte', value: 'rn' },
  { text: 'Rio Grande do Sul', value: 'rs' },
  { text: 'Rondônia', value: 'ro' },
  { text: 'Roraima', value: 'rr' },
  { text: 'Santa Catarina', value: 'sc' },
  { text: 'São Paulo', value: 'sp' },
  { text: 'Sergipe', value: 'se' },
  { text: 'Tocantins', value: 'to' },  
];

describe('BeachesSearchFormStateSelectAtom', () => {

  let getters;
  let mutations;
  let actions;
  let store;

  beforeEach(() => {
    getters = {
      [types.IS_LOADING]: () => false,
    };

    mutations = {
      [types.MUTATE_BEACH_STATE]: jest.fn(),
      [types.MUTATE_BEACH_NAME]: jest.fn(),
    };

    actions = {
      [types.FETCH_BEACHES]: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      mutations,
      actions,
    })
  })

  it('should render vuetify select with correct label', () => {
    const wrapper = shallowMountComponent(null, store);
    const select = wrapper.findComponent({ name: 'VSelect' });
    expect(select.attributes().label).toEqual('Estado');
  });

  it('should render vuetify select with correct style', () => {
    const wrapper = shallowMountComponent(null, store);
    const select = wrapper.findComponent({ name: 'VSelect' });
    expect(select.attributes().filled).toEqual('true');
  });

  it('should trigger submit search and clear beach name when select change', () => {
    const wrapper = shallowMountComponent(null, store);
    const select = wrapper.findComponent({ name: 'VSelect' });
    select.vm.$emit('input');
    select.vm.$emit('change');
    expect(actions[types.FETCH_BEACHES]).toHaveBeenCalled();
    expect(mutations[types.MUTATE_BEACH_STATE]).toHaveBeenCalled();
    expect(mutations[types.MUTATE_BEACH_NAME]).toHaveBeenCalled();
  });

  it('should set brazilian states', () => {
    const wrapper = shallowMountComponent(null, store);
    const select = wrapper.findComponent({ name: 'VSelect' });
    expect(wrapper.vm.items).toEqual(brStatesMock());
    expect(select.vm.items).toEqual(brStatesMock());
  });

});
