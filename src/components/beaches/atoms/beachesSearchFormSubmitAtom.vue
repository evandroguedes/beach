<template>
  <v-btn
    large
    color="primary"
    :loading="isLoading"
    v-on:click="submitSearch">Buscar</v-btn>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../../../store/types.js';

  export default {
    name: 'BeachesSearchFormSubmitAtom',
    methods: {
      ...mapActions({
        submitSearch: types.FETCH_BEACHES,
      }),
    },
    computed: {
      isLoading: function() {
        return false;
      },
      ...mapGetters({
        isLoading: types.IS_LOADING,
      }),
    },
  }
</script>