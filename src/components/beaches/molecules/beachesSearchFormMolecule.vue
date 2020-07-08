<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <beaches-search-form-state-select-atom />
          <beaches-search-form-beach-name-input-atom />
          <beaches-search-form-submit-atom />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  import BeachesSearchFormStateSelectAtom from '../atoms/beachesSearchFormStateSelectAtom.vue';
  import BeachesSearchFormBeachNameInputAtom from '../atoms/beachesSearchFormBeachNameInputAtom.vue';
  import BeachesSearchFormSubmitAtom from '../atoms/beachesSearchFormSubmitAtom.vue';

  export default {
    name: 'BeachesSearchFormMolecule',
    components:  {
      BeachesSearchFormStateSelectAtom,
      BeachesSearchFormBeachNameInputAtom,
      BeachesSearchFormSubmitAtom,
    },
  }
</script>