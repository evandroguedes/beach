<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Beach Paradise Search</v-toolbar-title>
    </v-toolbar>
    <beaches-search-form-molecule />
    <beaches-search-result-molecule />
  </v-card>
</template>
<script>

import BeachesSearchFormMolecule from '../molecules/beachesSearchFormMolecule.vue';
import BeachesSearchResultMolecule from '../molecules/beachesSearchResultMolecule.vue';

export default {
  name: 'BeachesOrganism',

  components: {
    BeachesSearchFormMolecule,
    BeachesSearchResultMolecule,
  },

  data: () => ({
    //
  }),
};
</script>
