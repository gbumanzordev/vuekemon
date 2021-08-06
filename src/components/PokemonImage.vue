<template>
  <div class="pokemon-container" v-if='pokemonId'>
    <img :src="imgSrc" alt="Pokemon" class="hidden-pokemon" />
    <img :src="imgSrc" v-if="showPokemon" alt="Pokemon" class="fade-in" />
  </div>
</template>

<script>
export default {
  name: "PokemonImage",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: false,
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 16px;
}
img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
