<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12">
          <beaches-search-form-state-select-atom />
          <beaches-search-form-beach-name-input-atom />
          <beaches-search-form-submit-atom />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'BeachesSearchResultMolecule',
    components:  {
    },
    data: () => ({
    }),
  }
</script>