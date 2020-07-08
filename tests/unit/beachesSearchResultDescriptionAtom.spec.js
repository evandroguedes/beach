import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

const vuetify = new Vuetify();

Vue.use(Vuetify);

import BeachesSearchResultDescriptionAtom from '../../src/components/beaches/atoms/beachesSearchResultDescriptionAtom.vue';

function shallowMountComponent(props) {
  return shallowMount(BeachesSearchResultDescriptionAtom, {
    vuetify,
    slots: {
      default: ['praia bonita'],
    },
    propsData: {
      ...props,
    },
  });
}

describe('BeachesSearchResultDescriptionAtom', () => {

  it('should render search results description', () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.text()).toEqual('praia bonita');
  });

});
