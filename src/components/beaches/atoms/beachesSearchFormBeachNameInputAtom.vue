<template>
  <v-text-field
    label="Filtrar por nome"
    placeholder="praia do rosa"
    outlined
  ></v-text-field>
</template>
<script>
  export default {
    name: 'BeachesSearchFormBeachNameInputAtom',
    data: () => ({
      search: '',
    }),
  }
</script>