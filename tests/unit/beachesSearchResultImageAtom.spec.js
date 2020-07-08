import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

const vuetify = new Vuetify();

Vue.use(Vuetify);

import BeachesSearchResultImageAtom from '../../src/components/beaches/atoms/beachesSearchResultImageAtom.vue';

function shallowMountComponent(props) {
  return shallowMount(BeachesSearchResultImageAtom, {
    vuetify,
    propsData: {
      ...props,
    },
  });
}

describe('BeachesSearchResultImageAtom', () => {

  it('should render search results image', () => {
    const wrapper = shallowMountComponent({ image: 'praia.png' });
    const image = wrapper.findComponent({ name: 'VImg' });
    expect(image.attributes().src).toEqual('praia.png');
  });

});
