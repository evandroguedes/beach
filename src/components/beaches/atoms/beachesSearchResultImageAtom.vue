<template>
  <v-list-item-avatar>
    <v-img :src="image"></v-img>
  </v-list-item-avatar>
</template>

<script>
  export default {
    name: 'BeachesSearchResultImageAtom',
    props: {
      image: {
        type: String,
        default: 'https://via.placeholder.com/100x100?text=N/A',
      },
    },
  }
</script>
