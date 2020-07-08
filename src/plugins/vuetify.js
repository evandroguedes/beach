import Vue from 'vue';

import Vuetify, {
  VApp,
  VMain,
  VContainer,
  VRow,
  VCol,
  VCard,
  VToolbar,
  VForm,
  VTextField,
  VSelect,
  VBtn,
  VList,
  VListItemSubtitle,
  VListItem,
  VListItemTitle,
  VListItemAvatar,
  VListItemContent,
  VSubheader,
  VImg,
  VAlert,
} from 'vuetify/lib';

import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
    VApp,
    VMain,
    VContainer,
    VRow,
    VCol,
    VCard,
    VToolbar,
    VForm,
    VTextField,
    VSelect,
    VBtn,
    VList,
    VListItemSubtitle,
    VListItem,
    VListItemTitle,
    VListItemAvatar,
    VListItemContent,
    VSubheader,
    VImg,
    VAlert,
  },
  directives: {
    Ripple,
  },
});

export default new Vuetify({
});
