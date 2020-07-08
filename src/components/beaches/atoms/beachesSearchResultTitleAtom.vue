<template>
  <v-list-item-title class="beaches-search-result-title-atom">
    <slot></slot>
  </v-list-item-title>
</template>


<script>
  export default {
    name: 'BeachesSearchResultTitleAtom',
  }
</script>
<style scoped>
  .beaches-search-result-title-atom {
    text-transform: capitalize;
  }
</style>