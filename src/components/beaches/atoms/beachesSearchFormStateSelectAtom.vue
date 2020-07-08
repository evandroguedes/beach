<template>
  <v-select
    :items="items"
    v-model="state"
    v-on:change="onSelectChange"
    filled
    :loading="isLoading"
    label="Estado"></v-select>
</template>
<script>

import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import * as types from '../../../store/types.js';

  export default {
    name: 'BeachesSearchFormStateSelectAtom',
    data: () => ({
      items: [
        { text: 'Acre', value: 'ac' },
        { text: 'Alagoas', value: 'al' },
        { text: 'Amapá', value: 'ap' },
        { text: 'Amazonas', value: 'am' },
        { text: 'Bahia', value: 'ba' },
        { text: 'Ceará', value: 'ce' },
        { text: 'Distrito Federal', value: 'df' },
        { text: 'Espírito Santo', value: 'es' },
        { text: 'Goiás', value: 'go' },
        { text: 'Maranhão', value: 'ma' },
        { text: 'Mato Grosso', value: 'mt' },
        { text: 'Mato Grosso do Sul', value: 'ms' },
        { text: 'Minas Gerais', value: 'mg' },
        { text: 'Pará', value: 'pa' },
        { text: 'Paraíba', value: 'pb' },
        { text: 'Paraná', value: 'pr' },
        { text: 'Pernambuco', value: 'pe' },
        { text: 'Piauí', value: 'pi' },
        { text: 'Rio de Janeiro', value: 'rj' },
        { text: 'Rio Grande do Norte', value: 'rn' },
        { text: 'Rio Grande do Sul', value: 'rs' },
        { text: 'Rondônia', value: 'ro' },
        { text: 'Roraima', value: 'rr' },
        { text: 'Santa Catarina', value: 'sc' },
        { text: 'São Paulo', value: 'sp' },
        { text: 'Sergipe', value: 'se' },
        { text: 'Tocantins', value: 'to' },  
      ],
    }),
    methods: {
      ...mapActions({
        submitSearch: types.FETCH_BEACHES,
      }),
      ...mapMutations({
        setBeachState: types.MUTATE_BEACH_STATE,
        setBeachName: types.MUTATE_BEACH_NAME,
      }),
      onSelectChange() {
        this.setBeachName('');
        this.submitSearch();
      },
    },
    computed: {
      state: {
        get: function() {
          return this.beachState;
        },
        set: function(value) {
          this.setBeachState(value);
        },
      },
      ...mapState([
        'beachState',
      ]),
      ...mapGetters({
        isLoading: types.IS_LOADING,
      }),
    }
  }
</script>