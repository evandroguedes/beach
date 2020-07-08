<template>
  <v-card elevation="3">
    <v-toolbar
      color="primary"
      dark
      flat
      elevation="4"
    >
      <v-toolbar-title>Beach Paradise Finder</v-toolbar-title>
    </v-toolbar>
    <beaches-search-form-molecule />
    <beaches-search-result-molecule />
  </v-card>
</template>
<script>
import { mapActions } from 'vuex';
import * as types from '../../../store/types.js';
import BeachesSearchFormMolecule from '../molecules/beachesSearchFormMolecule.vue';
import BeachesSearchResultMolecule from '../molecules/beachesSearchResultMolecule.vue';

export default {
  name: 'BeachesOrganism',

  components: {
    BeachesSearchFormMolecule,
    BeachesSearchResultMolecule,
  },
  methods: {
    ...mapActions({
      submitSearch: types.FETCH_BEACHES,
    }),
  },
  created() {
    this.submitSearch();
  },
};
</script>
