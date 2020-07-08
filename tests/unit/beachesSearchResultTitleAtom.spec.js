import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

const vuetify = new Vuetify();

Vue.use(Vuetify);

import BeachesSearchResultTitleAtom from '../../src/components/beaches/atoms/beachesSearchResultTitleAtom.vue';

function shallowMountComponent(props) {
  return shallowMount(BeachesSearchResultTitleAtom, {
    vuetify,
    slots: {
      default: ['garopaba'],
    },
    propsData: {
      ...props,
    },
  });
}

describe('BeachesSearchResultTitleAtom', () => {

  it('should render search results title', () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.text()).toEqual('garopaba');
  });

});
