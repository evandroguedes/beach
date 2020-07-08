<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Beach Paradise Search</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <beaches-search-form-molecule />
    </v-card-text>
  </v-card>
</template>
<script>

import BeachesSearchFormMolecule from '../molecules/beachesSearchFormMolecule.vue';

export default {
  name: 'BeachesOrganism',

  components: {
    BeachesSearchFormMolecule,
  },

  data: () => ({
    //
  }),
};
</script>
