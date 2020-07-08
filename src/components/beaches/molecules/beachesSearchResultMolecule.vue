<template>
  <v-list three-line>
    <v-subheader>Resultado da busca</v-subheader>
    <template v-for="(item, index) in parseItemsToArray(items)">
      <v-list-item
        :key="index"
      >
        <v-list-item-avatar>
          <v-img :src="item.image"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }} - {{ item.location.city }}
          </v-list-item-title>
          <v-list-item-subtitle v-html="truncateDescription(item.short_description)"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>


<script>
  export default {
    name: 'BeachesSearchResultMolecule',
    data: () => ({
      items: {
        praiadogunga: {
          name: 'praia do gunga',
          short_description: 'A Praia do Gunga é uma das praias paradisíacas do nordeste mais conhecida. Como muitas pessoas ficam em Maceió acabam fazendo o passeio até lá, o lugar em bem acessível. É famosa pelas falésias espalhadas pelo ambiente, onde é possível fazer passeios de buggy além de aproveitar um banho na água salgada do mar.',
          image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-1-2.png?alt=media&token=a260dccc-e52f-45a3-8a6a-db3d1db86354',
          location: {
            city: 'roteiro',
            state: 'alagoas'
          }
        },
        praiadeantunes: {
          name: 'praia de antunes',
          short_description: 'A Praia do Gunga é uma das praias paradisíacas do nordeste mais conhecida. Como muitas pessoas ficam em Maceió acabam fazendo o passeio até lá, o lugar em bem acessível. É famosa pelas falésias espalhadas pelo ambiente, onde é possível fazer passeios de buggy além de aproveitar um banho na água salgada do mar.',
          image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-1.jpg?alt=media&token=43b81435-18ed-47b6-9458-82acc4aadc9b',
          location: {
            city: 'maragogi',
            state: 'alagoas'
          }
        },
        praiadofrances: {
          name: 'praia do francês',
          short_description: 'A casa das ondas fortes de Alagoas é a praia do Francês. É considerada uma das praias paradisíacas no Brasil porque conquista os visitantes que amam esportes radicais. Com as ondas e ventos fortes, é possível se aventurar no mar. Pensando que a praia está perto de Maceió, normalmente é um passeio de bate e volta.',
          image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-18.jpg?alt=media&token=a5cb6d8c-7fe3-421c-9250-4e449ab7de66',
          location: {
            city: 'marechal deodoro',
            state: 'alagoas'
          }
        },
        praiadocarroquebrado: {
          name: 'praia do carro quebrado',
          short_description: 'Mais um dos famosos passeios de bate e volta de Maceió é a Praia do Carro Quebrado. O ambiente é formado por coqueiros e falésias multicoloridas, e contém um toque selvagem, quase como se estivesse escondido do resto da região. Lá você pode apreciar águas esverdeadas e aproveitar para se distanciar do mundo.',
          image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-21.jpg?alt=media&token=f1730ad2-b524-4529-9171-77971774a410',
          location: {
            city: 'barra de santo antônio',
            state: 'alagoas'
          }
        },
        praiadopatacho: {
          name: 'praia do patacho',
          short_description: 'Mais uma das praias paradisíacas no Brasil entra para nossa lista: a Praia do Patacho. O local é totalmente deserto, por isso muitos turistas escolhem esse destino quando querem se desconectar do mundo e só se concentrar na natureza. A praia é bonita o ano todo, mas quando a maré está baixa é possível ir andando até as piscinas naturais.',
          image: 'https://firebasestorage.googleapis.com/v0/b/beach-e3b8a.appspot.com/o/praias-paradisiacas-no-Brasil-19.jpg?alt=media&token=237e57df-28de-4772-9643-2e435b08086f',
          location: {
            city: 'são miguel dos milagres',
            state: 'alagoas'
          }
        }
      },
    }),
    methods: {
      parseItemsToArray(items) {
        return Object.values(items);
      },
      truncateDescription(description) {
        const sizeInChars = 144;
        if (description.length <= sizeInChars) {
          return description;
        }
          return description.slice(0, sizeInChars) + '…';
      },
    },
  }
</script>

