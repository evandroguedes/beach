<template>
  <v-text-field
    label="Filtrar por nome"
    placeholder="praia do rosa"
    v-model="beach"
    v-on:keyup.enter="submitSearch"
    outlined
    :loading="isLoading"
  ></v-text-field>
</template>
<script>

  import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
  import * as types from '../../../store/types.js';

  export default {
    name: 'BeachesSearchFormBeachNameInputAtom',
    methods: {
      ...mapActions({
        submitSearch: types.FETCH_BEACHES,
      }),
      ...mapMutations({
        setBeachName: types.MUTATE_BEACH_NAME,
      }),
    },
    computed: {
      beach: {
        get: function() {
          return this.beachName;
        },
        set: function(value) {
          this.setBeachName(value);
        },
      },
      ...mapState([
        'beachName',
      ]),
      ...mapGetters({
        isLoading: types.IS_LOADING,
      }),
    }
  }
</script>