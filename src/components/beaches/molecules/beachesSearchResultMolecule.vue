<template>
  <div>
    <v-list three-line v-if="shouldShowList()">
      <v-subheader>Resultado da busca</v-subheader>
      <template v-for="(item, index) in items">
        <v-list-item :key="index">
          <beaches-search-result-image-atom :image="item.image" />
          <v-list-item-content>
            <beaches-search-result-title-atom>
              {{ item.name }} - {{ item.location ? item.location.city : '' }}
            </beaches-search-result-title-atom>
            <beaches-search-result-description-atom>
              {{ item.short_description }}
            </beaches-search-result-description-atom>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-alert type="info" v-if="shouldShowAlert()">
      Sua busca não retornou resultados.
    </v-alert>
    <v-alert type="error" v-if="shouldShowError()">
      Ocorreu um erro ao tentar retornar sua busca. Verifique sua conexão e tente novamente.
    </v-alert>
  </div>
</template>


<script>

import { mapGetters } from 'vuex';
import * as types from '../../../store/types.js';
import BeachesSearchResultTitleAtom from '../atoms/beachesSearchResultTitleAtom.vue';
import BeachesSearchResultDescriptionAtom from '../atoms/beachesSearchResultDescriptionAtom.vue';
import BeachesSearchResultImageAtom from '../atoms/beachesSearchResultImageAtom.vue';

  export default {
    name: 'BeachesSearchResultMolecule',
    components: {
      BeachesSearchResultTitleAtom,
      BeachesSearchResultDescriptionAtom,
      BeachesSearchResultImageAtom,
    },
    methods: {
      shouldShowList() {
        return this.items.length > 0;
      },
      shouldShowAlert() {
        return !this.isLoading && !this.shouldShowList() && !this.hasError;
      },
      shouldShowError() {
        return this.hasError;
      },
    },
    computed: {
      ...mapGetters({
        items: types.BEACHES,
        isLoading: types.IS_LOADING,
        hasError: types.HAS_ERROR,
      }),
    }
  }
</script>

