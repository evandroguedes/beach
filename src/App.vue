<template>
  <v-app>
    <v-main>
    </v-main>
      <v-container
          class="fill-height"
          fluid>
        <v-row
          align="center"
          justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4">
            <BeachesPage />
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>

import BeachesPage from './components/beaches/pages/beachesPage.vue';

export default {
  name: 'App',

  components: {
    BeachesPage,
  },

  data: () => ({
    //
  }),
};
</script>
